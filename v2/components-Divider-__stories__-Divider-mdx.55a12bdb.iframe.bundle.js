"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[5009,9427],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/Divider/__stories__/Divider.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Directions:()=>Directions,Overview:()=>Overview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Divider_stories});__webpack_require__("../../node_modules/react/index.js");var Divider=__webpack_require__("./src/components/Divider/Divider.tsx"),createStoryMetaSettingsDecorator=__webpack_require__("./src/storybook/functions/createStoryMetaSettingsDecorator.ts"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Divider_stories_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[16].use[3]!./src/components/Divider/__stories__/Divider.stories.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Divider_stories_module.A,options);const _stories_Divider_stories_module=Divider_stories_module.A&&Divider_stories_module.A.locals?Divider_stories_module.A.locals:void 0;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var metaSettings=(0,createStoryMetaSettingsDecorator.B)({component:Divider.A,enumPropNamesArray:["direction"]}),dividerTemplate=function dividerTemplate(args){return(0,jsx_runtime.jsx)("div",{style:{width:"400px",height:"40px"},children:(0,jsx_runtime.jsx)(Divider.A,_objectSpread({},args))})};dividerTemplate.displayName="dividerTemplate";const Divider_stories={parameters:{storySource:{source:'import React from "react";\nimport Divider, { DividerProps } from "../Divider";\nimport { createStoryMetaSettingsDecorator } from "../../../storybook";\nimport styles from "./Divider.stories.module.scss";\n\nconst metaSettings = createStoryMetaSettingsDecorator({\n  component: Divider,\n  enumPropNamesArray: ["direction"]\n});\n\nconst dividerTemplate = (args: DividerProps) => (\n  <div style={{ width: "400px", height: "40px" }}>\n    <Divider {...args} />\n  </div>\n);\n\nexport default {\n  title: "Data display/Divider",\n  component: Divider,\n  argTypes: metaSettings.argTypes,\n  decorators: metaSettings.decorators\n};\n\nexport const Overview = {\n  render: dividerTemplate.bind({}),\n  name: "Overview"\n};\n\nexport const Directions = {\n  render: () => (\n    <div\n      style={{\n        display: "flex",\n        flexDirection: "column",\n        width: "400px"\n      }}\n    >\n      <div\n        className={styles["divider-description-container"]}\n        style={{\n          height: 40\n        }}\n      >\n        <span className={styles["divider-description-text"]}>Horizontal</span>\n        <Divider direction={Divider.directions.HORIZONTAL} />\n      </div>\n      <div className={styles["divider-description-container"]}>\n        <span className={styles["divider-description-text"]}>Vertical</span>\n        <Divider direction={Divider.directions.VERTICAL} className={styles["divider-description-horizontal"]} />\n      </div>\n    </div>\n  ),\n\n  name: "Directions"\n};\n',locationsMap:{overview:{startLoc:{col:24,line:24},endLoc:{col:1,line:27},startBody:{col:24,line:24},endBody:{col:1,line:27}},directions:{startLoc:{col:26,line:29},endLoc:{col:1,line:55},startBody:{col:26,line:29},endBody:{col:1,line:55}}}}},title:"Data display/Divider",component:Divider.A,argTypes:metaSettings.argTypes,decorators:metaSettings.decorators};var Overview={render:dividerTemplate.bind({}),name:"Overview"},Directions={render:function render(){return(0,jsx_runtime.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"400px"},children:[(0,jsx_runtime.jsxs)("div",{className:_stories_Divider_stories_module["divider-description-container"],style:{height:40},children:[(0,jsx_runtime.jsx)("span",{className:_stories_Divider_stories_module["divider-description-text"],children:"Horizontal"}),(0,jsx_runtime.jsx)(Divider.A,{direction:Divider.A.directions.HORIZONTAL})]}),(0,jsx_runtime.jsxs)("div",{className:_stories_Divider_stories_module["divider-description-container"],children:[(0,jsx_runtime.jsx)("span",{className:_stories_Divider_stories_module["divider-description-text"],children:"Vertical"}),(0,jsx_runtime.jsx)(Divider.A,{direction:Divider.A.directions.VERTICAL,className:_stories_Divider_stories_module["divider-description-horizontal"]})]})]})},name:"Directions"};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: dividerTemplate.bind({}),\n  name: "Overview"\n}',...Overview.parameters?.docs?.source}}},Directions.parameters={...Directions.parameters,docs:{...Directions.parameters?.docs,source:{originalSource:'{\n  render: () => <div style={{\n    display: "flex",\n    flexDirection: "column",\n    width: "400px"\n  }}>\n      <div className={styles["divider-description-container"]} style={{\n      height: 40\n    }}>\n        <span className={styles["divider-description-text"]}>Horizontal</span>\n        <Divider direction={Divider.directions.HORIZONTAL} />\n      </div>\n      <div className={styles["divider-description-container"]}>\n        <span className={styles["divider-description-text"]}>Vertical</span>\n        <Divider direction={Divider.directions.VERTICAL} className={styles["divider-description-horizontal"]} />\n      </div>\n    </div>,\n  name: "Directions"\n}',...Directions.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","Directions"]},"./src/components/Divider/__stories__/Divider.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_home_runner_work_vibe_vibe_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),_storybook_components_related_components_component_description_map__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/storybook/components/related-components/component-description-map.tsx"),_Divider_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Divider/__stories__/Divider.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",h2:"h2",p:"p",h3:"h3"},(0,_home_runner_work_vibe_vibe_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.RP)(),props.components),{PropsTable,RelatedComponents}=_components;return PropsTable||_missingMdxReference("PropsTable",!0),RelatedComponents||_missingMdxReference("RelatedComponents",!0),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.W8,{of:_Divider_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"divider",children:"Divider"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#variants",children:"Variants"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#feedback",children:"Feedback"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Divider create separation between two UI elements"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Hl,{of:_Divider_stories__WEBPACK_IMPORTED_MODULE_4__.Overview}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PropsTable,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"directions",children:"Directions"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Hl,{of:_Divider_stories__WEBPACK_IMPORTED_MODULE_4__.Directions}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"related-components",children:"Related components"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RelatedComponents,{componentsNames:[_storybook_components_related_components_component_description_map__WEBPACK_IMPORTED_MODULE_5__.d_,_storybook_components_related_components_component_description_map__WEBPACK_IMPORTED_MODULE_5__.Ze,_storybook_components_related_components_component_description_map__WEBPACK_IMPORTED_MODULE_5__.lJ]})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_vibe_vibe_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[16].use[3]!./src/components/Divider/__stories__/Divider.stories.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Divider-stories-module_divider-description-container{display:flex;align-items:center;height:200px}.Divider-stories-module_divider-description-text{margin-right:var(--sb-spacing-large);align-self:center}.Divider-stories-module_divider-description-horizontal{margin:0 auto !important}","",{version:3,sources:["webpack://./src/components/Divider/__stories__/Divider.stories.module.scss"],names:[],mappings:"AACE,sDACE,YAAA,CACA,kBAAA,CACA,YAAA,CAGF,iDACE,oCAAA,CACA,iBAAA,CAGF,uDACE,wBAAA",sourcesContent:[".divider-description {\n  &-container {\n    display: flex;\n    align-items: center;\n    height: 200px;\n  }\n\n  &-text {\n    margin-right: var(--sb-spacing-large);\n    align-self: center;\n  }\n\n  &-horizontal {\n    margin: 0 auto !important;\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"divider-description-container":"Divider-stories-module_divider-description-container","divider-description-text":"Divider-stories-module_divider-description-text","divider-description-horizontal":"Divider-stories-module_divider-description-horizontal"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);