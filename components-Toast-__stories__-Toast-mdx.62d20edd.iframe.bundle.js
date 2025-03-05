"use strict";(globalThis.webpackChunk_vibe_core=globalThis.webpackChunk_vibe_core||[]).push([[773,4255],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/Toast/__stories__/Toast.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Animation:()=>Animation,DarkMessage:()=>DarkMessage,DefaultWithButton:()=>DefaultWithButton,ErrorMessage:()=>ErrorMessage,FeedbackLoop:()=>FeedbackLoop,Overview:()=>Overview,SuccessMessage:()=>SuccessMessage,ToastWithLink:()=>ToastWithLink,ToastWithLoading:()=>ToastWithLoading,WarningMessage:()=>WarningMessage,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),vibe_storybook_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../storybook-blocks/dist/src/functions/createComponentTemplate.js"),_Toast__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Toast/Toast.tsx"),_storybook__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/storybook/functions/createStoryMetaSettingsDecorator.ts"),_Button_Button__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/Button/Button.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./src/components/Toast/__stories__/Toast.stories.scss"),__webpack_require__("../../node_modules/react/jsx-runtime.js"));function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var metaSettings=(0,_storybook__WEBPACK_IMPORTED_MODULE_3__.B)({component:_Toast__WEBPACK_IMPORTED_MODULE_4__.A,iconPropNamesArray:["icon"]});const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:'import React from "react";\nimport { useCallback, useMemo, useState } from "react";\nimport { createComponentTemplate } from "vibe-storybook-components";\nimport Toast from "../Toast";\nimport { createStoryMetaSettingsDecorator } from "../../../storybook";\nimport Button from "../../Button/Button";\nimport "./Toast.stories.scss";\nimport { ToastAction } from "../Toast.types";\n\nconst metaSettings = createStoryMetaSettingsDecorator({\n  component: Toast,\n  iconPropNamesArray: ["icon"]\n});\n\nexport default {\n  title: "Components/Toast",\n  component: Toast,\n  argTypes: metaSettings.argTypes,\n  decorators: metaSettings.decorators\n};\n\nconst toastTemplate = createComponentTemplate(Toast);\n\nexport const Overview = {\n  render: toastTemplate.bind({}),\n  name: "Overview",\n\n  args: {\n    children: "General message toast",\n    open: true,\n    className: "monday-storybook-toast_wrapper",\n\n    actions: [\n      {\n        type: "button",\n        content: "Button"\n      }\n    ]\n  },\n  parameters: {\n    chromatic: { pauseAnimationAtEnd: false },\n    docs: {\n      liveEdit: {\n        isEnabled: false\n      }\n    }\n  }\n};\n\nexport const DefaultWithButton = {\n  render: () => {\n    const actions: ToastAction[] = useMemo(\n      () => [\n        {\n          type: "button",\n          content: "Button"\n        }\n      ],\n      []\n    );\n\n    return (\n      <Toast open autoHideDuration={5000} actions={actions} className="monday-storybook-toast_wrapper">\n        General message toast\n      </Toast>\n    );\n  },\n\n  name: "Default with button",\n  parameters: { chromatic: { pauseAnimationAtEnd: false } }\n};\n\nexport const ToastWithLink = {\n  render: () => {\n    const actions: ToastAction[] = useMemo(\n      () => [\n        {\n          type: "link",\n          text: "Link to action",\n          href: "https://monday.com"\n        }\n      ],\n      []\n    );\n\n    return (\n      <Toast open actions={actions} autoHideDuration={5000} className="monday-storybook-toast_wrapper">\n        General message toast\n      </Toast>\n    );\n  },\n\n  name: "Toast with link"\n};\n\nexport const ToastWithLoading = {\n  render: () => {\n    return (\n      <Toast open loading className="monday-storybook-toast_wrapper">\n        General message toast\n      </Toast>\n    );\n  },\n\n  name: "Toast with loading",\n  parameters: { chromatic: { pauseAnimationAtEnd: true } }\n};\n\nexport const SuccessMessage = {\n  render: () => {\n    const actions: ToastAction[] = useMemo(\n      () => [\n        {\n          type: "button",\n          content: "Undo 5"\n        }\n      ],\n      []\n    );\n\n    return (\n      <Toast open type="positive" actions={actions} autoHideDuration={5000} className="monday-storybook-toast_wrapper">\n        Positive message toast\n      </Toast>\n    );\n  },\n\n  name: "Success message"\n};\n\nexport const ErrorMessage = {\n  render: () => {\n    const actions: ToastAction[] = useMemo(\n      () => [\n        {\n          type: "button",\n          content: "Button"\n        }\n      ],\n      []\n    );\n\n    return (\n      <Toast open actions={actions} type="negative" autoHideDuration={5000} className="monday-storybook-toast_wrapper">\n        Negative message toast\n      </Toast>\n    );\n  },\n\n  name: "Error message"\n};\n\nexport const WarningMessage = {\n  render: () => {\n    const actions: ToastAction[] = useMemo(\n      () => [\n        {\n          type: "button",\n          content: "Button"\n        }\n      ],\n      []\n    );\n\n    return (\n      <Toast open actions={actions} type="warning" autoHideDuration={5000} className="monday-storybook-toast_wrapper">\n        Warning message toast\n      </Toast>\n    );\n  },\n\n  name: "Warning message",\n  parameters: { chromatic: { pauseAnimationAtEnd: false } }\n};\n\nexport const DarkMessage = {\n  render: () => {\n    const actions: ToastAction[] = useMemo(\n      () => [\n        {\n          type: "button",\n          content: "Button"\n        }\n      ],\n      []\n    );\n\n    return (\n      <Toast open actions={actions} type="dark" autoHideDuration={5000} className="monday-storybook-toast_wrapper">\n        Dark message toast\n      </Toast>\n    );\n  },\n\n  name: "Dark message",\n  parameters: { chromatic: { pauseAnimationAtEnd: false } }\n};\n\nexport const FeedbackLoop = {\n  render: () => {\n    const actions = useMemo(\n      () => [\n        {\n          type: Toast.actionTypes.BUTTON,\n          content: "Undo"\n        }\n      ],\n      []\n    );\n\n    return (\n      <Toast open type={Toast.types.POSITIVE} actions={actions} className="monday-storybook-toast_wrapper">\n        We successfully deleted 1 item\n      </Toast>\n    );\n  },\n  parameters: { chromatic: { pauseAnimationAtEnd: false } }\n};\n\nexport const Animation = {\n  render: () => {\n    const [successToastOpen, setSuccessToastOpen] = useState(false);\n    const [failureToastOpen, setFailureToastOpen] = useState(false);\n    const [isDeleting, setIsDeleting] = useState(false);\n\n    const onSuccessClick = useCallback(() => {\n      setSuccessToastOpen(true);\n      setIsDeleting(true);\n\n      setTimeout(() => {\n        setIsDeleting(false);\n      }, 1000);\n    }, []);\n\n    const onFailureClick = useCallback(() => {\n      setFailureToastOpen(true);\n      setIsDeleting(true);\n\n      setTimeout(() => {\n        setIsDeleting(false);\n      }, 1000);\n    }, []);\n\n    const actions = useMemo<ToastAction[]>(\n      () => [\n        {\n          type: "button",\n          content: "Undo"\n        }\n      ],\n      []\n    );\n\n    return (\n      <>\n        <Button onClick={onSuccessClick} kind={Button.kinds.SECONDARY}>\n          Success action\n        </Button>\n        <Button onClick={onFailureClick} kind={Button.kinds.SECONDARY}>\n          Failure action\n        </Button>\n        <Toast\n          open={successToastOpen}\n          type={isDeleting ? "normal" : "positive"}\n          actions={isDeleting ? [] : actions}\n          onClose={() => setSuccessToastOpen(false)}\n          autoHideDuration={2000}\n          loading={isDeleting}\n        >\n          {isDeleting ? "Deleting 1 selected item..." : "We successfully deleted 1 item"}\n        </Toast>\n        <Toast\n          open={failureToastOpen}\n          type={isDeleting ? "normal" : "negative"}\n          onClose={() => setFailureToastOpen(false)}\n          autoHideDuration={2000}\n          loading={isDeleting}\n        >\n          {isDeleting ? "Deleting 1 selected item..." : "Something went wrong"}\n        </Toast>\n      </>\n    );\n  }\n};\n',locationsMap:{overview:{startLoc:{col:24,line:24},endLoc:{col:1,line:48},startBody:{col:24,line:24},endBody:{col:1,line:48}},"default-with-button":{startLoc:{col:33,line:50},endLoc:{col:1,line:71},startBody:{col:33,line:50},endBody:{col:1,line:71}},"toast-with-link":{startLoc:{col:29,line:73},endLoc:{col:1,line:94},startBody:{col:29,line:73},endBody:{col:1,line:94}},"toast-with-loading":{startLoc:{col:32,line:96},endLoc:{col:1,line:107},startBody:{col:32,line:96},endBody:{col:1,line:107}},"success-message":{startLoc:{col:30,line:109},endLoc:{col:1,line:129},startBody:{col:30,line:109},endBody:{col:1,line:129}},"error-message":{startLoc:{col:28,line:131},endLoc:{col:1,line:151},startBody:{col:28,line:131},endBody:{col:1,line:151}},"warning-message":{startLoc:{col:30,line:153},endLoc:{col:1,line:174},startBody:{col:30,line:153},endBody:{col:1,line:174}},"dark-message":{startLoc:{col:27,line:176},endLoc:{col:1,line:197},startBody:{col:27,line:176},endBody:{col:1,line:197}},"feedback-loop":{startLoc:{col:28,line:199},endLoc:{col:1,line:218},startBody:{col:28,line:199},endBody:{col:1,line:218}},animation:{startLoc:{col:25,line:220},endLoc:{col:1,line:284},startBody:{col:25,line:220},endBody:{col:1,line:284}}}}},title:"Components/Toast",component:_Toast__WEBPACK_IMPORTED_MODULE_4__.A,argTypes:metaSettings.argTypes,decorators:metaSettings.decorators};var Overview={render:(0,vibe_storybook_components__WEBPACK_IMPORTED_MODULE_5__.M)(_Toast__WEBPACK_IMPORTED_MODULE_4__.A).bind({}),name:"Overview",args:{children:"General message toast",open:!0,className:"monday-storybook-toast_wrapper",actions:[{type:"button",content:"Button"}]},parameters:{chromatic:{pauseAnimationAtEnd:!1},docs:{liveEdit:{isEnabled:!1}}}},DefaultWithButton={render:function render(){var actions=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return[{type:"button",content:"Button"}]}),[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Toast__WEBPACK_IMPORTED_MODULE_4__.A,{open:!0,autoHideDuration:5e3,actions,className:"monday-storybook-toast_wrapper",children:"General message toast"})},name:"Default with button",parameters:{chromatic:{pauseAnimationAtEnd:!1}}},ToastWithLink={render:function render(){var actions=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return[{type:"link",text:"Link to action",href:"https://monday.com"}]}),[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Toast__WEBPACK_IMPORTED_MODULE_4__.A,{open:!0,actions,autoHideDuration:5e3,className:"monday-storybook-toast_wrapper",children:"General message toast"})},name:"Toast with link"},ToastWithLoading={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Toast__WEBPACK_IMPORTED_MODULE_4__.A,{open:!0,loading:!0,className:"monday-storybook-toast_wrapper",children:"General message toast"})},name:"Toast with loading",parameters:{chromatic:{pauseAnimationAtEnd:!0}}},SuccessMessage={render:function render(){var actions=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return[{type:"button",content:"Undo 5"}]}),[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Toast__WEBPACK_IMPORTED_MODULE_4__.A,{open:!0,type:"positive",actions,autoHideDuration:5e3,className:"monday-storybook-toast_wrapper",children:"Positive message toast"})},name:"Success message"},ErrorMessage={render:function render(){var actions=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return[{type:"button",content:"Button"}]}),[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Toast__WEBPACK_IMPORTED_MODULE_4__.A,{open:!0,actions,type:"negative",autoHideDuration:5e3,className:"monday-storybook-toast_wrapper",children:"Negative message toast"})},name:"Error message"},WarningMessage={render:function render(){var actions=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return[{type:"button",content:"Button"}]}),[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Toast__WEBPACK_IMPORTED_MODULE_4__.A,{open:!0,actions,type:"warning",autoHideDuration:5e3,className:"monday-storybook-toast_wrapper",children:"Warning message toast"})},name:"Warning message",parameters:{chromatic:{pauseAnimationAtEnd:!1}}},DarkMessage={render:function render(){var actions=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return[{type:"button",content:"Button"}]}),[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Toast__WEBPACK_IMPORTED_MODULE_4__.A,{open:!0,actions,type:"dark",autoHideDuration:5e3,className:"monday-storybook-toast_wrapper",children:"Dark message toast"})},name:"Dark message",parameters:{chromatic:{pauseAnimationAtEnd:!1}}},FeedbackLoop={render:function render(){var actions=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return[{type:_Toast__WEBPACK_IMPORTED_MODULE_4__.A.actionTypes.BUTTON,content:"Undo"}]}),[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Toast__WEBPACK_IMPORTED_MODULE_4__.A,{open:!0,type:_Toast__WEBPACK_IMPORTED_MODULE_4__.A.types.POSITIVE,actions,className:"monday-storybook-toast_wrapper",children:"We successfully deleted 1 item"})},parameters:{chromatic:{pauseAnimationAtEnd:!1}}},Animation={render:function render(){var _useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),successToastOpen=_useState2[0],setSuccessToastOpen=_useState2[1],_useState4=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),failureToastOpen=_useState4[0],setFailureToastOpen=_useState4[1],_useState6=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),isDeleting=_useState6[0],setIsDeleting=_useState6[1],onSuccessClick=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){setSuccessToastOpen(!0),setIsDeleting(!0),setTimeout((function(){setIsDeleting(!1)}),1e3)}),[]),onFailureClick=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){setFailureToastOpen(!0),setIsDeleting(!0),setTimeout((function(){setIsDeleting(!1)}),1e3)}),[]),actions=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return[{type:"button",content:"Undo"}]}),[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Button_Button__WEBPACK_IMPORTED_MODULE_6__.A,{onClick:onSuccessClick,kind:_Button_Button__WEBPACK_IMPORTED_MODULE_6__.A.kinds.SECONDARY,children:"Success action"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Button_Button__WEBPACK_IMPORTED_MODULE_6__.A,{onClick:onFailureClick,kind:_Button_Button__WEBPACK_IMPORTED_MODULE_6__.A.kinds.SECONDARY,children:"Failure action"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Toast__WEBPACK_IMPORTED_MODULE_4__.A,{open:successToastOpen,type:isDeleting?"normal":"positive",actions:isDeleting?[]:actions,onClose:function onClose(){return setSuccessToastOpen(!1)},autoHideDuration:2e3,loading:isDeleting,children:isDeleting?"Deleting 1 selected item...":"We successfully deleted 1 item"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Toast__WEBPACK_IMPORTED_MODULE_4__.A,{open:failureToastOpen,type:isDeleting?"normal":"negative",onClose:function onClose(){return setFailureToastOpen(!1)},autoHideDuration:2e3,loading:isDeleting,children:isDeleting?"Deleting 1 selected item...":"Something went wrong"})]})}};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: toastTemplate.bind({}),\n  name: "Overview",\n  args: {\n    children: "General message toast",\n    open: true,\n    className: "monday-storybook-toast_wrapper",\n    actions: [{\n      type: "button",\n      content: "Button"\n    }]\n  },\n  parameters: {\n    chromatic: {\n      pauseAnimationAtEnd: false\n    },\n    docs: {\n      liveEdit: {\n        isEnabled: false\n      }\n    }\n  }\n}',...Overview.parameters?.docs?.source}}},DefaultWithButton.parameters={...DefaultWithButton.parameters,docs:{...DefaultWithButton.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const actions: ToastAction[] = useMemo(() => [{\n      type: "button",\n      content: "Button"\n    }], []);\n    return <Toast open autoHideDuration={5000} actions={actions} className="monday-storybook-toast_wrapper">\n        General message toast\n      </Toast>;\n  },\n  name: "Default with button",\n  parameters: {\n    chromatic: {\n      pauseAnimationAtEnd: false\n    }\n  }\n}',...DefaultWithButton.parameters?.docs?.source}}},ToastWithLink.parameters={...ToastWithLink.parameters,docs:{...ToastWithLink.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const actions: ToastAction[] = useMemo(() => [{\n      type: "link",\n      text: "Link to action",\n      href: "https://monday.com"\n    }], []);\n    return <Toast open actions={actions} autoHideDuration={5000} className="monday-storybook-toast_wrapper">\n        General message toast\n      </Toast>;\n  },\n  name: "Toast with link"\n}',...ToastWithLink.parameters?.docs?.source}}},ToastWithLoading.parameters={...ToastWithLoading.parameters,docs:{...ToastWithLoading.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    return <Toast open loading className="monday-storybook-toast_wrapper">\n        General message toast\n      </Toast>;\n  },\n  name: "Toast with loading",\n  parameters: {\n    chromatic: {\n      pauseAnimationAtEnd: true\n    }\n  }\n}',...ToastWithLoading.parameters?.docs?.source}}},SuccessMessage.parameters={...SuccessMessage.parameters,docs:{...SuccessMessage.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const actions: ToastAction[] = useMemo(() => [{\n      type: "button",\n      content: "Undo 5"\n    }], []);\n    return <Toast open type="positive" actions={actions} autoHideDuration={5000} className="monday-storybook-toast_wrapper">\n        Positive message toast\n      </Toast>;\n  },\n  name: "Success message"\n}',...SuccessMessage.parameters?.docs?.source}}},ErrorMessage.parameters={...ErrorMessage.parameters,docs:{...ErrorMessage.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const actions: ToastAction[] = useMemo(() => [{\n      type: "button",\n      content: "Button"\n    }], []);\n    return <Toast open actions={actions} type="negative" autoHideDuration={5000} className="monday-storybook-toast_wrapper">\n        Negative message toast\n      </Toast>;\n  },\n  name: "Error message"\n}',...ErrorMessage.parameters?.docs?.source}}},WarningMessage.parameters={...WarningMessage.parameters,docs:{...WarningMessage.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const actions: ToastAction[] = useMemo(() => [{\n      type: "button",\n      content: "Button"\n    }], []);\n    return <Toast open actions={actions} type="warning" autoHideDuration={5000} className="monday-storybook-toast_wrapper">\n        Warning message toast\n      </Toast>;\n  },\n  name: "Warning message",\n  parameters: {\n    chromatic: {\n      pauseAnimationAtEnd: false\n    }\n  }\n}',...WarningMessage.parameters?.docs?.source}}},DarkMessage.parameters={...DarkMessage.parameters,docs:{...DarkMessage.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const actions: ToastAction[] = useMemo(() => [{\n      type: "button",\n      content: "Button"\n    }], []);\n    return <Toast open actions={actions} type="dark" autoHideDuration={5000} className="monday-storybook-toast_wrapper">\n        Dark message toast\n      </Toast>;\n  },\n  name: "Dark message",\n  parameters: {\n    chromatic: {\n      pauseAnimationAtEnd: false\n    }\n  }\n}',...DarkMessage.parameters?.docs?.source}}},FeedbackLoop.parameters={...FeedbackLoop.parameters,docs:{...FeedbackLoop.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const actions = useMemo(() => [{\n      type: Toast.actionTypes.BUTTON,\n      content: "Undo"\n    }], []);\n    return <Toast open type={Toast.types.POSITIVE} actions={actions} className="monday-storybook-toast_wrapper">\n        We successfully deleted 1 item\n      </Toast>;\n  },\n  parameters: {\n    chromatic: {\n      pauseAnimationAtEnd: false\n    }\n  }\n}',...FeedbackLoop.parameters?.docs?.source}}},Animation.parameters={...Animation.parameters,docs:{...Animation.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const [successToastOpen, setSuccessToastOpen] = useState(false);\n    const [failureToastOpen, setFailureToastOpen] = useState(false);\n    const [isDeleting, setIsDeleting] = useState(false);\n    const onSuccessClick = useCallback(() => {\n      setSuccessToastOpen(true);\n      setIsDeleting(true);\n      setTimeout(() => {\n        setIsDeleting(false);\n      }, 1000);\n    }, []);\n    const onFailureClick = useCallback(() => {\n      setFailureToastOpen(true);\n      setIsDeleting(true);\n      setTimeout(() => {\n        setIsDeleting(false);\n      }, 1000);\n    }, []);\n    const actions = useMemo<ToastAction[]>(() => [{\n      type: "button",\n      content: "Undo"\n    }], []);\n    return <>\n        <Button onClick={onSuccessClick} kind={Button.kinds.SECONDARY}>\n          Success action\n        </Button>\n        <Button onClick={onFailureClick} kind={Button.kinds.SECONDARY}>\n          Failure action\n        </Button>\n        <Toast open={successToastOpen} type={isDeleting ? "normal" : "positive"} actions={isDeleting ? [] : actions} onClose={() => setSuccessToastOpen(false)} autoHideDuration={2000} loading={isDeleting}>\n          {isDeleting ? "Deleting 1 selected item..." : "We successfully deleted 1 item"}\n        </Toast>\n        <Toast open={failureToastOpen} type={isDeleting ? "normal" : "negative"} onClose={() => setFailureToastOpen(false)} autoHideDuration={2000} loading={isDeleting}>\n          {isDeleting ? "Deleting 1 selected item..." : "Something went wrong"}\n        </Toast>\n      </>;\n  }\n}',...Animation.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","DefaultWithButton","ToastWithLink","ToastWithLoading","SuccessMessage","ErrorMessage","WarningMessage","DarkMessage","FeedbackLoop","Animation"]},"./src/components/Toast/__stories__/Toast.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>_stories_Toast});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),usage_guidelines=__webpack_require__("../storybook-blocks/dist/src/components/usage-guidelines/usage-guidelines.js"),Toast=__webpack_require__("./src/components/Toast/Toast.tsx"),Flex=__webpack_require__("./src/components/Flex/Flex.tsx"),component_description_map=__webpack_require__("./src/storybook/components/related-components/component-description-map.tsx"),Toast_stories=__webpack_require__("./src/components/Toast/__stories__/Toast.stories.tsx"),tip=__webpack_require__("../storybook-blocks/dist/src/components/tip/tip.js"),storybook_link=__webpack_require__("../storybook-blocks/dist/src/components/storybook-link/storybook-link.js"),TipAlertBanner=function TipAlertBanner(){return(0,jsx_runtime.jsxs)(tip.A,{title:"Check yourself",children:["Need to inform the user about a system’s action? Use an"," ",(0,jsx_runtime.jsx)(storybook_link.A,{page:"Components/AlertBanner",size:storybook_link.A.sizes.SMALL,children:"AlertBanner"})," ","instead."]})};TipAlertBanner.displayName="TipAlertBanner";const do_namespaceObject=__webpack_require__.p+"static/media/do.cd095e38.png",dont_namespaceObject=__webpack_require__.p+"static/media/dont.33631df2.png";function _createMdxContent(props){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",h2:"h2",p:"p",h3:"h3",pre:"pre",code:"code",img:"img"},(0,lib.RP)(),props.components),{Canvas,PropsTable,ComponentRules,RelatedComponents}=_components;return Canvas||_missingMdxReference("Canvas",!0),ComponentRules||_missingMdxReference("ComponentRules",!0),PropsTable||_missingMdxReference("PropsTable",!0),RelatedComponents||_missingMdxReference("RelatedComponents",!0),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:Toast_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"toast",children:"Toast"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#usage",children:"Usage"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#variants",children:"Variants"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#dos-and-donts",children:"Do’s and don’ts"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#use-cases-and-examples",children:"Use cases and examples"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#related-components",children:"Related components"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#feedback",children:"Feedback"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"A toast notification is a message object that presents timely information, including confirmation of actions, alerts, and errors."}),"\n",(0,jsx_runtime.jsx)(Canvas,{of:Toast_stories.Overview}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"import",children:"Import"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:'import { Toast } from "@vibe/core";\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(PropsTable,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(usage_guidelines.A,{guidelines:["Use toast notifications immediately after a specific event such as a user action that does not relate to an object on the page. Toast used as a feedback loop to a user’s action.","Toasts should appear one at a time, and only disappear when no longer required.","Always be concise, write a short and clear message.","Where possible, give follow up actions to allow the user to become more informed or resolve the issue.","Always provide an action button or option to undo.","Toast should overlay permanent UI elements without blocking important actions."]}),"\n",(0,jsx_runtime.jsx)(TipAlertBanner,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default-with-button",children:"Default with button"}),"\n",(0,jsx_runtime.jsx)(Canvas,{of:Toast_stories.DefaultWithButton}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"toast-with-link",children:"Toast with link"}),"\n",(0,jsx_runtime.jsx)(Canvas,{of:Toast_stories.ToastWithLink}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"toast-with-loading",children:"Toast with loading"}),"\n",(0,jsx_runtime.jsx)(Canvas,{of:Toast_stories.ToastWithLoading}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"success-message",children:"Success message"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Use to providing a feedback loop. For example: Item copied."}),"\n",(0,jsx_runtime.jsx)(Canvas,{of:Toast_stories.SuccessMessage}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"error-message",children:"Error message"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Use when something was deleted, a problem has occurred, etc."}),"\n",(0,jsx_runtime.jsx)(Canvas,{of:Toast_stories.ErrorMessage}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"warning-message",children:"Warning message"}),"\n",(0,jsx_runtime.jsx)(Canvas,{of:Toast_stories.WarningMessage}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"dark-message",children:"Dark message"}),"\n",(0,jsx_runtime.jsx)(Canvas,{of:Toast_stories.DarkMessage}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"dos-and-donts",children:"Do’s and Don’ts"}),"\n",(0,jsx_runtime.jsx)(ComponentRules,{rules:[{positive:{component:(0,jsx_runtime.jsx)(Toast.A,{open:!0,className:"monday-storybook-toast_wrapper",hideIcon:!0,type:"positive",children:"Duplicating Board"}),description:"Use only one toast on a screen at a time."},negative:{component:(0,jsx_runtime.jsxs)(Flex.A,{direction:"column",gap:"small",children:[(0,jsx_runtime.jsx)(Toast.A,{type:"negative",open:!0,hideIcon:!0,className:"monday-storybook-toast_wrapper monday-storybook-toast_negative_rule",actions:[{type:"link",text:"Try again",href:"https://monday.com"}],children:"Couldn’t load board items"}),(0,jsx_runtime.jsx)(Toast.A,{type:"positive",className:"monday-storybook-toast_wrapper monday-storybook-toast_negative_rule",hideIcon:!0,text:"Duplicating Board",open:!0,children:"Duplicating Board"})]}),description:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"Don’t place more than one toast on a screen at a time."})}},{positive:{component:(0,jsx_runtime.jsx)(Toast.A,{open:!0,className:"monday-storybook-toast_wrapper",type:"positive",actions:[{type:"button",content:"Undo"}],children:"We successfully archived 1 item"}),description:"Always offer an option to undo the action. Keep the toast for 60 seconds before auto-removing it."},negative:{component:(0,jsx_runtime.jsx)(Toast.A,{open:!0,className:"monday-storybook-toast_wrapper",type:"positive",children:"We successfully archived 1 item"}),description:"Don’t offer an action without letting the user undo it."}},{positive:{component:(0,jsx_runtime.jsx)(_components.img,{src:do_namespaceObject,width:"100%"}),description:"If the toast message has 2 steps, make sure both toasts have roughly the same width."},negative:{component:(0,jsx_runtime.jsx)(_components.img,{src:dont_namespaceObject,width:"100%"}),description:"If the toast message has 2 steps, don’t use toasts with very different widths."}}]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"use-cases-and-examples",children:"Use cases and examples"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"feedback-loop",children:"Feedback loop"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"After a user has done an action, provide feedback to close the loop. For example, when an item has been deleted, duplicated, etc."}),"\n",(0,jsx_runtime.jsx)(Canvas,{of:Toast_stories.FeedbackLoop}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"animation",children:"Animation"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Our toast includes 2 animations: slide-in and transform. The transform animation is triggered when the toast changes from one state to another (for example, from loading to success)."}),"\n",(0,jsx_runtime.jsx)(Canvas,{of:Toast_stories.Animation}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"related-components",children:"Related components"}),"\n",(0,jsx_runtime.jsx)(RelatedComponents,{componentsNames:[component_description_map.Y5,component_description_map.UB,component_description_map.N5]})]})}const _stories_Toast=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}},"../storybook-blocks/dist/src/functions/createComponentTemplate.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>r});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function r(r){return function(e){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r,Object.assign({},e))}}}}]);