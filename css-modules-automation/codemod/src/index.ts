import { PluginObj } from "@babel/core";
import { defaults } from "lodash";
import { importVisitors } from "./visitors/importVisitors";
import { CssBaseClass } from "./utils/getCssBaseClass";

type PluginOptions = {
  importIdentifier: "styles";
};

export type State = {
  opts: PluginOptions;
  classNames: Map<string, string>;
  cxImported: boolean;
  camelCaseImported: boolean;
  camelCaseImportNeeded: boolean;
  getStyleImported: boolean;
  getStyleImportNeeded: boolean;
  dataTestIdImported: boolean;
  dataTestIdImportNeeded: boolean;
  baseCssClass: CssBaseClass | undefined;
};

const PLUGIN_DEFAULTS = {
  importIdentifier: "styles"
};

// 0: Starting point for traverse process
export default (): PluginObj<State> => ({
  name: "react-css-modules",
  visitor: {
    Program: (programPath, state) => {
      // 1:
      programPath.traverse(importVisitors, {
        cxImported: false,
        camelCaseImported: false,
        camelCaseImportNeeded: false,
        getStyleImported: false,
        getStyleImportNeeded: false,
        dataTestIdImported: false,
        dataTestIdImportNeeded: false,
        classNames: new Map<string, string>(),
        baseCssClass: undefined,
        opts: defaults({}, state.opts, PLUGIN_DEFAULTS)
      });
    }
  }
});
