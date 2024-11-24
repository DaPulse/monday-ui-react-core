"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[401,867],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/AlertBanner/__stories__/AlertBanner.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AlertBannerAsAnAnnouncement:()=>AlertBannerAsAnAnnouncement,AlertBannerAsAnOpportunityToUpgrade:()=>AlertBannerAsAnOpportunityToUpgrade,AlertBannerWithButton:()=>AlertBannerWithButton,AlertBannerWithLink:()=>AlertBannerWithLink,OverflowText:()=>OverflowText,Overview:()=>Overview,Types:()=>Types,__namedExportsOrder:()=>__namedExportsOrder,default:()=>AlertBanner_stories_AlertBanner_stories});__webpack_require__("../../node_modules/react/index.js");var AlertBanner=__webpack_require__("./src/components/AlertBanner/AlertBanner.tsx"),AlertBannerText=__webpack_require__("./src/components/AlertBanner/AlertBannerText/AlertBannerText.tsx"),AlertBannerLink=__webpack_require__("./src/components/AlertBanner/AlertBannerLink/AlertBannerLink.tsx"),AlertBannerButton=__webpack_require__("./src/components/AlertBanner/AlertBannerButton/AlertBannerButton.tsx"),createStoryMetaSettingsDecorator=__webpack_require__("./src/storybook/functions/createStoryMetaSettingsDecorator.ts"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),AlertBanner_stories=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[16].use[3]!./src/components/AlertBanner/__stories__/AlertBanner.stories.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(AlertBanner_stories.A,options);AlertBanner_stories.A&&AlertBanner_stories.A.locals&&AlertBanner_stories.A.locals;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var metaSettings=(0,createStoryMetaSettingsDecorator.B)({component:AlertBanner.A,enumPropNamesArray:["backgroundColor"]}),alertBannerTemplate=function alertBannerTemplate(args){return(0,jsx_runtime.jsxs)(AlertBanner.A,_objectSpread(_objectSpread({},args),{},{children:[(0,jsx_runtime.jsx)(AlertBannerText.A,{text:"Alert banner message"}),(0,jsx_runtime.jsx)(AlertBannerLink.A,{text:"this is a CTA",href:"https://monday.com"})]}))};alertBannerTemplate.displayName="alertBannerTemplate";const AlertBanner_stories_AlertBanner_stories={title:"Feedback/AlertBanner",component:AlertBanner.A,argTypes:metaSettings.argTypes,decorators:metaSettings.decorators};var Overview={render:alertBannerTemplate.bind({}),name:"Overview",args:{bannerText:"Alert banner message",linkText:"this is a CTA",className:"monday-storybook-alert-banner_big-container"}},Types={render:function render(){return(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-alert-banner_column-wrapper monday-storybook-alert-banner_big-container",children:[(0,jsx_runtime.jsxs)(AlertBanner.A,{children:[(0,jsx_runtime.jsx)(AlertBannerText.A,{text:"Alert banner message"}),(0,jsx_runtime.jsx)(AlertBannerLink.A,{text:"this is a CTA",href:"https://monday.com"})]}),(0,jsx_runtime.jsxs)(AlertBanner.A,{backgroundColor:AlertBanner.A.backgroundColors.POSITIVE,children:[(0,jsx_runtime.jsx)(AlertBannerText.A,{text:"Alert banner message"}),(0,jsx_runtime.jsx)(AlertBannerLink.A,{text:"this is a CTA",href:"https://monday.com"})]}),(0,jsx_runtime.jsxs)(AlertBanner.A,{backgroundColor:AlertBanner.A.backgroundColors.NEGATIVE,children:[(0,jsx_runtime.jsx)(AlertBannerText.A,{text:"Alert banner message"}),(0,jsx_runtime.jsx)(AlertBannerLink.A,{text:"this is a CTA",href:"https://monday.com"})]}),(0,jsx_runtime.jsxs)(AlertBanner.A,{backgroundColor:AlertBanner.A.backgroundColors.WARNING,children:[(0,jsx_runtime.jsx)(AlertBannerText.A,{text:"Alert banner message"}),(0,jsx_runtime.jsx)(AlertBannerLink.A,{text:"this is a CTA",href:"https://monday.com"})]}),(0,jsx_runtime.jsxs)(AlertBanner.A,{backgroundColor:AlertBanner.A.backgroundColors.DARK,children:[(0,jsx_runtime.jsx)(AlertBannerText.A,{text:"Alert banner message"}),(0,jsx_runtime.jsx)(AlertBannerLink.A,{text:"this is a CTA",href:"https://monday.com"})]})]})},name:"Types"},AlertBannerWithButton={render:function render(){return(0,jsx_runtime.jsxs)(AlertBanner.A,{className:"monday-storybook-alert-banner_big-container",children:[(0,jsx_runtime.jsx)(AlertBannerText.A,{text:"Lorem ipsum dolor sit amet"}),(0,jsx_runtime.jsx)(AlertBannerButton.A,{children:"Lorem Ipsum"})]})},name:"Alert Banner with button"},AlertBannerWithLink={render:function render(){return(0,jsx_runtime.jsxs)(AlertBanner.A,{className:"monday-storybook-alert-banner_big-container",children:[(0,jsx_runtime.jsx)(AlertBannerText.A,{text:"Alert banner message"}),(0,jsx_runtime.jsx)(AlertBannerLink.A,{text:"this is a CTA",href:"https://monday.com"})]})},name:"Alert Banner with link"},AlertBannerAsAnAnnouncement={render:function render(){return(0,jsx_runtime.jsxs)(AlertBanner.A,{backgroundColor:AlertBanner.A.backgroundColors.DARK,className:"monday-storybook-alert-banner_big-container",children:[(0,jsx_runtime.jsx)(AlertBannerText.A,{text:"Join us at Elevate 2022"}),(0,jsx_runtime.jsx)(AlertBannerLink.A,{text:"RSVP now",href:"https://monday.com"})]})},name:"Alert banner as an announcement"},AlertBannerAsAnOpportunityToUpgrade={render:function render(){return(0,jsx_runtime.jsxs)(AlertBanner.A,{className:"monday-storybook-alert-banner_big-container",children:[(0,jsx_runtime.jsx)(AlertBannerText.A,{text:"7 days left on your monday CRM trial"}),(0,jsx_runtime.jsx)(AlertBannerLink.A,{text:"Upgrade now",href:"https://monday.com"})]})},name:"Alert banner as an opportunity to upgrade"},OverflowText={render:function render(){return(0,jsx_runtime.jsxs)(AlertBanner.A,{className:"monday-storybook-alert-banner_small-container",children:[(0,jsx_runtime.jsx)(AlertBannerText.A,{text:"This is a really long alert..."}),(0,jsx_runtime.jsx)(AlertBannerLink.A,{text:"Call to action",href:"https://monday.com"})]})},name:"Overflow text"};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: alertBannerTemplate.bind({}),\n  name: "Overview",\n  args: {\n    bannerText: "Alert banner message",\n    linkText: "this is a CTA",\n    className: "monday-storybook-alert-banner_big-container"\n  }\n}',...Overview.parameters?.docs?.source}}},Types.parameters={...Types.parameters,docs:{...Types.parameters?.docs,source:{originalSource:'{\n  render: () => <div className="monday-storybook-alert-banner_column-wrapper monday-storybook-alert-banner_big-container">\n      <AlertBanner>\n        <AlertBannerText text="Alert banner message" />\n        <AlertBannerLink text="this is a CTA" href="https://monday.com" />\n      </AlertBanner>\n      <AlertBanner backgroundColor={AlertBanner.backgroundColors.POSITIVE}>\n        <AlertBannerText text="Alert banner message" />\n        <AlertBannerLink text="this is a CTA" href="https://monday.com" />\n      </AlertBanner>\n      <AlertBanner backgroundColor={AlertBanner.backgroundColors.NEGATIVE}>\n        <AlertBannerText text="Alert banner message" />\n        <AlertBannerLink text="this is a CTA" href="https://monday.com" />\n      </AlertBanner>\n      <AlertBanner backgroundColor={AlertBanner.backgroundColors.WARNING}>\n        <AlertBannerText text="Alert banner message" />\n        <AlertBannerLink text="this is a CTA" href="https://monday.com" />\n      </AlertBanner>\n      <AlertBanner backgroundColor={AlertBanner.backgroundColors.DARK}>\n        <AlertBannerText text="Alert banner message" />\n        <AlertBannerLink text="this is a CTA" href="https://monday.com" />\n      </AlertBanner>\n    </div>,\n  name: "Types"\n}',...Types.parameters?.docs?.source}}},AlertBannerWithButton.parameters={...AlertBannerWithButton.parameters,docs:{...AlertBannerWithButton.parameters?.docs,source:{originalSource:'{\n  render: () => <AlertBanner className="monday-storybook-alert-banner_big-container">\n      <AlertBannerText text="Lorem ipsum dolor sit amet" />\n      <AlertBannerButton>Lorem Ipsum</AlertBannerButton>\n    </AlertBanner>,\n  name: "Alert Banner with button"\n}',...AlertBannerWithButton.parameters?.docs?.source}}},AlertBannerWithLink.parameters={...AlertBannerWithLink.parameters,docs:{...AlertBannerWithLink.parameters?.docs,source:{originalSource:'{\n  render: () => <AlertBanner className="monday-storybook-alert-banner_big-container">\n      <AlertBannerText text="Alert banner message" />\n      <AlertBannerLink text="this is a CTA" href="https://monday.com" />\n    </AlertBanner>,\n  name: "Alert Banner with link"\n}',...AlertBannerWithLink.parameters?.docs?.source}}},AlertBannerAsAnAnnouncement.parameters={...AlertBannerAsAnAnnouncement.parameters,docs:{...AlertBannerAsAnAnnouncement.parameters?.docs,source:{originalSource:'{\n  render: () => <AlertBanner backgroundColor={AlertBanner.backgroundColors.DARK} className="monday-storybook-alert-banner_big-container">\n      <AlertBannerText text="Join us at Elevate 2022" />\n      <AlertBannerLink text="RSVP now" href="https://monday.com" />\n    </AlertBanner>,\n  name: "Alert banner as an announcement"\n}',...AlertBannerAsAnAnnouncement.parameters?.docs?.source}}},AlertBannerAsAnOpportunityToUpgrade.parameters={...AlertBannerAsAnOpportunityToUpgrade.parameters,docs:{...AlertBannerAsAnOpportunityToUpgrade.parameters?.docs,source:{originalSource:'{\n  render: () => <AlertBanner className="monday-storybook-alert-banner_big-container">\n      <AlertBannerText text="7 days left on your monday CRM trial" />\n      <AlertBannerLink text="Upgrade now" href="https://monday.com" />\n    </AlertBanner>,\n  name: "Alert banner as an opportunity to upgrade"\n}',...AlertBannerAsAnOpportunityToUpgrade.parameters?.docs?.source}}},OverflowText.parameters={...OverflowText.parameters,docs:{...OverflowText.parameters?.docs,source:{originalSource:'{\n  render: () => <AlertBanner className="monday-storybook-alert-banner_small-container">\n      <AlertBannerText text="This is a really long alert..." />\n      <AlertBannerLink text="Call to action" href="https://monday.com" />\n    </AlertBanner>,\n  name: "Overflow text"\n}',...OverflowText.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","Types","AlertBannerWithButton","AlertBannerWithLink","AlertBannerAsAnAnnouncement","AlertBannerAsAnOpportunityToUpgrade","OverflowText"]},"./src/components/AlertBanner/__stories__/AlertBanner.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>_stories_AlertBanner});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),usage_guidelines=__webpack_require__("../storybook-blocks/dist/src/components/usage-guidelines/usage-guidelines.js"),component_rules=__webpack_require__("../storybook-blocks/dist/src/components/component-rules/component-rules.js"),AlertBanner=__webpack_require__("./src/components/AlertBanner/AlertBanner.tsx"),AlertBannerText=__webpack_require__("./src/components/AlertBanner/AlertBannerText/AlertBannerText.tsx"),AlertBannerLink=__webpack_require__("./src/components/AlertBanner/AlertBannerLink/AlertBannerLink.tsx"),AlertBannerButton=__webpack_require__("./src/components/AlertBanner/AlertBannerButton/AlertBannerButton.tsx"),component_description_map=__webpack_require__("./src/storybook/components/related-components/component-description-map.tsx"),tip=__webpack_require__("../storybook-blocks/dist/src/components/tip/tip.js"),storybook_link=__webpack_require__("../storybook-blocks/dist/src/components/storybook-link/storybook-link.js"),TipWhenToUse=function TipWhenToUse(){return(0,jsx_runtime.jsxs)(tip.A,{title:"When to use?",children:["Alert banners should be reserved only for high-signal, system-level alert messages. For in-app notifications use a"," ",(0,jsx_runtime.jsx)(storybook_link.A,{page:"Feedback/Toast",size:storybook_link.A.sizes.SMALL,children:"Toast."})]})};TipWhenToUse.displayName="TipWhenToUse";var AlertBanner_stories=__webpack_require__("./src/components/AlertBanner/__stories__/AlertBanner.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",h2:"h2",p:"p",h3:"h3",div:"div"},(0,lib.RP)(),props.components),{PropsTable,StorybookLink,RelatedComponents}=_components;return PropsTable||_missingMdxReference("PropsTable",!0),RelatedComponents||_missingMdxReference("RelatedComponents",!0),StorybookLink||_missingMdxReference("StorybookLink",!0),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:AlertBanner_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"alert-banner",children:"Alert Banner"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#usage",children:"Usage"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#variants",children:"Variants"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#dos-and-donts",children:"Do’s and don’ts"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#use-cases-and-examples",children:"Use cases and examples"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#related-components",children:"Related components"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#feedback",children:"Feedback"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Alert banners show pressing and high-signal messages, such as system alerts. They are meant to be noticed and prompt users to take action."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{of:AlertBanner_stories.Overview}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(PropsTable,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(usage_guidelines.A,{guidelines:["Alert banners should have call for action and an option to dismiss.","Don't include more than one call to action in an alert banner.","Place the banner on the top of the screen, and push all other content below it."]}),"\n",(0,jsx_runtime.jsx)(TipWhenToUse,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"types",children:"Types"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"There are five types of alert banners: primary, positive, negative, warning and inverted."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{of:AlertBanner_stories.Types}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"alert-banner-with-button",children:"Alert Banner with button"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{of:AlertBanner_stories.AlertBannerWithButton}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"alert-banner-with-link",children:"Alert Banner with link"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{of:AlertBanner_stories.AlertBannerWithLink}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"dos-and-donts",children:"Do’s and Don’ts"}),"\n",(0,jsx_runtime.jsx)(component_rules.A,{rules:[{positive:{component:(0,jsx_runtime.jsxs)(AlertBanner.A,{className:"monday-storybook-alert-banner_medium-container",children:[(0,jsx_runtime.jsx)(AlertBannerText.A,{text:"Join us at Elevate!"}),(0,jsx_runtime.jsx)(AlertBannerLink.A,{text:"RSVP now",href:"https://monday.com"})]}),description:"Use banners for system messages, background processes, and general updates."},negative:{component:(0,jsx_runtime.jsx)(AlertBanner.A,{className:"monday-storybook-alert-banner_medium-container",children:(0,jsx_runtime.jsx)(AlertBannerText.A,{text:"We successfully archived 1 item"})}),description:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Don’t use banners for notifying a user of an action they have taken. Instead, provide visual feedback with a"," ",(0,jsx_runtime.jsx)(StorybookLink,{page:"Feedback/Toast",children:"Toast."})]})}},{positive:{component:(0,jsx_runtime.jsxs)(AlertBanner.A,{className:"monday-storybook-alert-banner_medium-container",backgroundColor:AlertBanner.A.backgroundColors.NEGATIVE,children:[(0,jsx_runtime.jsx)(AlertBannerText.A,{text:"No connection"}),(0,jsx_runtime.jsx)(AlertBannerLink.A,{text:"Learn more",href:"https://monday.com"}),(0,jsx_runtime.jsx)(AlertBannerButton.A,{children:"Try again"})]}),description:"If two actions are needed, use two different call to acitons."},negative:{component:(0,jsx_runtime.jsxs)(_components.div,{className:"monday-storybook-alert-banner_column-wrapper",children:[(0,jsx_runtime.jsxs)(AlertBanner.A,{backgroundColor:AlertBanner.A.backgroundColors.NEGATIVE,className:"monday-storybook-alert-banner_medium-container",children:[(0,jsx_runtime.jsx)(AlertBannerText.A,{text:"No connection"}),(0,jsx_runtime.jsx)(AlertBannerLink.A,{text:"Learn more",href:"https://monday.com"}),(0,jsx_runtime.jsx)(AlertBannerLink.A,{text:"Try again",href:"https://monday.com"})]}),(0,jsx_runtime.jsxs)(AlertBanner.A,{backgroundColor:AlertBanner.A.backgroundColors.NEGATIVE,className:"monday-storybook-alert-banner_medium-container",children:[(0,jsx_runtime.jsx)(AlertBannerText.A,{text:"No connection"}),(0,jsx_runtime.jsx)(AlertBannerButton.A,{children:"Learn more"}),(0,jsx_runtime.jsx)(AlertBannerButton.A,{children:"Try again"})]})]}),description:"Don't include more than one action in an alert banner with the same type."}},{positive:{component:(0,jsx_runtime.jsxs)(AlertBanner.A,{backgroundColor:AlertBanner.A.backgroundColors.DARK,className:"monday-storybook-alert-banner_medium-container",children:[(0,jsx_runtime.jsx)(AlertBannerText.A,{text:"Join us at Elevate!"}),(0,jsx_runtime.jsx)(AlertBannerLink.A,{text:"RSVP now",href:"https://monday.com"})]}),description:"Use only the 4 color types: primary, negative, positive, and inverted."},negative:{component:(0,jsx_runtime.jsxs)(AlertBanner.A,{className:"monday-storybook-alert-banner_medium-container monday-storybook-alert-banner_pink",children:[(0,jsx_runtime.jsx)(AlertBannerText.A,{text:"Join us at Elevate!"}),(0,jsx_runtime.jsx)(AlertBannerLink.A,{text:"RSVP now",href:"https://monday.com"})]}),description:"Don’t choose other colors for alert banners. Keep it consistent."}}]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"use-cases-and-examples",children:"Use cases and examples"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"alert-banner-as-an-announcement",children:"Alert banner as an announcement"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Use when you'd like to notify about an event or cross-company announcment."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{of:AlertBanner_stories.AlertBannerAsAnAnnouncement}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"alert-banner-as-an-opportunity-to-upgrade",children:"Alert banner as an opportunity to upgrade"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Use to show a trial user the number of remaining free days to use the platform."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{of:AlertBanner_stories.AlertBannerAsAnOpportunityToUpgrade}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"overflow-text",children:"Overflow text"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"In case that there's not enough space for the content, use an ellipses (...)."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{of:AlertBanner_stories.OverflowText}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"related-components",children:"Related components"}),"\n",(0,jsx_runtime.jsx)(RelatedComponents,{componentsNames:[component_description_map._Y,component_description_map.N5,component_description_map.UB]})]})}const _stories_AlertBanner=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[16].use[3]!./src/components/AlertBanner/__stories__/AlertBanner.stories.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".monday-storybook-alert-banner_column-wrapper{display:flex;flex-direction:column;gap:16px}.monday-storybook-alert-banner_big-container{width:610px}.monday-storybook-alert-banner_small-container{width:320px}.monday-storybook-alert-banner_medium-container{width:392px}.monday-storybook-alert-banner_pink{background:var(--sb-color-sofia_pink)}","",{version:3,sources:["webpack://./src/components/AlertBanner/__stories__/AlertBanner.stories.scss"],names:[],mappings:"AACE,8CACE,YAAA,CACA,qBAAA,CACA,QAAA,CAGF,6CACE,WAAA,CAGF,+CACE,WAAA,CAGF,gDACE,WAAA,CAGF,oCACE,qCAAA",sourcesContent:[".monday-storybook-alert-banner {\n  &_column-wrapper {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n  }\n\n  &_big-container {\n    width: 610px;\n  }\n\n  &_small-container {\n    width: 320px;\n  }\n\n  &_medium-container {\n    width: 392px;\n  }\n\n  &_pink {\n    background: var(--sb-color-sofia_pink);\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);