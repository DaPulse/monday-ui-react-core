"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[7503,4777],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/Search/__stories__/Search.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FilterInCombobox:()=>FilterInCombobox,Overview:()=>Overview,Sizes:()=>Sizes,WithAdditionalAction:()=>WithAdditionalAction,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var vibe_storybook_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../storybook-blocks/dist/src/functions/createComponentTemplate.js"),_Search__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Search/Search.tsx"),_storybook__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/storybook/functions/createStoryMetaSettingsDecorator.ts"),_DialogContentContainer_DialogContentContainer__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/components/DialogContentContainer/DialogContentContainer.tsx"),_Combobox_Combobox__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/Combobox/Combobox.tsx"),_Flex_Flex__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Flex/Flex.tsx"),_IconButton_IconButton__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/IconButton/IconButton.tsx"),_Icon_Icons_components_Filter__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/Icon/Icons/components/Filter.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),metaSettings=(0,_storybook__WEBPACK_IMPORTED_MODULE_2__.B)({component:_Search__WEBPACK_IMPORTED_MODULE_3__.A,iconPropNamesArray:["searchIconName","clearIconName"]}),searchTemplate=(0,vibe_storybook_components__WEBPACK_IMPORTED_MODULE_4__.M)(_Search__WEBPACK_IMPORTED_MODULE_3__.A);const __WEBPACK_DEFAULT_EXPORT__={title:"Inputs/Search",component:_Search__WEBPACK_IMPORTED_MODULE_3__.A,argTypes:metaSettings.argTypes,decorators:metaSettings.decorators};var withFixedWidth=function withFixedWidth(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{width:320},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{})})};withFixedWidth.displayName="withFixedWidth";var Overview={render:searchTemplate.bind({}),args:{placeholder:"Placeholder text here"},decorators:[withFixedWidth],parameters:{docs:{liveEdit:{isEnabled:!1}}}},Sizes={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Search__WEBPACK_IMPORTED_MODULE_3__.A,{placeholder:"Small",size:"small"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Search__WEBPACK_IMPORTED_MODULE_3__.A,{placeholder:"Medium",size:"medium"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Search__WEBPACK_IMPORTED_MODULE_3__.A,{placeholder:"Large",size:"large"})]})},decorators:[function(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Flex_Flex__WEBPACK_IMPORTED_MODULE_5__.A,{direction:_Flex_Flex__WEBPACK_IMPORTED_MODULE_5__.A.directions.COLUMN,justify:_Flex_Flex__WEBPACK_IMPORTED_MODULE_5__.A.justify.START,gap:_Flex_Flex__WEBPACK_IMPORTED_MODULE_5__.A.gaps.MEDIUM,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{})})},withFixedWidth],parameters:{docs:{liveEdit:{scope:{Search:_Search__WEBPACK_IMPORTED_MODULE_3__.A}}}}},WithAdditionalAction={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Search__WEBPACK_IMPORTED_MODULE_3__.A,{placeholder:"Search with icon",renderAction:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_IconButton_IconButton__WEBPACK_IMPORTED_MODULE_6__.A,{icon:_Icon_Icons_components_Filter__WEBPACK_IMPORTED_MODULE_7__.A,ariaLabel:"Filter results",size:_IconButton_IconButton__WEBPACK_IMPORTED_MODULE_6__.A.sizes.SMALL})})},decorators:[withFixedWidth],parameters:{docs:{liveEdit:{scope:{Search:_Search__WEBPACK_IMPORTED_MODULE_3__.A,FilterIcon:_Icon_Icons_components_Filter__WEBPACK_IMPORTED_MODULE_7__.A}}}}},options=[{id:"1",label:"Cheese Cake"},{id:"2",label:"Muffin"},{id:"3",label:"Cookie"},{id:"4",label:"Cup cake"},{id:"5",label:"Banana lottie"}],FilterInCombobox={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Combobox_Combobox__WEBPACK_IMPORTED_MODULE_8__.A,{placeholder:"Placeholder text here",options,size:_Combobox_Combobox__WEBPACK_IMPORTED_MODULE_8__.A.sizes.SMALL,optionLineHeight:28})},decorators:[function(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_DialogContentContainer_DialogContentContainer__WEBPACK_IMPORTED_MODULE_9__.A,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{})})},withFixedWidth],parameters:{docs:{liveEdit:{scope:{options}}}}};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: searchTemplate.bind({}),\n  args: {\n    placeholder: "Placeholder text here"\n  },\n  decorators: [withFixedWidth],\n  parameters: {\n    docs: {\n      liveEdit: {\n        isEnabled: false\n      }\n    }\n  }\n}',...Overview.parameters?.docs?.source}}},Sizes.parameters={...Sizes.parameters,docs:{...Sizes.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <Search placeholder="Small" size="small" />\n      <Search placeholder="Medium" size="medium" />\n      <Search placeholder="Large" size="large" />\n    </>,\n  decorators: [Story => <Flex direction={Flex.directions.COLUMN} justify={Flex.justify.START} gap={Flex.gaps.MEDIUM}>\n        <Story />\n      </Flex>, withFixedWidth],\n  parameters: {\n    docs: {\n      liveEdit: {\n        scope: {\n          Search\n        }\n      }\n    }\n  }\n}',...Sizes.parameters?.docs?.source}}},WithAdditionalAction.parameters={...WithAdditionalAction.parameters,docs:{...WithAdditionalAction.parameters?.docs,source:{originalSource:'{\n  render: () => <Search placeholder="Search with icon" renderAction={<IconButton icon={FilterIcon} ariaLabel="Filter results" size={IconButton.sizes.SMALL} />} />,\n  decorators: [withFixedWidth],\n  parameters: {\n    docs: {\n      liveEdit: {\n        scope: {\n          Search,\n          FilterIcon\n        }\n      }\n    }\n  }\n}',...WithAdditionalAction.parameters?.docs?.source}}},FilterInCombobox.parameters={...FilterInCombobox.parameters,docs:{...FilterInCombobox.parameters?.docs,source:{originalSource:'{\n  render: () => <Combobox placeholder="Placeholder text here" options={options} size={Combobox.sizes.SMALL} optionLineHeight={28} />,\n  decorators: [Story => <DialogContentContainer>\n        <Story />\n      </DialogContentContainer>, withFixedWidth],\n  parameters: {\n    docs: {\n      liveEdit: {\n        scope: {\n          options\n        }\n      }\n    }\n  }\n}',...FilterInCombobox.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","Sizes","WithAdditionalAction","FilterInCombobox"]},"./src/components/Search/__stories__/Search.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>_stories_Search});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),usage_guidelines=__webpack_require__("../storybook-blocks/dist/src/components/usage-guidelines/usage-guidelines.js"),tip=__webpack_require__("../storybook-blocks/dist/src/components/tip/tip.js"),storybook_link=__webpack_require__("../storybook-blocks/dist/src/components/storybook-link/storybook-link.js"),component_description_map=__webpack_require__("./src/storybook/components/related-components/component-description-map.tsx"),Search_stories=__webpack_require__("./src/components/Search/__stories__/Search.stories.tsx"),Search=__webpack_require__("./src/components/Search/Search.tsx"),CloseSmall=__webpack_require__("./src/components/Icon/Icons/components/CloseSmall.tsx"),components_Search=__webpack_require__("./src/components/Icon/Icons/components/Search.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Search_stories_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[16].use[3]!./src/components/Search/__stories__/Search.stories.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Search_stories_module.A,options);const _stories_Search_stories_module=Search_stories_module.A&&Search_stories_module.A.locals?Search_stories_module.A.locals:void 0;function _createMdxContent(props){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",h2:"h2",p:"p",pre:"pre",code:"code",h3:"h3"},(0,lib.RP)(),props.components),{Canvas,PropsTable,ComponentRules,RelatedComponents}=_components;return Canvas||_missingMdxReference("Canvas",!0),ComponentRules||_missingMdxReference("ComponentRules",!0),PropsTable||_missingMdxReference("PropsTable",!0),RelatedComponents||_missingMdxReference("RelatedComponents",!0),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:Search_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"search",children:"Search"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#usage",children:"Usage"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#variants",children:"Variants"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#dos-and-donts",children:"Do's and don'ts"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#use-cases-and-examples",children:"Use cases and examples"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#related-components",children:"Related components"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#feedback",children:"Feedback"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Search lets users quickly find relevant content. A search field allows a user to type a word or phrase to filter through a large amount of data without navigation."}),"\n",(0,jsx_runtime.jsx)(Canvas,{of:Search_stories.Overview}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"import",children:"Import"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-ts",children:'import { Search } from "monday-ui-react-core/next";\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(PropsTable,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(usage_guidelines.A,{guidelines:["Search query input methods can be extended to include historical suggestions and auto-completion of queries.","Search results are displayed below the search bar.","Always use the search icon to help users identify search fields. Display the search icon as a presentational icon inside the search input.","Let users submit their search by hitting enter. For live-filtering search, update search results immediately without hitting enter and be mindful of performance.","Consider helping users understand what they can search for by offering placeholder examples or autosuggested results.","Once the user starts typing, clear button should appear and remain accessible, even after a search is performed."]}),"\n",(0,jsx_runtime.jsxs)(tip.A,{title:"Not what you were looking for?",children:[(0,jsx_runtime.jsx)("span",{children:"If you need to filter results from a long list, consider using the "}),(0,jsx_runtime.jsx)(storybook_link.A,{page:"Inputs/Combobox",size:storybook_link.A.sizes.SMALL,children:(0,jsx_runtime.jsx)("span",{children:"Combobox"})}),(0,jsx_runtime.jsx)("span",{children:" component."})]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"sizes",children:"Sizes"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"There are three sizes available: Small (32px), Medium (40px), and Large (48px)."}),"\n",(0,jsx_runtime.jsx)(Canvas,{of:Search_stories.Sizes}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-additional-action",children:"With additional action"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The search field can contain one more search-related action (like filtering). This action should be represented by an icon button on the right."}),"\n",(0,jsx_runtime.jsx)(Canvas,{of:Search_stories.WithAdditionalAction}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"dos-and-donts",children:"Do's and Don'ts"}),"\n",(0,jsx_runtime.jsx)(ComponentRules,{rules:[{positive:{component:(0,jsx_runtime.jsx)(Search.A,{value:"User typing",className:_stories_Search_stories_module.fixedWidth}),description:"Keep the search icon on the left side of the input, and the clear button on the right side."},negative:{component:(0,jsx_runtime.jsx)(Search.A,{value:"User typing",searchIconName:CloseSmall.A,clearIconName:components_Search.A,className:_stories_Search_stories_module.fixedWidth}),description:"Don't place the search icon on the right side of the input, or the clear button on the left side."}},{positive:{component:(0,jsx_runtime.jsx)(Search.A,{value:"User typing",className:_stories_Search_stories_module.fixedWidth}),description:"Show clear button when the user starts typing, and keep it visible even after a search is performed."},negative:{component:(0,jsx_runtime.jsx)(Search.A,{value:"User typing",clearIconName:null,className:_stories_Search_stories_module.fixedWidth}),description:"Don't remove the clear button after the user has performed the search."}}]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"use-cases-and-examples",children:"Use cases and examples"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"filter-in-combobox",children:"Filter in combobox"}),"\n",(0,jsx_runtime.jsx)(Canvas,{of:Search_stories.FilterInCombobox}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"related-components",children:"Related components"}),"\n",(0,jsx_runtime.jsx)(RelatedComponents,{componentsNames:[component_description_map.a0,component_description_map.rr,component_description_map.k4]})]})}const _stories_Search=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}},"../storybook-blocks/dist/src/functions/createComponentTemplate.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>r});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function r(r){return function(e){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r,Object.assign({},e))}}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[16].use[3]!./src/components/Search/__stories__/Search.stories.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Search-stories-module_fixedWidth{width:75%}","",{version:3,sources:["webpack://./src/components/Search/__stories__/Search.stories.module.scss"],names:[],mappings:"AAAA,kCACE,SAAA",sourcesContent:[".fixedWidth {\n  width: 75%;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={fixedWidth:"Search-stories-module_fixedWidth"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);