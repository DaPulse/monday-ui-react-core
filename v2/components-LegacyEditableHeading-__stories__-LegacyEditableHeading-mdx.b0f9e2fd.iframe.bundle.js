/*! For license information please see components-LegacyEditableHeading-__stories__-LegacyEditableHeading-mdx.b0f9e2fd.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[3137,6931],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/LegacyEditableHeading/__stories__/LegacyEditableHeading.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Colors:()=>Colors,Overview:()=>Overview,Placeholder:()=>Placeholder,TextHighlight:()=>TextHighlight,Types:()=>Types,__namedExportsOrder:()=>__namedExportsOrder,default:()=>LegacyEditableHeading_stories});__webpack_require__("../../node_modules/react/index.js");var LegacyEditableHeading=__webpack_require__("./src/components/LegacyEditableHeading/LegacyEditableHeading.tsx"),createStoryMetaSettingsDecorator=__webpack_require__("./src/storybook/functions/createStoryMetaSettingsDecorator.ts"),dist=__webpack_require__("../../node_modules/@storybook/jest/dist/index.mjs"),interactions_utils=__webpack_require__("./src/tests/interactions-utils.ts"),constants=__webpack_require__("./src/tests/constants.ts"),interactions_helper=__webpack_require__("./src/__tests__/interactions-helper.ts");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function define(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{define({},"")}catch(t){define=function define(t,e,r){return t[e]=r}}function wrap(t,e,r,n){var i=e&&e.prototype instanceof Generator?e:Generator,a=Object.create(i.prototype),c=new Context(n||[]);return o(a,"_invoke",{value:makeInvokeMethod(t,r,c)}),a}function tryCatch(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=wrap;var h="suspendedStart",l="suspendedYield",f="executing",s="completed",y={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var p={};define(p,a,(function(){return this}));var d=Object.getPrototypeOf,v=d&&d(d(values([])));v&&v!==r&&n.call(v,a)&&(p=v);var g=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(p);function defineIteratorMethods(t){["next","throw","return"].forEach((function(e){define(t,e,(function(t){return this._invoke(e,t)}))}))}function AsyncIterator(t,e){function invoke(r,o,i,a){var c=tryCatch(t[r],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==_typeof(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){invoke("next",t,i,a)}),(function(t){invoke("throw",t,i,a)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return invoke("throw",t,i,a)}))}a(c.arg)}var r;o(this,"_invoke",{value:function value(t,n){function callInvokeWithMethodAndArg(){return new e((function(e,r){invoke(t,n,e,r)}))}return r=r?r.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(e,r,n){var o=h;return function(i,a){if(o===f)throw Error("Generator is already running");if(o===s){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=maybeInvokeDelegate(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=s,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=f;var p=tryCatch(e,r,n);if("normal"===p.type){if(o=n.done?s:l,p.arg===y)continue;return{value:p.arg,done:n.done}}"throw"===p.type&&(o=s,n.method="throw",n.arg=p.arg)}}}function maybeInvokeDelegate(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,maybeInvokeDelegate(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=tryCatch(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function pushTryEntry(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function resetTryEntry(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Context(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(pushTryEntry,this),this.reset(!0)}function values(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function next(){for(;++o<e.length;)if(n.call(e,o))return next.value=e[o],next.done=!1,next;return next.value=t,next.done=!0,next};return i.next=i}}throw new TypeError(_typeof(e)+" is not iterable")}return GeneratorFunction.prototype=GeneratorFunctionPrototype,o(g,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),o(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===GeneratorFunction||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,GeneratorFunctionPrototype):(t.__proto__=GeneratorFunctionPrototype,define(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},e.awrap=function(t){return{__await:t}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,c,(function(){return this})),e.AsyncIterator=AsyncIterator,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new AsyncIterator(wrap(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},defineIteratorMethods(g),define(g,u,"Generator"),define(g,a,(function(){return this})),define(g,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function next(){for(;r.length;){var t=r.pop();if(t in e)return next.value=t,next.done=!1,next}return next.done=!0,next}},e.values=values,Context.prototype={constructor:Context,reset:function reset(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(resetTryEntry),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function stop(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function dispatchException(e){if(this.done)throw e;var r=this;function handle(n,o){return a.type="throw",a.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return handle("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0);if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}}}},abrupt:function abrupt(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function complete(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function finish(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),resetTryEntry(r),y}},catch:function _catch(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;resetTryEntry(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function delegateYield(e,r,n){return this.delegate={iterator:values(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}var getLegacyEditableHeadingHeading=function(){var _ref=_asyncToGenerator(_regeneratorRuntime().mark((function _callee(canvas){return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,(0,interactions_helper.S)();case 2:return _context.abrupt("return",(0,interactions_utils.h5)(canvas,constants.w.HEADING));case 3:case"end":return _context.stop()}}),_callee)})));return function getLegacyEditableHeadingHeading(_x){return _ref.apply(this,arguments)}}(),getLegacyEditableHeadingInput=function(){var _ref2=_asyncToGenerator(_regeneratorRuntime().mark((function _callee2(canvas){var editableHeadingElement;return _regeneratorRuntime().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return _context2.next=2,(0,interactions_helper.S)();case 2:return editableHeadingElement=(0,interactions_utils.h5)(canvas,constants.w.CLICKABLE),(0,interactions_utils.jp)(editableHeadingElement),_context2.next=6,(0,interactions_utils.cb)(50);case 6:return _context2.abrupt("return",(0,interactions_utils.h5)(canvas,constants.w.EDITABLE_INPUT));case 7:case"end":return _context2.stop()}}),_callee2)})));return function getLegacyEditableHeadingInput(_x2){return _ref2.apply(this,arguments)}}();function _textSimpleText(){return(_textSimpleText=_asyncToGenerator(_regeneratorRuntime().mark((function _callee3(canvas){var editableHeadingInput,text,editableHeading;return _regeneratorRuntime().wrap((function _callee3$(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:return _context3.next=2,getLegacyEditableHeadingInput(canvas);case 2:return editableHeadingInput=_context3.sent,_context3.next=5,(0,interactions_utils.Z8)(editableHeadingInput);case 5:return text="This heading is editable",_context3.next=8,(0,interactions_utils.wQ)(editableHeadingInput,text);case 8:return(0,dist.E)(editableHeadingInput).toHaveAttribute("value",text),_context3.next=11,getLegacyEditableHeadingHeading(canvas);case 11:editableHeading=_context3.sent,(0,dist.E)(editableHeading).toHaveTextContent(text);case 13:case"end":return _context3.stop()}}),_callee3)})))).apply(this,arguments)}var overviewPlaySuite=(0,interactions_utils.Ld)({tests:[function textSimpleText(_x3){return _textSimpleText.apply(this,arguments)}]});try{overviewPlaySuite.displayName="overviewPlaySuite",overviewPlaySuite.__docgenInfo={description:"",displayName:"overviewPlaySuite",props:{canvasElement:{defaultValue:null,description:"",name:"canvasElement",required:!0,type:{name:'Screen<typeof import("/home/runner/work/vibe/vibe/node_modules/@testing-library/react/node_modules/@testing-library/dom/types/queries")>'}},args:{defaultValue:null,description:"",name:"args",required:!0,type:{name:"Record<string, any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/LegacyEditableHeading/__tests__/LegacyEditableHeading-interactions.tsx#overviewPlaySuite"]={docgenInfo:overviewPlaySuite.__docgenInfo,name:"overviewPlaySuite",path:"src/components/LegacyEditableHeading/__tests__/LegacyEditableHeading-interactions.tsx#overviewPlaySuite"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),metaSettings=(0,createStoryMetaSettingsDecorator.B)({component:LegacyEditableHeading.A,enumPropNamesArray:["size","type"]});const LegacyEditableHeading_stories={parameters:{storySource:{source:'import React from "react";\nimport EditableHeading from "../LegacyEditableHeading";\nimport { createStoryMetaSettingsDecorator } from "../../../storybook";\nimport { overviewPlaySuite } from "../__tests__/LegacyEditableHeading-interactions";\n\nconst metaSettings = createStoryMetaSettingsDecorator({\n  component: EditableHeading,\n  enumPropNamesArray: ["size", "type"]\n});\n\nexport default {\n  title: "Inputs/LegacyEditableHeading [deprecated]",\n  component: EditableHeading,\n  argTypes: metaSettings.argTypes,\n  decorators: metaSettings.decorators\n};\n\nexport const Overview = {\n  render: () => <EditableHeading value="This heading is editable" type={EditableHeading.types.h1} />,\n  name: "Overview",\n  play: overviewPlaySuite\n};\n\nexport const Types = {\n  render: () => (\n    <>\n      {" "}\n      <EditableHeading type={EditableHeading.types.h1} value="H1 Header" />\n      <EditableHeading type={EditableHeading.types.h2} value="H2 Header" />\n      <EditableHeading type={EditableHeading.types.h3} value="H3 Header" />\n      <EditableHeading type={EditableHeading.types.h4} value="H4 Header" />\n      <EditableHeading type={EditableHeading.types.h5} value="H5 Header" />\n      <EditableHeading type={EditableHeading.types.h6} value="H6 Header" />\n    </>\n  ),\n  name: "Types"\n};\n\nexport const Placeholder = {\n  render: () => <EditableHeading type={EditableHeading.types.h1} placeholder="H1 Placeholder" />,\n  name: "Placeholder"\n};\n\nexport const TextHighlight = {\n  render: () => (\n    <>\n      <EditableHeading type={EditableHeading.types.h1} value="H1 Header" highlightTerm="head" />\n      <EditableHeading type={EditableHeading.types.h2} value="H2 Header" highlightTerm="head" />\n      <EditableHeading type={EditableHeading.types.h3} value="H3 Header" highlightTerm="head" />\n    </>\n  ),\n  name: "Text Highlight"\n};\n\nexport const Colors = {\n  render: () => (\n    <>\n      <EditableHeading type={EditableHeading.types.h1} value="H1 Header" customColor="blue" />\n      <EditableHeading type={EditableHeading.types.h2} value="H2 Header" customColor="red" />\n      <EditableHeading type={EditableHeading.types.h3} value="H3 Header" highlightTerm="head" customColor="#AA33FF" />\n    </>\n  ),\n  name: "Colors"\n};\n',locationsMap:{overview:{startLoc:{col:24,line:18},endLoc:{col:1,line:22},startBody:{col:24,line:18},endBody:{col:1,line:22}},types:{startLoc:{col:21,line:24},endLoc:{col:1,line:37},startBody:{col:21,line:24},endBody:{col:1,line:37}},placeholder:{startLoc:{col:27,line:39},endLoc:{col:1,line:42},startBody:{col:27,line:39},endBody:{col:1,line:42}},"text-highlight":{startLoc:{col:29,line:44},endLoc:{col:1,line:53},startBody:{col:29,line:44},endBody:{col:1,line:53}},colors:{startLoc:{col:22,line:55},endLoc:{col:1,line:64},startBody:{col:22,line:55},endBody:{col:1,line:64}}}}},title:"Inputs/LegacyEditableHeading [deprecated]",component:LegacyEditableHeading.A,argTypes:metaSettings.argTypes,decorators:metaSettings.decorators};var Overview={render:function render(){return(0,jsx_runtime.jsx)(LegacyEditableHeading.A,{value:"This heading is editable",type:LegacyEditableHeading.A.types.h1})},name:"Overview",play:overviewPlaySuite},Types={render:function render(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[" ",(0,jsx_runtime.jsx)(LegacyEditableHeading.A,{type:LegacyEditableHeading.A.types.h1,value:"H1 Header"}),(0,jsx_runtime.jsx)(LegacyEditableHeading.A,{type:LegacyEditableHeading.A.types.h2,value:"H2 Header"}),(0,jsx_runtime.jsx)(LegacyEditableHeading.A,{type:LegacyEditableHeading.A.types.h3,value:"H3 Header"}),(0,jsx_runtime.jsx)(LegacyEditableHeading.A,{type:LegacyEditableHeading.A.types.h4,value:"H4 Header"}),(0,jsx_runtime.jsx)(LegacyEditableHeading.A,{type:LegacyEditableHeading.A.types.h5,value:"H5 Header"}),(0,jsx_runtime.jsx)(LegacyEditableHeading.A,{type:LegacyEditableHeading.A.types.h6,value:"H6 Header"})]})},name:"Types"},Placeholder={render:function render(){return(0,jsx_runtime.jsx)(LegacyEditableHeading.A,{type:LegacyEditableHeading.A.types.h1,placeholder:"H1 Placeholder"})},name:"Placeholder"},TextHighlight={render:function render(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(LegacyEditableHeading.A,{type:LegacyEditableHeading.A.types.h1,value:"H1 Header",highlightTerm:"head"}),(0,jsx_runtime.jsx)(LegacyEditableHeading.A,{type:LegacyEditableHeading.A.types.h2,value:"H2 Header",highlightTerm:"head"}),(0,jsx_runtime.jsx)(LegacyEditableHeading.A,{type:LegacyEditableHeading.A.types.h3,value:"H3 Header",highlightTerm:"head"})]})},name:"Text Highlight"},Colors={render:function render(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(LegacyEditableHeading.A,{type:LegacyEditableHeading.A.types.h1,value:"H1 Header",customColor:"blue"}),(0,jsx_runtime.jsx)(LegacyEditableHeading.A,{type:LegacyEditableHeading.A.types.h2,value:"H2 Header",customColor:"red"}),(0,jsx_runtime.jsx)(LegacyEditableHeading.A,{type:LegacyEditableHeading.A.types.h3,value:"H3 Header",highlightTerm:"head",customColor:"#AA33FF"})]})},name:"Colors"};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: () => <EditableHeading value="This heading is editable" type={EditableHeading.types.h1} />,\n  name: "Overview",\n  play: overviewPlaySuite\n}',...Overview.parameters?.docs?.source}}},Types.parameters={...Types.parameters,docs:{...Types.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      {" "}\n      <EditableHeading type={EditableHeading.types.h1} value="H1 Header" />\n      <EditableHeading type={EditableHeading.types.h2} value="H2 Header" />\n      <EditableHeading type={EditableHeading.types.h3} value="H3 Header" />\n      <EditableHeading type={EditableHeading.types.h4} value="H4 Header" />\n      <EditableHeading type={EditableHeading.types.h5} value="H5 Header" />\n      <EditableHeading type={EditableHeading.types.h6} value="H6 Header" />\n    </>,\n  name: "Types"\n}',...Types.parameters?.docs?.source}}},Placeholder.parameters={...Placeholder.parameters,docs:{...Placeholder.parameters?.docs,source:{originalSource:'{\n  render: () => <EditableHeading type={EditableHeading.types.h1} placeholder="H1 Placeholder" />,\n  name: "Placeholder"\n}',...Placeholder.parameters?.docs?.source}}},TextHighlight.parameters={...TextHighlight.parameters,docs:{...TextHighlight.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <EditableHeading type={EditableHeading.types.h1} value="H1 Header" highlightTerm="head" />\n      <EditableHeading type={EditableHeading.types.h2} value="H2 Header" highlightTerm="head" />\n      <EditableHeading type={EditableHeading.types.h3} value="H3 Header" highlightTerm="head" />\n    </>,\n  name: "Text Highlight"\n}',...TextHighlight.parameters?.docs?.source}}},Colors.parameters={...Colors.parameters,docs:{...Colors.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <EditableHeading type={EditableHeading.types.h1} value="H1 Header" customColor="blue" />\n      <EditableHeading type={EditableHeading.types.h2} value="H2 Header" customColor="red" />\n      <EditableHeading type={EditableHeading.types.h3} value="H3 Header" highlightTerm="head" customColor="#AA33FF" />\n    </>,\n  name: "Colors"\n}',...Colors.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","Types","Placeholder","TextHighlight","Colors"]},"./src/components/LegacyEditableHeading/__stories__/LegacyEditableHeading.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_home_runner_work_vibe_vibe_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),vibe_storybook_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../storybook-blocks/dist/src/components/deprecated-warning/deprecated-warning.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),_LegacyEditableHeading_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/LegacyEditableHeading/__stories__/LegacyEditableHeading.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",h2:"h2",p:"p",h3:"h3"},(0,_home_runner_work_vibe_vibe_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.RP)(),props.components),{StorybookLink,PropsTable,UsageGuidelines}=_components;return PropsTable||_missingMdxReference("PropsTable",!0),StorybookLink||_missingMdxReference("StorybookLink",!0),UsageGuidelines||_missingMdxReference("UsageGuidelines",!0),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.W8,{of:_LegacyEditableHeading_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"legacyeditableheading",children:"LegacyEditableHeading"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(vibe_storybook_components__WEBPACK_IMPORTED_MODULE_5__.A,{alternativeName:"EditableHeading",alternativeLink:"/?path=/docs/inputs-editableheading--docs",additionalContent:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:["For more information see the"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StorybookLink,{page:"Typography Migration Guide",size:StorybookLink.sizes.SMALL,children:"Typography Migration Guide"}),"."]})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#usage",children:"Usage"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#variants",children:"Variants"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#feedback",children:"Feedback"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"An extension of Heading component, it allows built in editing capabilities"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Hl,{of:_LegacyEditableHeading_stories__WEBPACK_IMPORTED_MODULE_4__.Overview}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PropsTable,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(UsageGuidelines,{guidelines:["Use when the title (Heading) is editable and you want to inline edit it","Always provide a meaningful placeholder","The component takes 100% of width and height of its container"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"heading-types",children:"Heading types"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Hl,{of:_LegacyEditableHeading_stories__WEBPACK_IMPORTED_MODULE_4__.Types}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"placeholder",children:"Placeholder"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Hl,{of:_LegacyEditableHeading_stories__WEBPACK_IMPORTED_MODULE_4__.Placeholder}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"with-text-highlight",children:"With text highlight"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Hl,{of:_LegacyEditableHeading_stories__WEBPACK_IMPORTED_MODULE_4__.TextHighlight}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"with-text-colors",children:"With text colors"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Hl,{of:_LegacyEditableHeading_stories__WEBPACK_IMPORTED_MODULE_4__.Colors})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_vibe_vibe_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}},"./src/__tests__/interactions-helper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>resetFocus});var _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/testing-library/dist/index.mjs");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function define(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{define({},"")}catch(t){define=function define(t,e,r){return t[e]=r}}function wrap(t,e,r,n){var i=e&&e.prototype instanceof Generator?e:Generator,a=Object.create(i.prototype),c=new Context(n||[]);return o(a,"_invoke",{value:makeInvokeMethod(t,r,c)}),a}function tryCatch(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=wrap;var h="suspendedStart",l="suspendedYield",f="executing",s="completed",y={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var p={};define(p,a,(function(){return this}));var d=Object.getPrototypeOf,v=d&&d(d(values([])));v&&v!==r&&n.call(v,a)&&(p=v);var g=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(p);function defineIteratorMethods(t){["next","throw","return"].forEach((function(e){define(t,e,(function(t){return this._invoke(e,t)}))}))}function AsyncIterator(t,e){function invoke(r,o,i,a){var c=tryCatch(t[r],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==_typeof(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){invoke("next",t,i,a)}),(function(t){invoke("throw",t,i,a)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return invoke("throw",t,i,a)}))}a(c.arg)}var r;o(this,"_invoke",{value:function value(t,n){function callInvokeWithMethodAndArg(){return new e((function(e,r){invoke(t,n,e,r)}))}return r=r?r.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(e,r,n){var o=h;return function(i,a){if(o===f)throw Error("Generator is already running");if(o===s){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=maybeInvokeDelegate(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=s,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=f;var p=tryCatch(e,r,n);if("normal"===p.type){if(o=n.done?s:l,p.arg===y)continue;return{value:p.arg,done:n.done}}"throw"===p.type&&(o=s,n.method="throw",n.arg=p.arg)}}}function maybeInvokeDelegate(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,maybeInvokeDelegate(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=tryCatch(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function pushTryEntry(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function resetTryEntry(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Context(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(pushTryEntry,this),this.reset(!0)}function values(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function next(){for(;++o<e.length;)if(n.call(e,o))return next.value=e[o],next.done=!1,next;return next.value=t,next.done=!0,next};return i.next=i}}throw new TypeError(_typeof(e)+" is not iterable")}return GeneratorFunction.prototype=GeneratorFunctionPrototype,o(g,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),o(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===GeneratorFunction||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,GeneratorFunctionPrototype):(t.__proto__=GeneratorFunctionPrototype,define(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},e.awrap=function(t){return{__await:t}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,c,(function(){return this})),e.AsyncIterator=AsyncIterator,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new AsyncIterator(wrap(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},defineIteratorMethods(g),define(g,u,"Generator"),define(g,a,(function(){return this})),define(g,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function next(){for(;r.length;){var t=r.pop();if(t in e)return next.value=t,next.done=!1,next}return next.done=!0,next}},e.values=values,Context.prototype={constructor:Context,reset:function reset(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(resetTryEntry),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function stop(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function dispatchException(e){if(this.done)throw e;var r=this;function handle(n,o){return a.type="throw",a.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return handle("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0);if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}}}},abrupt:function abrupt(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function complete(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function finish(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),resetTryEntry(r),y}},catch:function _catch(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;resetTryEntry(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function delegateYield(e,r,n){return this.delegate={iterator:values(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function resetFocus(){return _resetFocus.apply(this,arguments)}function _resetFocus(){return _resetFocus=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(_regeneratorRuntime().mark((function _callee(){var focusTrap;return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return focusTrap=document.querySelector("[data-testid=focusTrap]"),_context.next=3,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.Q4.click(focusTrap);case 3:case"end":return _context.stop()}}),_callee)}))),_resetFocus.apply(this,arguments)}}}]);