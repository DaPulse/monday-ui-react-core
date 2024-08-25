import {
  ASTPath,
  Collection,
  Identifier,
  identifier,
  JSCodeshift,
  JSXAttribute,
  JSXElement,
  jsxExpressionContainer,
  JSXExpressionContainer,
  JSXIdentifier,
  JSXOpeningElement,
  literal,
  Literal,
  memberExpression,
  MemberExpression
} from "jscodeshift";
import { logPropMigrationError } from "./report-utils";

/**
 * Updates a prop name in a JSX element
 */
export function updatePropName(
  j: JSCodeshift,
  elementPath: ASTPath<JSXElement>,
  propsNamesMappingOldToNew: Record<string, string>
): void {
  j(elementPath)
    .find(JSXOpeningElement)
    .find(JSXIdentifier)
    .forEach(identifierPath => {
      if (propsNamesMappingOldToNew[identifierPath.node.name]) {
        identifierPath.node.name = propsNamesMappingOldToNew[identifierPath.node.name];
      }
    });
}

/**
 * Checks for whether a prop is used in a JSX element
 */
export function isPropExists(j: JSCodeshift, elementPath: ASTPath<JSXElement>, propName: string): boolean {
  return j(elementPath).find(JSXOpeningElement).find(JSXIdentifier, { name: propName }).size() > 0;
}

/**
 * Finds props on a JSX element
 */
export function findProps(j: JSCodeshift, elementPath: ASTPath<JSXElement>, ...propNames: string[]) {
  return j(elementPath)
    .find(JSXOpeningElement)
    .find(JSXAttribute)
    .filter(attr => {
      const attrName = attr.node.name.type === "JSXIdentifier" ? attr.node.name.name : "";
      return propNames.includes(attrName);
    });
}

/**
 * Removes props from a JSX element
 */
export function removeProp(j: JSCodeshift, elementPath: ASTPath<JSXElement>, ...propsNames: string[]): void {
  findProps(j, elementPath, ...propsNames).remove();
}

/**
 * Gets the computed value of a prop
 */
function getPropValue(j: JSCodeshift, prop: JSXAttribute): undefined | boolean | Literal["value"] | string {
  const value = prop.value;

  // boolean flag value (e.g. <Button disabled />)
  if (value === null) {
    return true;
  }

  // string value (e.g. <Button text="Click me" />)
  if (value?.type === "Literal") {
    return value.value;
  }

  // expression value (e.g. <Button text={...} />).
  if (value?.type === "JSXExpressionContainer") {
    if (value.expression.type === "Literal") {
      // e.g. <Button text={true} /> or <Button text={"text"} />
      return value.expression.value;
    }

    if (value.expression.type === "MemberExpression") {
      return getMemberExpressionValue(value.expression);
    }
  }
  // can be very complex, we'll have to compare strings
  return value ? j(value).toSource() : undefined;
}
function getMemberExpressionValue(expression: MemberExpression): string {
  let result = "";
  let current: MemberExpression | Identifier = expression;

  while (current.type === "MemberExpression") {
    result = `.${(current.property as Identifier).name}${result}`;
    current = current.object as MemberExpression | Identifier;
  }

  if (current.type === "Identifier") {
    result = `${(current as Identifier).name}${result}`;
  }
  return result;
}

export function setPropValue(
  j: JSCodeshift,
  attributePath: ASTPath<JSXAttribute>,
  newValue: string | number | boolean
): void {
  if (typeof newValue !== "string") {
    const newValueIsTrue = typeof newValue === "boolean" && newValue;
    attributePath.node.value = newValueIsTrue ? null : jsxExpressionContainer(literal(newValue));
  } else {
    const checkIfEnum = /^\w+\.\w+\.\w+$/.test(newValue);
    attributePath.node.value = checkIfEnum
      ? jsxExpressionContainer(parseEnumToMemberExpression(newValue))
      : literal(newValue);
  }
}

function parseEnumToMemberExpression(value: string) {
  const parts = value.split(".");
  let expr = identifier(parts[0]);
  for (let i = 1; i < parts.length; i++) {
    // @ts-expect-error error
    expr = memberExpression(expr, identifier(parts[i]), false);
  }
  return expr;
}

/**
 * Checks if a Collection of props have the same value
 */
export function propsValueMatch(j: JSCodeshift, propsCollection: Collection<JSXAttribute>): boolean {
  const values = propsCollection.nodes().map(prop => getPropValue(j, prop));
  return values.every(value => value === values[0]);
}

/**
 * Perform a regular prop migration on a JSX element, and logs an error if conditions are not met
 * 1. If new prop is not found, update the prop name
 * 2. If both props are found, check if the values match
 *   - If they do, remove the old prop
 *   - If they don't, log an error
 */
export function migratePropsNames(
  j: JSCodeshift,
  elementPath: ASTPath<JSXElement>,
  filePath: string,
  componentName: string,
  propsNamesMappingOldToNew: Record<string, string>
): void {
  Object.entries(propsNamesMappingOldToNew).forEach(([deprecatedPropName, newPropName]) => {
    const props = findProps(j, elementPath, deprecatedPropName, newPropName);

    if (props.length !== 2) {
      updatePropName(j, elementPath, { [deprecatedPropName]: newPropName });
      return;
    }

    if (propsValueMatch(j, props)) {
      removeProp(j, elementPath, deprecatedPropName);
    } else {
      logPropMigrationError(filePath, componentName, deprecatedPropName, newPropName);
    }
  });
}

export function updatePropValues(
  j: JSCodeshift,
  elementPath: ASTPath<JSXElement>,
  propName: string,
  valuesMapping: Record<string, string | number | boolean>
): void {
  findProps(j, elementPath, propName).forEach(attributePath => {
    const currentPropValue = getPropValue(j, attributePath.node);
    if (currentPropValue !== undefined) {
      const newValue = valuesMapping[String(currentPropValue)];
      if (newValue !== undefined) {
        setPropValue(j, attributePath, newValue);
      }
    }
  });
}

/**
 * Updates props that are using the component namespace to use the new namespace
 * e.g. <OldName size={OldName.sizes.XXL}> -> <NewName size={NewName.sizes.XXL}>
 * Should be used when updating specifiers and component jsx names
 */
export function updateComponentNamespaceProps(
  j: JSCodeshift,
  elementPath: ASTPath<JSXElement>,
  oldNamespace: string,
  newNamespace: string
) {
  j(elementPath)
    .find(JSXAttribute)
    .find(JSXExpressionContainer)
    .forEach(exprContainerPath => {
      j(exprContainerPath)
        .find(MemberExpression)
        .forEach(memberExprPath => {
          // Only update the base of the MemberExpression chain
          // e.g. <OldName size={OldName.attr.other.OldName.XXL}> would only update the first 'OldName'
          let base = memberExprPath.node.object;
          while (base.type === "MemberExpression") {
            base = base.object;
          }

          if (base.type === "Identifier" && base.name === oldNamespace) {
            base.name = newNamespace;
          }
        });
    });
}
