"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[9117],{"./src/hooks/useSetFocus/__stories__/useSetFocus.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>useSetFocus_stories});var react=__webpack_require__("../../node_modules/react/index.js"),Flex=__webpack_require__("./src/components/Flex/Flex.tsx"),TextField=__webpack_require__("./src/components/TextField/TextField.tsx"),Button=__webpack_require__("./src/components/Button/Button.tsx"),useSetFocus=__webpack_require__("./src/hooks/useSetFocus/index.ts"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),useSetFocus_stories_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[16].use[3]!./src/hooks/useSetFocus/__stories__/useSetFocus.stories.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(useSetFocus_stories_module.A,options);const _stories_useSetFocus_stories_module=useSetFocus_stories_module.A&&useSetFocus_stories_module.A.locals?useSetFocus_stories_module.A.locals:void 0;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const useSetFocus_stories={parameters:{storySource:{source:'import React, { useRef } from "react";\nimport { Button, Flex, InputField } from "../../../components";\nimport useSetFocus from "../../useSetFocus/index";\nimport styles from "./useSetFocus.stories.module.scss";\n\nexport default {\n  title: "Hooks/useSetFocus"\n};\n\nexport const Overview = {\n  render: () => {\n    const focusCallback = () => {};\n    const blurCallback = () => {};\n    const ref = useRef(null);\n\n    const { isFocused, focus, blur } = useSetFocus({\n      ref,\n      focusCallback,\n      blurCallback\n    });\n\n    return (\n      <Flex direction={Flex.directions.COLUMN}>\n        <InputField ref={ref} placeholder="Input..." />\n        <Button onClick={focus} className={styles.controlButton}>\n          Focus\n        </Button>\n        <Button onClick={blur} className={styles.controlButton}>\n          Blur\n        </Button>\n        <div className={styles.focusLabel}>Is focused: {isFocused?.toString()}</div>\n      </Flex>\n    );\n  },\n\n  name: "Overview"\n};\n',locationsMap:{overview:{startLoc:{col:24,line:10},endLoc:{col:1,line:37},startBody:{col:24,line:10},endBody:{col:1,line:37}}}}},title:"Hooks/useSetFocus"};var Overview={render:function render(){var ref=(0,react.useRef)(null),_useSetFocus=(0,useSetFocus.A)({ref,focusCallback:function focusCallback(){},blurCallback:function blurCallback(){}}),isFocused=_useSetFocus.isFocused,focus=_useSetFocus.focus,blur=_useSetFocus.blur;return(0,jsx_runtime.jsxs)(Flex.A,{direction:Flex.A.directions.COLUMN,children:[(0,jsx_runtime.jsx)(TextField.A,{ref,placeholder:"Input..."}),(0,jsx_runtime.jsx)(Button.A,{onClick:focus,className:_stories_useSetFocus_stories_module.controlButton,children:"Focus"}),(0,jsx_runtime.jsx)(Button.A,{onClick:blur,className:_stories_useSetFocus_stories_module.controlButton,children:"Blur"}),(0,jsx_runtime.jsxs)("div",{className:_stories_useSetFocus_stories_module.focusLabel,children:["Is focused: ",null==isFocused?void 0:isFocused.toString()]})]})},name:"Overview"};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const focusCallback = () => {};\n    const blurCallback = () => {};\n    const ref = useRef(null);\n    const {\n      isFocused,\n      focus,\n      blur\n    } = useSetFocus({\n      ref,\n      focusCallback,\n      blurCallback\n    });\n    return <Flex direction={Flex.directions.COLUMN}>\n        <InputField ref={ref} placeholder="Input..." />\n        <Button onClick={focus} className={styles.controlButton}>\n          Focus\n        </Button>\n        <Button onClick={blur} className={styles.controlButton}>\n          Blur\n        </Button>\n        <div className={styles.focusLabel}>Is focused: {isFocused?.toString()}</div>\n      </Flex>;\n  },\n  name: "Overview"\n}',...Overview.parameters?.docs?.source}}};const __namedExportsOrder=["Overview"]},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[16].use[3]!./src/hooks/useSetFocus/__stories__/useSetFocus.stories.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".useSetFocus-stories-module_controlButton{margin-top:var(--sb-spacing-medium);width:80px}.useSetFocus-stories-module_focusLabel{margin-top:var(--sb-spacing-medium)}","",{version:3,sources:["webpack://./src/hooks/useSetFocus/__stories__/useSetFocus.stories.module.scss"],names:[],mappings:"AAAA,0CACE,mCAAA,CACA,UAAA,CAGF,uCACE,mCAAA",sourcesContent:[".controlButton {\n  margin-top: var(--sb-spacing-medium);\n  width: 80px;\n}\n\n.focusLabel {\n  margin-top: var(--sb-spacing-medium);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={controlButton:"useSetFocus-stories-module_controlButton",focusLabel:"useSetFocus-stories-module_focusLabel"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);