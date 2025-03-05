"use strict";(globalThis.webpackChunk_vibe_core=globalThis.webpackChunk_vibe_core||[]).push([[1527],{"./src/components/Counter/__stories__/Counter.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Colors:()=>Colors,CountTheNumberOfUpdates:()=>CountTheNumberOfUpdates,CounterOnInboxFilters:()=>CounterOnInboxFilters,Limits:()=>Limits,NotificationCounter:()=>NotificationCounter,Outline:()=>Outline,Overview:()=>Overview,Sizes:()=>Sizes,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Counter_stories_Counter_stories});var react=__webpack_require__("../../node_modules/react/index.js"),createComponentTemplate=__webpack_require__("../storybook-blocks/dist/src/functions/createComponentTemplate.js"),Counter=__webpack_require__("./src/components/Counter/Counter.tsx"),createStoryMetaSettingsDecorator=__webpack_require__("./src/storybook/functions/createStoryMetaSettingsDecorator.ts"),Divider=__webpack_require__("./src/components/Divider/Divider.tsx"),Notifications=__webpack_require__("../icons/dist/react/Notifications.js"),AddUpdate=__webpack_require__("../icons/dist/react/AddUpdate.js"),Update=__webpack_require__("../icons/dist/react/Update.js"),Icon=__webpack_require__("./src/components/Icon/Icon.tsx"),Avatar=__webpack_require__("./src/components/Avatar/Avatar.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Counter_stories=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[16].use[3]!./src/components/Counter/__stories__/Counter.stories.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Counter_stories.A,options);Counter_stories.A&&Counter_stories.A.locals&&Counter_stories.A.locals;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var metaSettings=(0,createStoryMetaSettingsDecorator.B)({component:Counter.A}),counterTemplate=(0,createComponentTemplate.M)(Counter.A);const Counter_stories_Counter_stories={parameters:{storySource:{source:'import React from "react";\nimport { useCallback, useEffect, useState } from "react";\nimport { createComponentTemplate } from "vibe-storybook-components";\nimport Counter from "../Counter";\nimport { createStoryMetaSettingsDecorator } from "../../../storybook";\nimport Divider from "../../Divider/Divider";\nimport { AddUpdate, Update, Notifications } from "@vibe/icons";\nimport Icon from "../../Icon/Icon";\nimport Avatar from "../../Avatar/Avatar";\nimport "./Counter.stories.scss";\n\nconst metaSettings = createStoryMetaSettingsDecorator({\n  component: Counter\n});\n\nconst counterTemplate = createComponentTemplate(Counter);\n\nexport default {\n  title: "Components/Counter",\n  component: Counter,\n  argTypes: {\n    ...metaSettings.argTypes,\n    wrapperClassName: {\n      table: {\n        disable: true\n      }\n    },\n    "data-testid": {\n      table: {\n        disable: true\n      }\n    }\n  },\n  decorators: metaSettings.decorators\n};\n\nexport const Overview = {\n  render: counterTemplate.bind({}),\n  name: "Overview",\n\n  args: {\n    count: 5\n  },\n  parameters: {\n    docs: {\n      liveEdit: {\n        isEnabled: false\n      }\n    }\n  }\n};\n\nexport const Sizes = {\n  render: () => (\n    <>\n      <div className="storybook-counter_column">\n        <Counter count={5} size="xs" />\n        XS\n      </div>\n      <div className="storybook-counter_column">\n        <Counter count={5} size="small" />\n        Small\n      </div>\n      <div className="storybook-counter_column">\n        <Counter count={5} />\n        Large\n      </div>\n    </>\n  )\n};\n\nexport const Colors = {\n  render: () => (\n    <>\n      <div className="storybook-counter_column">\n        <Counter count={5} />\n        Primary\n      </div>\n      <div className="storybook-counter_column">\n        <Counter count={5} color="negative" />\n        Negative or notification\n      </div>\n      <div className="storybook-counter_column">\n        <Counter count={5} color="dark" />\n        Dark\n      </div>\n      <div className="storybook-counter_column">\n        <Counter count={5} color="light" />\n        Light\n      </div>\n    </>\n  )\n};\n\nexport const Outline = {\n  render: () => (\n    <>\n      <div className="storybook-counter_column">\n        <Counter count={5} kind="line" />\n        Primary\n      </div>\n      <div className="storybook-counter_column">\n        <Counter count={5} color="negative" kind="line" />\n        Negative or notification\n      </div>\n      <div className="storybook-counter_column">\n        <Counter count={5} color="dark" kind="line" />\n        Dark\n      </div>\n      <div className="storybook-counter_column">\n        <Counter count={5} color="light" kind="line" />\n        Light\n      </div>\n    </>\n  )\n};\n\nexport const Limits = {\n  render: () => (\n    <>\n      <div className="storybook-counter_column">\n        <Counter count={10} maxDigits={1} />\n        One digit limit\n      </div>\n      <div className="storybook-counter_column">\n        <Counter count={100} maxDigits={2} />\n        Two digits limit\n      </div>\n      <div className="storybook-counter_column">\n        <Counter count={1000} />\n        Three digits limit\n      </div>\n    </>\n  )\n};\n\nexport const NotificationCounter = {\n  render: () => {\n    const maxCount = 10;\n    const initialCount = 4;\n    const [count, setCount] = useState(4);\n\n    const changeCountCallback = useCallback(() => {\n      const newCount = count === maxCount ? initialCount : count + 1;\n      setCount(newCount);\n    }, [count, setCount]);\n\n    useEffect(() => {\n      setCount(initialCount);\n    }, [initialCount, setCount]);\n\n    useEffect(() => {\n      const interval = setInterval(changeCountCallback, 1000);\n\n      return () => {\n        clearInterval(interval);\n      };\n    }, [changeCountCallback]);\n\n    return (\n      <div className="storybook-counter_position">\n        <Avatar type="icon" icon={Notifications} backgroundColor="royal" />\n        <Counter count={count} maxDigits={1} color="negative" className="storybook-counter_counter-position-top" />\n      </div>\n    );\n  },\n  parameters: {\n    docs: {\n      liveEdit: {\n        scope: { Notifications }\n      }\n    }\n  }\n};\n\nexport const CounterOnInboxFilters = {\n  render: () => (\n    <>\n      <div className="storybook-counter_wrapper">\n        <span className="a">UX Writing & microcopy Re...</span>\n        <span className="a"> Mobile Data- Iteration Plan...</span>\n        <span className="a">Q Plans.</span>\n      </div>\n      <div className="storybook-counter_wrapper">\n        <Counter count={195} color="dark" />\n        <Counter count={141} color="dark" />\n        <Counter count={99} color="dark" />\n      </div>\n    </>\n  )\n};\n\nexport const CountTheNumberOfUpdates = {\n  render: () => (\n    <div className="storybook-counter_icon-wrapper">\n      <Icon icon={AddUpdate} iconSize="36" />\n      <Divider />\n      <div className="storybook-counter_position">\n        <Icon icon={Update} iconSize="36" />\n        <Counter count={5} size="small" className="storybook-counter_counter-position-bot" />\n      </div>\n      <Divider />\n      <div className="storybook-counter_position">\n        <Icon icon={Update} iconSize="36" />\n        <Counter count={5} color="dark" size="small" className="storybook-counter_counter-position-bot" />\n      </div>\n    </div>\n  ),\n  parameters: {\n    docs: {\n      liveEdit: {\n        scope: { AddUpdate, Update }\n      }\n    }\n  }\n};\n',locationsMap:{overview:{startLoc:{col:24,line:37},endLoc:{col:1,line:51},startBody:{col:24,line:37},endBody:{col:1,line:51}},sizes:{startLoc:{col:21,line:53},endLoc:{col:1,line:70},startBody:{col:21,line:53},endBody:{col:1,line:70}},colors:{startLoc:{col:22,line:72},endLoc:{col:1,line:93},startBody:{col:22,line:72},endBody:{col:1,line:93}},outline:{startLoc:{col:23,line:95},endLoc:{col:1,line:116},startBody:{col:23,line:95},endBody:{col:1,line:116}},limits:{startLoc:{col:22,line:118},endLoc:{col:1,line:135},startBody:{col:22,line:118},endBody:{col:1,line:135}},"notification-counter":{startLoc:{col:35,line:137},endLoc:{col:1,line:174},startBody:{col:35,line:137},endBody:{col:1,line:174}},"counter-on-inbox-filters":{startLoc:{col:37,line:176},endLoc:{col:1,line:191},startBody:{col:37,line:176},endBody:{col:1,line:191}},"count-the-number-of-updates":{startLoc:{col:39,line:193},endLoc:{col:1,line:216},startBody:{col:39,line:193},endBody:{col:1,line:216}}}}},title:"Components/Counter",component:Counter.A,argTypes:_objectSpread(_objectSpread({},metaSettings.argTypes),{},{wrapperClassName:{table:{disable:!0}},"data-testid":{table:{disable:!0}}}),decorators:metaSettings.decorators};var Overview={render:counterTemplate.bind({}),name:"Overview",args:{count:5},parameters:{docs:{liveEdit:{isEnabled:!1}}}},Sizes={render:function render(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("div",{className:"storybook-counter_column",children:[(0,jsx_runtime.jsx)(Counter.A,{count:5,size:"xs"}),"XS"]}),(0,jsx_runtime.jsxs)("div",{className:"storybook-counter_column",children:[(0,jsx_runtime.jsx)(Counter.A,{count:5,size:"small"}),"Small"]}),(0,jsx_runtime.jsxs)("div",{className:"storybook-counter_column",children:[(0,jsx_runtime.jsx)(Counter.A,{count:5}),"Large"]})]})}},Colors={render:function render(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("div",{className:"storybook-counter_column",children:[(0,jsx_runtime.jsx)(Counter.A,{count:5}),"Primary"]}),(0,jsx_runtime.jsxs)("div",{className:"storybook-counter_column",children:[(0,jsx_runtime.jsx)(Counter.A,{count:5,color:"negative"}),"Negative or notification"]}),(0,jsx_runtime.jsxs)("div",{className:"storybook-counter_column",children:[(0,jsx_runtime.jsx)(Counter.A,{count:5,color:"dark"}),"Dark"]}),(0,jsx_runtime.jsxs)("div",{className:"storybook-counter_column",children:[(0,jsx_runtime.jsx)(Counter.A,{count:5,color:"light"}),"Light"]})]})}},Outline={render:function render(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("div",{className:"storybook-counter_column",children:[(0,jsx_runtime.jsx)(Counter.A,{count:5,kind:"line"}),"Primary"]}),(0,jsx_runtime.jsxs)("div",{className:"storybook-counter_column",children:[(0,jsx_runtime.jsx)(Counter.A,{count:5,color:"negative",kind:"line"}),"Negative or notification"]}),(0,jsx_runtime.jsxs)("div",{className:"storybook-counter_column",children:[(0,jsx_runtime.jsx)(Counter.A,{count:5,color:"dark",kind:"line"}),"Dark"]}),(0,jsx_runtime.jsxs)("div",{className:"storybook-counter_column",children:[(0,jsx_runtime.jsx)(Counter.A,{count:5,color:"light",kind:"line"}),"Light"]})]})}},Limits={render:function render(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("div",{className:"storybook-counter_column",children:[(0,jsx_runtime.jsx)(Counter.A,{count:10,maxDigits:1}),"One digit limit"]}),(0,jsx_runtime.jsxs)("div",{className:"storybook-counter_column",children:[(0,jsx_runtime.jsx)(Counter.A,{count:100,maxDigits:2}),"Two digits limit"]}),(0,jsx_runtime.jsxs)("div",{className:"storybook-counter_column",children:[(0,jsx_runtime.jsx)(Counter.A,{count:1e3}),"Three digits limit"]})]})}},NotificationCounter={render:function render(){var _useState2=_slicedToArray((0,react.useState)(4),2),count=_useState2[0],setCount=_useState2[1],changeCountCallback=(0,react.useCallback)((function(){setCount(10===count?4:count+1)}),[count,setCount]);return(0,react.useEffect)((function(){setCount(4)}),[4,setCount]),(0,react.useEffect)((function(){var interval=setInterval(changeCountCallback,1e3);return function(){clearInterval(interval)}}),[changeCountCallback]),(0,jsx_runtime.jsxs)("div",{className:"storybook-counter_position",children:[(0,jsx_runtime.jsx)(Avatar.A,{type:"icon",icon:Notifications.A,backgroundColor:"royal"}),(0,jsx_runtime.jsx)(Counter.A,{count,maxDigits:1,color:"negative",className:"storybook-counter_counter-position-top"})]})},parameters:{docs:{liveEdit:{scope:{Notifications:Notifications.A}}}}},CounterOnInboxFilters={render:function render(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("div",{className:"storybook-counter_wrapper",children:[(0,jsx_runtime.jsx)("span",{className:"a",children:"UX Writing & microcopy Re..."}),(0,jsx_runtime.jsx)("span",{className:"a",children:" Mobile Data- Iteration Plan..."}),(0,jsx_runtime.jsx)("span",{className:"a",children:"Q Plans."})]}),(0,jsx_runtime.jsxs)("div",{className:"storybook-counter_wrapper",children:[(0,jsx_runtime.jsx)(Counter.A,{count:195,color:"dark"}),(0,jsx_runtime.jsx)(Counter.A,{count:141,color:"dark"}),(0,jsx_runtime.jsx)(Counter.A,{count:99,color:"dark"})]})]})}},CountTheNumberOfUpdates={render:function render(){return(0,jsx_runtime.jsxs)("div",{className:"storybook-counter_icon-wrapper",children:[(0,jsx_runtime.jsx)(Icon.A,{icon:AddUpdate.A,iconSize:"36"}),(0,jsx_runtime.jsx)(Divider.A,{}),(0,jsx_runtime.jsxs)("div",{className:"storybook-counter_position",children:[(0,jsx_runtime.jsx)(Icon.A,{icon:Update.A,iconSize:"36"}),(0,jsx_runtime.jsx)(Counter.A,{count:5,size:"small",className:"storybook-counter_counter-position-bot"})]}),(0,jsx_runtime.jsx)(Divider.A,{}),(0,jsx_runtime.jsxs)("div",{className:"storybook-counter_position",children:[(0,jsx_runtime.jsx)(Icon.A,{icon:Update.A,iconSize:"36"}),(0,jsx_runtime.jsx)(Counter.A,{count:5,color:"dark",size:"small",className:"storybook-counter_counter-position-bot"})]})]})},parameters:{docs:{liveEdit:{scope:{AddUpdate:AddUpdate.A,Update:Update.A}}}}};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: counterTemplate.bind({}),\n  name: "Overview",\n  args: {\n    count: 5\n  },\n  parameters: {\n    docs: {\n      liveEdit: {\n        isEnabled: false\n      }\n    }\n  }\n}',...Overview.parameters?.docs?.source}}},Sizes.parameters={...Sizes.parameters,docs:{...Sizes.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <div className="storybook-counter_column">\n        <Counter count={5} size="xs" />\n        XS\n      </div>\n      <div className="storybook-counter_column">\n        <Counter count={5} size="small" />\n        Small\n      </div>\n      <div className="storybook-counter_column">\n        <Counter count={5} />\n        Large\n      </div>\n    </>\n}',...Sizes.parameters?.docs?.source}}},Colors.parameters={...Colors.parameters,docs:{...Colors.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <div className="storybook-counter_column">\n        <Counter count={5} />\n        Primary\n      </div>\n      <div className="storybook-counter_column">\n        <Counter count={5} color="negative" />\n        Negative or notification\n      </div>\n      <div className="storybook-counter_column">\n        <Counter count={5} color="dark" />\n        Dark\n      </div>\n      <div className="storybook-counter_column">\n        <Counter count={5} color="light" />\n        Light\n      </div>\n    </>\n}',...Colors.parameters?.docs?.source}}},Outline.parameters={...Outline.parameters,docs:{...Outline.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <div className="storybook-counter_column">\n        <Counter count={5} kind="line" />\n        Primary\n      </div>\n      <div className="storybook-counter_column">\n        <Counter count={5} color="negative" kind="line" />\n        Negative or notification\n      </div>\n      <div className="storybook-counter_column">\n        <Counter count={5} color="dark" kind="line" />\n        Dark\n      </div>\n      <div className="storybook-counter_column">\n        <Counter count={5} color="light" kind="line" />\n        Light\n      </div>\n    </>\n}',...Outline.parameters?.docs?.source}}},Limits.parameters={...Limits.parameters,docs:{...Limits.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <div className="storybook-counter_column">\n        <Counter count={10} maxDigits={1} />\n        One digit limit\n      </div>\n      <div className="storybook-counter_column">\n        <Counter count={100} maxDigits={2} />\n        Two digits limit\n      </div>\n      <div className="storybook-counter_column">\n        <Counter count={1000} />\n        Three digits limit\n      </div>\n    </>\n}',...Limits.parameters?.docs?.source}}},NotificationCounter.parameters={...NotificationCounter.parameters,docs:{...NotificationCounter.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const maxCount = 10;\n    const initialCount = 4;\n    const [count, setCount] = useState(4);\n    const changeCountCallback = useCallback(() => {\n      const newCount = count === maxCount ? initialCount : count + 1;\n      setCount(newCount);\n    }, [count, setCount]);\n    useEffect(() => {\n      setCount(initialCount);\n    }, [initialCount, setCount]);\n    useEffect(() => {\n      const interval = setInterval(changeCountCallback, 1000);\n      return () => {\n        clearInterval(interval);\n      };\n    }, [changeCountCallback]);\n    return <div className="storybook-counter_position">\n        <Avatar type="icon" icon={Notifications} backgroundColor="royal" />\n        <Counter count={count} maxDigits={1} color="negative" className="storybook-counter_counter-position-top" />\n      </div>;\n  },\n  parameters: {\n    docs: {\n      liveEdit: {\n        scope: {\n          Notifications\n        }\n      }\n    }\n  }\n}',...NotificationCounter.parameters?.docs?.source}}},CounterOnInboxFilters.parameters={...CounterOnInboxFilters.parameters,docs:{...CounterOnInboxFilters.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <div className="storybook-counter_wrapper">\n        <span className="a">UX Writing & microcopy Re...</span>\n        <span className="a"> Mobile Data- Iteration Plan...</span>\n        <span className="a">Q Plans.</span>\n      </div>\n      <div className="storybook-counter_wrapper">\n        <Counter count={195} color="dark" />\n        <Counter count={141} color="dark" />\n        <Counter count={99} color="dark" />\n      </div>\n    </>\n}',...CounterOnInboxFilters.parameters?.docs?.source}}},CountTheNumberOfUpdates.parameters={...CountTheNumberOfUpdates.parameters,docs:{...CountTheNumberOfUpdates.parameters?.docs,source:{originalSource:'{\n  render: () => <div className="storybook-counter_icon-wrapper">\n      <Icon icon={AddUpdate} iconSize="36" />\n      <Divider />\n      <div className="storybook-counter_position">\n        <Icon icon={Update} iconSize="36" />\n        <Counter count={5} size="small" className="storybook-counter_counter-position-bot" />\n      </div>\n      <Divider />\n      <div className="storybook-counter_position">\n        <Icon icon={Update} iconSize="36" />\n        <Counter count={5} color="dark" size="small" className="storybook-counter_counter-position-bot" />\n      </div>\n    </div>,\n  parameters: {\n    docs: {\n      liveEdit: {\n        scope: {\n          AddUpdate,\n          Update\n        }\n      }\n    }\n  }\n}',...CountTheNumberOfUpdates.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","Sizes","Colors","Outline","Limits","NotificationCounter","CounterOnInboxFilters","CountTheNumberOfUpdates"]},"../storybook-blocks/dist/src/functions/createComponentTemplate.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>r});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function r(r){return function(e){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r,Object.assign({},e))}}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[16].use[3]!./src/components/Counter/__stories__/Counter.stories.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".storybook-counter_column{display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;height:90px;gap:30px;width:100px;margin-right:160px}.storybook-counter_wrapper{display:flex;flex-direction:column;justify-content:space-between;margin-right:28px;height:105px;gap:16px}.storybook-counter_icon-wrapper{display:flex;flex-direction:column;align-items:center;gap:12px}.storybook-counter_usage-link-line{display:flex}.storybook-counter_position{position:relative}.storybook-counter_counter-position-top{position:absolute;top:-5px;right:-5px}.storybook-counter_counter-position-bot{position:absolute;bottom:0;right:-3px}","",{version:3,sources:["webpack://./src/components/Counter/__stories__/Counter.stories.scss"],names:[],mappings:"AACE,0BACE,YAAA,CACA,qBAAA,CACA,sBAAA,CACA,0BAAA,CACA,WAAA,CACA,QAAA,CACA,WAAA,CACA,kBAAA,CAGF,2BACE,YAAA,CACA,qBAAA,CACA,6BAAA,CACA,iBAAA,CACA,YAAA,CACA,QAAA,CAGF,gCACE,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,QAAA,CAGF,mCACE,YAAA,CAGF,4BACE,iBAAA,CAGF,wCACE,iBAAA,CACA,QAAA,CACA,UAAA,CAGF,wCACE,iBAAA,CACA,QAAA,CACA,UAAA",sourcesContent:[".storybook-counter {\n  &_column {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: flex-start;\n    height: 90px;\n    gap: 30px;\n    width: 100px;\n    margin-right: 160px;\n  }\n\n  &_wrapper {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    margin-right: 28px;\n    height: 105px;\n    gap: 16px;\n  }\n\n  &_icon-wrapper {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 12px;\n  }\n\n  &_usage-link-line {\n    display: flex;\n  }\n\n  &_position {\n    position: relative;\n  }\n\n  &_counter-position-top {\n    position: absolute;\n    top: -5px;\n    right: -5px;\n  }\n\n  &_counter-position-bot {\n    position: absolute;\n    bottom: 0;\n    right: -3px;\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);