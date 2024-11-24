"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[4374,4976],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>DocsRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@storybook/react-dom-shim/dist/react-16.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.XA,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.zE,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Sw},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.kQ;return new Promise(((resolve,reject)=>{__webpack_require__.e(5231).then(__webpack_require__.bind(__webpack_require__,"../../node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.d)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element))).then((()=>resolve()))}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.H)(element)}}}},"./src/components/Tabs/Tab/__stories__/Tab.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Icons:()=>Icons,Overview:()=>Overview,States:()=>States,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var vibe_storybook_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../storybook-blocks/dist/src/functions/createComponentTemplate.js"),_Tab_Tab__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Tabs/Tab/Tab.tsx"),_Icon_Icons__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Icon/Icons/components/Email.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:'import React from "react";\nimport { createComponentTemplate } from "vibe-storybook-components";\nimport Tab from "../../Tab/Tab";\nimport { Email } from "../../../Icon/Icons";\n\nexport default {\n  title: "Navigation/Tabs/Tab",\n  component: Tab\n};\n\nconst tabTemplate = createComponentTemplate(Tab);\n\nexport const Overview = {\n  render: tabTemplate.bind({}),\n  args: {\n    children: "Tab"\n  },\n  name: "Overview"\n};\n\nexport const States = {\n  render: () => (\n    <>\n      <Tab>Normal</Tab>\n      <Tab disabled>Disabled</Tab>\n      <Tab active>Active</Tab>\n    </>\n  ),\n\n  name: "States"\n};\n\nexport const Icons = {\n  render: () => (\n    <>\n      <Tab icon={Email}>Tab</Tab>\n      <Tab icon={Email} iconSide="right">\n        Tab\n      </Tab>\n    </>\n  ),\n\n  name: "Icons"\n};\n',locationsMap:{overview:{startLoc:{col:24,line:13},endLoc:{col:1,line:19},startBody:{col:24,line:13},endBody:{col:1,line:19}},states:{startLoc:{col:22,line:21},endLoc:{col:1,line:31},startBody:{col:22,line:21},endBody:{col:1,line:31}},icons:{startLoc:{col:21,line:33},endLoc:{col:1,line:44},startBody:{col:21,line:33},endBody:{col:1,line:44}}}}},title:"Navigation/Tabs/Tab",component:_Tab_Tab__WEBPACK_IMPORTED_MODULE_2__.A};var Overview={render:(0,vibe_storybook_components__WEBPACK_IMPORTED_MODULE_3__.M)(_Tab_Tab__WEBPACK_IMPORTED_MODULE_2__.A).bind({}),args:{children:"Tab"},name:"Overview"},States={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Tab_Tab__WEBPACK_IMPORTED_MODULE_2__.A,{children:"Normal"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Tab_Tab__WEBPACK_IMPORTED_MODULE_2__.A,{disabled:!0,children:"Disabled"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Tab_Tab__WEBPACK_IMPORTED_MODULE_2__.A,{active:!0,children:"Active"})]})},name:"States"},Icons={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Tab_Tab__WEBPACK_IMPORTED_MODULE_2__.A,{icon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_4__.A,children:"Tab"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Tab_Tab__WEBPACK_IMPORTED_MODULE_2__.A,{icon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_4__.A,iconSide:"right",children:"Tab"})]})},name:"Icons"};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: tabTemplate.bind({}),\n  args: {\n    children: "Tab"\n  },\n  name: "Overview"\n}',...Overview.parameters?.docs?.source}}},States.parameters={...States.parameters,docs:{...States.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <Tab>Normal</Tab>\n      <Tab disabled>Disabled</Tab>\n      <Tab active>Active</Tab>\n    </>,\n  name: "States"\n}',...States.parameters?.docs?.source}}},Icons.parameters={...Icons.parameters,docs:{...Icons.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <Tab icon={Email}>Tab</Tab>\n      <Tab icon={Email} iconSide="right">\n        Tab\n      </Tab>\n    </>,\n  name: "Icons"\n}',...Icons.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","States","Icons"]},"./src/components/Tabs/Tab/__stories__/Tab.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Tab});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=(__webpack_require__("../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs"),__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs")),Tab_stories=__webpack_require__("./src/components/Tabs/Tab/__stories__/Tab.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",h2:"h2",h3:"h3"},(0,lib.RP)(),props.components),{PropsTable}=_components;return PropsTable||function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}("PropsTable",!0),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:Tab_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"tab",children:"Tab"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#variants",children:"Variants"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#feedback",children:"Feedback"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{of:Tab_stories.Overview}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(PropsTable,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"states",children:"States"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{of:Tab_stories.States}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"icons",children:"Icons"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{of:Tab_stories.Icons})]})}const Tab=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"../storybook-blocks/dist/src/functions/createComponentTemplate.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>r});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function r(r){return function(e){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r,Object.assign({},e))}}}}]);