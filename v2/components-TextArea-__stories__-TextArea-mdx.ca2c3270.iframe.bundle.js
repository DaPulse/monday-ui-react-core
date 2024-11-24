"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[1279,8374],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/TextArea/__stories__/TextArea.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,Sizes:()=>Sizes,States:()=>States,Validation:()=>Validation,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var vibe_storybook_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../storybook-blocks/dist/src/functions/createComponentTemplate.js"),_TextArea__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/TextArea/TextArea.tsx"),_storybook__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/storybook/functions/createStoryMetaSettingsDecorator.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),metaSettings=(0,_storybook__WEBPACK_IMPORTED_MODULE_2__.B)({component:_TextArea__WEBPACK_IMPORTED_MODULE_3__.A});const __WEBPACK_DEFAULT_EXPORT__={title:"Inputs/TextArea",component:_TextArea__WEBPACK_IMPORTED_MODULE_3__.A,argTypes:metaSettings.argTypes,decorators:metaSettings.decorators};var withFixedWidth=function withFixedWidth(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{width:300},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{})})};withFixedWidth.displayName="withFixedWidth";var withGrid=function withGrid(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 300px)",gap:"16px",width:"100%"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{})})};withGrid.displayName="withGrid";var Overview={render:(0,vibe_storybook_components__WEBPACK_IMPORTED_MODULE_4__.M)(_TextArea__WEBPACK_IMPORTED_MODULE_3__.A).bind({}),args:{label:"Text area label",helpText:"Helper text"},parameters:{docs:{liveEdit:{isEnabled:!1}}},decorators:[withFixedWidth]},Sizes={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_TextArea__WEBPACK_IMPORTED_MODULE_3__.A,{size:"large",label:"Large text area"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_TextArea__WEBPACK_IMPORTED_MODULE_3__.A,{size:"small",label:"Small text area"})]})},decorators:[withGrid]},States={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_TextArea__WEBPACK_IMPORTED_MODULE_3__.A,{size:"small",label:"Success state",success:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_TextArea__WEBPACK_IMPORTED_MODULE_3__.A,{size:"small",label:"Error state",error:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_TextArea__WEBPACK_IMPORTED_MODULE_3__.A,{size:"small",label:"Disabled state",disabled:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_TextArea__WEBPACK_IMPORTED_MODULE_3__.A,{size:"small",label:"Read only state",readOnly:!0})]})},decorators:[withGrid]},Validation={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_TextArea__WEBPACK_IMPORTED_MODULE_3__.A,{size:"small",label:"Text area label",error:!0,required:!0,helpText:"Validation text"})},decorators:[withFixedWidth]};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: textAreaTemplate.bind({}),\n  args: {\n    label: "Text area label",\n    helpText: "Helper text"\n  },\n  parameters: {\n    docs: {\n      liveEdit: {\n        isEnabled: false\n      }\n    }\n  },\n  decorators: [withFixedWidth]\n}',...Overview.parameters?.docs?.source}}},Sizes.parameters={...Sizes.parameters,docs:{...Sizes.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <TextArea size="large" label="Large text area" />\n      <TextArea size="small" label="Small text area" />\n    </>,\n  decorators: [withGrid]\n}',...Sizes.parameters?.docs?.source}}},States.parameters={...States.parameters,docs:{...States.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <TextArea size="small" label="Success state" success />\n      <TextArea size="small" label="Error state" error />\n      <TextArea size="small" label="Disabled state" disabled />\n      <TextArea size="small" label="Read only state" readOnly />\n    </>,\n  decorators: [withGrid]\n}',...States.parameters?.docs?.source}}},Validation.parameters={...Validation.parameters,docs:{...Validation.parameters?.docs,source:{originalSource:'{\n  render: () => <TextArea size="small" label="Text area label" error required helpText="Validation text" />,\n  decorators: [withFixedWidth]\n}',...Validation.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","Sizes","States","Validation"]},"./src/components/TextArea/__stories__/TextArea.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>TextArea});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),TextArea_stories=__webpack_require__("./src/components/TextArea/__stories__/TextArea.stories.tsx"),component_description_map=__webpack_require__("./src/storybook/components/related-components/component-description-map.tsx");const do_namespaceObject=__webpack_require__.p+"static/media/do.401fab6a.svg",dont_namespaceObject=__webpack_require__.p+"static/media/dont.35679739.svg";function _createMdxContent(props){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",h2:"h2",p:"p",h3:"h3",img:"img"},(0,lib.RP)(),props.components),{Canvas,PropsTable,UsageGuidelines,ComponentRules,RelatedComponents}=_components;return Canvas||_missingMdxReference("Canvas",!0),ComponentRules||_missingMdxReference("ComponentRules",!0),PropsTable||_missingMdxReference("PropsTable",!0),RelatedComponents||_missingMdxReference("RelatedComponents",!0),UsageGuidelines||_missingMdxReference("UsageGuidelines",!0),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:TextArea_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"textarea",children:"TextArea"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#usage",children:"Usage"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#variants",children:"Variants"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#dos-and-donts",children:"Do's and don'ts"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#related-components",children:"Related components"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#feedback",children:"Feedback"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"A field that allows users to write multiple lines of text. Text area includes a label and a field that users can type into. It can also come with helper text."}),"\n",(0,jsx_runtime.jsx)(Canvas,{of:TextArea_stories.Overview}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(PropsTable,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(UsageGuidelines,{guidelines:["Use text area to allow users to write multiple lines of text, usually for comments or descriptions.","Placeholders should only be used when necessary."]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"sizes",children:"Sizes"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"There are two sizes available: small and large."}),"\n",(0,jsx_runtime.jsx)(Canvas,{of:TextArea_stories.Sizes}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"states",children:"States"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Text areas have all the same states as text fields."}),"\n",(0,jsx_runtime.jsx)(Canvas,{of:TextArea_stories.States}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"validation",children:"Validation"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"If a required text area is left empty, use validation text to give feedback to users. The validation error state should appear after users try to submit a form."}),"\n",(0,jsx_runtime.jsx)(Canvas,{of:TextArea_stories.Validation}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"dos-and-donts",children:"Do's and Don'ts"}),"\n",(0,jsx_runtime.jsx)(ComponentRules,{rules:[{positive:{component:(0,jsx_runtime.jsx)(_components.img,{src:do_namespaceObject}),description:"Use text area if you want to ask an open question. Make sure the question is short and clear."},negative:{component:(0,jsx_runtime.jsx)(_components.img,{src:dont_namespaceObject}),description:"Don't use a text area if you want short and specific info - use a text field instead. "}}]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"related-components",children:"Related components"}),"\n",(0,jsx_runtime.jsx)(RelatedComponents,{componentsNames:[component_description_map.rr,component_description_map.a0,component_description_map.Dn]})]})}const TextArea=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}},"../storybook-blocks/dist/src/functions/createComponentTemplate.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>r});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function r(r){return function(e){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r,Object.assign({},e))}}}}]);