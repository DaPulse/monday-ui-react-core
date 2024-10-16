import { TransformationContext } from "../../../../types";
import { getCoreImportsForFile, getPropValue, setPropValue, wrap } from "../../../../src/utils";
import enumToStringMapping from "./enumMappings.json";

const enumToString: Record<string, string> = enumToStringMapping;

/**
 * Replace enums with string equivalent
 */
function transform({ j, root }: TransformationContext) {
  const coreImports = getCoreImportsForFile(root);

  const importedComponents = coreImports
    .find(j.ImportSpecifier)
    .nodes()
    .map(importSpecifier => {
      if (importSpecifier.local && importSpecifier.local.name) {
        return importSpecifier.local.name;
      }
      return null;
    })
    .filter(Boolean);

  const allElements = root.find(j.JSXElement).nodes(); // Get the nodes array

  const elements = allElements.filter(path => {
    const openingElement = path.openingElement;
    const elementName = openingElement.name.type === "JSXIdentifier" ? openingElement.name.name : null;
    return elementName && importedComponents.includes(elementName);
  });

  if (!elements.length) return;
  elements.forEach(elementPath => {
    const props = j(elementPath).find(j.JSXOpeningElement).find(j.JSXAttribute);
    props.forEach(prop => {
      const propValue = getPropValue(j, prop.node) as string;
      if (enumToString[propValue]) {
        setPropValue(j, prop, {
          value: enumToString[propValue],
          type: "Literal"
        });
      }
    });
  });
}

export default wrap(transform);
