/*! For license information please see hooks-useActiveDescendantListFocus-__stories__-useActiveDescendantListFocus-stories.e2c18dce.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[767],{"./src/hooks/useActiveDescendantListFocus/__stories__/useActiveDescendantListFocus.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>useActiveDescendantListFocus_stories});var react=__webpack_require__("../../node_modules/react/index.js"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),Flex=__webpack_require__("./src/components/Flex/Flex.tsx"),Search=__webpack_require__("./src/components/Search/Search.tsx"),useActiveDescendantListFocus=__webpack_require__("./src/hooks/useActiveDescendantListFocus/index.ts"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),UseActiveDescendantListFocus=function UseActiveDescendantListFocus(_ref){_ref.focusedElementRef,_ref.itemsIds,_ref.isItemSelectable,_ref.onItemClick,_ref.focusedElementRole,_ref.isHorizontalList,_ref.useDocumentEventListeners;return(0,jsx_runtime.jsx)("div",{})};UseActiveDescendantListFocus.displayName="UseActiveDescendantListFocus",UseActiveDescendantListFocus.defaultProps={itemsIds:[],isItemSelectable:function isItemSelectable(_itemIndex){},onItemClick:function onItemClick(_event,_itemIndex){},focusedElementRole:useActiveDescendantListFocus.A.roles.GROUP,isHorizontalList:!1,isIgnoreSpaceAsItemSelection:!1};const hooksDummyComponents_UseActiveDescendantListFocus=UseActiveDescendantListFocus;UseActiveDescendantListFocus.__docgenInfo={description:"",methods:[],displayName:"UseActiveDescendantListFocus",props:{itemsIds:{defaultValue:{value:"[]",computed:!1},description:"Array of all the ids of the items inside the active descendant list component",type:{name:"arrayOf",value:{name:"string"}},required:!1},isItemSelectable:{defaultValue:{value:"_itemIndex => {}",computed:!1},description:"Function which return for a specific Item index if the user can select it or not.",type:{name:"func"},required:!1},onItemClick:{defaultValue:{value:"(_event, _itemIndex) => {}",computed:!1},description:"Callback function for clicking on one of the active descendant list items",type:{name:"func"},required:!1},focusedElementRole:{defaultValue:{value:"useActiveDescendantListFocus.roles.GROUP",computed:!0},description:"The HTML role of the natural focus element",type:{name:"enum",value:[{value:"useActiveDescendantListFocus.roles.APPLICATION",computed:!0},{value:"useActiveDescendantListFocus.roles.GROUP",computed:!0},{value:"useActiveDescendantListFocus.roles.COMBOBOX",computed:!0},{value:"useActiveDescendantListFocus.roles.COMPOSITE",computed:!0},{value:"useActiveDescendantListFocus.roles.TEXTBOX",computed:!0},{value:"useActiveDescendantListFocus.roles.MENU",computed:!0}]},required:!1},isHorizontalList:{defaultValue:{value:"false",computed:!1},description:"Is the layout of the component option's is horizontal or vertical",type:{name:"bool"},required:!1},isIgnoreSpaceAsItemSelection:{defaultValue:{value:"false",computed:!1},description:"Press space when there is a visual focus on one of the list items will not trigger press event",type:{name:"bool"},required:!1},focusedElementRef:{description:"The reference for the component that listens to keyboard and will be naturally focus.",type:{name:"shape",value:{current:{name:"element",required:!1}}},required:!0}}};var interactions_helper=__webpack_require__("./src/__tests__/interactions-helper.ts"),dist=__webpack_require__("../../node_modules/@storybook/jest/dist/index.mjs"),interactions_utils=__webpack_require__("./src/tests/interactions-utils.ts"),constants=__webpack_require__("./src/tests/constants.ts"),test_ids_utils=__webpack_require__("./src/tests/test-ids-utils.ts"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),useActiveDescendantListFocus_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[16].use[3]!./src/hooks/useActiveDescendantListFocus/__stories__/useActiveDescendantListFocus.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(useActiveDescendantListFocus_module.A,options);const _stories_useActiveDescendantListFocus_module=useActiveDescendantListFocus_module.A&&useActiveDescendantListFocus_module.A.locals?useActiveDescendantListFocus_module.A.locals:void 0;function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function define(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{define({},"")}catch(t){define=function define(t,e,r){return t[e]=r}}function wrap(t,e,r,n){var i=e&&e.prototype instanceof Generator?e:Generator,a=Object.create(i.prototype),c=new Context(n||[]);return o(a,"_invoke",{value:makeInvokeMethod(t,r,c)}),a}function tryCatch(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=wrap;var h="suspendedStart",l="suspendedYield",f="executing",s="completed",y={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var p={};define(p,a,(function(){return this}));var d=Object.getPrototypeOf,v=d&&d(d(values([])));v&&v!==r&&n.call(v,a)&&(p=v);var g=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(p);function defineIteratorMethods(t){["next","throw","return"].forEach((function(e){define(t,e,(function(t){return this._invoke(e,t)}))}))}function AsyncIterator(t,e){function invoke(r,o,i,a){var c=tryCatch(t[r],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==_typeof(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){invoke("next",t,i,a)}),(function(t){invoke("throw",t,i,a)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return invoke("throw",t,i,a)}))}a(c.arg)}var r;o(this,"_invoke",{value:function value(t,n){function callInvokeWithMethodAndArg(){return new e((function(e,r){invoke(t,n,e,r)}))}return r=r?r.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(e,r,n){var o=h;return function(i,a){if(o===f)throw Error("Generator is already running");if(o===s){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=maybeInvokeDelegate(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=s,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=f;var p=tryCatch(e,r,n);if("normal"===p.type){if(o=n.done?s:l,p.arg===y)continue;return{value:p.arg,done:n.done}}"throw"===p.type&&(o=s,n.method="throw",n.arg=p.arg)}}}function maybeInvokeDelegate(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,maybeInvokeDelegate(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=tryCatch(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function pushTryEntry(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function resetTryEntry(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Context(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(pushTryEntry,this),this.reset(!0)}function values(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function next(){for(;++o<e.length;)if(n.call(e,o))return next.value=e[o],next.done=!1,next;return next.value=t,next.done=!0,next};return i.next=i}}throw new TypeError(_typeof(e)+" is not iterable")}return GeneratorFunction.prototype=GeneratorFunctionPrototype,o(g,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),o(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===GeneratorFunction||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,GeneratorFunctionPrototype):(t.__proto__=GeneratorFunctionPrototype,define(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},e.awrap=function(t){return{__await:t}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,c,(function(){return this})),e.AsyncIterator=AsyncIterator,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new AsyncIterator(wrap(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},defineIteratorMethods(g),define(g,u,"Generator"),define(g,a,(function(){return this})),define(g,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function next(){for(;r.length;){var t=r.pop();if(t in e)return next.value=t,next.done=!1,next}return next.done=!0,next}},e.values=values,Context.prototype={constructor:Context,reset:function reset(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(resetTryEntry),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function stop(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function dispatchException(e){if(this.done)throw e;var r=this;function handle(n,o){return a.type="throw",a.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return handle("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0);if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}}}},abrupt:function abrupt(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function complete(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function finish(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),resetTryEntry(r),y}},catch:function _catch(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;resetTryEntry(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function delegateYield(e,r,n){return this.delegate={iterator:values(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}var _afterEach,overviewInteractionSuite=(0,interactions_utils.Ld)({tests:[function keyboardNavAndFocusForVerticalList(_x4){return _keyboardNavAndFocusForVerticalList.apply(this,arguments)}],afterEach:(_afterEach=_asyncToGenerator(_regeneratorRuntime().mark((function _callee(){return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,(0,interactions_helper.S)();case 2:case"end":return _context.stop()}}),_callee)}))),function afterEach(){return _afterEach.apply(this,arguments)})});function getSearchElement(_x){return _getSearchElement.apply(this,arguments)}function _getSearchElement(){return(_getSearchElement=_asyncToGenerator(_regeneratorRuntime().mark((function _callee2(canvas){return _regeneratorRuntime().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return _context2.next=2,(0,interactions_utils.h5)(canvas,(0,test_ids_utils.G)(constants.w.SEARCH));case 2:return _context2.abrupt("return",_context2.sent);case 3:case"end":return _context2.stop()}}),_callee2)})))).apply(this,arguments)}function expectElementToBeNaturallyFocused(_x2){return _expectElementToBeNaturallyFocused.apply(this,arguments)}function _expectElementToBeNaturallyFocused(){return(_expectElementToBeNaturallyFocused=_asyncToGenerator(_regeneratorRuntime().mark((function _callee3(element){return _regeneratorRuntime().wrap((function _callee3$(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:(0,dist.E)(document.activeElement).toEqual(element);case 1:case"end":return _context3.stop()}}),_callee3)})))).apply(this,arguments)}function expectElementVisuallyFocusedByText(_x3){return _expectElementVisuallyFocusedByText.apply(this,arguments)}function _expectElementVisuallyFocusedByText(){return(_expectElementVisuallyFocusedByText=_asyncToGenerator(_regeneratorRuntime().mark((function _callee4(text){var activeElements;return _regeneratorRuntime().wrap((function _callee4$(_context4){for(;;)switch(_context4.prev=_context4.next){case 0:activeElements=document.getElementsByClassName(_stories_useActiveDescendantListFocus_module.visualFocus),(0,dist.E)(activeElements).toHaveLength(1),(0,dist.E)(activeElements[0]).toHaveTextContent(text);case 3:case"end":return _context4.stop()}}),_callee4)})))).apply(this,arguments)}function _keyboardNavAndFocusForVerticalList(){return(_keyboardNavAndFocusForVerticalList=_asyncToGenerator(_regeneratorRuntime().mark((function _callee5(canvas){var element;return _regeneratorRuntime().wrap((function _callee5$(_context5){for(;;)switch(_context5.prev=_context5.next){case 0:return _context5.next=2,getSearchElement(canvas);case 2:return(element=_context5.sent).focus(),_context5.next=6,(0,interactions_utils.vZ)(constants.G.DOWN_ARROW);case 6:return _context5.next=8,expectElementVisuallyFocusedByText("Item 1");case 8:return _context5.next=10,expectElementToBeNaturallyFocused(element);case 10:return _context5.next=12,(0,interactions_utils.vZ)(constants.G.DOWN_ARROW);case 12:return _context5.next=14,expectElementVisuallyFocusedByText("Item 2");case 14:return _context5.next=16,expectElementToBeNaturallyFocused(element);case 16:return _context5.next=18,(0,interactions_utils.vZ)(constants.G.UP_ARROW);case 18:return _context5.next=20,expectElementVisuallyFocusedByText("Item 1");case 20:return _context5.next=22,expectElementToBeNaturallyFocused(element);case 22:return _context5.next=24,(0,interactions_utils.vZ)(constants.G.UP_ARROW);case 24:return _context5.next=26,expectElementVisuallyFocusedByText("Item 3");case 26:return _context5.next=28,expectElementToBeNaturallyFocused(element);case 28:return _context5.next=30,(0,interactions_utils.vZ)(constants.G.DOWN_ARROW);case 30:return _context5.next=32,expectElementVisuallyFocusedByText("Item 1");case 32:return _context5.next=34,expectElementToBeNaturallyFocused(element);case 34:case"end":return _context5.stop()}}),_callee5)})))).apply(this,arguments)}function useActiveDescendantListFocus_stories_typeof(o){return useActiveDescendantListFocus_stories_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},useActiveDescendantListFocus_stories_typeof(o)}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=useActiveDescendantListFocus_stories_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=useActiveDescendantListFocus_stories_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==useActiveDescendantListFocus_stories_typeof(i)?i:i+""}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const useActiveDescendantListFocus_stories={title:"Hooks/useActiveDescendantListFocus",component:hooksDummyComponents_UseActiveDescendantListFocus};var Overview={render:function render(){var focusedElementRef=(0,react.useRef)(null),isItemSelectable=(0,react.useCallback)((function(){return!0}),[]),onItemClick=(0,react.useCallback)((function(){alert("clicked")}),[]),_useActiveDescendantL=(0,useActiveDescendantListFocus.A)({focusedElementRef,focusedElementRole:useActiveDescendantListFocus.A.roles.COMBOBOX,itemsIds:["id-1","id-2","id-3"],onItemClick,isItemSelectable,isHorizontalList:!1,isIgnoreSpaceAsItemSelection:!0}),focusedElementProps=_useActiveDescendantL.focusedElementProps,visualFocusItemId=_useActiveDescendantL.visualFocusItemId;return(0,jsx_runtime.jsxs)(Flex.A,{direction:Flex.A.directions.COLUMN,children:[(0,jsx_runtime.jsx)(Search.A,{ref:focusedElementRef,role:focusedElementProps.role,currentAriaResultId:focusedElementProps["aria-activedescendant"]}),(0,jsx_runtime.jsxs)("ul",{children:[(0,jsx_runtime.jsx)("li",{onClick:onItemClick,className:classnames_default()(_defineProperty({},_stories_useActiveDescendantListFocus_module.visualFocus,"id-1"===visualFocusItemId)),id:"id-1",children:"Item 1"},"id-1"),(0,jsx_runtime.jsx)("li",{onClick:onItemClick,className:classnames_default()(_defineProperty({},_stories_useActiveDescendantListFocus_module.visualFocus,"id-2"===visualFocusItemId)),id:"id-2",children:"Item 2"},"id-2"),(0,jsx_runtime.jsx)("li",{onClick:onItemClick,className:classnames_default()(_defineProperty({},_stories_useActiveDescendantListFocus_module.visualFocus,"id-3"===visualFocusItemId)),id:"id-3",children:"Item 3"},"id-3")]})]})},name:"Overview",play:overviewInteractionSuite};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const focusedElementRef = useRef<HTMLInputElement | null>(null);\n    const itemsIds: string[] = ["id-1", "id-2", "id-3"];\n    const isItemSelectable = useCallback((): boolean => true, []);\n    const onItemClick = useCallback((): void => {\n      alert("clicked");\n    }, []);\n    const {\n      focusedElementProps,\n      visualFocusItemId\n    } = useActiveDescendantListFocus({\n      focusedElementRef,\n      focusedElementRole: useActiveDescendantListFocus.roles.COMBOBOX,\n      itemsIds,\n      onItemClick,\n      isItemSelectable,\n      isHorizontalList: false,\n      isIgnoreSpaceAsItemSelection: true\n    });\n    return <Flex direction={Flex.directions.COLUMN}>\n        <Search ref={focusedElementRef} role={focusedElementProps.role} currentAriaResultId={focusedElementProps["aria-activedescendant"]} />\n        <ul>\n          <li onClick={onItemClick} className={cx({\n          [styles.visualFocus]: visualFocusItemId === "id-1"\n        })} id="id-1" key="id-1">\n            Item 1\n          </li>\n          <li onClick={onItemClick} className={cx({\n          [styles.visualFocus]: visualFocusItemId === "id-2"\n        })} id="id-2" key="id-2">\n            Item 2\n          </li>\n          <li onClick={onItemClick} className={cx({\n          [styles.visualFocus]: visualFocusItemId === "id-3"\n        })} id="id-3" key="id-3">\n            Item 3\n          </li>\n        </ul>\n      </Flex>;\n  },\n  name: "Overview",\n  play: overviewInteractionSuite\n}',...Overview.parameters?.docs?.source}}};const __namedExportsOrder=["Overview"]},"./src/__tests__/interactions-helper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>resetFocus});var _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/testing-library/dist/index.mjs");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function define(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{define({},"")}catch(t){define=function define(t,e,r){return t[e]=r}}function wrap(t,e,r,n){var i=e&&e.prototype instanceof Generator?e:Generator,a=Object.create(i.prototype),c=new Context(n||[]);return o(a,"_invoke",{value:makeInvokeMethod(t,r,c)}),a}function tryCatch(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=wrap;var h="suspendedStart",l="suspendedYield",f="executing",s="completed",y={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var p={};define(p,a,(function(){return this}));var d=Object.getPrototypeOf,v=d&&d(d(values([])));v&&v!==r&&n.call(v,a)&&(p=v);var g=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(p);function defineIteratorMethods(t){["next","throw","return"].forEach((function(e){define(t,e,(function(t){return this._invoke(e,t)}))}))}function AsyncIterator(t,e){function invoke(r,o,i,a){var c=tryCatch(t[r],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==_typeof(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){invoke("next",t,i,a)}),(function(t){invoke("throw",t,i,a)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return invoke("throw",t,i,a)}))}a(c.arg)}var r;o(this,"_invoke",{value:function value(t,n){function callInvokeWithMethodAndArg(){return new e((function(e,r){invoke(t,n,e,r)}))}return r=r?r.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(e,r,n){var o=h;return function(i,a){if(o===f)throw Error("Generator is already running");if(o===s){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=maybeInvokeDelegate(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=s,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=f;var p=tryCatch(e,r,n);if("normal"===p.type){if(o=n.done?s:l,p.arg===y)continue;return{value:p.arg,done:n.done}}"throw"===p.type&&(o=s,n.method="throw",n.arg=p.arg)}}}function maybeInvokeDelegate(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,maybeInvokeDelegate(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=tryCatch(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function pushTryEntry(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function resetTryEntry(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Context(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(pushTryEntry,this),this.reset(!0)}function values(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function next(){for(;++o<e.length;)if(n.call(e,o))return next.value=e[o],next.done=!1,next;return next.value=t,next.done=!0,next};return i.next=i}}throw new TypeError(_typeof(e)+" is not iterable")}return GeneratorFunction.prototype=GeneratorFunctionPrototype,o(g,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),o(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===GeneratorFunction||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,GeneratorFunctionPrototype):(t.__proto__=GeneratorFunctionPrototype,define(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},e.awrap=function(t){return{__await:t}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,c,(function(){return this})),e.AsyncIterator=AsyncIterator,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new AsyncIterator(wrap(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},defineIteratorMethods(g),define(g,u,"Generator"),define(g,a,(function(){return this})),define(g,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function next(){for(;r.length;){var t=r.pop();if(t in e)return next.value=t,next.done=!1,next}return next.done=!0,next}},e.values=values,Context.prototype={constructor:Context,reset:function reset(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(resetTryEntry),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function stop(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function dispatchException(e){if(this.done)throw e;var r=this;function handle(n,o){return a.type="throw",a.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return handle("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0);if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}}}},abrupt:function abrupt(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function complete(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function finish(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),resetTryEntry(r),y}},catch:function _catch(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;resetTryEntry(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function delegateYield(e,r,n){return this.delegate={iterator:values(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function resetFocus(){return _resetFocus.apply(this,arguments)}function _resetFocus(){return _resetFocus=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(_regeneratorRuntime().mark((function _callee(){var focusTrap;return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return focusTrap=document.querySelector("[data-testid=focusTrap]"),_context.next=3,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.Q4.click(focusTrap);case 3:case"end":return _context.stop()}}),_callee)}))),_resetFocus.apply(this,arguments)}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[16].use[3]!./src/hooks/useActiveDescendantListFocus/__stories__/useActiveDescendantListFocus.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".useActiveDescendantListFocus-module_visualFocus{outline:none;z-index:11;border-radius:4px;box-shadow:0 0 0 3px rgba(0,132,255,.5),0 0 0 1px var(--primary-hover-color) inset}","",{version:3,sources:["webpack://./src/hooks/useActiveDescendantListFocus/__stories__/useActiveDescendantListFocus.module.scss","webpack://./src/styles/states.scss"],names:[],mappings:"AAEA,iDCqBE,YAAA,CACA,UAAA,CACA,iBAGoC,CAGpC,kFAAA",sourcesContent:['@import "../../../styles/states";\n\n.visualFocus {\n  @include focus-style-css;\n}\n',"@mixin focus-style-inset($focus-radius: 4px, $shadow-depth: 3px) {\n  &:focus-visible,\n  &.focus-visible {\n    @include focus-style-css-inset($focus-radius, $shadow-depth);\n  }\n\n  &:focus:not(.focus-visible) {\n    outline: none;\n  }\n}\n\n@mixin focus-style-on-primary($focus-radius: 4px) {\n  &:focus-visible,\n  &.focus-visible {\n    @include focus-style-css-on-primary($focus-radius);\n  }\n\n  &:focus:not(.focus-visible) {\n    outline: none;\n  }\n}\n\n@mixin focus-style-base($focus-radius: 4px) {\n  outline: none;\n  z-index: 11;\n  border-radius: $focus-radius;\n}\n\n@mixin focus-style-css($focus-radius: 4px, $shadow-depth: 3px) {\n  @include focus-style-base($focus-radius);\n\n  box-shadow: 0 0 0 $shadow-depth hsl(209deg 100% 50% / 50%), 0 0 0 1px var(--primary-hover-color) inset;\n}\n\n@mixin focus-style-css-inset($focus-radius: 4px, $shadow-depth: 3px) {\n  @include focus-style-base($focus-radius);\n\n  box-shadow: 0 0 0 $shadow-depth hsl(209deg 100% 50% / 50%) inset, 0 0 0 1px var(--primary-hover-color) inset;\n}\n\n@mixin focus-style-css-on-primary($focus-radius: 4px) {\n  @include focus-style-base($focus-radius);\n\n  box-shadow: 0 0 0 3px var(--text-color-on-primary-with-opacity), 0 0 0 1px var(--text-color-on-primary) inset;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={visualFocus:"useActiveDescendantListFocus-module_visualFocus"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);