"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[1857,8083],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/VirtualizedList/__stories__/VirtualizedList.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>VirtualizedList_stories});var react=__webpack_require__("../../node_modules/react/index.js"),VirtualizedList=__webpack_require__("./src/components/VirtualizedList/VirtualizedList.tsx"),VirtualizedList_stories_helpers=__webpack_require__("./src/components/VirtualizedList/__stories__/VirtualizedList.stories.helpers.tsx"),Flex=__webpack_require__("./src/components/Flex/Flex.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),VirtualizedList_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[16].use[3]!./src/components/VirtualizedList/__stories__/VirtualizedList.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(VirtualizedList_module.A,options);const _stories_VirtualizedList_module=VirtualizedList_module.A&&VirtualizedList_module.A.locals?VirtualizedList_module.A.locals:void 0;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const VirtualizedList_stories={parameters:{storySource:{source:'import React, { useCallback } from "react";\nimport VirtualizedList from "../VirtualizedList";\nimport { generateItems } from "./VirtualizedList.stories.helpers";\nimport { Flex } from "../../";\nimport styles from "./VirtualizedList.module.scss";\n\nexport default {\n  title: "Navigation/VirtualizedList",\n  component: VirtualizedList\n};\n\nconst virtualizedListTemplate = args => {\n  const itemRenderer = useCallback((item, index, style) => {\n    const backgroundColor = index % 2 === 0 ? "#e1e1e1" : "#f8f8f0";\n    return (\n      <div key={index} style={style}>\n        <div\n          className={styles.virtualizedListItem}\n          style={{\n            backgroundColor,\n            height: item.height\n          }}\n        >\n          {item.value}\n        </div>\n      </div>\n    );\n  }, []);\n  return (\n    <Flex align={Flex.align.START} gap={Flex.gaps.LARGE} style={{ width: "100%" }} direction={Flex.directions.ROW}>\n      <div\n        style={{\n          width: 330,\n          height: 300,\n          overflow: "hidden",\n          display: "flex",\n          alignItems: "center"\n        }}\n      >\n        <div style={{ width: 200, height: "100%" }}>\n          <h3>Vertical List</h3>\n          <VirtualizedList\n            {...args}\n            items={generateItems(30, 1000, "vertical")}\n            itemRenderer={itemRenderer}\n            getItemSize={item => item.size}\n          />\n        </div>\n      </div>\n      <div\n        style={{\n          flexGrow: 1,\n          height: 300,\n          overflow: "hidden",\n          display: "flex",\n          alignItems: "center"\n        }}\n      >\n        <div style={{ height: "100%", width: "100%" }}>\n          <h3>Horizontal List</h3>\n          <VirtualizedList\n            {...args}\n            items={generateItems(100, 1000, "horizontal")}\n            itemRenderer={itemRenderer}\n            getItemSize={item => item.size}\n            layout="horizontal"\n          />\n        </div>\n      </div>\n    </Flex>\n  );\n};\n\nexport const Overview = {\n  render: virtualizedListTemplate.bind({}),\n  name: "Overview"\n};\n',locationsMap:{overview:{startLoc:{col:24,line:74},endLoc:{col:1,line:77},startBody:{col:24,line:74},endBody:{col:1,line:77}}}}},title:"Navigation/VirtualizedList",component:VirtualizedList.A};var virtualizedListTemplate=function virtualizedListTemplate(args){var itemRenderer=(0,react.useCallback)((function(item,index,style){var backgroundColor=index%2==0?"#e1e1e1":"#f8f8f0";return(0,jsx_runtime.jsx)("div",{style,children:(0,jsx_runtime.jsx)("div",{className:_stories_VirtualizedList_module.virtualizedListItem,style:{backgroundColor,height:item.height},children:item.value})},index)}),[]);return(0,jsx_runtime.jsxs)(Flex.A,{align:Flex.A.align.START,gap:Flex.A.gaps.LARGE,style:{width:"100%"},direction:Flex.A.directions.ROW,children:[(0,jsx_runtime.jsx)("div",{style:{width:330,height:300,overflow:"hidden",display:"flex",alignItems:"center"},children:(0,jsx_runtime.jsxs)("div",{style:{width:200,height:"100%"},children:[(0,jsx_runtime.jsx)("h3",{children:"Vertical List"}),(0,jsx_runtime.jsx)(VirtualizedList.A,_objectSpread(_objectSpread({},args),{},{items:(0,VirtualizedList_stories_helpers.W)(30,1e3,"vertical"),itemRenderer,getItemSize:function getItemSize(item){return item.size}}))]})}),(0,jsx_runtime.jsx)("div",{style:{flexGrow:1,height:300,overflow:"hidden",display:"flex",alignItems:"center"},children:(0,jsx_runtime.jsxs)("div",{style:{height:"100%",width:"100%"},children:[(0,jsx_runtime.jsx)("h3",{children:"Horizontal List"}),(0,jsx_runtime.jsx)(VirtualizedList.A,_objectSpread(_objectSpread({},args),{},{items:(0,VirtualizedList_stories_helpers.W)(100,1e3,"horizontal"),itemRenderer,getItemSize:function getItemSize(item){return item.size},layout:"horizontal"}))]})})]})};virtualizedListTemplate.displayName="virtualizedListTemplate";var Overview={render:virtualizedListTemplate.bind({}),name:"Overview"};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: virtualizedListTemplate.bind({}),\n  name: "Overview"\n}',...Overview.parameters?.docs?.source}}};const __namedExportsOrder=["Overview"]},"./src/components/VirtualizedList/__stories__/VirtualizedList.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_home_runner_work_vibe_vibe_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),vibe_storybook_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../storybook-blocks/dist/src/components/usage-guidelines/usage-guidelines.js"),_VirtualizedList_stories_helpers__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/VirtualizedList/__stories__/VirtualizedList.stories.helpers.tsx"),_VirtualizedList_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/VirtualizedList/__stories__/VirtualizedList.stories.js"),_storybook_components_related_components_component_description_map__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/storybook/components/related-components/component-description-map.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",h2:"h2",p:"p"},(0,_home_runner_work_vibe_vibe_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.RP)(),props.components),{PropsTable,RelatedComponents}=_components;return PropsTable||_missingMdxReference("PropsTable",!0),RelatedComponents||_missingMdxReference("RelatedComponents",!0),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.W8,{of:_VirtualizedList_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"virtualizedlist",children:"VirtualizedList"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#usage",children:"Usage"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#related-components",children:"Related components"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#feedback",children:"Feedback"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"VirtualizedList is a component which only renders visible list items, it is a logic component and doesn't change and look and feel"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The VirtualizedList can be Vertical or Horizontal"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Under the hood we are using - ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://github.com/bvaughn/react-window",target:"_blank",rel:"nofollow noopener noreferrer",children:"react-window"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://github.com/bvaughn/react-virtualized-auto-sizer",target:"_blank",rel:"nofollow noopener noreferrer",children:"react-virtualized-auto-sizer"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Hl,{of:_VirtualizedList_stories__WEBPACK_IMPORTED_MODULE_4__.Overview}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PropsTable,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(vibe_storybook_components__WEBPACK_IMPORTED_MODULE_5__.A,{guidelines:["Use this when you expect to have many items in your list"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_VirtualizedList_stories_helpers__WEBPACK_IMPORTED_MODULE_6__._,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"related-components",children:"Related components"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RelatedComponents,{componentsNames:[_storybook_components_related_components_component_description_map__WEBPACK_IMPORTED_MODULE_7__.rl,_storybook_components_related_components_component_description_map__WEBPACK_IMPORTED_MODULE_7__.zI,_storybook_components_related_components_component_description_map__WEBPACK_IMPORTED_MODULE_7__.Bt]})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_vibe_vibe_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[16].use[3]!./src/components/VirtualizedList/__stories__/VirtualizedList.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".VirtualizedList-module_virtualizedListItem{display:flex;align-items:center;justify-content:center}","",{version:3,sources:["webpack://./src/components/VirtualizedList/__stories__/VirtualizedList.module.scss"],names:[],mappings:"AAAA,4CACE,YAAA,CACA,kBAAA,CACA,sBAAA",sourcesContent:[".virtualizedListItem {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={virtualizedListItem:"VirtualizedList-module_virtualizedListItem"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);