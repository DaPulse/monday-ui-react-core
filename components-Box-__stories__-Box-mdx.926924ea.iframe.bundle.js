"use strict";(globalThis.webpackChunk_vibe_core=globalThis.webpackChunk_vibe_core||[]).push([[9409,3251],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/Box/__stories__/Box.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BackgroundColors:()=>BackgroundColors,Border:()=>Border,BorderColor:()=>BorderColor,Disabled:()=>Disabled,Margin:()=>Margin,Overview:()=>Overview,Padding:()=>Padding,RoundCorners:()=>RoundCorners,Shadow:()=>Shadow,TextColors:()=>TextColors,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var _Box__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Box/Box.tsx"),_storybook__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/storybook/functions/createStoryMetaSettingsDecorator.ts"),_Divider__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Divider/Divider.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var metaSettings=(0,_storybook__WEBPACK_IMPORTED_MODULE_2__.B)({component:_Box__WEBPACK_IMPORTED_MODULE_3__.A});metaSettings.decorators=[].concat(function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(metaSettings.decorators||[]),[function(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{width:"100%"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{})})}]);const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:'import React from "react";\nimport Box, { BoxProps } from "../Box";\nimport { createStoryMetaSettingsDecorator } from "../../../storybook";\nimport { Divider } from "../../Divider";\nimport { StoryFn } from "@storybook/react";\n\nconst metaSettings = createStoryMetaSettingsDecorator({\n  component: Box\n});\n\n//TODO remove when remove the flex class from the stories\nmetaSettings.decorators = [\n  ...(metaSettings.decorators || []),\n  (Story: StoryFn) => (\n    <div style={{ width: "100%" }}>\n      <Story />\n    </div>\n  )\n];\nexport default {\n  title: "Layout/Box",\n  component: Box,\n  argTypes: metaSettings.argTypes,\n  decorators: metaSettings.decorators\n};\n\nconst boxTemplate = (args: BoxProps) => (\n  <Box border rounded="medium" padding="large" marginBottom="medium" {...args} style={{ width: "100%" }}>\n    Box composite component\n  </Box>\n);\n\nexport const Overview = {\n  render: boxTemplate.bind({}),\n  name: "Overview",\n  parameters: {\n    docs: {\n      liveEdit: {\n        isEnabled: false\n      }\n    }\n  }\n};\n\nexport const BackgroundColors = {\n  render: () => (\n    <>\n      <Box backgroundColor="primaryBackgroundColor" padding="large" marginBottom="medium">\n        primaryBackgroundColor\n      </Box>\n      <Box backgroundColor="secondaryBackgroundColor" padding="large" marginBottom="medium">\n        secondaryBackgroundColor\n      </Box>\n      <Box backgroundColor="greyBackgroundColor" padding="large" marginBottom="medium">\n        greyBackgroundColor\n      </Box>\n      <Box backgroundColor="allgreyBackgroundColor" padding="large" marginBottom="medium">\n        allgreyBackgroundColor\n      </Box>\n      <Box\n        textColor="textColorOnInverted"\n        backgroundColor="invertedColorBackground"\n        padding="large"\n        marginBottom="medium"\n      >\n        invertedColorBackground\n      </Box>\n    </>\n  )\n};\n\nexport const TextColors = {\n  render: () => (\n    <>\n      <Box textColor="primaryTextColor" padding="large" marginBottom="medium">\n        textPrimaryTextColor\n      </Box>\n      <Box\n        backgroundColor="invertedColorBackground"\n        textColor="textColorOnInverted"\n        padding="large"\n        marginBottom="medium"\n      >\n        textColorOnInverted\n      </Box>\n      <Box textColor="secondaryTextColor" padding="large" marginBottom="medium">\n        secondaryTextColor\n      </Box>\n    </>\n  )\n};\n\nexport const Border = {\n  render: () => (\n    <>\n      <Box border padding="large" marginBottom="medium">\n        default\n      </Box>\n    </>\n  )\n};\n\nexport const BorderColor = {\n  render: () => (\n    <>\n      <Box border borderColor="uiBorderColor" padding="large" marginBottom="medium">\n        uiBorderColor\n      </Box>\n      <Box border borderColor="layoutBorderColor" padding="large" marginBottom="medium">\n        layoutBorderColor\n      </Box>\n    </>\n  )\n};\n\nexport const RoundCorners = {\n  render: () => (\n    <>\n      <Box border rounded="small" padding="large" marginBottom="medium">\n        small\n      </Box>\n      <Box border rounded="medium" padding="large" marginBottom="medium">\n        medium\n      </Box>\n      <Box border rounded="big" padding="large" marginBottom="medium">\n        big\n      </Box>\n    </>\n  )\n};\n\nexport const Shadow = {\n  render: () => (\n    <>\n      <Box shadow="xs" padding="large" marginBottom="medium">\n        xs\n      </Box>\n      <Box shadow="small" padding="large" marginBottom="medium">\n        small\n      </Box>\n      <Box shadow="medium" padding="large" marginBottom="medium">\n        medium\n      </Box>\n      <Box shadow="large" padding="large" marginBottom="medium">\n        large\n      </Box>\n    </>\n  )\n};\n\nexport const Margin = {\n  render: () => (\n    <>\n      <Box backgroundColor="allgreyBackgroundColor">\n        <Box backgroundColor="primaryBackgroundColor" border margin="xs">\n          xs\n        </Box>\n      </Box>\n      <Divider withoutMargin />\n      <Box backgroundColor="allgreyBackgroundColor">\n        <Box backgroundColor="primaryBackgroundColor" border margin="small">\n          small\n        </Box>\n      </Box>\n      <Divider withoutMargin />\n      <Box backgroundColor="allgreyBackgroundColor">\n        <Box backgroundColor="primaryBackgroundColor" border margin="medium">\n          medium\n        </Box>\n      </Box>\n      <Divider withoutMargin />\n      <Box backgroundColor="allgreyBackgroundColor">\n        <Box backgroundColor="primaryBackgroundColor" border margin="large">\n          large\n        </Box>\n      </Box>\n      <Divider withoutMargin />\n      <Box backgroundColor="allgreyBackgroundColor">\n        <Box backgroundColor="primaryBackgroundColor" border margin="xl">\n          xl\n        </Box>\n      </Box>\n      <Divider withoutMargin />\n      <Box backgroundColor="allgreyBackgroundColor">\n        <Box backgroundColor="primaryBackgroundColor" border margin="xxl">\n          xxl\n        </Box>\n      </Box>\n      <Divider withoutMargin />\n      <Box backgroundColor="allgreyBackgroundColor">\n        <Box backgroundColor="primaryBackgroundColor" border margin="xxxl">\n          xxxl\n        </Box>\n      </Box>\n      <Divider withoutMargin />\n    </>\n  )\n};\n\nexport const Padding = {\n  render: () => (\n    <>\n      <Box style={{ backgroundColor: "var(--color-sky-selected)" }} marginBottom="medium" border padding="xs">\n        <Box backgroundColor="primaryBackgroundColor">xs</Box>\n      </Box>\n      <Box style={{ backgroundColor: "var(--color-sky-selected)" }} marginBottom="medium" border padding="small">\n        <Box backgroundColor="primaryBackgroundColor">small</Box>\n      </Box>\n      <Box style={{ backgroundColor: "var(--color-sky-selected)" }} marginBottom="medium" border padding="medium">\n        <Box backgroundColor="primaryBackgroundColor">medium</Box>\n      </Box>\n      <Box style={{ backgroundColor: "var(--color-sky-selected)" }} marginBottom="medium" border padding="large">\n        <Box backgroundColor="primaryBackgroundColor">large</Box>\n      </Box>\n      <Divider withoutMargin />\n      <Box style={{ backgroundColor: "var(--color-sky-selected)" }} marginBottom="medium" border padding="xl">\n        <Box backgroundColor="primaryBackgroundColor">xl</Box>\n      </Box>\n      <Box style={{ backgroundColor: "var(--color-sky-selected)" }} marginBottom="medium" border padding="xxl">\n        <Box backgroundColor="primaryBackgroundColor">xxl</Box>\n      </Box>\n      <Box style={{ backgroundColor: "var(--color-sky-selected)" }} marginBottom="medium" border padding="xxxl">\n        <Box backgroundColor="primaryBackgroundColor">xxxl</Box>\n      </Box>\n    </>\n  )\n};\n\nexport const Disabled = {\n  render: () => (\n    <Box backgroundColor="allgreyBackgroundColor" border disabled padding="large" marginBottom="medium">\n      disabled\n    </Box>\n  )\n};\n',locationsMap:{overview:{startLoc:{col:24,line:33},endLoc:{col:1,line:43},startBody:{col:24,line:33},endBody:{col:1,line:43}},"background-colors":{startLoc:{col:32,line:45},endLoc:{col:1,line:70},startBody:{col:32,line:45},endBody:{col:1,line:70}},"text-colors":{startLoc:{col:26,line:72},endLoc:{col:1,line:91},startBody:{col:26,line:72},endBody:{col:1,line:91}},border:{startLoc:{col:22,line:93},endLoc:{col:1,line:101},startBody:{col:22,line:93},endBody:{col:1,line:101}},"border-color":{startLoc:{col:27,line:103},endLoc:{col:1,line:114},startBody:{col:27,line:103},endBody:{col:1,line:114}},"round-corners":{startLoc:{col:28,line:116},endLoc:{col:1,line:130},startBody:{col:28,line:116},endBody:{col:1,line:130}},shadow:{startLoc:{col:22,line:132},endLoc:{col:1,line:149},startBody:{col:22,line:132},endBody:{col:1,line:149}},margin:{startLoc:{col:22,line:151},endLoc:{col:1,line:198},startBody:{col:22,line:151},endBody:{col:1,line:198}},padding:{startLoc:{col:23,line:200},endLoc:{col:1,line:227},startBody:{col:23,line:200},endBody:{col:1,line:227}},disabled:{startLoc:{col:24,line:229},endLoc:{col:1,line:235},startBody:{col:24,line:229},endBody:{col:1,line:235}}}}},title:"Layout/Box",component:_Box__WEBPACK_IMPORTED_MODULE_3__.A,argTypes:metaSettings.argTypes,decorators:metaSettings.decorators};var boxTemplate=function boxTemplate(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_3__.A,_objectSpread(_objectSpread({border:!0,rounded:"medium",padding:"large",marginBottom:"medium"},args),{},{style:{width:"100%"},children:"Box composite component"}))};boxTemplate.displayName="boxTemplate";var Overview={render:boxTemplate.bind({}),name:"Overview",parameters:{docs:{liveEdit:{isEnabled:!1}}}},BackgroundColors={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_3__.A,{backgroundColor:"primaryBackgroundColor",padding:"large",marginBottom:"medium",children:"primaryBackgroundColor"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_3__.A,{backgroundColor:"secondaryBackgroundColor",padding:"large",marginBottom:"medium",children:"secondaryBackgroundColor"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_3__.A,{backgroundColor:"greyBackgroundColor",padding:"large",marginBottom:"medium",children:"greyBackgroundColor"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_3__.A,{backgroundColor:"allgreyBackgroundColor",padding:"large",marginBottom:"medium",children:"allgreyBackgroundColor"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_3__.A,{textColor:"textColorOnInverted",backgroundColor:"invertedColorBackground",padding:"large",marginBottom:"medium",children:"invertedColorBackground"})]})}},TextColors={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_3__.A,{textColor:"primaryTextColor",padding:"large",marginBottom:"medium",children:"textPrimaryTextColor"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_3__.A,{backgroundColor:"invertedColorBackground",textColor:"textColorOnInverted",padding:"large",marginBottom:"medium",children:"textColorOnInverted"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_3__.A,{textColor:"secondaryTextColor",padding:"large",marginBottom:"medium",children:"secondaryTextColor"})]})}},Border={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_3__.A,{border:!0,padding:"large",marginBottom:"medium",children:"default"})})}},BorderColor={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_3__.A,{border:!0,borderColor:"uiBorderColor",padding:"large",marginBottom:"medium",children:"uiBorderColor"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_3__.A,{border:!0,borderColor:"layoutBorderColor",padding:"large",marginBottom:"medium",children:"layoutBorderColor"})]})}},RoundCorners={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_3__.A,{border:!0,rounded:"small",padding:"large",marginBottom:"medium",children:"small"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_3__.A,{border:!0,rounded:"medium",padding:"large",marginBottom:"medium",children:"medium"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_3__.A,{border:!0,rounded:"big",padding:"large",marginBottom:"medium",children:"big"})]})}},Shadow={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_3__.A,{shadow:"xs",padding:"large",marginBottom:"medium",children:"xs"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_3__.A,{shadow:"small",padding:"large",marginBottom:"medium",children:"small"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_3__.A,{shadow:"medium",padding:"large",marginBottom:"medium",children:"medium"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_3__.A,{shadow:"large",padding:"large",marginBottom:"medium",children:"large"})]})}},Margin={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_3__.A,{backgroundColor:"allgreyBackgroundColor",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_3__.A,{backgroundColor:"primaryBackgroundColor",border:!0,margin:"xs",children:"xs"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Divider__WEBPACK_IMPORTED_MODULE_4__.A,{withoutMargin:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_3__.A,{backgroundColor:"allgreyBackgroundColor",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_3__.A,{backgroundColor:"primaryBackgroundColor",border:!0,margin:"small",children:"small"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Divider__WEBPACK_IMPORTED_MODULE_4__.A,{withoutMargin:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_3__.A,{backgroundColor:"allgreyBackgroundColor",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_3__.A,{backgroundColor:"primaryBackgroundColor",border:!0,margin:"medium",children:"medium"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Divider__WEBPACK_IMPORTED_MODULE_4__.A,{withoutMargin:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_3__.A,{backgroundColor:"allgreyBackgroundColor",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_3__.A,{backgroundColor:"primaryBackgroundColor",border:!0,margin:"large",children:"large"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Divider__WEBPACK_IMPORTED_MODULE_4__.A,{withoutMargin:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_3__.A,{backgroundColor:"allgreyBackgroundColor",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_3__.A,{backgroundColor:"primaryBackgroundColor",border:!0,margin:"xl",children:"xl"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Divider__WEBPACK_IMPORTED_MODULE_4__.A,{withoutMargin:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_3__.A,{backgroundColor:"allgreyBackgroundColor",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_3__.A,{backgroundColor:"primaryBackgroundColor",border:!0,margin:"xxl",children:"xxl"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Divider__WEBPACK_IMPORTED_MODULE_4__.A,{withoutMargin:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_3__.A,{backgroundColor:"allgreyBackgroundColor",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_3__.A,{backgroundColor:"primaryBackgroundColor",border:!0,margin:"xxxl",children:"xxxl"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Divider__WEBPACK_IMPORTED_MODULE_4__.A,{withoutMargin:!0})]})}},Padding={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_3__.A,{style:{backgroundColor:"var(--color-sky-selected)"},marginBottom:"medium",border:!0,padding:"xs",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_3__.A,{backgroundColor:"primaryBackgroundColor",children:"xs"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_3__.A,{style:{backgroundColor:"var(--color-sky-selected)"},marginBottom:"medium",border:!0,padding:"small",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_3__.A,{backgroundColor:"primaryBackgroundColor",children:"small"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_3__.A,{style:{backgroundColor:"var(--color-sky-selected)"},marginBottom:"medium",border:!0,padding:"medium",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_3__.A,{backgroundColor:"primaryBackgroundColor",children:"medium"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_3__.A,{style:{backgroundColor:"var(--color-sky-selected)"},marginBottom:"medium",border:!0,padding:"large",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_3__.A,{backgroundColor:"primaryBackgroundColor",children:"large"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Divider__WEBPACK_IMPORTED_MODULE_4__.A,{withoutMargin:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_3__.A,{style:{backgroundColor:"var(--color-sky-selected)"},marginBottom:"medium",border:!0,padding:"xl",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_3__.A,{backgroundColor:"primaryBackgroundColor",children:"xl"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_3__.A,{style:{backgroundColor:"var(--color-sky-selected)"},marginBottom:"medium",border:!0,padding:"xxl",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_3__.A,{backgroundColor:"primaryBackgroundColor",children:"xxl"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_3__.A,{style:{backgroundColor:"var(--color-sky-selected)"},marginBottom:"medium",border:!0,padding:"xxxl",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_3__.A,{backgroundColor:"primaryBackgroundColor",children:"xxxl"})})]})}},Disabled={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_3__.A,{backgroundColor:"allgreyBackgroundColor",border:!0,disabled:!0,padding:"large",marginBottom:"medium",children:"disabled"})}};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: boxTemplate.bind({}),\n  name: "Overview",\n  parameters: {\n    docs: {\n      liveEdit: {\n        isEnabled: false\n      }\n    }\n  }\n}',...Overview.parameters?.docs?.source}}},BackgroundColors.parameters={...BackgroundColors.parameters,docs:{...BackgroundColors.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <Box backgroundColor="primaryBackgroundColor" padding="large" marginBottom="medium">\n        primaryBackgroundColor\n      </Box>\n      <Box backgroundColor="secondaryBackgroundColor" padding="large" marginBottom="medium">\n        secondaryBackgroundColor\n      </Box>\n      <Box backgroundColor="greyBackgroundColor" padding="large" marginBottom="medium">\n        greyBackgroundColor\n      </Box>\n      <Box backgroundColor="allgreyBackgroundColor" padding="large" marginBottom="medium">\n        allgreyBackgroundColor\n      </Box>\n      <Box textColor="textColorOnInverted" backgroundColor="invertedColorBackground" padding="large" marginBottom="medium">\n        invertedColorBackground\n      </Box>\n    </>\n}',...BackgroundColors.parameters?.docs?.source}}},TextColors.parameters={...TextColors.parameters,docs:{...TextColors.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <Box textColor="primaryTextColor" padding="large" marginBottom="medium">\n        textPrimaryTextColor\n      </Box>\n      <Box backgroundColor="invertedColorBackground" textColor="textColorOnInverted" padding="large" marginBottom="medium">\n        textColorOnInverted\n      </Box>\n      <Box textColor="secondaryTextColor" padding="large" marginBottom="medium">\n        secondaryTextColor\n      </Box>\n    </>\n}',...TextColors.parameters?.docs?.source}}},Border.parameters={...Border.parameters,docs:{...Border.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <Box border padding="large" marginBottom="medium">\n        default\n      </Box>\n    </>\n}',...Border.parameters?.docs?.source}}},BorderColor.parameters={...BorderColor.parameters,docs:{...BorderColor.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <Box border borderColor="uiBorderColor" padding="large" marginBottom="medium">\n        uiBorderColor\n      </Box>\n      <Box border borderColor="layoutBorderColor" padding="large" marginBottom="medium">\n        layoutBorderColor\n      </Box>\n    </>\n}',...BorderColor.parameters?.docs?.source}}},RoundCorners.parameters={...RoundCorners.parameters,docs:{...RoundCorners.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <Box border rounded="small" padding="large" marginBottom="medium">\n        small\n      </Box>\n      <Box border rounded="medium" padding="large" marginBottom="medium">\n        medium\n      </Box>\n      <Box border rounded="big" padding="large" marginBottom="medium">\n        big\n      </Box>\n    </>\n}',...RoundCorners.parameters?.docs?.source}}},Shadow.parameters={...Shadow.parameters,docs:{...Shadow.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <Box shadow="xs" padding="large" marginBottom="medium">\n        xs\n      </Box>\n      <Box shadow="small" padding="large" marginBottom="medium">\n        small\n      </Box>\n      <Box shadow="medium" padding="large" marginBottom="medium">\n        medium\n      </Box>\n      <Box shadow="large" padding="large" marginBottom="medium">\n        large\n      </Box>\n    </>\n}',...Shadow.parameters?.docs?.source}}},Margin.parameters={...Margin.parameters,docs:{...Margin.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <Box backgroundColor="allgreyBackgroundColor">\n        <Box backgroundColor="primaryBackgroundColor" border margin="xs">\n          xs\n        </Box>\n      </Box>\n      <Divider withoutMargin />\n      <Box backgroundColor="allgreyBackgroundColor">\n        <Box backgroundColor="primaryBackgroundColor" border margin="small">\n          small\n        </Box>\n      </Box>\n      <Divider withoutMargin />\n      <Box backgroundColor="allgreyBackgroundColor">\n        <Box backgroundColor="primaryBackgroundColor" border margin="medium">\n          medium\n        </Box>\n      </Box>\n      <Divider withoutMargin />\n      <Box backgroundColor="allgreyBackgroundColor">\n        <Box backgroundColor="primaryBackgroundColor" border margin="large">\n          large\n        </Box>\n      </Box>\n      <Divider withoutMargin />\n      <Box backgroundColor="allgreyBackgroundColor">\n        <Box backgroundColor="primaryBackgroundColor" border margin="xl">\n          xl\n        </Box>\n      </Box>\n      <Divider withoutMargin />\n      <Box backgroundColor="allgreyBackgroundColor">\n        <Box backgroundColor="primaryBackgroundColor" border margin="xxl">\n          xxl\n        </Box>\n      </Box>\n      <Divider withoutMargin />\n      <Box backgroundColor="allgreyBackgroundColor">\n        <Box backgroundColor="primaryBackgroundColor" border margin="xxxl">\n          xxxl\n        </Box>\n      </Box>\n      <Divider withoutMargin />\n    </>\n}',...Margin.parameters?.docs?.source}}},Padding.parameters={...Padding.parameters,docs:{...Padding.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <Box style={{\n      backgroundColor: "var(--color-sky-selected)"\n    }} marginBottom="medium" border padding="xs">\n        <Box backgroundColor="primaryBackgroundColor">xs</Box>\n      </Box>\n      <Box style={{\n      backgroundColor: "var(--color-sky-selected)"\n    }} marginBottom="medium" border padding="small">\n        <Box backgroundColor="primaryBackgroundColor">small</Box>\n      </Box>\n      <Box style={{\n      backgroundColor: "var(--color-sky-selected)"\n    }} marginBottom="medium" border padding="medium">\n        <Box backgroundColor="primaryBackgroundColor">medium</Box>\n      </Box>\n      <Box style={{\n      backgroundColor: "var(--color-sky-selected)"\n    }} marginBottom="medium" border padding="large">\n        <Box backgroundColor="primaryBackgroundColor">large</Box>\n      </Box>\n      <Divider withoutMargin />\n      <Box style={{\n      backgroundColor: "var(--color-sky-selected)"\n    }} marginBottom="medium" border padding="xl">\n        <Box backgroundColor="primaryBackgroundColor">xl</Box>\n      </Box>\n      <Box style={{\n      backgroundColor: "var(--color-sky-selected)"\n    }} marginBottom="medium" border padding="xxl">\n        <Box backgroundColor="primaryBackgroundColor">xxl</Box>\n      </Box>\n      <Box style={{\n      backgroundColor: "var(--color-sky-selected)"\n    }} marginBottom="medium" border padding="xxxl">\n        <Box backgroundColor="primaryBackgroundColor">xxxl</Box>\n      </Box>\n    </>\n}',...Padding.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  render: () => <Box backgroundColor="allgreyBackgroundColor" border disabled padding="large" marginBottom="medium">\n      disabled\n    </Box>\n}',...Disabled.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","BackgroundColors","TextColors","Border","BorderColor","RoundCorners","Shadow","Margin","Padding","Disabled"]},"./src/components/Box/__stories__/Box.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Box});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),usage_guidelines=__webpack_require__("../storybook-blocks/dist/src/components/usage-guidelines/usage-guidelines.js"),component_description_map=__webpack_require__("./src/storybook/components/related-components/component-description-map.tsx"),tip=__webpack_require__("../storybook-blocks/dist/src/components/tip/tip.js"),TipBenefits=function TipBenefits(){return(0,jsx_runtime.jsx)(tip.A,{title:"Benefits of the Box component",children:"Easily add Vibe styles without adding css"})};TipBenefits.displayName="TipBenefits";var Box_stories=__webpack_require__("./src/components/Box/__stories__/Box.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",h2:"h2",p:"p",h3:"h3",pre:"pre",code:"code",h4:"h4"},(0,lib.RP)(),props.components),{Canvas,PropsTable,RelatedComponents}=_components;return Canvas||_missingMdxReference("Canvas",!0),PropsTable||_missingMdxReference("PropsTable",!0),RelatedComponents||_missingMdxReference("RelatedComponents",!0),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:Box_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"box",children:"Box"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#usage",children:"Usage"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#variants",children:"Variants"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#dos-and-donts",children:"Do’s and don’ts"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#use-cases-and-examples",children:"Use cases and examples"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#related-components",children:"Related components"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#feedback",children:"Feedback"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Box component is used as a wrapper component."}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Its purpose is to help scaffold compositions while using Vibe's prop keys without writing new CSS. ",(0,jsx_runtime.jsx)("br",{}),"It can be used as a container for\natom based compositions, it can accept all Vibe style related props and have a semantic html tag."]}),"\n",(0,jsx_runtime.jsx)(Canvas,{of:Box_stories.Overview}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"import",children:"Import"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:'import { Box } from "@vibe/core";\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(PropsTable,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(usage_guidelines.A,{guidelines:["Use as a styled container","Use to add spacing, borders, and rounded corners to areas of content","Use as an inner component for spacing or styles"]}),"\n",(0,jsx_runtime.jsx)(TipBenefits,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"utility-props",children:"Utility props"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"backgrounds-colors",children:"BACKGROUNDS COLORS"}),"\n",(0,jsx_runtime.jsx)(Canvas,{of:Box_stories.BackgroundColors}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"text-colors",children:"TEXT COLORS"}),"\n",(0,jsx_runtime.jsx)(Canvas,{of:Box_stories.TextColors}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"border",children:"BORDER"}),"\n",(0,jsx_runtime.jsx)(Canvas,{of:Box_stories.Border}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"border-color",children:"BORDER COLOR"}),"\n",(0,jsx_runtime.jsx)(Canvas,{of:Box_stories.BorderColor}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"rounded-corners",children:"ROUNDED CORNERS"}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"size-props",children:"Size props"}),"\n",(0,jsx_runtime.jsx)(Canvas,{of:Box_stories.RoundCorners}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"shadow",children:"SHADOW"}),"\n",(0,jsx_runtime.jsx)(Canvas,{of:Box_stories.Shadow}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"margin",children:"MARGIN"}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"size-props-1",children:"Size props"}),"\n",(0,jsx_runtime.jsx)(Canvas,{of:Box_stories.Margin}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"property-variations-per-each-size",children:"Property variations per each size:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{children:"margin\nmarginX (x axis: left, right)\nmarginY (y axis: top, bottom)\nmarginTop\nmarginEnd\nmarginBottom\nmarginStart\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"aligning-auto-and-none",children:"Aligning Auto and none"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"each property variation can hold additional values for:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{children:"AUTO\nNONE\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"padding",children:"PADDING"}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"size-props-2",children:"Size props"}),"\n",(0,jsx_runtime.jsx)(Canvas,{of:Box_stories.Padding}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"property-variations-per-each-size-1",children:"Property variations per each size:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{children:"padding\npaddingX (x axis: left, right)\npaddingY (y axis: top, bottom)\npaddingTop\npaddingEnd\npaddingBottom\npaddingStart\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"component-disabled",children:"Component Disabled"}),"\n",(0,jsx_runtime.jsx)(Canvas,{of:Box_stories.Disabled}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"related-components",children:"Related components"}),"\n",(0,jsx_runtime.jsx)(RelatedComponents,{componentsNames:[component_description_map.ul,component_description_map.eT,component_description_map.r8]})]})}const Box=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);