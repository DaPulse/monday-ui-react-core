/*! For license information please see components-EditableHeading-__stories__-EditableHeading-stories.ae88337d.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[1299],{"./src/components/EditableHeading/__stories__/EditableHeading.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,Types:()=>Types,__namedExportsOrder:()=>__namedExportsOrder,default:()=>EditableHeading_stories});__webpack_require__("../../node_modules/react/index.js");var EditableHeading=__webpack_require__("./src/components/EditableHeading/EditableHeading.tsx"),createStoryMetaSettingsDecorator=__webpack_require__("./src/storybook/functions/createStoryMetaSettingsDecorator.ts"),createComponentTemplate=__webpack_require__("../storybook-blocks/dist/src/functions/createComponentTemplate.js"),dist=__webpack_require__("../../node_modules/@storybook/jest/dist/index.mjs"),interactions_utils=__webpack_require__("./src/tests/interactions-utils.ts"),constants=__webpack_require__("./src/tests/constants.ts"),interactions_helper=__webpack_require__("./src/__tests__/interactions-helper.ts");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function define(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{define({},"")}catch(t){define=function define(t,e,r){return t[e]=r}}function wrap(t,e,r,n){var i=e&&e.prototype instanceof Generator?e:Generator,a=Object.create(i.prototype),c=new Context(n||[]);return o(a,"_invoke",{value:makeInvokeMethod(t,r,c)}),a}function tryCatch(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=wrap;var h="suspendedStart",l="suspendedYield",f="executing",s="completed",y={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var p={};define(p,a,(function(){return this}));var d=Object.getPrototypeOf,v=d&&d(d(values([])));v&&v!==r&&n.call(v,a)&&(p=v);var g=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(p);function defineIteratorMethods(t){["next","throw","return"].forEach((function(e){define(t,e,(function(t){return this._invoke(e,t)}))}))}function AsyncIterator(t,e){function invoke(r,o,i,a){var c=tryCatch(t[r],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==_typeof(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){invoke("next",t,i,a)}),(function(t){invoke("throw",t,i,a)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return invoke("throw",t,i,a)}))}a(c.arg)}var r;o(this,"_invoke",{value:function value(t,n){function callInvokeWithMethodAndArg(){return new e((function(e,r){invoke(t,n,e,r)}))}return r=r?r.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(e,r,n){var o=h;return function(i,a){if(o===f)throw Error("Generator is already running");if(o===s){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=maybeInvokeDelegate(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=s,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=f;var p=tryCatch(e,r,n);if("normal"===p.type){if(o=n.done?s:l,p.arg===y)continue;return{value:p.arg,done:n.done}}"throw"===p.type&&(o=s,n.method="throw",n.arg=p.arg)}}}function maybeInvokeDelegate(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,maybeInvokeDelegate(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=tryCatch(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function pushTryEntry(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function resetTryEntry(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Context(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(pushTryEntry,this),this.reset(!0)}function values(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function next(){for(;++o<e.length;)if(n.call(e,o))return next.value=e[o],next.done=!1,next;return next.value=t,next.done=!0,next};return i.next=i}}throw new TypeError(_typeof(e)+" is not iterable")}return GeneratorFunction.prototype=GeneratorFunctionPrototype,o(g,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),o(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===GeneratorFunction||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,GeneratorFunctionPrototype):(t.__proto__=GeneratorFunctionPrototype,define(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},e.awrap=function(t){return{__await:t}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,c,(function(){return this})),e.AsyncIterator=AsyncIterator,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new AsyncIterator(wrap(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},defineIteratorMethods(g),define(g,u,"Generator"),define(g,a,(function(){return this})),define(g,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function next(){for(;r.length;){var t=r.pop();if(t in e)return next.value=t,next.done=!1,next}return next.done=!0,next}},e.values=values,Context.prototype={constructor:Context,reset:function reset(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(resetTryEntry),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function stop(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function dispatchException(e){if(this.done)throw e;var r=this;function handle(n,o){return a.type="throw",a.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return handle("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0);if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}}}},abrupt:function abrupt(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function complete(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function finish(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),resetTryEntry(r),y}},catch:function _catch(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;resetTryEntry(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function delegateYield(e,r,n){return this.delegate={iterator:values(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}var CHANGES_DELAY=200,EditableHeading_interactions_text="This heading is an editable heading";function getComponent(canvas){return(0,interactions_utils.h5)(canvas,constants.w.EDITABLE_HEADING)}function getInput(canvas){return(0,interactions_utils.gy)(canvas,"input")}function _changeModes(){return(_changeModes=_asyncToGenerator(_regeneratorRuntime().mark((function _callee(canvas){var compponent,input,heading;return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,(0,interactions_utils.cb)(CHANGES_DELAY);case 2:return compponent=getComponent(canvas),(0,interactions_utils.jp)(compponent),_context.next=6,(0,interactions_utils.cb)(CHANGES_DELAY);case 6:return input=getInput(canvas),(0,dist.E)(input).toHaveAttribute("value",EditableHeading_interactions_text),_context.next=10,(0,interactions_helper.S)();case 10:heading=getComponent(canvas),(0,dist.E)(heading).toHaveTextContent(EditableHeading_interactions_text);case 12:case"end":return _context.stop()}}),_callee)})))).apply(this,arguments)}function _editAndChangeToValidText(){return(_editAndChangeToValidText=_asyncToGenerator(_regeneratorRuntime().mark((function _callee2(canvas){var compponent,input,heading;return _regeneratorRuntime().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return compponent=getComponent(canvas),(0,interactions_utils.jp)(compponent),_context2.next=4,(0,interactions_utils.cb)(CHANGES_DELAY);case 4:return input=getInput(canvas),_context2.next=7,(0,interactions_utils.Z8)(input);case 7:return _context2.next=9,(0,interactions_utils.wQ)(input,EditableHeading_interactions_text);case 9:return(0,dist.E)(input).toHaveAttribute("value",EditableHeading_interactions_text),_context2.next=12,(0,interactions_helper.S)();case 12:heading=getComponent(canvas),(0,dist.E)(heading).toHaveTextContent(EditableHeading_interactions_text);case 14:case"end":return _context2.stop()}}),_callee2)})))).apply(this,arguments)}function _clearInput(){return(_clearInput=_asyncToGenerator(_regeneratorRuntime().mark((function _callee3(canvas){var compponent,input,heading;return _regeneratorRuntime().wrap((function _callee3$(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:return compponent=getComponent(canvas),(0,interactions_utils.jp)(compponent),_context3.next=4,(0,interactions_utils.cb)(CHANGES_DELAY);case 4:return input=getInput(canvas),_context3.next=7,(0,interactions_utils.Z8)(input);case 7:return _context3.next=9,(0,interactions_helper.S)();case 9:heading=getComponent(canvas),(0,dist.E)(heading).toHaveTextContent(EditableHeading_interactions_text);case 11:case"end":return _context3.stop()}}),_callee3)})))).apply(this,arguments)}function _cancelEditing(){return(_cancelEditing=_asyncToGenerator(_regeneratorRuntime().mark((function _callee4(canvas){var compponent,input,textToChange,heading;return _regeneratorRuntime().wrap((function _callee4$(_context4){for(;;)switch(_context4.prev=_context4.next){case 0:return compponent=getComponent(canvas),(0,interactions_utils.jp)(compponent),_context4.next=4,(0,interactions_utils.cb)(CHANGES_DELAY);case 4:return input=getInput(canvas),_context4.next=7,(0,interactions_utils.Z8)(input);case 7:return _context4.next=9,(0,interactions_utils.cb)(CHANGES_DELAY);case 9:return textToChange="test",_context4.next=12,(0,interactions_utils.wQ)(input,textToChange);case 12:return(0,dist.E)(input).toHaveAttribute("value",textToChange),_context4.next=15,(0,interactions_utils.wQ)(input,"{Escape}");case 15:heading=getComponent(canvas),(0,dist.E)(heading).toHaveTextContent(EditableHeading_interactions_text);case 17:case"end":return _context4.stop()}}),_callee4)})))).apply(this,arguments)}var overviewPlaySuite=(0,interactions_utils.Ld)({tests:[function changeModes(_x){return _changeModes.apply(this,arguments)},function editAndChangeToValidText(_x2){return _editAndChangeToValidText.apply(this,arguments)},function clearInput(_x3){return _clearInput.apply(this,arguments)},function cancelEditing(_x4){return _cancelEditing.apply(this,arguments)}]});try{overviewPlaySuite.displayName="overviewPlaySuite",overviewPlaySuite.__docgenInfo={description:"",displayName:"overviewPlaySuite",props:{canvasElement:{defaultValue:null,description:"",name:"canvasElement",required:!0,type:{name:'Screen<typeof import("/home/runner/work/vibe/vibe/node_modules/@testing-library/react/node_modules/@testing-library/dom/types/queries")>'}},args:{defaultValue:null,description:"",name:"args",required:!0,type:{name:"Record<string, any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/EditableHeading/__tests__/EditableHeading-interactions.tsx#overviewPlaySuite"]={docgenInfo:overviewPlaySuite.__docgenInfo,name:"overviewPlaySuite",path:"src/components/EditableHeading/__tests__/EditableHeading-interactions.tsx#overviewPlaySuite"})}catch(__react_docgen_typescript_loader_error){}var injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),EditableHeading_stories_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[16].use[3]!./src/components/EditableHeading/__stories__/EditableHeading.stories.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(EditableHeading_stories_module.A,options);const _stories_EditableHeading_stories_module=EditableHeading_stories_module.A&&EditableHeading_stories_module.A.locals?EditableHeading_stories_module.A.locals:void 0;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),metaSettings=(0,createStoryMetaSettingsDecorator.B)({component:EditableHeading.A,enumPropNamesArray:["weight","type"],actionPropsArray:["onChange"]});const EditableHeading_stories={parameters:{storySource:{source:'import React from "react";\nimport EditableHeading from "../EditableHeading";\nimport { createStoryMetaSettingsDecorator } from "../../../storybook";\nimport { createComponentTemplate } from "vibe-storybook-components";\nimport { overviewPlaySuite } from "../__tests__/EditableHeading-interactions";\nimport styles from "./EditableHeading.stories.module.scss";\n\nconst metaSettings = createStoryMetaSettingsDecorator({\n  component: EditableHeading,\n  enumPropNamesArray: ["weight", "type"],\n  actionPropsArray: ["onChange"]\n});\n\nexport default {\n  title: "Inputs/EditableHeading",\n  component: EditableHeading,\n  argTypes: metaSettings.argTypes,\n  decorators: metaSettings.decorators\n};\n\nconst editableHeadingTemplate = createComponentTemplate(EditableHeading);\n\nexport const Overview = {\n  render: editableHeadingTemplate.bind({}),\n  args: {\n    value: "This heading is an editable heading",\n    type: EditableHeading.types.H1\n  },\n  play: overviewPlaySuite,\n  parameters: {\n    docs: {\n      liveEdit: {\n        isEnabled: false\n      }\n    }\n  }\n};\n\nexport const Types = {\n  render: () => (\n    <div className={styles.typesContainer}>\n      <div className={styles.typeContainer}>\n        <EditableHeading\n          type={EditableHeading.types.H1}\n          weight={EditableHeading.weights.LIGHT}\n          value="H1 Light"\n          className={styles.editableHeading}\n        />\n        <EditableHeading\n          type={EditableHeading.types.H1}\n          weight={EditableHeading.weights.NORMAL}\n          value="H1 Normal"\n          className={styles.editableHeading}\n        />\n        <EditableHeading\n          type={EditableHeading.types.H1}\n          weight={EditableHeading.weights.MEDIUM}\n          value="H1 Medium"\n          className={styles.editableHeading}\n        />\n        <EditableHeading\n          type={EditableHeading.types.H1}\n          weight={EditableHeading.weights.BOLD}\n          value="H1 Bold"\n          className={styles.editableHeading}\n        />\n      </div>\n      <div className={styles.typeContainer}>\n        <EditableHeading\n          type={EditableHeading.types.H2}\n          weight={EditableHeading.weights.LIGHT}\n          value="H2 Light"\n          className={styles.editableHeading}\n        />\n        <EditableHeading\n          type={EditableHeading.types.H2}\n          weight={EditableHeading.weights.NORMAL}\n          value="H2 Normal"\n          className={styles.editableHeading}\n        />\n        <EditableHeading\n          type={EditableHeading.types.H2}\n          weight={EditableHeading.weights.MEDIUM}\n          value="H2 Medium"\n          className={styles.editableHeading}\n        />\n        <EditableHeading\n          type={EditableHeading.types.H2}\n          weight={EditableHeading.weights.BOLD}\n          value="H2 Bold"\n          className={styles.editableHeading}\n        />\n      </div>\n      <div className={styles.typeContainer}>\n        <EditableHeading\n          type={EditableHeading.types.H3}\n          weight={EditableHeading.weights.LIGHT}\n          value="H3 Light"\n          className={styles.editableHeading}\n        />\n        <EditableHeading\n          type={EditableHeading.types.H3}\n          weight={EditableHeading.weights.NORMAL}\n          value="H3 Normal"\n          className={styles.editableHeading}\n        />\n        <EditableHeading\n          type={EditableHeading.types.H3}\n          weight={EditableHeading.weights.MEDIUM}\n          value="H3 Medium"\n          className={styles.editableHeading}\n        />\n        <EditableHeading\n          type={EditableHeading.types.H3}\n          weight={EditableHeading.weights.BOLD}\n          value="H3 Bold"\n          className={styles.editableHeading}\n        />\n      </div>\n    </div>\n  ),\n  parameters: {\n    docs: {\n      liveEdit: {\n        scope: { EditableHeading }\n      }\n    }\n  }\n};\n',locationsMap:{overview:{startLoc:{col:24,line:23},endLoc:{col:1,line:37},startBody:{col:24,line:23},endBody:{col:1,line:37}},types:{startLoc:{col:21,line:39},endLoc:{col:1,line:129},startBody:{col:21,line:39},endBody:{col:1,line:129}}}}},title:"Inputs/EditableHeading",component:EditableHeading.A,argTypes:metaSettings.argTypes,decorators:metaSettings.decorators};var Overview={render:(0,createComponentTemplate.M)(EditableHeading.A).bind({}),args:{value:"This heading is an editable heading",type:EditableHeading.A.types.H1},play:overviewPlaySuite,parameters:{docs:{liveEdit:{isEnabled:!1}}}},Types={render:function render(){return(0,jsx_runtime.jsxs)("div",{className:_stories_EditableHeading_stories_module.typesContainer,children:[(0,jsx_runtime.jsxs)("div",{className:_stories_EditableHeading_stories_module.typeContainer,children:[(0,jsx_runtime.jsx)(EditableHeading.A,{type:EditableHeading.A.types.H1,weight:EditableHeading.A.weights.LIGHT,value:"H1 Light",className:_stories_EditableHeading_stories_module.editableHeading}),(0,jsx_runtime.jsx)(EditableHeading.A,{type:EditableHeading.A.types.H1,weight:EditableHeading.A.weights.NORMAL,value:"H1 Normal",className:_stories_EditableHeading_stories_module.editableHeading}),(0,jsx_runtime.jsx)(EditableHeading.A,{type:EditableHeading.A.types.H1,weight:EditableHeading.A.weights.MEDIUM,value:"H1 Medium",className:_stories_EditableHeading_stories_module.editableHeading}),(0,jsx_runtime.jsx)(EditableHeading.A,{type:EditableHeading.A.types.H1,weight:EditableHeading.A.weights.BOLD,value:"H1 Bold",className:_stories_EditableHeading_stories_module.editableHeading})]}),(0,jsx_runtime.jsxs)("div",{className:_stories_EditableHeading_stories_module.typeContainer,children:[(0,jsx_runtime.jsx)(EditableHeading.A,{type:EditableHeading.A.types.H2,weight:EditableHeading.A.weights.LIGHT,value:"H2 Light",className:_stories_EditableHeading_stories_module.editableHeading}),(0,jsx_runtime.jsx)(EditableHeading.A,{type:EditableHeading.A.types.H2,weight:EditableHeading.A.weights.NORMAL,value:"H2 Normal",className:_stories_EditableHeading_stories_module.editableHeading}),(0,jsx_runtime.jsx)(EditableHeading.A,{type:EditableHeading.A.types.H2,weight:EditableHeading.A.weights.MEDIUM,value:"H2 Medium",className:_stories_EditableHeading_stories_module.editableHeading}),(0,jsx_runtime.jsx)(EditableHeading.A,{type:EditableHeading.A.types.H2,weight:EditableHeading.A.weights.BOLD,value:"H2 Bold",className:_stories_EditableHeading_stories_module.editableHeading})]}),(0,jsx_runtime.jsxs)("div",{className:_stories_EditableHeading_stories_module.typeContainer,children:[(0,jsx_runtime.jsx)(EditableHeading.A,{type:EditableHeading.A.types.H3,weight:EditableHeading.A.weights.LIGHT,value:"H3 Light",className:_stories_EditableHeading_stories_module.editableHeading}),(0,jsx_runtime.jsx)(EditableHeading.A,{type:EditableHeading.A.types.H3,weight:EditableHeading.A.weights.NORMAL,value:"H3 Normal",className:_stories_EditableHeading_stories_module.editableHeading}),(0,jsx_runtime.jsx)(EditableHeading.A,{type:EditableHeading.A.types.H3,weight:EditableHeading.A.weights.MEDIUM,value:"H3 Medium",className:_stories_EditableHeading_stories_module.editableHeading}),(0,jsx_runtime.jsx)(EditableHeading.A,{type:EditableHeading.A.types.H3,weight:EditableHeading.A.weights.BOLD,value:"H3 Bold",className:_stories_EditableHeading_stories_module.editableHeading})]})]})},parameters:{docs:{liveEdit:{scope:{EditableHeading:EditableHeading.A}}}}};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: editableHeadingTemplate.bind({}),\n  args: {\n    value: "This heading is an editable heading",\n    type: EditableHeading.types.H1\n  },\n  play: overviewPlaySuite,\n  parameters: {\n    docs: {\n      liveEdit: {\n        isEnabled: false\n      }\n    }\n  }\n}',...Overview.parameters?.docs?.source}}},Types.parameters={...Types.parameters,docs:{...Types.parameters?.docs,source:{originalSource:'{\n  render: () => <div className={styles.typesContainer}>\n      <div className={styles.typeContainer}>\n        <EditableHeading type={EditableHeading.types.H1} weight={EditableHeading.weights.LIGHT} value="H1 Light" className={styles.editableHeading} />\n        <EditableHeading type={EditableHeading.types.H1} weight={EditableHeading.weights.NORMAL} value="H1 Normal" className={styles.editableHeading} />\n        <EditableHeading type={EditableHeading.types.H1} weight={EditableHeading.weights.MEDIUM} value="H1 Medium" className={styles.editableHeading} />\n        <EditableHeading type={EditableHeading.types.H1} weight={EditableHeading.weights.BOLD} value="H1 Bold" className={styles.editableHeading} />\n      </div>\n      <div className={styles.typeContainer}>\n        <EditableHeading type={EditableHeading.types.H2} weight={EditableHeading.weights.LIGHT} value="H2 Light" className={styles.editableHeading} />\n        <EditableHeading type={EditableHeading.types.H2} weight={EditableHeading.weights.NORMAL} value="H2 Normal" className={styles.editableHeading} />\n        <EditableHeading type={EditableHeading.types.H2} weight={EditableHeading.weights.MEDIUM} value="H2 Medium" className={styles.editableHeading} />\n        <EditableHeading type={EditableHeading.types.H2} weight={EditableHeading.weights.BOLD} value="H2 Bold" className={styles.editableHeading} />\n      </div>\n      <div className={styles.typeContainer}>\n        <EditableHeading type={EditableHeading.types.H3} weight={EditableHeading.weights.LIGHT} value="H3 Light" className={styles.editableHeading} />\n        <EditableHeading type={EditableHeading.types.H3} weight={EditableHeading.weights.NORMAL} value="H3 Normal" className={styles.editableHeading} />\n        <EditableHeading type={EditableHeading.types.H3} weight={EditableHeading.weights.MEDIUM} value="H3 Medium" className={styles.editableHeading} />\n        <EditableHeading type={EditableHeading.types.H3} weight={EditableHeading.weights.BOLD} value="H3 Bold" className={styles.editableHeading} />\n      </div>\n    </div>,\n  parameters: {\n    docs: {\n      liveEdit: {\n        scope: {\n          EditableHeading\n        }\n      }\n    }\n  }\n}',...Types.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","Types"]},"../storybook-blocks/dist/src/functions/createComponentTemplate.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>r});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function r(r){return function(e){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r,Object.assign({},e))}}},"./src/__tests__/interactions-helper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>resetFocus});var _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/testing-library/dist/index.mjs");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function define(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{define({},"")}catch(t){define=function define(t,e,r){return t[e]=r}}function wrap(t,e,r,n){var i=e&&e.prototype instanceof Generator?e:Generator,a=Object.create(i.prototype),c=new Context(n||[]);return o(a,"_invoke",{value:makeInvokeMethod(t,r,c)}),a}function tryCatch(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=wrap;var h="suspendedStart",l="suspendedYield",f="executing",s="completed",y={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var p={};define(p,a,(function(){return this}));var d=Object.getPrototypeOf,v=d&&d(d(values([])));v&&v!==r&&n.call(v,a)&&(p=v);var g=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(p);function defineIteratorMethods(t){["next","throw","return"].forEach((function(e){define(t,e,(function(t){return this._invoke(e,t)}))}))}function AsyncIterator(t,e){function invoke(r,o,i,a){var c=tryCatch(t[r],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==_typeof(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){invoke("next",t,i,a)}),(function(t){invoke("throw",t,i,a)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return invoke("throw",t,i,a)}))}a(c.arg)}var r;o(this,"_invoke",{value:function value(t,n){function callInvokeWithMethodAndArg(){return new e((function(e,r){invoke(t,n,e,r)}))}return r=r?r.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(e,r,n){var o=h;return function(i,a){if(o===f)throw Error("Generator is already running");if(o===s){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=maybeInvokeDelegate(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=s,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=f;var p=tryCatch(e,r,n);if("normal"===p.type){if(o=n.done?s:l,p.arg===y)continue;return{value:p.arg,done:n.done}}"throw"===p.type&&(o=s,n.method="throw",n.arg=p.arg)}}}function maybeInvokeDelegate(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,maybeInvokeDelegate(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=tryCatch(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function pushTryEntry(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function resetTryEntry(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Context(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(pushTryEntry,this),this.reset(!0)}function values(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function next(){for(;++o<e.length;)if(n.call(e,o))return next.value=e[o],next.done=!1,next;return next.value=t,next.done=!0,next};return i.next=i}}throw new TypeError(_typeof(e)+" is not iterable")}return GeneratorFunction.prototype=GeneratorFunctionPrototype,o(g,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),o(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===GeneratorFunction||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,GeneratorFunctionPrototype):(t.__proto__=GeneratorFunctionPrototype,define(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},e.awrap=function(t){return{__await:t}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,c,(function(){return this})),e.AsyncIterator=AsyncIterator,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new AsyncIterator(wrap(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},defineIteratorMethods(g),define(g,u,"Generator"),define(g,a,(function(){return this})),define(g,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function next(){for(;r.length;){var t=r.pop();if(t in e)return next.value=t,next.done=!1,next}return next.done=!0,next}},e.values=values,Context.prototype={constructor:Context,reset:function reset(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(resetTryEntry),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function stop(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function dispatchException(e){if(this.done)throw e;var r=this;function handle(n,o){return a.type="throw",a.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return handle("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0);if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}}}},abrupt:function abrupt(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function complete(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function finish(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),resetTryEntry(r),y}},catch:function _catch(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;resetTryEntry(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function delegateYield(e,r,n){return this.delegate={iterator:values(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function resetFocus(){return _resetFocus.apply(this,arguments)}function _resetFocus(){return _resetFocus=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(_regeneratorRuntime().mark((function _callee(){var focusTrap;return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return focusTrap=document.querySelector("[data-testid=focusTrap]"),_context.next=3,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.Q4.click(focusTrap);case 3:case"end":return _context.stop()}}),_callee)}))),_resetFocus.apply(this,arguments)}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[16].use[3]!./src/components/EditableHeading/__stories__/EditableHeading.stories.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".EditableHeading-stories-module_typesContainer{display:flex;flex-direction:column;gap:var(--sb-spacing-large)}.EditableHeading-stories-module_typesContainer .EditableHeading-stories-module_typeContainer{display:flex;align-items:center;justify-content:flex-start;gap:100px}.EditableHeading-stories-module_typesContainer .EditableHeading-stories-module_typeContainer .EditableHeading-stories-module_editableHeading{width:200px}.EditableHeading-stories-module_typesContainer .EditableHeading-stories-module_typeContainer .EditableHeading-stories-module_editableHeading:first-child{width:125px}","",{version:3,sources:["webpack://./src/components/EditableHeading/__stories__/EditableHeading.stories.module.scss"],names:[],mappings:"AAAA,+CACE,YAAA,CACA,qBAAA,CACA,2BAAA,CAEA,6FACE,YAAA,CACA,kBAAA,CACA,0BAAA,CACA,SAAA,CAEA,6IACE,WAAA,CAGF,yJACE,WAAA",sourcesContent:[".typesContainer {\n  display: flex;\n  flex-direction: column;\n  gap: var(--sb-spacing-large);\n\n  .typeContainer {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 100px;\n\n    .editableHeading {\n      width: 200px;\n    }\n\n    .editableHeading:first-child {\n      width: 125px;\n    }\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={typesContainer:"EditableHeading-stories-module_typesContainer",typeContainer:"EditableHeading-stories-module_typeContainer",editableHeading:"EditableHeading-stories-module_editableHeading"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);