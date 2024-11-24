"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[635],{"./src/components/ExpandCollapse/__stories__/ExpandCollapse.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ControlledOpenState:()=>ControlledOpenState,CustomHeaderRenderer:()=>CustomHeaderRenderer,OpenByDefault:()=>OpenByDefault,Overview:()=>Overview,WithoutBorders:()=>WithoutBorders,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ExpandCollapse_stories});var react=__webpack_require__("../../node_modules/react/index.js"),createComponentTemplate=__webpack_require__("../storybook-blocks/dist/src/functions/createComponentTemplate.js"),ExpandCollapse=__webpack_require__("./src/components/ExpandCollapse/ExpandCollapse.tsx"),createStoryMetaSettingsDecorator=__webpack_require__("./src/storybook/functions/createStoryMetaSettingsDecorator.ts"),Text=__webpack_require__("./src/components/Text/Text.tsx"),Icon=__webpack_require__("./src/components/Icon/Icon.tsx"),Flex=__webpack_require__("./src/components/Flex/Flex.tsx"),Heading=__webpack_require__("./src/components/Heading/Heading.tsx"),Robot=__webpack_require__("./src/components/Icon/Icons/components/Robot.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ExpandCollapse_stories_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[16].use[3]!./src/components/ExpandCollapse/__stories__/ExpandCollapse.stories.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ExpandCollapse_stories_module.A,options);const _stories_ExpandCollapse_stories_module=ExpandCollapse_stories_module.A&&ExpandCollapse_stories_module.A.locals?ExpandCollapse_stories_module.A.locals:void 0;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var metaSettings=(0,createStoryMetaSettingsDecorator.B)({component:ExpandCollapse.A,enumPropNamesArray:[],iconPropNamesArray:[],actionPropsArray:[],ignoreControlsPropNamesArray:["headerComponentRenderer"]});const ExpandCollapse_stories={parameters:{storySource:{source:'import React from "react";\nimport { useState } from "react";\nimport { createComponentTemplate } from "vibe-storybook-components";\nimport ExpandCollapse from "../ExpandCollapse";\nimport { createStoryMetaSettingsDecorator } from "../../../storybook";\nimport { Flex, Icon, Text } from "../../index";\nimport { Heading } from "../../../next/next";\nimport { Robot } from "../../Icon/Icons";\nimport styles from "./ExpandCollapse.stories.module.scss";\n\nconst metaSettings = createStoryMetaSettingsDecorator({\n  component: ExpandCollapse,\n  enumPropNamesArray: [],\n  iconPropNamesArray: [],\n  actionPropsArray: [],\n  ignoreControlsPropNamesArray: ["headerComponentRenderer"]\n});\n\nexport default {\n  title: "Data Display/ExpandCollapse",\n  component: ExpandCollapse,\n  argTypes: metaSettings.argTypes,\n  decorators: metaSettings.decorators\n};\n\nconst expandCollapseTemplate = createComponentTemplate(ExpandCollapse);\n\nexport const Overview = {\n  render: expandCollapseTemplate.bind({}),\n  name: "Overview",\n  args: {\n    title: "Expand collapse",\n    children: [\n      <Text type={Text.types.TEXT2} maxLines={2}>\n        Insert here any component that you want, here is a robot for you\n      </Text>,\n      <Icon iconType={Icon.type.SVG} icon={Robot} iconSize={40} clickable={false} />\n    ],\n    className: styles.storybookExpandCollapse\n  }\n};\n\nexport const OpenByDefault = {\n  render: () => (\n    <ExpandCollapse title="Open by default" defaultOpenState className={styles.storybookExpandCollapse}>\n      <Text type={Text.types.TEXT2} maxLines={2}>\n        Insert here any component that you want\n      </Text>\n    </ExpandCollapse>\n  ),\n\n  name: "Open by default"\n};\n\nexport const ControlledOpenState = {\n  render: () => {\n    const [open, setOpen] = useState(false);\n\n    return (\n      <Flex direction={Flex.directions.ROW} gap={Flex.gaps.LARGE} align={Flex.align.START}>\n        <ExpandCollapse\n          title="Controlled open state"\n          open={open}\n          onClick={() => setOpen(prevState => !prevState)}\n          className={styles.storybookExpandCollapse}\n        >\n          <Text type={Text.types.TEXT2} maxLines={2}>\n            Insert here any component that you want\n          </Text>\n        </ExpandCollapse>\n      </Flex>\n    );\n  },\n\n  name: "Controlled open state"\n};\n\nexport const CustomHeaderRenderer = {\n  render: () => {\n    const ExpandCollapseCustomHeadingComponent = () => {\n      return <Heading type={Heading.types.H3}>Any component you want</Heading>;\n    };\n\n    return (\n      <ExpandCollapse\n        headerComponentRenderer={ExpandCollapseCustomHeadingComponent}\n        className={styles.storybookExpandCollapse}\n      >\n        <Text type={Text.types.TEXT2} maxLines={2}>\n          Insert here any component that you want\n        </Text>\n      </ExpandCollapse>\n    );\n  },\n\n  name: "Custom header renderer"\n};\n\nexport const WithoutBorders = {\n  render: () => (\n    <ExpandCollapse hideBorder title="Without borders" className={styles.storybookExpandCollapse}>\n      <Text type={Text.types.TEXT2} maxLines={2}>\n        Insert here any component that you want\n      </Text>\n    </ExpandCollapse>\n  ),\n\n  name: "Without borders"\n};\n',locationsMap:{overview:{startLoc:{col:24,line:28},endLoc:{col:1,line:41},startBody:{col:24,line:28},endBody:{col:1,line:41}},"open-by-default":{startLoc:{col:29,line:43},endLoc:{col:1,line:53},startBody:{col:29,line:43},endBody:{col:1,line:53}},"controlled-open-state":{startLoc:{col:35,line:55},endLoc:{col:1,line:76},startBody:{col:35,line:55},endBody:{col:1,line:76}},"custom-header-renderer":{startLoc:{col:36,line:78},endLoc:{col:1,line:97},startBody:{col:36,line:78},endBody:{col:1,line:97}},"without-borders":{startLoc:{col:30,line:99},endLoc:{col:1,line:109},startBody:{col:30,line:99},endBody:{col:1,line:109}}}}},title:"Data Display/ExpandCollapse",component:ExpandCollapse.A,argTypes:metaSettings.argTypes,decorators:metaSettings.decorators};var Overview={render:(0,createComponentTemplate.M)(ExpandCollapse.A).bind({}),name:"Overview",args:{title:"Expand collapse",children:[(0,jsx_runtime.jsx)(Text.A,{type:Text.A.types.TEXT2,maxLines:2,children:"Insert here any component that you want, here is a robot for you"}),(0,jsx_runtime.jsx)(Icon.A,{iconType:Icon.A.type.SVG,icon:Robot.A,iconSize:40,clickable:!1})],className:_stories_ExpandCollapse_stories_module.storybookExpandCollapse}},OpenByDefault={render:function render(){return(0,jsx_runtime.jsx)(ExpandCollapse.A,{title:"Open by default",defaultOpenState:!0,className:_stories_ExpandCollapse_stories_module.storybookExpandCollapse,children:(0,jsx_runtime.jsx)(Text.A,{type:Text.A.types.TEXT2,maxLines:2,children:"Insert here any component that you want"})})},name:"Open by default"},ControlledOpenState={render:function render(){var _useState2=_slicedToArray((0,react.useState)(!1),2),open=_useState2[0],setOpen=_useState2[1];return(0,jsx_runtime.jsx)(Flex.A,{direction:Flex.A.directions.ROW,gap:Flex.A.gaps.LARGE,align:Flex.A.align.START,children:(0,jsx_runtime.jsx)(ExpandCollapse.A,{title:"Controlled open state",open,onClick:function onClick(){return setOpen((function(prevState){return!prevState}))},className:_stories_ExpandCollapse_stories_module.storybookExpandCollapse,children:(0,jsx_runtime.jsx)(Text.A,{type:Text.A.types.TEXT2,maxLines:2,children:"Insert here any component that you want"})})})},name:"Controlled open state"},CustomHeaderRenderer={render:function render(){return(0,jsx_runtime.jsx)(ExpandCollapse.A,{headerComponentRenderer:function ExpandCollapseCustomHeadingComponent(){return(0,jsx_runtime.jsx)(Heading.A,{type:Heading.A.types.H3,children:"Any component you want"})},className:_stories_ExpandCollapse_stories_module.storybookExpandCollapse,children:(0,jsx_runtime.jsx)(Text.A,{type:Text.A.types.TEXT2,maxLines:2,children:"Insert here any component that you want"})})},name:"Custom header renderer"},WithoutBorders={render:function render(){return(0,jsx_runtime.jsx)(ExpandCollapse.A,{hideBorder:!0,title:"Without borders",className:_stories_ExpandCollapse_stories_module.storybookExpandCollapse,children:(0,jsx_runtime.jsx)(Text.A,{type:Text.A.types.TEXT2,maxLines:2,children:"Insert here any component that you want"})})},name:"Without borders"};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: expandCollapseTemplate.bind({}),\n  name: "Overview",\n  args: {\n    title: "Expand collapse",\n    children: [<Text type={Text.types.TEXT2} maxLines={2}>\n        Insert here any component that you want, here is a robot for you\n      </Text>, <Icon iconType={Icon.type.SVG} icon={Robot} iconSize={40} clickable={false} />],\n    className: styles.storybookExpandCollapse\n  }\n}',...Overview.parameters?.docs?.source}}},OpenByDefault.parameters={...OpenByDefault.parameters,docs:{...OpenByDefault.parameters?.docs,source:{originalSource:'{\n  render: () => <ExpandCollapse title="Open by default" defaultOpenState className={styles.storybookExpandCollapse}>\n      <Text type={Text.types.TEXT2} maxLines={2}>\n        Insert here any component that you want\n      </Text>\n    </ExpandCollapse>,\n  name: "Open by default"\n}',...OpenByDefault.parameters?.docs?.source}}},ControlledOpenState.parameters={...ControlledOpenState.parameters,docs:{...ControlledOpenState.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const [open, setOpen] = useState(false);\n    return <Flex direction={Flex.directions.ROW} gap={Flex.gaps.LARGE} align={Flex.align.START}>\n        <ExpandCollapse title="Controlled open state" open={open} onClick={() => setOpen(prevState => !prevState)} className={styles.storybookExpandCollapse}>\n          <Text type={Text.types.TEXT2} maxLines={2}>\n            Insert here any component that you want\n          </Text>\n        </ExpandCollapse>\n      </Flex>;\n  },\n  name: "Controlled open state"\n}',...ControlledOpenState.parameters?.docs?.source}}},CustomHeaderRenderer.parameters={...CustomHeaderRenderer.parameters,docs:{...CustomHeaderRenderer.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const ExpandCollapseCustomHeadingComponent = () => {\n      return <Heading type={Heading.types.H3}>Any component you want</Heading>;\n    };\n    return <ExpandCollapse headerComponentRenderer={ExpandCollapseCustomHeadingComponent} className={styles.storybookExpandCollapse}>\n        <Text type={Text.types.TEXT2} maxLines={2}>\n          Insert here any component that you want\n        </Text>\n      </ExpandCollapse>;\n  },\n  name: "Custom header renderer"\n}',...CustomHeaderRenderer.parameters?.docs?.source}}},WithoutBorders.parameters={...WithoutBorders.parameters,docs:{...WithoutBorders.parameters?.docs,source:{originalSource:'{\n  render: () => <ExpandCollapse hideBorder title="Without borders" className={styles.storybookExpandCollapse}>\n      <Text type={Text.types.TEXT2} maxLines={2}>\n        Insert here any component that you want\n      </Text>\n    </ExpandCollapse>,\n  name: "Without borders"\n}',...WithoutBorders.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","OpenByDefault","ControlledOpenState","CustomHeaderRenderer","WithoutBorders"]},"../storybook-blocks/dist/src/functions/createComponentTemplate.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>r});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function r(r){return function(e){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r,Object.assign({},e))}}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[16].use[3]!./src/components/ExpandCollapse/__stories__/ExpandCollapse.stories.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".ExpandCollapse-stories-module_storybookExpandCollapse{width:300px}","",{version:3,sources:["webpack://./src/components/ExpandCollapse/__stories__/ExpandCollapse.stories.module.scss"],names:[],mappings:"AAAA,uDACE,WAAA",sourcesContent:[".storybookExpandCollapse {\n  width: 300px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={storybookExpandCollapse:"ExpandCollapse-stories-module_storybookExpandCollapse"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);