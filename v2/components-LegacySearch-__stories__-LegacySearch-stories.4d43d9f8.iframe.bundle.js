"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[5871],{"./src/components/LegacySearch/__stories__/LegacySearch.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FilterInCombobox:()=>FilterInCombobox,Overview:()=>Overview,Sizes:()=>Sizes,__namedExportsOrder:()=>__namedExportsOrder,default:()=>LegacySearch_stories_LegacySearch_stories});__webpack_require__("../../node_modules/react/index.js");var createComponentTemplate=__webpack_require__("../storybook-blocks/dist/src/functions/createComponentTemplate.js"),LegacySearch=__webpack_require__("./src/components/LegacySearch/LegacySearch.tsx"),createStoryMetaSettingsDecorator=__webpack_require__("./src/storybook/functions/createStoryMetaSettingsDecorator.ts"),DialogContentContainer=__webpack_require__("./src/components/DialogContentContainer/DialogContentContainer.tsx"),Combobox=__webpack_require__("./src/components/Combobox/Combobox.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),LegacySearch_stories=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[16].use[3]!./src/components/LegacySearch/__stories__/LegacySearch.stories.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(LegacySearch_stories.A,options);LegacySearch_stories.A&&LegacySearch_stories.A.locals&&LegacySearch_stories.A.locals;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),metaSettings=(0,createStoryMetaSettingsDecorator.B)({component:LegacySearch.A,enumPropNamesArray:["type","size"],iconPropNamesArray:["secondaryIconName","iconName"]}),searchTemplate=(0,createComponentTemplate.M)(LegacySearch.A);const LegacySearch_stories_LegacySearch_stories={parameters:{storySource:{source:'import React from "react";\nimport { createComponentTemplate } from "vibe-storybook-components";\nimport Search from "../LegacySearch";\nimport { createStoryMetaSettingsDecorator } from "../../../storybook";\nimport DialogContentContainer from "../../DialogContentContainer/DialogContentContainer";\nimport Combobox from "../../Combobox/Combobox";\nimport "./LegacySearch.stories.scss";\n\nconst metaSettings = createStoryMetaSettingsDecorator({\n  component: Search,\n  enumPropNamesArray: ["type", "size"],\n  iconPropNamesArray: ["secondaryIconName", "iconName"]\n});\n\nconst searchTemplate = createComponentTemplate(Search);\n\nexport default {\n  title: "Inputs/LegacySearch [deprecated]",\n  component: Search,\n  argTypes: metaSettings.argTypes,\n  decorators: metaSettings.decorators\n};\n\nexport const Overview = {\n  render: searchTemplate.bind({}),\n  name: "Overview",\n\n  args: {\n    placeholder: "Placeholder text here",\n    wrapperClassName: "monday-storybook-search_size"\n  }\n};\n\nexport const Sizes = {\n  render: () => (\n    <div className="monday-storybook-search_box">\n      <Search placeholder="Small" size={Search.sizes.SMALL} />\n      <Search placeholder="Medium" />\n      <Search placeholder="Large" size={Search.sizes.LARGE} />\n    </div>\n  ),\n\n  name: "Sizes"\n};\n\nexport const FilterInCombobox = {\n  render: () => {\n    const option = [\n      {\n        id: "1",\n        label: "Cheese Cake"\n      },\n      {\n        id: "2",\n        label: "Muffin"\n      },\n      {\n        id: "3",\n        label: "Cookie"\n      },\n      {\n        id: "4",\n        label: "Cup cake"\n      },\n      {\n        id: "5",\n        label: "Banana lottie"\n      }\n    ];\n\n    return (\n      <DialogContentContainer className="monday-storybook-search_wrapper">\n        <Combobox\n          placeholder="Placeholder text here"\n          options={option}\n          size={Combobox.sizes.SMALL}\n          optionLineHeight={28}\n        />\n      </DialogContentContainer>\n    );\n  },\n\n  name: "Filter in combobox"\n};\n',locationsMap:{overview:{startLoc:{col:24,line:24},endLoc:{col:1,line:32},startBody:{col:24,line:24},endBody:{col:1,line:32}},sizes:{startLoc:{col:21,line:34},endLoc:{col:1,line:44},startBody:{col:21,line:34},endBody:{col:1,line:44}},"filter-in-combobox":{startLoc:{col:32,line:46},endLoc:{col:1,line:84},startBody:{col:32,line:46},endBody:{col:1,line:84}}}}},title:"Inputs/LegacySearch [deprecated]",component:LegacySearch.A,argTypes:metaSettings.argTypes,decorators:metaSettings.decorators};var Overview={render:searchTemplate.bind({}),name:"Overview",args:{placeholder:"Placeholder text here",wrapperClassName:"monday-storybook-search_size"}},Sizes={render:function render(){return(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-search_box",children:[(0,jsx_runtime.jsx)(LegacySearch.A,{placeholder:"Small",size:LegacySearch.A.sizes.SMALL}),(0,jsx_runtime.jsx)(LegacySearch.A,{placeholder:"Medium"}),(0,jsx_runtime.jsx)(LegacySearch.A,{placeholder:"Large",size:LegacySearch.A.sizes.LARGE})]})},name:"Sizes"},FilterInCombobox={render:function render(){return(0,jsx_runtime.jsx)(DialogContentContainer.A,{className:"monday-storybook-search_wrapper",children:(0,jsx_runtime.jsx)(Combobox.A,{placeholder:"Placeholder text here",options:[{id:"1",label:"Cheese Cake"},{id:"2",label:"Muffin"},{id:"3",label:"Cookie"},{id:"4",label:"Cup cake"},{id:"5",label:"Banana lottie"}],size:Combobox.A.sizes.SMALL,optionLineHeight:28})})},name:"Filter in combobox"};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: searchTemplate.bind({}),\n  name: "Overview",\n  args: {\n    placeholder: "Placeholder text here",\n    wrapperClassName: "monday-storybook-search_size"\n  }\n}',...Overview.parameters?.docs?.source}}},Sizes.parameters={...Sizes.parameters,docs:{...Sizes.parameters?.docs,source:{originalSource:'{\n  render: () => <div className="monday-storybook-search_box">\n      <Search placeholder="Small" size={Search.sizes.SMALL} />\n      <Search placeholder="Medium" />\n      <Search placeholder="Large" size={Search.sizes.LARGE} />\n    </div>,\n  name: "Sizes"\n}',...Sizes.parameters?.docs?.source}}},FilterInCombobox.parameters={...FilterInCombobox.parameters,docs:{...FilterInCombobox.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const option = [{\n      id: "1",\n      label: "Cheese Cake"\n    }, {\n      id: "2",\n      label: "Muffin"\n    }, {\n      id: "3",\n      label: "Cookie"\n    }, {\n      id: "4",\n      label: "Cup cake"\n    }, {\n      id: "5",\n      label: "Banana lottie"\n    }];\n    return <DialogContentContainer className="monday-storybook-search_wrapper">\n        <Combobox placeholder="Placeholder text here" options={option} size={Combobox.sizes.SMALL} optionLineHeight={28} />\n      </DialogContentContainer>;\n  },\n  name: "Filter in combobox"\n}',...FilterInCombobox.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","Sizes","FilterInCombobox"]},"../storybook-blocks/dist/src/functions/createComponentTemplate.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>r});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function r(r){return function(e){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r,Object.assign({},e))}}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[16].use[3]!./src/components/LegacySearch/__stories__/LegacySearch.stories.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".monday-storybook-search_wrapper{width:260px}.monday-storybook-search_box{width:448px;display:flex;flex-direction:column;gap:16px}.monday-storybook-search_size{width:240px}","",{version:3,sources:["webpack://./src/components/LegacySearch/__stories__/LegacySearch.stories.scss"],names:[],mappings:"AACE,iCACE,WAAA,CAGF,6BACE,WAAA,CACA,YAAA,CACA,qBAAA,CACA,QAAA,CAGF,8BACE,WAAA",sourcesContent:[".monday-storybook-search {\n  &_wrapper {\n    width: 260px;\n  }\n\n  &_box {\n    width: 448px;\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n  }\n\n  &_size {\n    width: 240px;\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);