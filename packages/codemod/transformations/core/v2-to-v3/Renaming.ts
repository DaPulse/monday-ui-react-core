import { ASTNode } from "ast-types";
import { wrap, getCoreImportsForFile, getImports, removeSpecifierFromImport } from "../../../src/utils";
import { TransformationContext } from "../../../types";
import { ImportSpecifier } from "jscodeshift";

function transform(context: TransformationContext) {
  const { j, root } = context;
  const coreImports = getCoreImportsForFile(root);

  coreImports.forEach(path => {
    const specifiersToRemove: unknown[] = [];
    const specifiersToMove: ASTNode[] = [];

    j(path)
      .find(ImportSpecifier)
      .forEach(specifierPath => {
        const importedName = (specifierPath.node as ImportSpecifier).imported.name;

        if (importedName === "Label") {
          specifiersToMove.push(specifierPath.node);
          specifiersToRemove.push(importedName);
        }
      });

    specifiersToRemove.forEach(specifierName => {
      return removeSpecifierFromImport(j, path, specifierName as string);
    });

    if (specifiersToMove.length > 0) {
      const vibeCoreImports = getImports(root, "@vibe/core");

      if (vibeCoreImports.size() > 0) {
        vibeCoreImports.forEach(vibeImportPath => {
          const existingSpecifiers = j(vibeImportPath).find(ImportSpecifier);

          specifiersToMove.forEach(specifier => {
            const isAlreadyImported = existingSpecifiers.some(
              existingSpecifier =>
                (existingSpecifier.node as ImportSpecifier).imported.name ===
                (specifier as ImportSpecifier).imported.name
            );

            if (!isAlreadyImported) {
              j(vibeImportPath)
                .get("specifiers")
                .push(j.importSpecifier(j.identifier((specifier as ImportSpecifier).imported.name)));
            }
          });
        });
      } else {
        const newImport = j.importDeclaration(
          specifiersToMove.map(specifier =>
            j.importSpecifier(j.identifier((specifier as ImportSpecifier).imported.name))
          ),
          j.literal("@vibe/core")
        );

        const currentIndex = root.get().node.program.body.indexOf(path.node);
        root.get().node.program.body.splice(currentIndex + 1, 0, newImport);
      }
    }
  });
}

export default wrap(transform);
