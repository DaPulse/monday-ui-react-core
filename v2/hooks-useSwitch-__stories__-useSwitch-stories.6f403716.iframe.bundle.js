"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[557],{"./src/hooks/useSwitch/__stories__/useSwitch.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,Overview:()=>Overview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var _index__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/hooks/useSwitch/index.ts"),_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Flex/Flex.tsx"),_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Toggle/Toggle.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:'import React from "react";\nimport useSwitch from "../index";\nimport { Toggle, Flex } from "../../../components";\n\nexport default {\n  title: "Hooks/useSwitch"\n};\n\nexport const Overview = {\n  render: () => {\n    const { isChecked, onChange } = useSwitch();\n\n    return (\n      <Flex direction={Flex.directions.COLUMN} align={Flex.align.START} gap={Flex.gaps.MEDIUM}>\n        <Toggle onChange={onChange} isSelected={isChecked} />\n        <code>isChecked: {isChecked.toString()}</code>\n      </Flex>\n    );\n  },\n\n  name: "Overview"\n};\n\nexport const Disabled = {\n  render: () => {\n    const { isChecked, onChange } = useSwitch({\n      isDisabled: true\n    });\n\n    return (\n      <Flex direction={Flex.directions.COLUMN} align={Flex.align.START} gap={Flex.gaps.MEDIUM}>\n        <Toggle onChange={onChange} isSelected={isChecked} />\n        <code>isChecked: {isChecked.toString()}</code>\n      </Flex>\n    );\n  },\n\n  name: "Disabled"\n};\n\nexport const Default = {\n  render: () => {\n    const defaultChecked = true;\n\n    const { isChecked, onChange } = useSwitch({\n      defaultChecked\n    });\n\n    return (\n      <Flex direction={Flex.directions.COLUMN} align={Flex.align.START} gap={Flex.gaps.MEDIUM}>\n        <Toggle onChange={onChange} isSelected={isChecked} />\n        <code>isChecked {isChecked.toString()}</code>\n        <code>defaultChecked: {defaultChecked.toString()}</code>\n      </Flex>\n    );\n  },\n\n  name: "Default"\n};\n',locationsMap:{overview:{startLoc:{col:24,line:9},endLoc:{col:1,line:22},startBody:{col:24,line:9},endBody:{col:1,line:22}},disabled:{startLoc:{col:24,line:24},endLoc:{col:1,line:39},startBody:{col:24,line:24},endBody:{col:1,line:39}},default:{startLoc:{col:23,line:41},endLoc:{col:1,line:59},startBody:{col:23,line:41},endBody:{col:1,line:59}}}}},title:"Hooks/useSwitch"};var Overview={render:function render(){var _useSwitch=(0,_index__WEBPACK_IMPORTED_MODULE_2__.A)(),isChecked=_useSwitch.isChecked,onChange=_useSwitch.onChange;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_3__.A,{direction:_components__WEBPACK_IMPORTED_MODULE_3__.A.directions.COLUMN,align:_components__WEBPACK_IMPORTED_MODULE_3__.A.align.START,gap:_components__WEBPACK_IMPORTED_MODULE_3__.A.gaps.MEDIUM,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_4__.A,{onChange,isSelected:isChecked}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("code",{children:["isChecked: ",isChecked.toString()]})]})},name:"Overview"},Disabled={render:function render(){var _useSwitch2=(0,_index__WEBPACK_IMPORTED_MODULE_2__.A)({isDisabled:!0}),isChecked=_useSwitch2.isChecked,onChange=_useSwitch2.onChange;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_3__.A,{direction:_components__WEBPACK_IMPORTED_MODULE_3__.A.directions.COLUMN,align:_components__WEBPACK_IMPORTED_MODULE_3__.A.align.START,gap:_components__WEBPACK_IMPORTED_MODULE_3__.A.gaps.MEDIUM,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_4__.A,{onChange,isSelected:isChecked}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("code",{children:["isChecked: ",isChecked.toString()]})]})},name:"Disabled"},Default={render:function render(){var _useSwitch3=(0,_index__WEBPACK_IMPORTED_MODULE_2__.A)({defaultChecked:true}),isChecked=_useSwitch3.isChecked,onChange=_useSwitch3.onChange;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_3__.A,{direction:_components__WEBPACK_IMPORTED_MODULE_3__.A.directions.COLUMN,align:_components__WEBPACK_IMPORTED_MODULE_3__.A.align.START,gap:_components__WEBPACK_IMPORTED_MODULE_3__.A.gaps.MEDIUM,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_4__.A,{onChange,isSelected:isChecked}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("code",{children:["isChecked ",isChecked.toString()]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("code",{children:["defaultChecked: ",true.toString()]})]})},name:"Default"};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const {\n      isChecked,\n      onChange\n    } = useSwitch();\n    return <Flex direction={Flex.directions.COLUMN} align={Flex.align.START} gap={Flex.gaps.MEDIUM}>\n        <Toggle onChange={onChange} isSelected={isChecked} />\n        <code>isChecked: {isChecked.toString()}</code>\n      </Flex>;\n  },\n  name: "Overview"\n}',...Overview.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const {\n      isChecked,\n      onChange\n    } = useSwitch({\n      isDisabled: true\n    });\n    return <Flex direction={Flex.directions.COLUMN} align={Flex.align.START} gap={Flex.gaps.MEDIUM}>\n        <Toggle onChange={onChange} isSelected={isChecked} />\n        <code>isChecked: {isChecked.toString()}</code>\n      </Flex>;\n  },\n  name: "Disabled"\n}',...Disabled.parameters?.docs?.source}}},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const defaultChecked = true;\n    const {\n      isChecked,\n      onChange\n    } = useSwitch({\n      defaultChecked\n    });\n    return <Flex direction={Flex.directions.COLUMN} align={Flex.align.START} gap={Flex.gaps.MEDIUM}>\n        <Toggle onChange={onChange} isSelected={isChecked} />\n        <code>isChecked {isChecked.toString()}</code>\n        <code>defaultChecked: {defaultChecked.toString()}</code>\n      </Flex>;\n  },\n  name: "Default"\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","Disabled","Default"]}}]);