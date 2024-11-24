"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[4255],{"./src/components/Toast/__stories__/Toast.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Animation:()=>Animation,DarkMessage:()=>DarkMessage,DefaultWithButton:()=>DefaultWithButton,ErrorMessage:()=>ErrorMessage,FeedbackLoop:()=>FeedbackLoop,Overview:()=>Overview,SuccessMessage:()=>SuccessMessage,ToastWithLink:()=>ToastWithLink,ToastWithLoading:()=>ToastWithLoading,WarningMessage:()=>WarningMessage,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),vibe_storybook_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../storybook-blocks/dist/src/functions/createComponentTemplate.js"),_Toast__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Toast/Toast.tsx"),_storybook__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/storybook/functions/createStoryMetaSettingsDecorator.ts"),_Button_Button__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/Button/Button.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./src/components/Toast/__stories__/Toast.stories.scss"),__webpack_require__("../../node_modules/react/jsx-runtime.js"));function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var metaSettings=(0,_storybook__WEBPACK_IMPORTED_MODULE_3__.B)({component:_Toast__WEBPACK_IMPORTED_MODULE_4__.A,enumPropNamesArray:["type"],iconPropNamesArray:["icon"]});const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:'import React from "react";\nimport { useCallback, useMemo, useState } from "react";\nimport { createComponentTemplate } from "vibe-storybook-components";\nimport Toast from "../Toast";\nimport { createStoryMetaSettingsDecorator } from "../../../storybook";\nimport Button from "../../Button/Button";\nimport "./Toast.stories.scss";\n\nconst metaSettings = createStoryMetaSettingsDecorator({\n  component: Toast,\n  enumPropNamesArray: ["type"],\n  iconPropNamesArray: ["icon"]\n});\n\nexport default {\n  title: "Feedback/Toast",\n  component: Toast,\n  argTypes: metaSettings.argTypes,\n  decorators: metaSettings.decorators\n};\n\nconst toastTemplate = createComponentTemplate(Toast);\n\nexport const Overview = {\n  render: toastTemplate.bind({}),\n  name: "Overview",\n\n  args: {\n    children: "General message toast",\n    open: true,\n    className: "monday-storybook-toast_wrapper",\n\n    actions: [\n      {\n        type: Toast.actionTypes.BUTTON,\n        content: "Button"\n      }\n    ]\n  },\n  parameters: { chromatic: { pauseAnimationAtEnd: false } }\n};\n\nexport const DefaultWithButton = {\n  render: () => {\n    const actions = useMemo(\n      () => [\n        {\n          type: Toast.actionTypes.BUTTON,\n          content: "Button"\n        }\n      ],\n      []\n    );\n\n    return (\n      <Toast open autoHideDuration={5000} actions={actions} className="monday-storybook-toast_wrapper">\n        General message toast\n      </Toast>\n    );\n  },\n\n  name: "Default with button",\n  parameters: { chromatic: { pauseAnimationAtEnd: false } }\n};\n\nexport const ToastWithLink = {\n  render: () => {\n    const actions = useMemo(\n      () => [\n        {\n          type: Toast.actionTypes.LINK,\n          text: "Link to action",\n          href: "https://monday.com"\n        }\n      ],\n      []\n    );\n\n    return (\n      <Toast open actions={actions} autoHideDuration={5000} className="monday-storybook-toast_wrapper">\n        General message toast\n      </Toast>\n    );\n  },\n\n  name: "Toast with link"\n};\n\nexport const ToastWithLoading = {\n  render: () => {\n    return (\n      <Toast open loading className="monday-storybook-toast_wrapper">\n        General message toast\n      </Toast>\n    );\n  },\n\n  name: "Toast with loading",\n  parameters: { chromatic: { pauseAnimationAtEnd: true } }\n};\n\nexport const SuccessMessage = {\n  render: () => {\n    const actions = useMemo(\n      () => [\n        {\n          type: Toast.actionTypes.BUTTON,\n          content: "Undo 5"\n        }\n      ],\n      []\n    );\n\n    return (\n      <Toast\n        open\n        type={Toast.types.POSITIVE}\n        actions={actions}\n        autoHideDuration={5000}\n        className="monday-storybook-toast_wrapper"\n      >\n        Positive message toast\n      </Toast>\n    );\n  },\n\n  name: "Success message"\n};\n\nexport const ErrorMessage = {\n  render: () => {\n    const actions = useMemo(\n      () => [\n        {\n          type: Toast.actionTypes.BUTTON,\n          content: "Button"\n        }\n      ],\n      []\n    );\n\n    return (\n      <Toast\n        open\n        actions={actions}\n        type={Toast.types.NEGATIVE}\n        autoHideDuration={5000}\n        className="monday-storybook-toast_wrapper"\n      >\n        Negative message toast\n      </Toast>\n    );\n  },\n\n  name: "Error message"\n};\n\nexport const WarningMessage = {\n  render: () => {\n    const actions = useMemo(\n      () => [\n        {\n          type: Toast.actionTypes.BUTTON,\n          content: "Button"\n        }\n      ],\n      []\n    );\n\n    return (\n      <Toast\n        open\n        actions={actions}\n        type={Toast.types.WARNING}\n        autoHideDuration={5000}\n        className="monday-storybook-toast_wrapper"\n      >\n        Warning message toast\n      </Toast>\n    );\n  },\n\n  name: "Warning message",\n  parameters: { chromatic: { pauseAnimationAtEnd: false } }\n};\n\nexport const DarkMessage = {\n  render: () => {\n    const actions = useMemo(\n      () => [\n        {\n          type: Toast.actionTypes.BUTTON,\n          content: "Button"\n        }\n      ],\n      []\n    );\n\n    return (\n      <Toast\n        open\n        actions={actions}\n        type={Toast.types.DARK}\n        autoHideDuration={5000}\n        className="monday-storybook-toast_wrapper"\n      >\n        Dark message toast\n      </Toast>\n    );\n  },\n\n  name: "Dark message",\n  parameters: { chromatic: { pauseAnimationAtEnd: false } }\n};\n\nexport const FeedbackLoop = {\n  render: () => {\n    const actions = useMemo(\n      () => [\n        {\n          type: Toast.actionTypes.BUTTON,\n          content: "Undo"\n        }\n      ],\n      []\n    );\n\n    return (\n      <Toast open type={Toast.types.POSITIVE} actions={actions} className="monday-storybook-toast_wrapper">\n        We successfully deleted 1 item\n      </Toast>\n    );\n  },\n  parameters: { chromatic: { pauseAnimationAtEnd: false } }\n};\n\nexport const Animation = {\n  render: () => {\n    const [successToastOpen, setSuccessToastOpen] = useState(false);\n    const [failureToastOpen, setFailureToastOpen] = useState(false);\n    const [isDeleting, setIsDeleting] = useState(false);\n\n    const onSuccessClick = useCallback(() => {\n      setSuccessToastOpen(true);\n      setIsDeleting(true);\n\n      setTimeout(() => {\n        setIsDeleting(false);\n      }, 1000);\n    }, []);\n\n    const onFailureClick = useCallback(() => {\n      setFailureToastOpen(true);\n      setIsDeleting(true);\n\n      setTimeout(() => {\n        setIsDeleting(false);\n      }, 1000);\n    }, []);\n\n    const actions = useMemo(\n      () => [\n        {\n          type: Toast.actionTypes.BUTTON,\n          content: "Undo"\n        }\n      ],\n      []\n    );\n\n    return (\n      <>\n        <Button onClick={onSuccessClick} kind={Button.kinds.SECONDARY}>\n          Success action\n        </Button>\n        <Button onClick={onFailureClick} kind={Button.kinds.SECONDARY}>\n          Failure action\n        </Button>\n        <Toast\n          open={successToastOpen}\n          type={isDeleting ? Toast.types.NORMAL : Toast.types.POSITIVE}\n          actions={isDeleting ? [] : actions}\n          onClose={() => setSuccessToastOpen(false)}\n          autoHideDuration={2000}\n          loading={isDeleting}\n        >\n          {isDeleting ? "Deleting 1 selected item..." : "We successfully deleted 1 item"}\n        </Toast>\n        <Toast\n          open={failureToastOpen}\n          type={isDeleting ? Toast.types.NORMAL : Toast.types.NEGATIVE}\n          onClose={() => setFailureToastOpen(false)}\n          autoHideDuration={2000}\n          loading={isDeleting}\n        >\n          {isDeleting ? "Deleting 1 selected item..." : "Something went wrong"}\n        </Toast>\n      </>\n    );\n  }\n};\n',locationsMap:{overview:{startLoc:{col:24,line:24},endLoc:{col:1,line:41},startBody:{col:24,line:24},endBody:{col:1,line:41}},"default-with-button":{startLoc:{col:33,line:43},endLoc:{col:1,line:64},startBody:{col:33,line:43},endBody:{col:1,line:64}},"toast-with-link":{startLoc:{col:29,line:66},endLoc:{col:1,line:87},startBody:{col:29,line:66},endBody:{col:1,line:87}},"toast-with-loading":{startLoc:{col:32,line:89},endLoc:{col:1,line:100},startBody:{col:32,line:89},endBody:{col:1,line:100}},"success-message":{startLoc:{col:30,line:102},endLoc:{col:1,line:128},startBody:{col:30,line:102},endBody:{col:1,line:128}},"error-message":{startLoc:{col:28,line:130},endLoc:{col:1,line:156},startBody:{col:28,line:130},endBody:{col:1,line:156}},"warning-message":{startLoc:{col:30,line:158},endLoc:{col:1,line:185},startBody:{col:30,line:158},endBody:{col:1,line:185}},"dark-message":{startLoc:{col:27,line:187},endLoc:{col:1,line:214},startBody:{col:27,line:187},endBody:{col:1,line:214}},"feedback-loop":{startLoc:{col:28,line:216},endLoc:{col:1,line:235},startBody:{col:28,line:216},endBody:{col:1,line:235}},animation:{startLoc:{col:25,line:237},endLoc:{col:1,line:301},startBody:{col:25,line:237},endBody:{col:1,line:301}}}}},title:"Feedback/Toast",component:_Toast__WEBPACK_IMPORTED_MODULE_4__.A,argTypes:metaSettings.argTypes,decorators:metaSettings.decorators};var Overview={render:(0,vibe_storybook_components__WEBPACK_IMPORTED_MODULE_5__.M)(_Toast__WEBPACK_IMPORTED_MODULE_4__.A).bind({}),name:"Overview",args:{children:"General message toast",open:!0,className:"monday-storybook-toast_wrapper",actions:[{type:_Toast__WEBPACK_IMPORTED_MODULE_4__.A.actionTypes.BUTTON,content:"Button"}]},parameters:{chromatic:{pauseAnimationAtEnd:!1}}},DefaultWithButton={render:function render(){var actions=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return[{type:_Toast__WEBPACK_IMPORTED_MODULE_4__.A.actionTypes.BUTTON,content:"Button"}]}),[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Toast__WEBPACK_IMPORTED_MODULE_4__.A,{open:!0,autoHideDuration:5e3,actions,className:"monday-storybook-toast_wrapper",children:"General message toast"})},name:"Default with button",parameters:{chromatic:{pauseAnimationAtEnd:!1}}},ToastWithLink={render:function render(){var actions=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return[{type:_Toast__WEBPACK_IMPORTED_MODULE_4__.A.actionTypes.LINK,text:"Link to action",href:"https://monday.com"}]}),[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Toast__WEBPACK_IMPORTED_MODULE_4__.A,{open:!0,actions,autoHideDuration:5e3,className:"monday-storybook-toast_wrapper",children:"General message toast"})},name:"Toast with link"},ToastWithLoading={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Toast__WEBPACK_IMPORTED_MODULE_4__.A,{open:!0,loading:!0,className:"monday-storybook-toast_wrapper",children:"General message toast"})},name:"Toast with loading",parameters:{chromatic:{pauseAnimationAtEnd:!0}}},SuccessMessage={render:function render(){var actions=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return[{type:_Toast__WEBPACK_IMPORTED_MODULE_4__.A.actionTypes.BUTTON,content:"Undo 5"}]}),[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Toast__WEBPACK_IMPORTED_MODULE_4__.A,{open:!0,type:_Toast__WEBPACK_IMPORTED_MODULE_4__.A.types.POSITIVE,actions,autoHideDuration:5e3,className:"monday-storybook-toast_wrapper",children:"Positive message toast"})},name:"Success message"},ErrorMessage={render:function render(){var actions=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return[{type:_Toast__WEBPACK_IMPORTED_MODULE_4__.A.actionTypes.BUTTON,content:"Button"}]}),[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Toast__WEBPACK_IMPORTED_MODULE_4__.A,{open:!0,actions,type:_Toast__WEBPACK_IMPORTED_MODULE_4__.A.types.NEGATIVE,autoHideDuration:5e3,className:"monday-storybook-toast_wrapper",children:"Negative message toast"})},name:"Error message"},WarningMessage={render:function render(){var actions=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return[{type:_Toast__WEBPACK_IMPORTED_MODULE_4__.A.actionTypes.BUTTON,content:"Button"}]}),[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Toast__WEBPACK_IMPORTED_MODULE_4__.A,{open:!0,actions,type:_Toast__WEBPACK_IMPORTED_MODULE_4__.A.types.WARNING,autoHideDuration:5e3,className:"monday-storybook-toast_wrapper",children:"Warning message toast"})},name:"Warning message",parameters:{chromatic:{pauseAnimationAtEnd:!1}}},DarkMessage={render:function render(){var actions=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return[{type:_Toast__WEBPACK_IMPORTED_MODULE_4__.A.actionTypes.BUTTON,content:"Button"}]}),[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Toast__WEBPACK_IMPORTED_MODULE_4__.A,{open:!0,actions,type:_Toast__WEBPACK_IMPORTED_MODULE_4__.A.types.DARK,autoHideDuration:5e3,className:"monday-storybook-toast_wrapper",children:"Dark message toast"})},name:"Dark message",parameters:{chromatic:{pauseAnimationAtEnd:!1}}},FeedbackLoop={render:function render(){var actions=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return[{type:_Toast__WEBPACK_IMPORTED_MODULE_4__.A.actionTypes.BUTTON,content:"Undo"}]}),[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Toast__WEBPACK_IMPORTED_MODULE_4__.A,{open:!0,type:_Toast__WEBPACK_IMPORTED_MODULE_4__.A.types.POSITIVE,actions,className:"monday-storybook-toast_wrapper",children:"We successfully deleted 1 item"})},parameters:{chromatic:{pauseAnimationAtEnd:!1}}},Animation={render:function render(){var _useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),successToastOpen=_useState2[0],setSuccessToastOpen=_useState2[1],_useState4=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),failureToastOpen=_useState4[0],setFailureToastOpen=_useState4[1],_useState6=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),isDeleting=_useState6[0],setIsDeleting=_useState6[1],onSuccessClick=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){setSuccessToastOpen(!0),setIsDeleting(!0),setTimeout((function(){setIsDeleting(!1)}),1e3)}),[]),onFailureClick=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){setFailureToastOpen(!0),setIsDeleting(!0),setTimeout((function(){setIsDeleting(!1)}),1e3)}),[]),actions=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return[{type:_Toast__WEBPACK_IMPORTED_MODULE_4__.A.actionTypes.BUTTON,content:"Undo"}]}),[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Button_Button__WEBPACK_IMPORTED_MODULE_6__.A,{onClick:onSuccessClick,kind:_Button_Button__WEBPACK_IMPORTED_MODULE_6__.A.kinds.SECONDARY,children:"Success action"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Button_Button__WEBPACK_IMPORTED_MODULE_6__.A,{onClick:onFailureClick,kind:_Button_Button__WEBPACK_IMPORTED_MODULE_6__.A.kinds.SECONDARY,children:"Failure action"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Toast__WEBPACK_IMPORTED_MODULE_4__.A,{open:successToastOpen,type:isDeleting?_Toast__WEBPACK_IMPORTED_MODULE_4__.A.types.NORMAL:_Toast__WEBPACK_IMPORTED_MODULE_4__.A.types.POSITIVE,actions:isDeleting?[]:actions,onClose:function onClose(){return setSuccessToastOpen(!1)},autoHideDuration:2e3,loading:isDeleting,children:isDeleting?"Deleting 1 selected item...":"We successfully deleted 1 item"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Toast__WEBPACK_IMPORTED_MODULE_4__.A,{open:failureToastOpen,type:isDeleting?_Toast__WEBPACK_IMPORTED_MODULE_4__.A.types.NORMAL:_Toast__WEBPACK_IMPORTED_MODULE_4__.A.types.NEGATIVE,onClose:function onClose(){return setFailureToastOpen(!1)},autoHideDuration:2e3,loading:isDeleting,children:isDeleting?"Deleting 1 selected item...":"Something went wrong"})]})}};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: toastTemplate.bind({}),\n  name: "Overview",\n  args: {\n    children: "General message toast",\n    open: true,\n    className: "monday-storybook-toast_wrapper",\n    actions: [{\n      type: Toast.actionTypes.BUTTON,\n      content: "Button"\n    }]\n  },\n  parameters: {\n    chromatic: {\n      pauseAnimationAtEnd: false\n    }\n  }\n}',...Overview.parameters?.docs?.source}}},DefaultWithButton.parameters={...DefaultWithButton.parameters,docs:{...DefaultWithButton.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const actions = useMemo(() => [{\n      type: Toast.actionTypes.BUTTON,\n      content: "Button"\n    }], []);\n    return <Toast open autoHideDuration={5000} actions={actions} className="monday-storybook-toast_wrapper">\n        General message toast\n      </Toast>;\n  },\n  name: "Default with button",\n  parameters: {\n    chromatic: {\n      pauseAnimationAtEnd: false\n    }\n  }\n}',...DefaultWithButton.parameters?.docs?.source}}},ToastWithLink.parameters={...ToastWithLink.parameters,docs:{...ToastWithLink.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const actions = useMemo(() => [{\n      type: Toast.actionTypes.LINK,\n      text: "Link to action",\n      href: "https://monday.com"\n    }], []);\n    return <Toast open actions={actions} autoHideDuration={5000} className="monday-storybook-toast_wrapper">\n        General message toast\n      </Toast>;\n  },\n  name: "Toast with link"\n}',...ToastWithLink.parameters?.docs?.source}}},ToastWithLoading.parameters={...ToastWithLoading.parameters,docs:{...ToastWithLoading.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    return <Toast open loading className="monday-storybook-toast_wrapper">\n        General message toast\n      </Toast>;\n  },\n  name: "Toast with loading",\n  parameters: {\n    chromatic: {\n      pauseAnimationAtEnd: true\n    }\n  }\n}',...ToastWithLoading.parameters?.docs?.source}}},SuccessMessage.parameters={...SuccessMessage.parameters,docs:{...SuccessMessage.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const actions = useMemo(() => [{\n      type: Toast.actionTypes.BUTTON,\n      content: "Undo 5"\n    }], []);\n    return <Toast open type={Toast.types.POSITIVE} actions={actions} autoHideDuration={5000} className="monday-storybook-toast_wrapper">\n        Positive message toast\n      </Toast>;\n  },\n  name: "Success message"\n}',...SuccessMessage.parameters?.docs?.source}}},ErrorMessage.parameters={...ErrorMessage.parameters,docs:{...ErrorMessage.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const actions = useMemo(() => [{\n      type: Toast.actionTypes.BUTTON,\n      content: "Button"\n    }], []);\n    return <Toast open actions={actions} type={Toast.types.NEGATIVE} autoHideDuration={5000} className="monday-storybook-toast_wrapper">\n        Negative message toast\n      </Toast>;\n  },\n  name: "Error message"\n}',...ErrorMessage.parameters?.docs?.source}}},WarningMessage.parameters={...WarningMessage.parameters,docs:{...WarningMessage.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const actions = useMemo(() => [{\n      type: Toast.actionTypes.BUTTON,\n      content: "Button"\n    }], []);\n    return <Toast open actions={actions} type={Toast.types.WARNING} autoHideDuration={5000} className="monday-storybook-toast_wrapper">\n        Warning message toast\n      </Toast>;\n  },\n  name: "Warning message",\n  parameters: {\n    chromatic: {\n      pauseAnimationAtEnd: false\n    }\n  }\n}',...WarningMessage.parameters?.docs?.source}}},DarkMessage.parameters={...DarkMessage.parameters,docs:{...DarkMessage.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const actions = useMemo(() => [{\n      type: Toast.actionTypes.BUTTON,\n      content: "Button"\n    }], []);\n    return <Toast open actions={actions} type={Toast.types.DARK} autoHideDuration={5000} className="monday-storybook-toast_wrapper">\n        Dark message toast\n      </Toast>;\n  },\n  name: "Dark message",\n  parameters: {\n    chromatic: {\n      pauseAnimationAtEnd: false\n    }\n  }\n}',...DarkMessage.parameters?.docs?.source}}},FeedbackLoop.parameters={...FeedbackLoop.parameters,docs:{...FeedbackLoop.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const actions = useMemo(() => [{\n      type: Toast.actionTypes.BUTTON,\n      content: "Undo"\n    }], []);\n    return <Toast open type={Toast.types.POSITIVE} actions={actions} className="monday-storybook-toast_wrapper">\n        We successfully deleted 1 item\n      </Toast>;\n  },\n  parameters: {\n    chromatic: {\n      pauseAnimationAtEnd: false\n    }\n  }\n}',...FeedbackLoop.parameters?.docs?.source}}},Animation.parameters={...Animation.parameters,docs:{...Animation.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const [successToastOpen, setSuccessToastOpen] = useState(false);\n    const [failureToastOpen, setFailureToastOpen] = useState(false);\n    const [isDeleting, setIsDeleting] = useState(false);\n    const onSuccessClick = useCallback(() => {\n      setSuccessToastOpen(true);\n      setIsDeleting(true);\n      setTimeout(() => {\n        setIsDeleting(false);\n      }, 1000);\n    }, []);\n    const onFailureClick = useCallback(() => {\n      setFailureToastOpen(true);\n      setIsDeleting(true);\n      setTimeout(() => {\n        setIsDeleting(false);\n      }, 1000);\n    }, []);\n    const actions = useMemo(() => [{\n      type: Toast.actionTypes.BUTTON,\n      content: "Undo"\n    }], []);\n    return <>\n        <Button onClick={onSuccessClick} kind={Button.kinds.SECONDARY}>\n          Success action\n        </Button>\n        <Button onClick={onFailureClick} kind={Button.kinds.SECONDARY}>\n          Failure action\n        </Button>\n        <Toast open={successToastOpen} type={isDeleting ? Toast.types.NORMAL : Toast.types.POSITIVE} actions={isDeleting ? [] : actions} onClose={() => setSuccessToastOpen(false)} autoHideDuration={2000} loading={isDeleting}>\n          {isDeleting ? "Deleting 1 selected item..." : "We successfully deleted 1 item"}\n        </Toast>\n        <Toast open={failureToastOpen} type={isDeleting ? Toast.types.NORMAL : Toast.types.NEGATIVE} onClose={() => setFailureToastOpen(false)} autoHideDuration={2000} loading={isDeleting}>\n          {isDeleting ? "Deleting 1 selected item..." : "Something went wrong"}\n        </Toast>\n      </>;\n  }\n}',...Animation.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","DefaultWithButton","ToastWithLink","ToastWithLoading","SuccessMessage","ErrorMessage","WarningMessage","DarkMessage","FeedbackLoop","Animation"]},"../storybook-blocks/dist/src/functions/createComponentTemplate.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>r});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function r(r){return function(e){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r,Object.assign({},e))}}}}]);