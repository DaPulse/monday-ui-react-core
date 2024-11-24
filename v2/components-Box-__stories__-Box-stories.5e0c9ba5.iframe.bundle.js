"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[3251],{"./src/components/Box/__stories__/Box.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BackgroundColors:()=>BackgroundColors,Border:()=>Border,BorderColor:()=>BorderColor,Disabled:()=>Disabled,Margin:()=>Margin,Overview:()=>Overview,Padding:()=>Padding,RoundCorners:()=>RoundCorners,Shadow:()=>Shadow,TextColors:()=>TextColors,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Box_stories});__webpack_require__("../../node_modules/react/index.js");var Box=__webpack_require__("./src/components/Box/Box.tsx"),createStoryMetaSettingsDecorator=__webpack_require__("./src/storybook/functions/createStoryMetaSettingsDecorator.ts"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Box_stories_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[16].use[3]!./src/components/Box/__stories__/Box.stories.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Box_stories_module.A,options);const _stories_Box_stories_module=Box_stories_module.A&&Box_stories_module.A.locals?Box_stories_module.A.locals:void 0;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var metaSettings=(0,createStoryMetaSettingsDecorator.B)({component:Box.A,enumPropNamesArray:["className","id","children","disabled","border","borderColor","rounded","shadow","margin","marginX","marginY","marginTop","marginEnd","marginBottom","marginStart","padding","paddingX","paddingY","paddingTop","paddingEnd","paddingBottom","paddingStart","backgroundColor","textColor"]});const Box_stories={parameters:{storySource:{source:'import React from "react";\nimport Box, { BoxProps } from "../Box";\nimport { createStoryMetaSettingsDecorator } from "../../../storybook";\nimport styles from "./Box.stories.module.scss";\n\nconst metaSettings = createStoryMetaSettingsDecorator({\n  component: Box,\n  enumPropNamesArray: [\n    "className",\n    "id",\n    "children",\n    "disabled",\n    "border",\n    "borderColor",\n    "rounded",\n    "shadow",\n    "margin",\n    "marginX",\n    "marginY",\n    "marginTop",\n    "marginEnd",\n    "marginBottom",\n    "marginStart",\n    "padding",\n    "paddingX",\n    "paddingY",\n    "paddingTop",\n    "paddingEnd",\n    "paddingBottom",\n    "paddingStart",\n    "backgroundColor",\n    "textColor"\n  ]\n});\n\nexport default {\n  title: "Layout/Box",\n  component: Box,\n  argTypes: metaSettings.argTypes,\n  decorators: metaSettings.decorators\n};\n\nconst boxTemplate = (args: BoxProps) => (\n  <div className={styles.boxWrapper}>\n    <Box border={Box.borders.DEFAULT} rounded={Box.roundeds.MEDIUM} {...args}>\n      Box composite component\n    </Box>\n  </div>\n);\n\nexport const Overview = {\n  render: boxTemplate.bind({}),\n\n  name: "Overview"\n};\n\nexport const BackgroundColors = {\n  render: () => (\n    <div className={styles.boxWrapper}>\n      <Box backgroundColor={Box.backgroundColors.PRIMARY_BACKGROUND_COLOR}>\n        Box.backgroundColors.PRIMARY_BACKGROUND_COLOR\n      </Box>\n      <Box backgroundColor={Box.backgroundColors.SECONDARY_BACKGROUND_COLOR}>\n        Box.backgroundColors.SECONDARY_BACKGROUND_COLOR\n      </Box>\n      <Box backgroundColor={Box.backgroundColors.GREY_BACKGROUND_COLOR}>Box.backgroundColors.GREY_BACKGROUND_COLOR</Box>\n      <Box backgroundColor={Box.backgroundColors.ALL_GREY_BACKGROUND_COLOR}>\n        Box.backgroundColors.ALL_GREY_BACKGROUND_COLOR\n      </Box>\n      <Box\n        textColor={Box.textColors.TEXT_COLOR_ON_INVERTED}\n        backgroundColor={Box.backgroundColors.INVERTED_COLOR_BACKGROUND}\n      >\n        Box.backgroundColors.INVERTED_COLOR_BACKGROUND\n      </Box>\n    </div>\n  ),\n\n  name: "Background colors"\n};\n\nexport const TextColors = {\n  render: () => (\n    <div className={styles.boxWrapper}>\n      <Box textColor={Box.textColors.PRIMARY_TEXT_COLOR}>Box.textColors.PRIMARY_TEXT_COLOR</Box>\n      <Box\n        backgroundColor={Box.backgroundColors.INVERTED_COLOR_BACKGROUND}\n        textColor={Box.textColors.TEXT_COLOR_ON_INVERTED}\n      >\n        Box.textColors.TEXT_COLOR_ON_INVERTED\n      </Box>\n      <Box textColor={Box.textColors.SECONDARY_TEXT_COLOR}>Box.textColors.SECONDARY_TEXT_COLOR</Box>\n    </div>\n  ),\n\n  name: "Text Colors"\n};\n\nexport const Border = {\n  render: () => (\n    <div className={styles.boxWrapper}>\n      <Box border={Box.borders.DEFAULT}>Box.borders.DEFAULT</Box>\n    </div>\n  ),\n\n  name: "Border"\n};\n\nexport const BorderColor = {\n  render: () => (\n    <div className={styles.boxWrapper}>\n      <Box border={Box.borders.DEFAULT} borderColor={Box.borderColors.UI_BORDER_COLOR}>\n        Box.borderColors.UI_BORDER_COLOR\n      </Box>\n      <Box border={Box.borders.DEFAULT} borderColor={Box.borderColors.LAYOUT_BORDER_COLOR}>\n        Box.borderColors.LAYOUT_BORDER_COLOR\n      </Box>\n    </div>\n  ),\n\n  name: "Border Color"\n};\n\nexport const RoundCorners = {\n  render: () => (\n    <div className={styles.boxWrapper}>\n      <Box border={Box.borders.DEFAULT} rounded={Box.roundeds.SMALL}>\n        Box.roundeds.SMALL\n      </Box>\n      <Box border={Box.borders.DEFAULT} rounded={Box.roundeds.MEDIUM}>\n        Box.roundeds.MEDIUM\n      </Box>\n      <Box border={Box.borders.DEFAULT} rounded={Box.roundeds.BIG}>\n        Box.roundeds.BIG\n      </Box>\n    </div>\n  ),\n\n  name: "Round Corners"\n};\n\nexport const Shadow = {\n  render: () => (\n    <div className={styles.boxWrapper}>\n      <Box shadow={Box.shadows.XS}>Box.shadows.XS</Box>\n      <Box shadow={Box.shadows.SMALL}>Box.shadows.SMALL</Box>\n      <Box shadow={Box.shadows.MEDIUM}>Box.shadows.MEDIUM</Box>\n      <Box shadow={Box.shadows.LARGE}>Box.shadows.LARGE</Box>\n    </div>\n  ),\n\n  name: "Shadow"\n};\n\nexport const Margin = {\n  render: () => (\n    <div className={styles.boxWrapper}>\n      <div className={styles.boxMarginWrapper}>\n        <Box\n          backgroundColor={Box.backgroundColors.PRIMARY_BACKGROUND_COLOR}\n          border={Box.borders.DEFAULT}\n          margin={Box.margins.XS}\n        >\n          <div className={styles.boxPaddingInner}>Box.margins.XS</div>\n        </Box>\n      </div>\n      <div className={styles.boxMarginWrapper}>\n        <Box\n          backgroundColor={Box.backgroundColors.PRIMARY_BACKGROUND_COLOR}\n          border={Box.borders.DEFAULT}\n          margin={Box.margins.SMALL}\n        >\n          <div className={styles.boxPaddingInner}>Box.margins.SMALL</div>\n        </Box>\n      </div>\n      <div className={styles.boxMarginWrapper}>\n        <Box\n          backgroundColor={Box.backgroundColors.PRIMARY_BACKGROUND_COLOR}\n          border={Box.borders.DEFAULT}\n          margin={Box.margins.MEDIUM}\n        >\n          <div className={styles.boxPaddingInner}>Box.margins.MEDIUM</div>\n        </Box>\n      </div>\n      <div className={styles.boxMarginWrapper}>\n        <Box\n          backgroundColor={Box.backgroundColors.PRIMARY_BACKGROUND_COLOR}\n          border={Box.borders.DEFAULT}\n          margin={Box.margins.LARGE}\n        >\n          <div className={styles.boxPaddingInner}>Box.margins.LARGE</div>\n        </Box>\n      </div>\n      <div className={styles.boxMarginWrapper}>\n        <Box\n          backgroundColor={Box.backgroundColors.PRIMARY_BACKGROUND_COLOR}\n          border={Box.borders.DEFAULT}\n          margin={Box.margins.XL}\n        >\n          <div className={styles.boxPaddingInner}>Box.margins.XL</div>\n        </Box>\n      </div>\n      <div className={styles.boxMarginWrapper}>\n        <Box\n          backgroundColor={Box.backgroundColors.PRIMARY_BACKGROUND_COLOR}\n          border={Box.borders.DEFAULT}\n          margin={Box.margins.XXL}\n        >\n          <div className={styles.boxPaddingInner}>Box.margins.XXL</div>\n        </Box>\n      </div>\n      <div className={styles.boxMarginWrapper}>\n        <Box border={Box.borders.DEFAULT} margin={Box.margins.XXXL}>\n          <div className={styles.boxPaddingInner}>Box.margins.XXXL</div>\n        </Box>\n      </div>\n    </div>\n  ),\n\n  name: "Margin"\n};\n\nexport const Padding = {\n  render: () => (\n    <div className={styles.boxWrapper}>\n      <div className={styles.boxPaddingWrapper}>\n        <Box border={Box.borders.DEFAULT} padding={Box.paddings.XS}>\n          <div className={styles.boxPaddingInner}>Box.paddings.XS</div>\n        </Box>\n      </div>\n      <div className={styles.boxPaddingWrapper}>\n        <Box border={Box.borders.DEFAULT} padding={Box.paddings.SMALL}>\n          <div className={styles.boxPaddingInner}>Box.paddings.SMALL</div>\n        </Box>\n      </div>\n      <div className={styles.boxPaddingWrapper}>\n        <Box border={Box.borders.DEFAULT} padding={Box.paddings.MEDIUM}>\n          <div className={styles.boxPaddingInner}>Box.paddings.MEDIUM</div>\n        </Box>\n      </div>\n      <div className={styles.boxPaddingWrapper}>\n        <Box border={Box.borders.DEFAULT} padding={Box.paddings.LARGE}>\n          <div className={styles.boxPaddingInner}>Box.paddings.LARGE</div>\n        </Box>\n      </div>\n      <div className={styles.boxPaddingWrapper}>\n        <Box border={Box.borders.DEFAULT} padding={Box.paddings.XL}>\n          <div className={styles.boxPaddingInner}>Box.paddings.XL</div>\n        </Box>\n      </div>\n      <div className={styles.boxPaddingWrapper}>\n        <Box border={Box.borders.DEFAULT} padding={Box.paddings.XXL}>\n          <div className={styles.boxPaddingInner}>Box.paddings.XXL</div>\n        </Box>\n      </div>\n      <div className={styles.boxPaddingWrapper}>\n        <Box border={Box.borders.DEFAULT} padding={Box.paddings.XXXL}>\n          <div className={styles.boxPaddingInner}>Box.paddings.XXXL</div>\n        </Box>\n      </div>\n    </div>\n  ),\n\n  name: "Padding"\n};\n\nexport const Disabled = {\n  render: () => (\n    <div className={styles.boxWrapper}>\n      <Box backgroundColor={Box.backgroundColors.ALL_GREY_BACKGROUND_COLOR} border={Box.borders.DEFAULT} disabled>\n        Box.disabled.DISABLED\n      </Box>\n    </div>\n  ),\n\n  name: "Disabled"\n};\n',locationsMap:{overview:{startLoc:{col:24,line:51},endLoc:{col:1,line:55},startBody:{col:24,line:51},endBody:{col:1,line:55}},"background-colors":{startLoc:{col:32,line:57},endLoc:{col:1,line:80},startBody:{col:32,line:57},endBody:{col:1,line:80}},"text-colors":{startLoc:{col:26,line:82},endLoc:{col:1,line:97},startBody:{col:26,line:82},endBody:{col:1,line:97}},border:{startLoc:{col:22,line:99},endLoc:{col:1,line:107},startBody:{col:22,line:99},endBody:{col:1,line:107}},"border-color":{startLoc:{col:27,line:109},endLoc:{col:1,line:122},startBody:{col:27,line:109},endBody:{col:1,line:122}},"round-corners":{startLoc:{col:28,line:124},endLoc:{col:1,line:140},startBody:{col:28,line:124},endBody:{col:1,line:140}},shadow:{startLoc:{col:22,line:142},endLoc:{col:1,line:153},startBody:{col:22,line:142},endBody:{col:1,line:153}},margin:{startLoc:{col:22,line:155},endLoc:{col:1,line:221},startBody:{col:22,line:155},endBody:{col:1,line:221}},padding:{startLoc:{col:23,line:223},endLoc:{col:1,line:265},startBody:{col:23,line:223},endBody:{col:1,line:265}},disabled:{startLoc:{col:24,line:267},endLoc:{col:1,line:277},startBody:{col:24,line:267},endBody:{col:1,line:277}}}}},title:"Layout/Box",component:Box.A,argTypes:metaSettings.argTypes,decorators:metaSettings.decorators};var boxTemplate=function boxTemplate(args){return(0,jsx_runtime.jsx)("div",{className:_stories_Box_stories_module.boxWrapper,children:(0,jsx_runtime.jsx)(Box.A,_objectSpread(_objectSpread({border:Box.A.borders.DEFAULT,rounded:Box.A.roundeds.MEDIUM},args),{},{children:"Box composite component"}))})};boxTemplate.displayName="boxTemplate";var Overview={render:boxTemplate.bind({}),name:"Overview"},BackgroundColors={render:function render(){return(0,jsx_runtime.jsxs)("div",{className:_stories_Box_stories_module.boxWrapper,children:[(0,jsx_runtime.jsx)(Box.A,{backgroundColor:Box.A.backgroundColors.PRIMARY_BACKGROUND_COLOR,children:"Box.backgroundColors.PRIMARY_BACKGROUND_COLOR"}),(0,jsx_runtime.jsx)(Box.A,{backgroundColor:Box.A.backgroundColors.SECONDARY_BACKGROUND_COLOR,children:"Box.backgroundColors.SECONDARY_BACKGROUND_COLOR"}),(0,jsx_runtime.jsx)(Box.A,{backgroundColor:Box.A.backgroundColors.GREY_BACKGROUND_COLOR,children:"Box.backgroundColors.GREY_BACKGROUND_COLOR"}),(0,jsx_runtime.jsx)(Box.A,{backgroundColor:Box.A.backgroundColors.ALL_GREY_BACKGROUND_COLOR,children:"Box.backgroundColors.ALL_GREY_BACKGROUND_COLOR"}),(0,jsx_runtime.jsx)(Box.A,{textColor:Box.A.textColors.TEXT_COLOR_ON_INVERTED,backgroundColor:Box.A.backgroundColors.INVERTED_COLOR_BACKGROUND,children:"Box.backgroundColors.INVERTED_COLOR_BACKGROUND"})]})},name:"Background colors"},TextColors={render:function render(){return(0,jsx_runtime.jsxs)("div",{className:_stories_Box_stories_module.boxWrapper,children:[(0,jsx_runtime.jsx)(Box.A,{textColor:Box.A.textColors.PRIMARY_TEXT_COLOR,children:"Box.textColors.PRIMARY_TEXT_COLOR"}),(0,jsx_runtime.jsx)(Box.A,{backgroundColor:Box.A.backgroundColors.INVERTED_COLOR_BACKGROUND,textColor:Box.A.textColors.TEXT_COLOR_ON_INVERTED,children:"Box.textColors.TEXT_COLOR_ON_INVERTED"}),(0,jsx_runtime.jsx)(Box.A,{textColor:Box.A.textColors.SECONDARY_TEXT_COLOR,children:"Box.textColors.SECONDARY_TEXT_COLOR"})]})},name:"Text Colors"},Border={render:function render(){return(0,jsx_runtime.jsx)("div",{className:_stories_Box_stories_module.boxWrapper,children:(0,jsx_runtime.jsx)(Box.A,{border:Box.A.borders.DEFAULT,children:"Box.borders.DEFAULT"})})},name:"Border"},BorderColor={render:function render(){return(0,jsx_runtime.jsxs)("div",{className:_stories_Box_stories_module.boxWrapper,children:[(0,jsx_runtime.jsx)(Box.A,{border:Box.A.borders.DEFAULT,borderColor:Box.A.borderColors.UI_BORDER_COLOR,children:"Box.borderColors.UI_BORDER_COLOR"}),(0,jsx_runtime.jsx)(Box.A,{border:Box.A.borders.DEFAULT,borderColor:Box.A.borderColors.LAYOUT_BORDER_COLOR,children:"Box.borderColors.LAYOUT_BORDER_COLOR"})]})},name:"Border Color"},RoundCorners={render:function render(){return(0,jsx_runtime.jsxs)("div",{className:_stories_Box_stories_module.boxWrapper,children:[(0,jsx_runtime.jsx)(Box.A,{border:Box.A.borders.DEFAULT,rounded:Box.A.roundeds.SMALL,children:"Box.roundeds.SMALL"}),(0,jsx_runtime.jsx)(Box.A,{border:Box.A.borders.DEFAULT,rounded:Box.A.roundeds.MEDIUM,children:"Box.roundeds.MEDIUM"}),(0,jsx_runtime.jsx)(Box.A,{border:Box.A.borders.DEFAULT,rounded:Box.A.roundeds.BIG,children:"Box.roundeds.BIG"})]})},name:"Round Corners"},Shadow={render:function render(){return(0,jsx_runtime.jsxs)("div",{className:_stories_Box_stories_module.boxWrapper,children:[(0,jsx_runtime.jsx)(Box.A,{shadow:Box.A.shadows.XS,children:"Box.shadows.XS"}),(0,jsx_runtime.jsx)(Box.A,{shadow:Box.A.shadows.SMALL,children:"Box.shadows.SMALL"}),(0,jsx_runtime.jsx)(Box.A,{shadow:Box.A.shadows.MEDIUM,children:"Box.shadows.MEDIUM"}),(0,jsx_runtime.jsx)(Box.A,{shadow:Box.A.shadows.LARGE,children:"Box.shadows.LARGE"})]})},name:"Shadow"},Margin={render:function render(){return(0,jsx_runtime.jsxs)("div",{className:_stories_Box_stories_module.boxWrapper,children:[(0,jsx_runtime.jsx)("div",{className:_stories_Box_stories_module.boxMarginWrapper,children:(0,jsx_runtime.jsx)(Box.A,{backgroundColor:Box.A.backgroundColors.PRIMARY_BACKGROUND_COLOR,border:Box.A.borders.DEFAULT,margin:Box.A.margins.XS,children:(0,jsx_runtime.jsx)("div",{className:_stories_Box_stories_module.boxPaddingInner,children:"Box.margins.XS"})})}),(0,jsx_runtime.jsx)("div",{className:_stories_Box_stories_module.boxMarginWrapper,children:(0,jsx_runtime.jsx)(Box.A,{backgroundColor:Box.A.backgroundColors.PRIMARY_BACKGROUND_COLOR,border:Box.A.borders.DEFAULT,margin:Box.A.margins.SMALL,children:(0,jsx_runtime.jsx)("div",{className:_stories_Box_stories_module.boxPaddingInner,children:"Box.margins.SMALL"})})}),(0,jsx_runtime.jsx)("div",{className:_stories_Box_stories_module.boxMarginWrapper,children:(0,jsx_runtime.jsx)(Box.A,{backgroundColor:Box.A.backgroundColors.PRIMARY_BACKGROUND_COLOR,border:Box.A.borders.DEFAULT,margin:Box.A.margins.MEDIUM,children:(0,jsx_runtime.jsx)("div",{className:_stories_Box_stories_module.boxPaddingInner,children:"Box.margins.MEDIUM"})})}),(0,jsx_runtime.jsx)("div",{className:_stories_Box_stories_module.boxMarginWrapper,children:(0,jsx_runtime.jsx)(Box.A,{backgroundColor:Box.A.backgroundColors.PRIMARY_BACKGROUND_COLOR,border:Box.A.borders.DEFAULT,margin:Box.A.margins.LARGE,children:(0,jsx_runtime.jsx)("div",{className:_stories_Box_stories_module.boxPaddingInner,children:"Box.margins.LARGE"})})}),(0,jsx_runtime.jsx)("div",{className:_stories_Box_stories_module.boxMarginWrapper,children:(0,jsx_runtime.jsx)(Box.A,{backgroundColor:Box.A.backgroundColors.PRIMARY_BACKGROUND_COLOR,border:Box.A.borders.DEFAULT,margin:Box.A.margins.XL,children:(0,jsx_runtime.jsx)("div",{className:_stories_Box_stories_module.boxPaddingInner,children:"Box.margins.XL"})})}),(0,jsx_runtime.jsx)("div",{className:_stories_Box_stories_module.boxMarginWrapper,children:(0,jsx_runtime.jsx)(Box.A,{backgroundColor:Box.A.backgroundColors.PRIMARY_BACKGROUND_COLOR,border:Box.A.borders.DEFAULT,margin:Box.A.margins.XXL,children:(0,jsx_runtime.jsx)("div",{className:_stories_Box_stories_module.boxPaddingInner,children:"Box.margins.XXL"})})}),(0,jsx_runtime.jsx)("div",{className:_stories_Box_stories_module.boxMarginWrapper,children:(0,jsx_runtime.jsx)(Box.A,{border:Box.A.borders.DEFAULT,margin:Box.A.margins.XXXL,children:(0,jsx_runtime.jsx)("div",{className:_stories_Box_stories_module.boxPaddingInner,children:"Box.margins.XXXL"})})})]})},name:"Margin"},Padding={render:function render(){return(0,jsx_runtime.jsxs)("div",{className:_stories_Box_stories_module.boxWrapper,children:[(0,jsx_runtime.jsx)("div",{className:_stories_Box_stories_module.boxPaddingWrapper,children:(0,jsx_runtime.jsx)(Box.A,{border:Box.A.borders.DEFAULT,padding:Box.A.paddings.XS,children:(0,jsx_runtime.jsx)("div",{className:_stories_Box_stories_module.boxPaddingInner,children:"Box.paddings.XS"})})}),(0,jsx_runtime.jsx)("div",{className:_stories_Box_stories_module.boxPaddingWrapper,children:(0,jsx_runtime.jsx)(Box.A,{border:Box.A.borders.DEFAULT,padding:Box.A.paddings.SMALL,children:(0,jsx_runtime.jsx)("div",{className:_stories_Box_stories_module.boxPaddingInner,children:"Box.paddings.SMALL"})})}),(0,jsx_runtime.jsx)("div",{className:_stories_Box_stories_module.boxPaddingWrapper,children:(0,jsx_runtime.jsx)(Box.A,{border:Box.A.borders.DEFAULT,padding:Box.A.paddings.MEDIUM,children:(0,jsx_runtime.jsx)("div",{className:_stories_Box_stories_module.boxPaddingInner,children:"Box.paddings.MEDIUM"})})}),(0,jsx_runtime.jsx)("div",{className:_stories_Box_stories_module.boxPaddingWrapper,children:(0,jsx_runtime.jsx)(Box.A,{border:Box.A.borders.DEFAULT,padding:Box.A.paddings.LARGE,children:(0,jsx_runtime.jsx)("div",{className:_stories_Box_stories_module.boxPaddingInner,children:"Box.paddings.LARGE"})})}),(0,jsx_runtime.jsx)("div",{className:_stories_Box_stories_module.boxPaddingWrapper,children:(0,jsx_runtime.jsx)(Box.A,{border:Box.A.borders.DEFAULT,padding:Box.A.paddings.XL,children:(0,jsx_runtime.jsx)("div",{className:_stories_Box_stories_module.boxPaddingInner,children:"Box.paddings.XL"})})}),(0,jsx_runtime.jsx)("div",{className:_stories_Box_stories_module.boxPaddingWrapper,children:(0,jsx_runtime.jsx)(Box.A,{border:Box.A.borders.DEFAULT,padding:Box.A.paddings.XXL,children:(0,jsx_runtime.jsx)("div",{className:_stories_Box_stories_module.boxPaddingInner,children:"Box.paddings.XXL"})})}),(0,jsx_runtime.jsx)("div",{className:_stories_Box_stories_module.boxPaddingWrapper,children:(0,jsx_runtime.jsx)(Box.A,{border:Box.A.borders.DEFAULT,padding:Box.A.paddings.XXXL,children:(0,jsx_runtime.jsx)("div",{className:_stories_Box_stories_module.boxPaddingInner,children:"Box.paddings.XXXL"})})})]})},name:"Padding"},Disabled={render:function render(){return(0,jsx_runtime.jsx)("div",{className:_stories_Box_stories_module.boxWrapper,children:(0,jsx_runtime.jsx)(Box.A,{backgroundColor:Box.A.backgroundColors.ALL_GREY_BACKGROUND_COLOR,border:Box.A.borders.DEFAULT,disabled:!0,children:"Box.disabled.DISABLED"})})},name:"Disabled"};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: boxTemplate.bind({}),\n  name: "Overview"\n}',...Overview.parameters?.docs?.source}}},BackgroundColors.parameters={...BackgroundColors.parameters,docs:{...BackgroundColors.parameters?.docs,source:{originalSource:'{\n  render: () => <div className={styles.boxWrapper}>\n      <Box backgroundColor={Box.backgroundColors.PRIMARY_BACKGROUND_COLOR}>\n        Box.backgroundColors.PRIMARY_BACKGROUND_COLOR\n      </Box>\n      <Box backgroundColor={Box.backgroundColors.SECONDARY_BACKGROUND_COLOR}>\n        Box.backgroundColors.SECONDARY_BACKGROUND_COLOR\n      </Box>\n      <Box backgroundColor={Box.backgroundColors.GREY_BACKGROUND_COLOR}>Box.backgroundColors.GREY_BACKGROUND_COLOR</Box>\n      <Box backgroundColor={Box.backgroundColors.ALL_GREY_BACKGROUND_COLOR}>\n        Box.backgroundColors.ALL_GREY_BACKGROUND_COLOR\n      </Box>\n      <Box textColor={Box.textColors.TEXT_COLOR_ON_INVERTED} backgroundColor={Box.backgroundColors.INVERTED_COLOR_BACKGROUND}>\n        Box.backgroundColors.INVERTED_COLOR_BACKGROUND\n      </Box>\n    </div>,\n  name: "Background colors"\n}',...BackgroundColors.parameters?.docs?.source}}},TextColors.parameters={...TextColors.parameters,docs:{...TextColors.parameters?.docs,source:{originalSource:'{\n  render: () => <div className={styles.boxWrapper}>\n      <Box textColor={Box.textColors.PRIMARY_TEXT_COLOR}>Box.textColors.PRIMARY_TEXT_COLOR</Box>\n      <Box backgroundColor={Box.backgroundColors.INVERTED_COLOR_BACKGROUND} textColor={Box.textColors.TEXT_COLOR_ON_INVERTED}>\n        Box.textColors.TEXT_COLOR_ON_INVERTED\n      </Box>\n      <Box textColor={Box.textColors.SECONDARY_TEXT_COLOR}>Box.textColors.SECONDARY_TEXT_COLOR</Box>\n    </div>,\n  name: "Text Colors"\n}',...TextColors.parameters?.docs?.source}}},Border.parameters={...Border.parameters,docs:{...Border.parameters?.docs,source:{originalSource:'{\n  render: () => <div className={styles.boxWrapper}>\n      <Box border={Box.borders.DEFAULT}>Box.borders.DEFAULT</Box>\n    </div>,\n  name: "Border"\n}',...Border.parameters?.docs?.source}}},BorderColor.parameters={...BorderColor.parameters,docs:{...BorderColor.parameters?.docs,source:{originalSource:'{\n  render: () => <div className={styles.boxWrapper}>\n      <Box border={Box.borders.DEFAULT} borderColor={Box.borderColors.UI_BORDER_COLOR}>\n        Box.borderColors.UI_BORDER_COLOR\n      </Box>\n      <Box border={Box.borders.DEFAULT} borderColor={Box.borderColors.LAYOUT_BORDER_COLOR}>\n        Box.borderColors.LAYOUT_BORDER_COLOR\n      </Box>\n    </div>,\n  name: "Border Color"\n}',...BorderColor.parameters?.docs?.source}}},RoundCorners.parameters={...RoundCorners.parameters,docs:{...RoundCorners.parameters?.docs,source:{originalSource:'{\n  render: () => <div className={styles.boxWrapper}>\n      <Box border={Box.borders.DEFAULT} rounded={Box.roundeds.SMALL}>\n        Box.roundeds.SMALL\n      </Box>\n      <Box border={Box.borders.DEFAULT} rounded={Box.roundeds.MEDIUM}>\n        Box.roundeds.MEDIUM\n      </Box>\n      <Box border={Box.borders.DEFAULT} rounded={Box.roundeds.BIG}>\n        Box.roundeds.BIG\n      </Box>\n    </div>,\n  name: "Round Corners"\n}',...RoundCorners.parameters?.docs?.source}}},Shadow.parameters={...Shadow.parameters,docs:{...Shadow.parameters?.docs,source:{originalSource:'{\n  render: () => <div className={styles.boxWrapper}>\n      <Box shadow={Box.shadows.XS}>Box.shadows.XS</Box>\n      <Box shadow={Box.shadows.SMALL}>Box.shadows.SMALL</Box>\n      <Box shadow={Box.shadows.MEDIUM}>Box.shadows.MEDIUM</Box>\n      <Box shadow={Box.shadows.LARGE}>Box.shadows.LARGE</Box>\n    </div>,\n  name: "Shadow"\n}',...Shadow.parameters?.docs?.source}}},Margin.parameters={...Margin.parameters,docs:{...Margin.parameters?.docs,source:{originalSource:'{\n  render: () => <div className={styles.boxWrapper}>\n      <div className={styles.boxMarginWrapper}>\n        <Box backgroundColor={Box.backgroundColors.PRIMARY_BACKGROUND_COLOR} border={Box.borders.DEFAULT} margin={Box.margins.XS}>\n          <div className={styles.boxPaddingInner}>Box.margins.XS</div>\n        </Box>\n      </div>\n      <div className={styles.boxMarginWrapper}>\n        <Box backgroundColor={Box.backgroundColors.PRIMARY_BACKGROUND_COLOR} border={Box.borders.DEFAULT} margin={Box.margins.SMALL}>\n          <div className={styles.boxPaddingInner}>Box.margins.SMALL</div>\n        </Box>\n      </div>\n      <div className={styles.boxMarginWrapper}>\n        <Box backgroundColor={Box.backgroundColors.PRIMARY_BACKGROUND_COLOR} border={Box.borders.DEFAULT} margin={Box.margins.MEDIUM}>\n          <div className={styles.boxPaddingInner}>Box.margins.MEDIUM</div>\n        </Box>\n      </div>\n      <div className={styles.boxMarginWrapper}>\n        <Box backgroundColor={Box.backgroundColors.PRIMARY_BACKGROUND_COLOR} border={Box.borders.DEFAULT} margin={Box.margins.LARGE}>\n          <div className={styles.boxPaddingInner}>Box.margins.LARGE</div>\n        </Box>\n      </div>\n      <div className={styles.boxMarginWrapper}>\n        <Box backgroundColor={Box.backgroundColors.PRIMARY_BACKGROUND_COLOR} border={Box.borders.DEFAULT} margin={Box.margins.XL}>\n          <div className={styles.boxPaddingInner}>Box.margins.XL</div>\n        </Box>\n      </div>\n      <div className={styles.boxMarginWrapper}>\n        <Box backgroundColor={Box.backgroundColors.PRIMARY_BACKGROUND_COLOR} border={Box.borders.DEFAULT} margin={Box.margins.XXL}>\n          <div className={styles.boxPaddingInner}>Box.margins.XXL</div>\n        </Box>\n      </div>\n      <div className={styles.boxMarginWrapper}>\n        <Box border={Box.borders.DEFAULT} margin={Box.margins.XXXL}>\n          <div className={styles.boxPaddingInner}>Box.margins.XXXL</div>\n        </Box>\n      </div>\n    </div>,\n  name: "Margin"\n}',...Margin.parameters?.docs?.source}}},Padding.parameters={...Padding.parameters,docs:{...Padding.parameters?.docs,source:{originalSource:'{\n  render: () => <div className={styles.boxWrapper}>\n      <div className={styles.boxPaddingWrapper}>\n        <Box border={Box.borders.DEFAULT} padding={Box.paddings.XS}>\n          <div className={styles.boxPaddingInner}>Box.paddings.XS</div>\n        </Box>\n      </div>\n      <div className={styles.boxPaddingWrapper}>\n        <Box border={Box.borders.DEFAULT} padding={Box.paddings.SMALL}>\n          <div className={styles.boxPaddingInner}>Box.paddings.SMALL</div>\n        </Box>\n      </div>\n      <div className={styles.boxPaddingWrapper}>\n        <Box border={Box.borders.DEFAULT} padding={Box.paddings.MEDIUM}>\n          <div className={styles.boxPaddingInner}>Box.paddings.MEDIUM</div>\n        </Box>\n      </div>\n      <div className={styles.boxPaddingWrapper}>\n        <Box border={Box.borders.DEFAULT} padding={Box.paddings.LARGE}>\n          <div className={styles.boxPaddingInner}>Box.paddings.LARGE</div>\n        </Box>\n      </div>\n      <div className={styles.boxPaddingWrapper}>\n        <Box border={Box.borders.DEFAULT} padding={Box.paddings.XL}>\n          <div className={styles.boxPaddingInner}>Box.paddings.XL</div>\n        </Box>\n      </div>\n      <div className={styles.boxPaddingWrapper}>\n        <Box border={Box.borders.DEFAULT} padding={Box.paddings.XXL}>\n          <div className={styles.boxPaddingInner}>Box.paddings.XXL</div>\n        </Box>\n      </div>\n      <div className={styles.boxPaddingWrapper}>\n        <Box border={Box.borders.DEFAULT} padding={Box.paddings.XXXL}>\n          <div className={styles.boxPaddingInner}>Box.paddings.XXXL</div>\n        </Box>\n      </div>\n    </div>,\n  name: "Padding"\n}',...Padding.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  render: () => <div className={styles.boxWrapper}>\n      <Box backgroundColor={Box.backgroundColors.ALL_GREY_BACKGROUND_COLOR} border={Box.borders.DEFAULT} disabled>\n        Box.disabled.DISABLED\n      </Box>\n    </div>,\n  name: "Disabled"\n}',...Disabled.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","BackgroundColors","TextColors","Border","BorderColor","RoundCorners","Shadow","Margin","Padding","Disabled"]},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[16].use[3]!./src/components/Box/__stories__/Box.stories.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.Box-stories-module_boxWrapper{max-width:100%;width:100%}.Box-stories-module_boxWrapper>*{margin-bottom:var(--sb-spacing-medium);padding:var(--sb-spacing-large);font-family:monospace}.Box-stories-module_boxWrapperExample{max-width:100%;width:100%}.Box-stories-module_boxWrapperExample>*{margin-bottom:inherit;padding:inherit;font-family:inherit}.Box-stories-module_boxMarginWrapper{overflow:hidden;margin:0;min-height:inherit;padding:0;background-color:var(--sb-disabled-background-color);border-bottom:1px solid var(--sb-inverted-color-background);color:var(--sb-text-color-fixed-dark)}.Box-stories-module_boxPaddingWrapper{overflow:hidden;padding:0;color:var(--sb-text-color-fixed-dark)}.Box-stories-module_boxPaddingWrapper>*{position:relative;padding:0;background:#fff}.Box-stories-module_boxPaddingWrapper>*::before{background-color:#f4c3cb;opacity:.5;position:absolute;top:0;bottom:0;left:0;right:0;height:100%;width:100%;z-index:0;content:""}.Box-stories-module_boxPaddingInner{background:#fff;position:relative}',"",{version:3,sources:["webpack://./src/components/Box/__stories__/Box.stories.module.scss"],names:[],mappings:"AAAA,+BACE,cAAA,CACA,UAAA,CAEA,iCACE,sCAAA,CACA,+BAAA,CACA,qBAAA,CAIJ,sCACE,cAAA,CACA,UAAA,CAEA,wCACE,qBAAA,CACA,eAAA,CACA,mBAAA,CAIJ,qCACE,eAAA,CACA,QAAA,CACA,kBAAA,CACA,SAAA,CACA,oDAAA,CACA,2DAAA,CACA,qCAAA,CAGF,sCACE,eAAA,CACA,SAAA,CACA,qCAAA,CAEA,wCACE,iBAAA,CACA,SAAA,CACA,eAAA,CAEA,gDACE,wBAAA,CACA,UAAA,CACA,iBAAA,CACA,KAAA,CACA,QAAA,CACA,MAAA,CACA,OAAA,CACA,WAAA,CACA,UAAA,CACA,SAAA,CACA,UAAA,CAKN,oCACE,eAAA,CACA,iBAAA",sourcesContent:['.boxWrapper {\n  max-width: 100%;\n  width: 100%;\n\n  > * {\n    margin-bottom: var(--sb-spacing-medium);\n    padding: var(--sb-spacing-large);\n    font-family: monospace;\n  }\n}\n\n.boxWrapperExample {\n  max-width: 100%;\n  width: 100%;\n\n  > * {\n    margin-bottom: inherit;\n    padding: inherit;\n    font-family: inherit;\n  }\n}\n\n.boxMarginWrapper {\n  overflow: hidden;\n  margin: 0;\n  min-height: inherit;\n  padding: 0;\n  background-color: var(--sb-disabled-background-color);\n  border-bottom: 1px solid var(--sb-inverted-color-background);\n  color: var(--sb-text-color-fixed-dark);\n}\n\n.boxPaddingWrapper {\n  overflow: hidden;\n  padding: 0;\n  color: var(--sb-text-color-fixed-dark);\n\n  > * {\n    position: relative;\n    padding: 0;\n    background: white;\n\n    &::before {\n      background-color: #f4c3cb;\n      opacity: 0.5;\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      height: 100%;\n      width: 100%;\n      z-index: 0;\n      content: "";\n    }\n  }\n}\n\n.boxPaddingInner {\n  background: white;\n  position: relative;\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={boxWrapper:"Box-stories-module_boxWrapper",boxWrapperExample:"Box-stories-module_boxWrapperExample",boxMarginWrapper:"Box-stories-module_boxMarginWrapper",boxPaddingWrapper:"Box-stories-module_boxPaddingWrapper",boxPaddingInner:"Box-stories-module_boxPaddingInner"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);