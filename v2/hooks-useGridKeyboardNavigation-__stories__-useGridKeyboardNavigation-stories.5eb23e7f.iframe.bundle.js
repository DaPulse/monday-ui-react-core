"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[6633],{"./src/hooks/useGridKeyboardNavigation/__stories__/useGridKeyboardNavigation.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs"),classnames__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),lodash_es__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/lodash-es/range.js"),_useGridKeyboardNavigation__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/hooks/useGridKeyboardNavigation/useGridKeyboardNavigation.ts"),_src_components_Button_Button__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/Button/Button.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("./src/hooks/useGridKeyboardNavigation/__stories__/useGridKeyboardNavigation.stories.scss"),__webpack_require__("../../node_modules/react/jsx-runtime.js"));function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var ON_CLICK=(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.XI)("item selected");const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:'import React, { useRef, useCallback, useState, useMemo } from "react";\nimport { action } from "@storybook/addon-actions";\nimport cx from "classnames";\nimport { range } from "lodash-es";\nimport useGridKeyboardNavigation from "../useGridKeyboardNavigation";\nimport Button from "../../../../src/components/Button/Button";\nimport "./useGridKeyboardNavigation.stories.scss";\n\nconst ELEMENT_WIDTH_PX = 72;\nconst PADDING_PX = 24;\nconst ON_CLICK = action("item selected");\n\nexport default {\n  title: "Hooks/useGridKeyboardNavigation"\n};\n\nexport const Overview = {\n  render: () => {\n    const ref = useRef(null);\n    const disabledIndexes = [2, 4, 6];\n    const [itemsCount, setItemsCount] = useState<number>(15);\n    const [numberOfItemsInLine, setNumberOfItemsInLine] = useState<number>(4);\n\n    const width = useMemo(() => numberOfItemsInLine * ELEMENT_WIDTH_PX + 2 * PADDING_PX, [numberOfItemsInLine]);\n\n    const items: string[] = useMemo(() => range(itemsCount).map((num: number) => `${num}.`), [itemsCount]);\n    const getItemByIndex = useCallback((index: number) => items[index], [items]);\n\n    const { activeIndex, onSelectionAction } = useGridKeyboardNavigation({\n      ref,\n      numberOfItemsInLine,\n      itemsCount,\n      getItemByIndex,\n      onItemClicked: ON_CLICK,\n      disabledIndexes\n    });\n\n    const onClickByIndex = useCallback((index: number) => () => onSelectionAction(index), [onSelectionAction]);\n\n    return (\n      <div>\n        <div\n          className="use-grid-keyboard-nav-comp-wrapper"\n          style={{\n            width\n          }}\n          ref={ref}\n          tabIndex={-1}\n        >\n          {items.map((item, index) => (\n            <Button\n              key={item}\n              disabled={disabledIndexes.includes(index)}\n              onClick={onClickByIndex(index)}\n              kind={Button.kinds.SECONDARY}\n              className={cx("use-grid-keyboard-nav-item", {\n                "active-item": index === activeIndex\n              })}\n            >\n              {item}\n            </Button>\n          ))}\n        </div>\n        <div className="use-grid-keyboard-nav-controls">\n          <div>\n            Items count:{" "}\n            <input value={itemsCount} onChange={e => setItemsCount(Number(e.target.value))} type="number" min={1} />\n          </div>\n          <div>\n            Number of items in line:{" "}\n            <input\n              value={numberOfItemsInLine}\n              onChange={e => setNumberOfItemsInLine(Number(e.target.value))}\n              type="number"\n              min={1}\n            />\n          </div>\n        </div>\n      </div>\n    );\n  },\n\n  name: "Overview"\n};\n',locationsMap:{overview:{startLoc:{col:24,line:17},endLoc:{col:1,line:84},startBody:{col:24,line:17},endBody:{col:1,line:84}}}}},title:"Hooks/useGridKeyboardNavigation"};var Overview={render:function render(){var ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),disabledIndexes=[2,4,6],_useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(15),2),itemsCount=_useState2[0],setItemsCount=_useState2[1],_useState4=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(4),2),numberOfItemsInLine=_useState4[0],setNumberOfItemsInLine=_useState4[1],width=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return 72*numberOfItemsInLine+48}),[numberOfItemsInLine]),items=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return(0,lodash_es__WEBPACK_IMPORTED_MODULE_5__.A)(itemsCount).map((function(num){return"".concat(num,".")}))}),[itemsCount]),getItemByIndex=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(index){return items[index]}),[items]),_useGridKeyboardNavig=(0,_useGridKeyboardNavigation__WEBPACK_IMPORTED_MODULE_6__.A)({ref,numberOfItemsInLine,itemsCount,getItemByIndex,onItemClicked:ON_CLICK,disabledIndexes}),activeIndex=_useGridKeyboardNavig.activeIndex,onSelectionAction=_useGridKeyboardNavig.onSelectionAction,onClickByIndex=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(index){return function(){return onSelectionAction(index)}}),[onSelectionAction]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"use-grid-keyboard-nav-comp-wrapper",style:{width},ref,tabIndex:-1,children:items.map((function(item,index){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src_components_Button_Button__WEBPACK_IMPORTED_MODULE_7__.A,{disabled:disabledIndexes.includes(index),onClick:onClickByIndex(index),kind:_src_components_Button_Button__WEBPACK_IMPORTED_MODULE_7__.A.kinds.SECONDARY,className:classnames__WEBPACK_IMPORTED_MODULE_2___default()("use-grid-keyboard-nav-item",{"active-item":index===activeIndex}),children:item},item)}))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"use-grid-keyboard-nav-controls",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{children:["Items count:"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input",{value:itemsCount,onChange:function onChange(e){return setItemsCount(Number(e.target.value))},type:"number",min:1})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{children:["Number of items in line:"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input",{value:numberOfItemsInLine,onChange:function onChange(e){return setNumberOfItemsInLine(Number(e.target.value))},type:"number",min:1})]})]})]})},name:"Overview"};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const ref = useRef(null);\n    const disabledIndexes = [2, 4, 6];\n    const [itemsCount, setItemsCount] = useState<number>(15);\n    const [numberOfItemsInLine, setNumberOfItemsInLine] = useState<number>(4);\n    const width = useMemo(() => numberOfItemsInLine * ELEMENT_WIDTH_PX + 2 * PADDING_PX, [numberOfItemsInLine]);\n    const items: string[] = useMemo(() => range(itemsCount).map((num: number) => `${num}.`), [itemsCount]);\n    const getItemByIndex = useCallback((index: number) => items[index], [items]);\n    const {\n      activeIndex,\n      onSelectionAction\n    } = useGridKeyboardNavigation({\n      ref,\n      numberOfItemsInLine,\n      itemsCount,\n      getItemByIndex,\n      onItemClicked: ON_CLICK,\n      disabledIndexes\n    });\n    const onClickByIndex = useCallback((index: number) => () => onSelectionAction(index), [onSelectionAction]);\n    return <div>\n        <div className="use-grid-keyboard-nav-comp-wrapper" style={{\n        width\n      }} ref={ref} tabIndex={-1}>\n          {items.map((item, index) => <Button key={item} disabled={disabledIndexes.includes(index)} onClick={onClickByIndex(index)} kind={Button.kinds.SECONDARY} className={cx("use-grid-keyboard-nav-item", {\n          "active-item": index === activeIndex\n        })}>\n              {item}\n            </Button>)}\n        </div>\n        <div className="use-grid-keyboard-nav-controls">\n          <div>\n            Items count:{" "}\n            <input value={itemsCount} onChange={e => setItemsCount(Number(e.target.value))} type="number" min={1} />\n          </div>\n          <div>\n            Number of items in line:{" "}\n            <input value={numberOfItemsInLine} onChange={e => setNumberOfItemsInLine(Number(e.target.value))} type="number" min={1} />\n          </div>\n        </div>\n      </div>;\n  },\n  name: "Overview"\n}',...Overview.parameters?.docs?.source}}};const __namedExportsOrder=["Overview"]},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[16].use[3]!./src/hooks/useGridKeyboardNavigation/__stories__/useGridKeyboardNavigation.stories.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".use-grid-keyboard-nav-comp-wrapper{padding:24px;display:flex;flex-wrap:wrap;outline:none;text-align:center}.use-grid-keyboard-nav-item{width:60px;margin:6px}.use-grid-keyboard-nav-item.active-item{outline:none;z-index:11;border-radius:4px;box-shadow:0 0 0 3px rgba(0,132,255,.5),0 0 0 1px var(--sb-primary-hover-color) inset}.use-grid-keyboard-nav-controls{display:flex}.use-grid-keyboard-nav-controls :not(:first-child){margin-left:var(--sb-spacing-medium)}.use-grid-keyboard-nav-controls input{width:60px}","",{version:3,sources:["webpack://./src/hooks/useGridKeyboardNavigation/__stories__/useGridKeyboardNavigation.stories.scss","webpack://./../storybook-blocks/dist/styles/mixins/_focus.scss"],names:[],mappings:"AAEA,oCACE,YAAA,CACA,YAAA,CACA,cAAA,CACA,YAAA,CACA,iBAAA,CAGF,4BACE,UAAA,CACA,UAAA,CAEA,wCCMA,YAAA,CACA,UAAA,CACA,iBAXuC,CAGvC,qFACE,CDIJ,gCACE,YAAA,CAEA,mDACE,oCAAA,CAGF,sCACE,UAAA",sourcesContent:['@import "~vibe-storybook-components/dist/mixins";\n\n.use-grid-keyboard-nav-comp-wrapper {\n  padding: 24px;\n  display: flex;\n  flex-wrap: wrap;\n  outline: none;\n  text-align: center;\n}\n\n.use-grid-keyboard-nav-item {\n  width: 60px;\n  margin: 6px;\n\n  &.active-item {\n    @include sb-focus-style-css();\n  }\n}\n\n.use-grid-keyboard-nav-controls {\n  display: flex;\n\n  & :not(:first-child) {\n    margin-left: var(--sb-spacing-medium);\n  }\n\n  input {\n    width: 60px;\n  }\n}\n',"@mixin sb-focus-style($focus-radius: 4px) {\n  &:focus-visible,\n  &.focus-visible {\n    @include sb-focus-style-css($focus-radius);\n  }\n\n  &:focus:not(.focus-visible) {\n    outline: none;\n  }\n}\n\n@mixin sb-focus-style-css($focus-radius: 4px, $shadow-depth: 3px) {\n  @include sb-focus-style-base($focus-radius);\n\n  box-shadow:\n    0 0 0 $shadow-depth hsl(209deg 100% 50% / 50%),\n    0 0 0 1px var(--sb-primary-hover-color) inset;\n}\n\n@mixin sb-focus-style-base($focus-radius: 4px) {\n  outline: none;\n  z-index: 11;\n  border-radius: $focus-radius;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/hooks/useGridKeyboardNavigation/__stories__/useGridKeyboardNavigation.stories.scss":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_16_use_3_useGridKeyboardNavigation_stories_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[16].use[3]!./src/hooks/useGridKeyboardNavigation/__stories__/useGridKeyboardNavigation.stories.scss"),options={};options.styleTagTransform=_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_16_use_3_useGridKeyboardNavigation_stories_scss__WEBPACK_IMPORTED_MODULE_6__.A,options),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_16_use_3_useGridKeyboardNavigation_stories_scss__WEBPACK_IMPORTED_MODULE_6__.A&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_16_use_3_useGridKeyboardNavigation_stories_scss__WEBPACK_IMPORTED_MODULE_6__.A.locals&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_16_use_3_useGridKeyboardNavigation_stories_scss__WEBPACK_IMPORTED_MODULE_6__.A.locals}}]);