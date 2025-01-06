"use strict";(globalThis.webpackChunk_vibe_core=globalThis.webpackChunk_vibe_core||[]).push([[4563],{"./src/components/Modal/layouts/ModalSideBySideLayout/__stories__/ModalSideBySideLayout.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Animation:()=>Animation,HeaderWithIconButton:()=>HeaderWithIconButton,Overview:()=>Overview,Wizard:()=>Wizard,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ModalSideBySideLayout_stories});var react=__webpack_require__("../../node_modules/react/index.js"),Modal=__webpack_require__("./src/components/Modal/Modal/Modal.tsx"),createStoryMetaSettingsDecorator=__webpack_require__("./src/storybook/functions/createStoryMetaSettingsDecorator.ts"),Modal_stories_helpers=__webpack_require__("./src/components/Modal/Modal/__stories__/Modal.stories.helpers.tsx"),ModalHeader=__webpack_require__("./src/components/Modal/ModalHeader/ModalHeader.tsx"),ModalContent=__webpack_require__("./src/components/Modal/ModalContent/ModalContent.tsx"),ModalSideBySideLayout=__webpack_require__("./src/components/Modal/layouts/ModalSideBySideLayout/ModalSideBySideLayout.tsx"),ModalMedia=__webpack_require__("./src/components/Modal/ModalMedia/ModalMedia.tsx");const media_image_namespaceObject=__webpack_require__.p+"static/media/media-image.4a963093.png";var useWizard=__webpack_require__("./src/hooks/useWizard/useWizard.ts"),TransitionView=__webpack_require__("./src/components/TransitionView/TransitionView.tsx"),ModalFooterWizard=__webpack_require__("./src/components/Modal/footers/ModalFooterWizard/ModalFooterWizard.tsx"),TextField=__webpack_require__("./src/components/TextField/TextField.tsx"),Flex=__webpack_require__("./src/components/Flex/Flex.tsx"),Dropdown=__webpack_require__("./src/components/Dropdown/Dropdown.tsx"),FieldLabel=__webpack_require__("./src/components/FieldLabel/FieldLabel.tsx"),IconButton=__webpack_require__("./src/components/IconButton/IconButton.tsx"),Menu=__webpack_require__("../icons/dist/react/Menu.js"),ModalFooter=__webpack_require__("./src/components/Modal/footers/ModalFooter/ModalFooter.tsx"),Button=__webpack_require__("./src/components/Button/Button.tsx"),Text=__webpack_require__("./src/components/Text/Text.tsx"),Link=__webpack_require__("./src/components/Link/Link.tsx"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var metaSettings=(0,createStoryMetaSettingsDecorator.B)({component:Modal.A});const ModalSideBySideLayout_stories={title:"Components/Modal [New]/Side by side modal",component:Modal.A,subcomponents:{ModalSideBySideLayout:ModalSideBySideLayout.A,ModalMedia:ModalMedia.A,ModalHeader:ModalHeader.A,ModalContent:ModalContent.A,ModalFooter:ModalFooter.A,ModalFooterWizard:ModalFooterWizard.A,TransitionView:TransitionView.A},argTypes:metaSettings.argTypes,decorators:metaSettings.decorators,parameters:{layout:"fullscreen",docs:{liveEdit:{scope:{FieldLabel:FieldLabel.A,mediaImage:media_image_namespaceObject}}}}};var Overview={decorators:[function(Story,context){return(0,Modal_stories_helpers.p1)(Story,{size:"medium",isDocsView:"docs"===context.viewMode,allowFullViewInDocs:!0})}],render:function render(args,_ref){var show=_ref.show,setShow=_ref.setShow,container=_ref.container,steps=[(0,jsx_runtime.jsxs)(ModalSideBySideLayout.A,{children:[(0,jsx_runtime.jsx)(ModalHeader.A,{title:"Side by side modal",description:(0,jsx_runtime.jsxs)(Text.A,{type:"text1",children:["Modal subtitle, can come with icon ",(0,jsx_runtime.jsx)(Link.A,{inheritFontSize:!0,inlineText:!0,text:"and link."})]})}),(0,jsx_runtime.jsx)(ModalContent.A,{children:(0,jsx_runtime.jsx)(Text.A,{type:"text1",align:"inherit",element:"p",children:"Modal content will appear here, you can custom it however you want, according to the user needs. Please make sure that the content is clear for completing the relevant task."})}),(0,jsx_runtime.jsx)(ModalMedia.A,{children:(0,jsx_runtime.jsx)("img",{src:media_image_namespaceObject,alt:"side by side placeholder",style:{width:"100%",objectFit:"cover"}})})]}),(0,jsx_runtime.jsxs)(ModalSideBySideLayout.A,{children:[(0,jsx_runtime.jsx)(ModalHeader.A,{title:"Side by side modal",description:(0,jsx_runtime.jsxs)(Text.A,{type:"text1",children:["Modal subtitle, can come with icon ",(0,jsx_runtime.jsx)(Link.A,{inheritFontSize:!0,inlineText:!0,text:"and link."})]})}),(0,jsx_runtime.jsx)(ModalContent.A,{children:(0,jsx_runtime.jsx)(Text.A,{type:"text1",align:"inherit",element:"p",children:"Modal content will appear here, you can custom it however you want, according to the user needs. Please make sure that the content is clear for completing the relevant task."})}),(0,jsx_runtime.jsx)(ModalMedia.A,{children:(0,jsx_runtime.jsx)("img",{src:media_image_namespaceObject,alt:"side by side placeholder",style:{width:"100%",objectFit:"cover"}})})]})],_useWizard=(0,useWizard.A)({stepCount:steps.length}),activeStep=_useWizard.activeStep,direction=_useWizard.direction,next=_useWizard.next,back=_useWizard.back,isFirstStep=_useWizard.isFirstStep,isLastStep=_useWizard.isLastStep,goToStep=_useWizard.goToStep,primaryButtonText=isLastStep?"Confirm":"Next";return(0,jsx_runtime.jsxs)(Modal.A,_objectSpread(_objectSpread({id:"modal-sbs",show,size:"large",onClose:function onClose(){return setShow(!1)},style:{height:400},container},args),{},{children:[(0,jsx_runtime.jsx)(TransitionView.A,{activeStep,direction,children:steps}),(0,jsx_runtime.jsx)(ModalFooterWizard.A,{activeStep,stepCount:steps.length,onStepClick:goToStep,primaryButton:{text:primaryButtonText,onClick:next},secondaryButton:{text:"Back",onClick:back,disabled:isFirstStep}})]}))},parameters:{docs:{liveEdit:{isEnabled:!1}}}},Wizard={decorators:[function(Story,context){return(0,Modal_stories_helpers.p1)(Story,{size:"medium",isDocsView:"docs"===context.viewMode})}],render:function render(_,_ref2){var show=_ref2.show,setShow=_ref2.setShow,container=_ref2.container,dropdownOptions=[{label:"English",value:"en"},{label:"Hebrew",value:"he"}],steps=[(0,jsx_runtime.jsxs)(ModalSideBySideLayout.A,{children:[(0,jsx_runtime.jsx)(ModalHeader.A,{title:"Modal with wizard",description:"Fill in the details"}),(0,jsx_runtime.jsx)(ModalContent.A,{children:(0,jsx_runtime.jsxs)(Flex.A,{direction:"column",gap:"medium",children:[(0,jsx_runtime.jsx)(TextField.A,{title:"Full name",placeholder:"John Dow"}),(0,jsx_runtime.jsx)(TextField.A,{title:"Email",placeholder:"Email@monday.com"})]})}),(0,jsx_runtime.jsx)(ModalMedia.A,{children:(0,jsx_runtime.jsx)("img",{src:media_image_namespaceObject,alt:"side by side placeholder",style:{width:"100%",objectFit:"cover"}})})]}),(0,jsx_runtime.jsxs)(ModalSideBySideLayout.A,{children:[(0,jsx_runtime.jsx)(ModalHeader.A,{title:"Modal with wizard",description:"Update your settings defenitions"}),(0,jsx_runtime.jsx)(ModalContent.A,{children:(0,jsx_runtime.jsxs)(Flex.A,{direction:"column",gap:"medium",align:"stretch",children:[(0,jsx_runtime.jsx)(TextField.A,{title:"Fill address",placeholder:"City, street, number"}),(0,jsx_runtime.jsxs)(Flex.A,{direction:"column",align:"stretch",children:[(0,jsx_runtime.jsx)(FieldLabel.A,{labelText:"Language preferences"}),(0,jsx_runtime.jsx)(Dropdown.A,{insideOverflowWithTransformContainer:!0,size:"small",placeholder:dropdownOptions[0].label,options:dropdownOptions})]})]})}),(0,jsx_runtime.jsx)(ModalMedia.A,{children:(0,jsx_runtime.jsx)("img",{src:media_image_namespaceObject,alt:"side by side placeholder",style:{width:"100%",objectFit:"cover"}})})]})],_useWizard2=(0,useWizard.A)({stepCount:steps.length}),activeStep=_useWizard2.activeStep,direction=_useWizard2.direction,next=_useWizard2.next,back=_useWizard2.back,isFirstStep=_useWizard2.isFirstStep,isLastStep=_useWizard2.isLastStep,goToStep=_useWizard2.goToStep,primaryButtonText=isLastStep?"Confirm":"Next";return(0,jsx_runtime.jsxs)(Modal.A,{id:"modal-sbs",show,size:"large",onClose:function onClose(){return setShow(!1)},container,style:{height:400},children:[(0,jsx_runtime.jsx)(TransitionView.A,{activeStep,direction,children:steps}),(0,jsx_runtime.jsx)(ModalFooterWizard.A,{activeStep,stepCount:steps.length,onStepClick:goToStep,primaryButton:{text:primaryButtonText,onClick:next},secondaryButton:{text:"Back",onClick:back,disabled:isFirstStep}})]})}},HeaderWithIconButton={decorators:[function(Story,context){return(0,Modal_stories_helpers.p1)(Story,{size:"medium",isDocsView:"docs"===context.viewMode})}],render:function render(_,_ref3){var show=_ref3.show,setShow=_ref3.setShow,container=_ref3.container;return(0,jsx_runtime.jsxs)(Modal.A,{id:"modal-sbs",show,renderHeaderAction:(0,jsx_runtime.jsx)(IconButton.A,{icon:Menu.A,size:"small",kind:"tertiary",ariaLabel:"Open Menu"}),size:"large",onClose:function onClose(){return setShow(!1)},container,style:{height:400},children:[(0,jsx_runtime.jsxs)(ModalSideBySideLayout.A,{children:[(0,jsx_runtime.jsx)(ModalHeader.A,{title:"Modal title"}),(0,jsx_runtime.jsx)(ModalContent.A,{children:(0,jsx_runtime.jsx)(Text.A,{type:"text1",align:"inherit",element:"p",children:"Modal content will appear here, you can custom it however you want, according to the user needs. Please make sure that the content is clear for completing the relevant task."})}),(0,jsx_runtime.jsx)(ModalMedia.A,{children:(0,jsx_runtime.jsx)("img",{src:media_image_namespaceObject,alt:"side by side placeholder",style:{width:"100%",objectFit:"cover"}})})]}),(0,jsx_runtime.jsx)(ModalFooter.A,{primaryButton:{text:"Confirm",onClick:function onClick(){return setShow(!1)}},secondaryButton:{text:"Cancel",onClick:function onClick(){return setShow(!1)}}})]})}},Animation={render:function render(){var _useState2=_slicedToArray((0,react.useState)(!1),2),showAnchor=_useState2[0],setShowAnchor=_useState2[1],_useState4=_slicedToArray((0,react.useState)(!1),2),showCenterPop=_useState4[0],setShowCenterPop=_useState4[1],_useState6=_slicedToArray((0,react.useState)(!1),2),showTransition=_useState6[0],setShowTransition=_useState6[1],anchorButtonRef=(0,react.useRef)(null),transitionSteps=[(0,jsx_runtime.jsxs)(ModalSideBySideLayout.A,{children:[(0,jsx_runtime.jsx)(ModalHeader.A,{title:"Modal title"}),(0,jsx_runtime.jsx)(ModalContent.A,{children:(0,jsx_runtime.jsx)(Text.A,{type:"text1",align:"inherit",element:"p",children:"Modal content will appear here, you can custom it however you want, according to the user needs. Please make sure that the content is clear for completing the relevant task."})}),(0,jsx_runtime.jsx)(ModalMedia.A,{children:(0,jsx_runtime.jsx)("img",{src:media_image_namespaceObject,alt:"side by side placeholder",style:{width:"100%",objectFit:"cover"}})})]}),(0,jsx_runtime.jsxs)(ModalSideBySideLayout.A,{children:[(0,jsx_runtime.jsx)(ModalHeader.A,{title:"Modal title"}),(0,jsx_runtime.jsx)(ModalContent.A,{children:(0,jsx_runtime.jsx)(Text.A,{type:"text1",align:"inherit",element:"p",children:"Modal content will appear here, you can custom it however you want, according to the user needs. Please make sure that the content is clear for completing the relevant task."})}),(0,jsx_runtime.jsx)(ModalMedia.A,{children:(0,jsx_runtime.jsx)("img",{src:media_image_namespaceObject,alt:"side by side placeholder",style:{width:"100%",objectFit:"cover"}})})]}),(0,jsx_runtime.jsxs)(ModalSideBySideLayout.A,{children:[(0,jsx_runtime.jsx)(ModalHeader.A,{title:"Modal title"}),(0,jsx_runtime.jsx)(ModalContent.A,{children:(0,jsx_runtime.jsx)(Text.A,{type:"text1",align:"inherit",element:"p",children:"Modal content will appear here, you can custom it however you want, according to the user needs. Please make sure that the content is clear for completing the relevant task."})}),(0,jsx_runtime.jsx)(ModalMedia.A,{children:(0,jsx_runtime.jsx)("img",{src:media_image_namespaceObject,alt:"side by side placeholder",style:{width:"100%",objectFit:"cover"}})})]})],_useWizard3=(0,useWizard.A)({stepCount:transitionSteps.length}),activeStep=_useWizard3.activeStep,direction=_useWizard3.direction,next=_useWizard3.next,back=_useWizard3.back,isFirstStep=_useWizard3.isFirstStep,isLastStep=_useWizard3.isLastStep,goToStep=_useWizard3.goToStep;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(Flex.A,{gap:"large",style:{paddingBlock:40},children:[(0,jsx_runtime.jsx)(Button.A,{ref:anchorButtonRef,onClick:function onClick(){return setShowAnchor(!0)},children:"Anchor"}),(0,jsx_runtime.jsx)(Button.A,{onClick:function onClick(){return setShowCenterPop(!0)},children:"Center pop"}),(0,jsx_runtime.jsx)(Button.A,{onClick:function onClick(){return setShowTransition(!0)},children:"Transition"})]}),(0,jsx_runtime.jsxs)(Modal.A,{id:"modal-sbs-anchor",show:showAnchor,anchorElementRef:anchorButtonRef,size:"large",onClose:function onClose(){return setShowAnchor(!1)},style:{height:400},children:[(0,jsx_runtime.jsxs)(ModalSideBySideLayout.A,{children:[(0,jsx_runtime.jsx)(ModalHeader.A,{title:"Modal title"}),(0,jsx_runtime.jsx)(ModalContent.A,{children:(0,jsx_runtime.jsx)(Text.A,{type:"text1",align:"inherit",element:"p",children:"Modal content will appear here, you can custom it however you want, according to the user needs. Please make sure that the content is clear for completing the relevant task."})}),(0,jsx_runtime.jsx)(ModalMedia.A,{children:(0,jsx_runtime.jsx)("img",{src:media_image_namespaceObject,alt:"side by side placeholder",style:{width:"100%",objectFit:"cover"}})})]}),(0,jsx_runtime.jsx)(ModalFooter.A,{primaryButton:{text:"Confirm",onClick:function onClick(){return setShowAnchor(!1)}},secondaryButton:{text:"Cancel",onClick:function onClick(){return setShowAnchor(!1)}}})]}),(0,jsx_runtime.jsxs)(Modal.A,{id:"modal-sbs-center",show:showCenterPop,size:"large",onClose:function onClose(){return setShowCenterPop(!1)},style:{height:400},children:[(0,jsx_runtime.jsxs)(ModalSideBySideLayout.A,{children:[(0,jsx_runtime.jsx)(ModalHeader.A,{title:"Modal title"}),(0,jsx_runtime.jsx)(ModalContent.A,{children:(0,jsx_runtime.jsx)(Text.A,{type:"text1",align:"inherit",element:"p",children:"Modal content will appear here, you can custom it however you want, according to the user needs. Please make sure that the content is clear for completing the relevant task."})}),(0,jsx_runtime.jsx)(ModalMedia.A,{children:(0,jsx_runtime.jsx)("img",{src:media_image_namespaceObject,alt:"side by side placeholder",style:{width:"100%",objectFit:"cover"}})})]}),(0,jsx_runtime.jsx)(ModalFooter.A,{primaryButton:{text:"Confirm",onClick:function onClick(){return setShowCenterPop(!1)}},secondaryButton:{text:"Cancel",onClick:function onClick(){return setShowCenterPop(!1)}}})]}),(0,jsx_runtime.jsxs)(Modal.A,{id:"modal-sbs-transition",show:showTransition,size:"large",onClose:function onClose(){return setShowTransition(!1)},style:{height:400},children:[(0,jsx_runtime.jsx)(TransitionView.A,{activeStep,direction,children:transitionSteps}),(0,jsx_runtime.jsx)(ModalFooterWizard.A,{activeStep,stepCount:transitionSteps.length,onStepClick:goToStep,primaryButton:{text:isLastStep?"Confirm":"Next",onClick:next},secondaryButton:{text:"Back",onClick:back,disabled:isFirstStep}})]})]})}};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  decorators: [(Story, context) => withOpenedModalPreview(Story, {\n    size: "medium",\n    isDocsView: context.viewMode === "docs",\n    allowFullViewInDocs: true\n  })],\n  render: (args, {\n    show,\n    setShow,\n    container\n  }) => {\n    const steps = [<ModalSideBySideLayout>\n        <ModalHeader title="Side by side modal" description={<Text type="text1">\n              Modal subtitle, can come with icon <Link inheritFontSize inlineText text="and link." />\n            </Text>} />\n        <ModalContent>\n          <Text type="text1" align="inherit" element="p">\n            Modal content will appear here, you can custom it however you want, according to the user needs. Please make\n            sure that the content is clear for completing the relevant task.\n          </Text>\n        </ModalContent>\n        <ModalMedia>\n          <img src={mediaImage} alt="side by side placeholder" style={{\n          width: "100%",\n          objectFit: "cover"\n        }} />\n        </ModalMedia>\n      </ModalSideBySideLayout>, <ModalSideBySideLayout>\n        <ModalHeader title="Side by side modal" description={<Text type="text1">\n              Modal subtitle, can come with icon <Link inheritFontSize inlineText text="and link." />\n            </Text>} />\n        <ModalContent>\n          <Text type="text1" align="inherit" element="p">\n            Modal content will appear here, you can custom it however you want, according to the user needs. Please make\n            sure that the content is clear for completing the relevant task.\n          </Text>\n        </ModalContent>\n        <ModalMedia>\n          <img src={mediaImage} alt="side by side placeholder" style={{\n          width: "100%",\n          objectFit: "cover"\n        }} />\n        </ModalMedia>\n      </ModalSideBySideLayout>];\n    const {\n      activeStep,\n      direction,\n      next,\n      back,\n      isFirstStep,\n      isLastStep,\n      goToStep\n    } = useWizard({\n      stepCount: steps.length\n    });\n    const primaryButtonText = isLastStep ? "Confirm" : "Next";\n    return <Modal id="modal-sbs" show={show} size="large" onClose={() => setShow(false)} style={{\n      height: 400\n    }} container={container} {...args}>\n        <TransitionView activeStep={activeStep} direction={direction}>\n          {steps}\n        </TransitionView>\n        <ModalFooterWizard activeStep={activeStep} stepCount={steps.length} onStepClick={goToStep} primaryButton={{\n        text: primaryButtonText,\n        onClick: next\n      }} secondaryButton={{\n        text: "Back",\n        onClick: back,\n        disabled: isFirstStep\n      }} />\n      </Modal>;\n  },\n  parameters: {\n    docs: {\n      liveEdit: {\n        isEnabled: false\n      }\n    }\n  }\n}',...Overview.parameters?.docs?.source}}},Wizard.parameters={...Wizard.parameters,docs:{...Wizard.parameters?.docs,source:{originalSource:'{\n  decorators: [(Story, context) => withOpenedModalPreview(Story, {\n    size: "medium",\n    isDocsView: context.viewMode === "docs"\n  })],\n  render: (_, {\n    show,\n    setShow,\n    container\n  }) => {\n    const dropdownOptions = [{\n      label: "English",\n      value: "en"\n    }, {\n      label: "Hebrew",\n      value: "he"\n    }];\n    const steps = [<ModalSideBySideLayout>\n        <ModalHeader title="Modal with wizard" description="Fill in the details" />\n        <ModalContent>\n          <Flex direction="column" gap="medium">\n            <TextField title="Full name" placeholder="John Dow" />\n            <TextField title="Email" placeholder="Email@monday.com" />\n          </Flex>\n        </ModalContent>\n        <ModalMedia>\n          <img src={mediaImage} alt="side by side placeholder" style={{\n          width: "100%",\n          objectFit: "cover"\n        }} />\n        </ModalMedia>\n      </ModalSideBySideLayout>, <ModalSideBySideLayout>\n        <ModalHeader title="Modal with wizard" description="Update your settings defenitions" />\n        <ModalContent>\n          <Flex direction="column" gap="medium" align="stretch">\n            <TextField title="Fill address" placeholder="City, street, number" />\n            <Flex direction="column" align="stretch">\n              <FieldLabel labelText="Language preferences" />\n              <Dropdown insideOverflowWithTransformContainer size="small" placeholder={dropdownOptions[0].label} options={dropdownOptions} />\n            </Flex>\n          </Flex>\n        </ModalContent>\n        <ModalMedia>\n          <img src={mediaImage} alt="side by side placeholder" style={{\n          width: "100%",\n          objectFit: "cover"\n        }} />\n        </ModalMedia>\n      </ModalSideBySideLayout>];\n    const {\n      activeStep,\n      direction,\n      next,\n      back,\n      isFirstStep,\n      isLastStep,\n      goToStep\n    } = useWizard({\n      stepCount: steps.length\n    });\n    const primaryButtonText = isLastStep ? "Confirm" : "Next";\n    return <Modal id="modal-sbs" show={show} size="large" onClose={() => setShow(false)} container={container} style={{\n      height: 400\n    }}>\n        <TransitionView activeStep={activeStep} direction={direction}>\n          {steps}\n        </TransitionView>\n        <ModalFooterWizard activeStep={activeStep} stepCount={steps.length} onStepClick={goToStep} primaryButton={{\n        text: primaryButtonText,\n        onClick: next\n      }} secondaryButton={{\n        text: "Back",\n        onClick: back,\n        disabled: isFirstStep\n      }} />\n      </Modal>;\n  }\n}',...Wizard.parameters?.docs?.source}}},HeaderWithIconButton.parameters={...HeaderWithIconButton.parameters,docs:{...HeaderWithIconButton.parameters?.docs,source:{originalSource:'{\n  decorators: [(Story, context) => withOpenedModalPreview(Story, {\n    size: "medium",\n    isDocsView: context.viewMode === "docs"\n  })],\n  render: (_, {\n    show,\n    setShow,\n    container\n  }) => {\n    return <Modal id="modal-sbs" show={show} renderHeaderAction={<IconButton icon={Menu} size="small" kind="tertiary" ariaLabel="Open Menu" />} size="large" onClose={() => setShow(false)} container={container} style={{\n      height: 400\n    }}>\n        <ModalSideBySideLayout>\n          <ModalHeader title="Modal title" />\n          <ModalContent>\n            <Text type="text1" align="inherit" element="p">\n              Modal content will appear here, you can custom it however you want, according to the user needs. Please\n              make sure that the content is clear for completing the relevant task.\n            </Text>\n          </ModalContent>\n          <ModalMedia>\n            <img src={mediaImage} alt="side by side placeholder" style={{\n            width: "100%",\n            objectFit: "cover"\n          }} />\n          </ModalMedia>\n        </ModalSideBySideLayout>\n        <ModalFooter primaryButton={{\n        text: "Confirm",\n        onClick: () => setShow(false)\n      }} secondaryButton={{\n        text: "Cancel",\n        onClick: () => setShow(false)\n      }} />\n      </Modal>;\n  }\n}',...HeaderWithIconButton.parameters?.docs?.source}}},Animation.parameters={...Animation.parameters,docs:{...Animation.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const [showAnchor, setShowAnchor] = useState(false);\n    const [showCenterPop, setShowCenterPop] = useState(false);\n    const [showTransition, setShowTransition] = useState(false);\n    const anchorButtonRef = useRef<HTMLButtonElement>(null);\n    const transitionSteps = [<ModalSideBySideLayout>\n        <ModalHeader title="Modal title" />\n        <ModalContent>\n          <Text type="text1" align="inherit" element="p">\n            Modal content will appear here, you can custom it however you want, according to the user needs. Please make\n            sure that the content is clear for completing the relevant task.\n          </Text>\n        </ModalContent>\n        <ModalMedia>\n          <img src={mediaImage} alt="side by side placeholder" style={{\n          width: "100%",\n          objectFit: "cover"\n        }} />\n        </ModalMedia>\n      </ModalSideBySideLayout>, <ModalSideBySideLayout>\n        <ModalHeader title="Modal title" />\n        <ModalContent>\n          <Text type="text1" align="inherit" element="p">\n            Modal content will appear here, you can custom it however you want, according to the user needs. Please make\n            sure that the content is clear for completing the relevant task.\n          </Text>\n        </ModalContent>\n        <ModalMedia>\n          <img src={mediaImage} alt="side by side placeholder" style={{\n          width: "100%",\n          objectFit: "cover"\n        }} />\n        </ModalMedia>\n      </ModalSideBySideLayout>, <ModalSideBySideLayout>\n        <ModalHeader title="Modal title" />\n        <ModalContent>\n          <Text type="text1" align="inherit" element="p">\n            Modal content will appear here, you can custom it however you want, according to the user needs. Please make\n            sure that the content is clear for completing the relevant task.\n          </Text>\n        </ModalContent>\n        <ModalMedia>\n          <img src={mediaImage} alt="side by side placeholder" style={{\n          width: "100%",\n          objectFit: "cover"\n        }} />\n        </ModalMedia>\n      </ModalSideBySideLayout>];\n    const {\n      activeStep,\n      direction,\n      next,\n      back,\n      isFirstStep,\n      isLastStep,\n      goToStep\n    } = useWizard({\n      stepCount: transitionSteps.length\n    });\n    return <>\n        <Flex gap="large" style={{\n        paddingBlock: 40\n      }}>\n          <Button ref={anchorButtonRef} onClick={() => setShowAnchor(true)}>\n            Anchor\n          </Button>\n          <Button onClick={() => setShowCenterPop(true)}>Center pop</Button>\n          <Button onClick={() => setShowTransition(true)}>Transition</Button>\n        </Flex>\n\n        <Modal id="modal-sbs-anchor" show={showAnchor} anchorElementRef={anchorButtonRef} size="large" onClose={() => setShowAnchor(false)} style={{\n        height: 400\n      }}>\n          <ModalSideBySideLayout>\n            <ModalHeader title="Modal title" />\n            <ModalContent>\n              <Text type="text1" align="inherit" element="p">\n                Modal content will appear here, you can custom it however you want, according to the user needs. Please\n                make sure that the content is clear for completing the relevant task.\n              </Text>\n            </ModalContent>\n            <ModalMedia>\n              <img src={mediaImage} alt="side by side placeholder" style={{\n              width: "100%",\n              objectFit: "cover"\n            }} />\n            </ModalMedia>\n          </ModalSideBySideLayout>\n          <ModalFooter primaryButton={{\n          text: "Confirm",\n          onClick: () => setShowAnchor(false)\n        }} secondaryButton={{\n          text: "Cancel",\n          onClick: () => setShowAnchor(false)\n        }} />\n        </Modal>\n\n        <Modal id="modal-sbs-center" show={showCenterPop} size="large" onClose={() => setShowCenterPop(false)} style={{\n        height: 400\n      }}>\n          <ModalSideBySideLayout>\n            <ModalHeader title="Modal title" />\n            <ModalContent>\n              <Text type="text1" align="inherit" element="p">\n                Modal content will appear here, you can custom it however you want, according to the user needs. Please\n                make sure that the content is clear for completing the relevant task.\n              </Text>\n            </ModalContent>\n            <ModalMedia>\n              <img src={mediaImage} alt="side by side placeholder" style={{\n              width: "100%",\n              objectFit: "cover"\n            }} />\n            </ModalMedia>\n          </ModalSideBySideLayout>\n          <ModalFooter primaryButton={{\n          text: "Confirm",\n          onClick: () => setShowCenterPop(false)\n        }} secondaryButton={{\n          text: "Cancel",\n          onClick: () => setShowCenterPop(false)\n        }} />\n        </Modal>\n\n        <Modal id="modal-sbs-transition" show={showTransition} size="large" onClose={() => setShowTransition(false)} style={{\n        height: 400\n      }}>\n          <TransitionView activeStep={activeStep} direction={direction}>\n            {transitionSteps}\n          </TransitionView>\n          <ModalFooterWizard activeStep={activeStep} stepCount={transitionSteps.length} onStepClick={goToStep} primaryButton={{\n          text: isLastStep ? "Confirm" : "Next",\n          onClick: next\n        }} secondaryButton={{\n          text: "Back",\n          onClick: back,\n          disabled: isFirstStep\n        }} />\n        </Modal>\n      </>;\n  }\n}',...Animation.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","Wizard","HeaderWithIconButton","Animation"]}}]);