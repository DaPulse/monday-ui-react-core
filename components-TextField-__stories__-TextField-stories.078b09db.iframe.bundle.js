"use strict";(globalThis.webpackChunk_vibe_core=globalThis.webpackChunk_vibe_core||[]).push([[2291],{"./src/components/TextField/__stories__/TextField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{InputFieldWithDate:()=>InputFieldWithDate,InputFieldWithDateAndTime:()=>InputFieldWithDateAndTime,InputFieldWithPlaceholderText:()=>InputFieldWithPlaceholderText,Overview:()=>Overview,RequiredInputField:()=>RequiredInputField,Sizes:()=>Sizes,States:()=>States,TextFieldInAForm:()=>TextFieldInAForm,Validation:()=>Validation,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TextField_stories_TextField_stories});__webpack_require__("../../node_modules/react/index.js");var TextField=__webpack_require__("./src/components/TextField/TextField.tsx"),createStoryMetaSettingsDecorator=__webpack_require__("./src/storybook/functions/createStoryMetaSettingsDecorator.ts"),createComponentTemplate=__webpack_require__("../storybook-blocks/dist/src/functions/createComponentTemplate.js"),Show=__webpack_require__("../icons/dist/react/Show.js"),Email=__webpack_require__("../icons/dist/react/Email.js"),Duplicate=__webpack_require__("../icons/dist/react/Duplicate.js"),Check=__webpack_require__("../icons/dist/react/Check.js"),CloseSmall=__webpack_require__("../icons/dist/react/CloseSmall.js"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),TextField_stories=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[16].use[3]!./src/components/TextField/__stories__/TextField.stories.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(TextField_stories.A,options);TextField_stories.A&&TextField_stories.A.locals&&TextField_stories.A.locals;var Heading=__webpack_require__("./src/components/Heading/Heading.tsx"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),metaSettings=(0,createStoryMetaSettingsDecorator.B)({component:TextField.A,iconPropNamesArray:["secondaryIconName","iconName","labelIconName"]});const TextField_stories_TextField_stories={title:"Components/TextField",component:TextField.A,argTypes:metaSettings.argTypes,decorators:metaSettings.decorators};var Overview={render:(0,createComponentTemplate.M)(TextField.A).bind({}),args:{title:"Name",iconName:Show.A,validation:{text:"Helper text"},wrapperClassName:"monday-storybook-text-field_size",showCharCount:!0,placeholder:"Placeholder text here"},parameters:{docs:{liveEdit:{isEnabled:!1}}}},Sizes={render:function render(){return(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-text-field_column-wrapper",children:[(0,jsx_runtime.jsx)(TextField.A,{placeholder:"Small"}),(0,jsx_runtime.jsx)(TextField.A,{placeholder:"Medium",size:"medium"}),(0,jsx_runtime.jsx)(TextField.A,{placeholder:"Large",size:"large"})]})}},States={render:function render(){return(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-text-field_wrapper",children:[(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-text-field_column-wrapper monday-storybook-text-field_spacing",children:[(0,jsx_runtime.jsx)(TextField.A,{placeholder:"Disabled",size:"medium",disabled:!0}),(0,jsx_runtime.jsx)(TextField.A,{placeholder:"With icon",iconName:Email.A,size:"medium"}),(0,jsx_runtime.jsx)(TextField.A,{placeholder:"With clickable icon",iconTooltipContent:"Copy",iconName:Duplicate.A,onIconClick:function onIconClick(){},size:"medium"})]}),(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-text-field_column-wrapper",children:[(0,jsx_runtime.jsx)(TextField.A,{placeholder:"With field label",title:"Name",size:"medium"}),(0,jsx_runtime.jsx)(TextField.A,{placeholder:"Success",validation:{status:"success"},iconName:Check.A,size:"medium"}),(0,jsx_runtime.jsx)(TextField.A,{placeholder:"Error",validation:{status:"error"},iconName:CloseSmall.A,size:"medium"})]})]})},parameters:{docs:{liveEdit:{scope:{Email:Email.A,Check:Check.A,CloseSmall:CloseSmall.A,Duplicate:Duplicate.A}}}}},Validation={render:function render(){return(0,jsx_runtime.jsx)("div",{className:"monday-storybook-text-field_column-wrapper",children:(0,jsx_runtime.jsx)(TextField.A,{placeholder:"Validate me",title:"Name",size:"medium",validation:{status:"error",text:"Validation text"}})})}},TextFieldInAForm={render:function render(){return(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-text-field_box",children:[(0,jsx_runtime.jsx)(Heading.A,{type:"h1",weight:"bold",maxLines:2,children:"Dark Mode Feedback From"}),(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-text-field_box_wrapper",children:[(0,jsx_runtime.jsx)(TextField.A,{title:"Your Name",size:"medium",placeholder:"John Doe"}),(0,jsx_runtime.jsx)(TextField.A,{title:"Email",size:"medium",placeholder:"email@monday.com"})]})]})},name:"Text field in a form"},InputFieldWithPlaceholderText={render:function render(){return(0,jsx_runtime.jsx)("div",{className:"monday-storybook-text-field_size",children:(0,jsx_runtime.jsx)(TextField.A,{title:"Invite with email",labelIconName:Email.A,placeholder:"Enter one or more email",size:"medium"})})},parameters:{docs:{liveEdit:{scope:{Email:Email.A}}}},name:"Input field with placeholder text"},RequiredInputField={render:function render(){return(0,jsx_runtime.jsx)("div",{className:"monday-storybook-text-field_column-wrapper",children:(0,jsx_runtime.jsx)(TextField.A,{placeholder:"Your email",title:"Email Address",size:"medium",required:!0})})},name:"Required input field"},InputFieldWithDate={render:function render(){return(0,jsx_runtime.jsx)("div",{className:"monday-storybook-text-field_size",children:(0,jsx_runtime.jsx)(TextField.A,{size:"medium",type:"date"})})},name:"Input field with date"},InputFieldWithDateAndTime={render:function render(){return(0,jsx_runtime.jsx)("div",{className:"monday-storybook-text-field_size",children:(0,jsx_runtime.jsx)(TextField.A,{size:"medium",type:"datetime-local"})})},name:"Input field with date and time"};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: textFieldTemplate.bind({}),\n  args: {\n    title: "Name",\n    iconName: Show,\n    validation: {\n      text: "Helper text"\n    },\n    wrapperClassName: "monday-storybook-text-field_size",\n    showCharCount: true,\n    placeholder: "Placeholder text here"\n  },\n  parameters: {\n    docs: {\n      liveEdit: {\n        isEnabled: false\n      }\n    }\n  }\n}',...Overview.parameters?.docs?.source}}},Sizes.parameters={...Sizes.parameters,docs:{...Sizes.parameters?.docs,source:{originalSource:'{\n  render: () => <div className="monday-storybook-text-field_column-wrapper">\n      <TextField placeholder="Small" />\n      <TextField placeholder="Medium" size="medium" />\n      <TextField placeholder="Large" size="large" />\n    </div>\n}',...Sizes.parameters?.docs?.source}}},States.parameters={...States.parameters,docs:{...States.parameters?.docs,source:{originalSource:'{\n  render: () => <div className="monday-storybook-text-field_wrapper">\n      <div className="monday-storybook-text-field_column-wrapper monday-storybook-text-field_spacing">\n        <TextField placeholder="Disabled" size="medium" disabled />\n        <TextField placeholder="With icon" iconName={Email} size="medium" />\n        <TextField placeholder="With clickable icon" iconTooltipContent="Copy" iconName={Duplicate} onIconClick={() => {}} size="medium" />\n      </div>\n      <div className="monday-storybook-text-field_column-wrapper">\n        <TextField placeholder="With field label" title="Name" size="medium" />\n        <TextField placeholder="Success" validation={{\n        status: "success"\n      }} iconName={Check} size="medium" />\n        <TextField placeholder="Error" validation={{\n        status: "error"\n      }} iconName={CloseSmall} size="medium" />\n      </div>\n    </div>,\n  parameters: {\n    docs: {\n      liveEdit: {\n        scope: {\n          Email,\n          Check,\n          CloseSmall,\n          Duplicate\n        }\n      }\n    }\n  }\n}',...States.parameters?.docs?.source}}},Validation.parameters={...Validation.parameters,docs:{...Validation.parameters?.docs,source:{originalSource:'{\n  render: () => <div className="monday-storybook-text-field_column-wrapper">\n      <TextField placeholder="Validate me" title="Name" size="medium" validation={{\n      status: "error",\n      text: "Validation text"\n    }} />\n    </div>\n}',...Validation.parameters?.docs?.source}}},TextFieldInAForm.parameters={...TextFieldInAForm.parameters,docs:{...TextFieldInAForm.parameters?.docs,source:{originalSource:'{\n  render: () => <div className="monday-storybook-text-field_box">\n      <Heading type="h1" weight="bold" maxLines={2}>\n        Dark Mode Feedback From\n      </Heading>\n      <div className="monday-storybook-text-field_box_wrapper">\n        <TextField title="Your Name" size="medium" placeholder="John Doe" />\n        <TextField title="Email" size="medium" placeholder="email@monday.com" />\n      </div>\n    </div>,\n  name: "Text field in a form"\n}',...TextFieldInAForm.parameters?.docs?.source}}},InputFieldWithPlaceholderText.parameters={...InputFieldWithPlaceholderText.parameters,docs:{...InputFieldWithPlaceholderText.parameters?.docs,source:{originalSource:'{\n  render: () => <div className="monday-storybook-text-field_size">\n      <TextField title="Invite with email" labelIconName={Email} placeholder="Enter one or more email" size="medium" />\n    </div>,\n  parameters: {\n    docs: {\n      liveEdit: {\n        scope: {\n          Email\n        }\n      }\n    }\n  },\n  name: "Input field with placeholder text"\n}',...InputFieldWithPlaceholderText.parameters?.docs?.source}}},RequiredInputField.parameters={...RequiredInputField.parameters,docs:{...RequiredInputField.parameters?.docs,source:{originalSource:'{\n  render: () => <div className="monday-storybook-text-field_column-wrapper">\n      <TextField placeholder="Your email" title="Email Address" size="medium" required />\n    </div>,\n  name: "Required input field"\n}',...RequiredInputField.parameters?.docs?.source}}},InputFieldWithDate.parameters={...InputFieldWithDate.parameters,docs:{...InputFieldWithDate.parameters?.docs,source:{originalSource:'{\n  render: () => <div className="monday-storybook-text-field_size">\n      <TextField size="medium" type="date" />\n    </div>,\n  name: "Input field with date"\n}',...InputFieldWithDate.parameters?.docs?.source}}},InputFieldWithDateAndTime.parameters={...InputFieldWithDateAndTime.parameters,docs:{...InputFieldWithDateAndTime.parameters?.docs,source:{originalSource:'{\n  render: () => <div className="monday-storybook-text-field_size">\n      <TextField size="medium" type="datetime-local" />\n    </div>,\n  name: "Input field with date and time"\n}',...InputFieldWithDateAndTime.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","Sizes","States","Validation","TextFieldInAForm","InputFieldWithPlaceholderText","RequiredInputField","InputFieldWithDate","InputFieldWithDateAndTime"]},"../storybook-blocks/dist/src/functions/createComponentTemplate.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>r});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function r(r){return function(e){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r,Object.assign({},e))}}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[16].use[3]!./src/components/TextField/__stories__/TextField.stories.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".monday-storybook-text-field_wrapper{display:flex}.monday-storybook-text-field_column-wrapper{display:flex;flex-direction:column;width:300px;gap:16px;margin-right:32px}.monday-storybook-text-field_size{width:300px}.monday-storybook-text-field_box{padding:4px;width:264px}.monday-storybook-text-field_box_wrapper{display:flex;flex-direction:column;gap:16px;margin-top:25px}.monday-storybook-text-field_spacing{padding-top:32px}","",{version:3,sources:["webpack://./src/components/TextField/__stories__/TextField.stories.scss"],names:[],mappings:"AACE,qCACE,YAAA,CAGF,4CACE,YAAA,CACA,qBAAA,CACA,WAAA,CACA,QAAA,CACA,iBAAA,CAGF,kCACE,WAAA,CAGF,iCACE,WAAA,CACA,WAAA,CAEA,yCACE,YAAA,CACA,qBAAA,CACA,QAAA,CACA,eAAA,CAIJ,qCACE,gBAAA",sourcesContent:[".monday-storybook-text-field {\n  &_wrapper {\n    display: flex;\n  }\n\n  &_column-wrapper {\n    display: flex;\n    flex-direction: column;\n    width: 300px;\n    gap: 16px;\n    margin-right: 32px;\n  }\n\n  &_size {\n    width: 300px;\n  }\n\n  &_box {\n    padding: 4px;\n    width: 264px;\n\n    &_wrapper {\n      display: flex;\n      flex-direction: column;\n      gap: 16px;\n      margin-top: 25px;\n    }\n  }\n\n  &_spacing {\n    padding-top: 32px\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);