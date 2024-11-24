"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[7113,5595],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/MenuButton/__stories__/MenuButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomTriggerElement:()=>CustomTriggerElement,DifferentIcon:()=>DifferentIcon,Disabled:()=>Disabled,Overview:()=>Overview,Sizes:()=>Sizes,WithText:()=>WithText,WithTextAndIconAtTheEnd:()=>WithTextAndIconAtTheEnd,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _MenuButton__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/MenuButton/MenuButton.tsx"),lodash_es__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../node_modules/lodash-es/noop.js"),_storybook__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/storybook/functions/createStoryMetaSettingsDecorator.ts"),vibe_storybook_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../storybook-blocks/dist/src/functions/createComponentTemplate.js"),_index__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Menu/Menu/Menu.tsx"),_index__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/Menu/MenuItem/MenuItem.tsx"),_index__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./src/components/Button/Button.tsx"),_Icon_Icons__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/Icon/Icons/components/Sun.tsx"),_Icon_Icons__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/components/Icon/Icons/components/Moon.tsx"),_Icon_Icons__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./src/components/Icon/Icons/components/Favorite.tsx"),_Icon_Icons__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./src/components/Icon/Icons/components/DropdownChevronDown.tsx"),_Icon_Icons_components_MoveArrowDown__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./src/components/Icon/Icons/components/MoveArrowDown.tsx"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var metaSettings=(0,_storybook__WEBPACK_IMPORTED_MODULE_2__.B)({component:_MenuButton__WEBPACK_IMPORTED_MODULE_3__.A,iconPropNamesArray:["component"],actionPropsArray:["onMenuHide","onMenuShow"],ignoreControlsPropNamesArray:["children"]});const __WEBPACK_DEFAULT_EXPORT__={title:"Buttons/MenuButton",component:_MenuButton__WEBPACK_IMPORTED_MODULE_3__.A,argTypes:metaSettings.argTypes,decorators:metaSettings.decorators};var Overview={render:(0,vibe_storybook_components__WEBPACK_IMPORTED_MODULE_4__.M)(_MenuButton__WEBPACK_IMPORTED_MODULE_3__.A).bind({}),args:{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_index__WEBPACK_IMPORTED_MODULE_5__.A,{id:"menu",size:_index__WEBPACK_IMPORTED_MODULE_5__.A.sizes.MEDIUM,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_index__WEBPACK_IMPORTED_MODULE_6__.A,{icon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_7__.A,onClick:lodash_es__WEBPACK_IMPORTED_MODULE_8__.A,iconType:_index__WEBPACK_IMPORTED_MODULE_6__.A.iconType.SVG,title:"The sun"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_index__WEBPACK_IMPORTED_MODULE_6__.A,{icon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_9__.A,onClick:lodash_es__WEBPACK_IMPORTED_MODULE_8__.A,iconType:_index__WEBPACK_IMPORTED_MODULE_6__.A.iconType.SVG,title:"The moon"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_index__WEBPACK_IMPORTED_MODULE_6__.A,{icon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_10__.A,onClick:lodash_es__WEBPACK_IMPORTED_MODULE_8__.A,iconType:_index__WEBPACK_IMPORTED_MODULE_6__.A.iconType.SVG,title:"And the stars"})]})},parameters:{docs:{liveEdit:{isEnabled:!1}}}},Sizes={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_MenuButton__WEBPACK_IMPORTED_MODULE_3__.A,{size:_MenuButton__WEBPACK_IMPORTED_MODULE_3__.A.sizes.XXS,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_index__WEBPACK_IMPORTED_MODULE_5__.A,{id:"menu",size:_index__WEBPACK_IMPORTED_MODULE_5__.A.sizes.MEDIUM,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_index__WEBPACK_IMPORTED_MODULE_6__.A,{icon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_7__.A,onClick:lodash_es__WEBPACK_IMPORTED_MODULE_8__.A,iconType:_index__WEBPACK_IMPORTED_MODULE_6__.A.iconType.SVG,title:"The sun"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_index__WEBPACK_IMPORTED_MODULE_6__.A,{icon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_9__.A,onClick:lodash_es__WEBPACK_IMPORTED_MODULE_8__.A,iconType:_index__WEBPACK_IMPORTED_MODULE_6__.A.iconType.SVG,title:"The moon"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_index__WEBPACK_IMPORTED_MODULE_6__.A,{icon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_10__.A,onClick:lodash_es__WEBPACK_IMPORTED_MODULE_8__.A,iconType:_index__WEBPACK_IMPORTED_MODULE_6__.A.iconType.SVG,title:"And the stars"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_MenuButton__WEBPACK_IMPORTED_MODULE_3__.A,{size:_MenuButton__WEBPACK_IMPORTED_MODULE_3__.A.sizes.XS,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_index__WEBPACK_IMPORTED_MODULE_5__.A,{id:"menu",size:_index__WEBPACK_IMPORTED_MODULE_5__.A.sizes.MEDIUM,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_index__WEBPACK_IMPORTED_MODULE_6__.A,{icon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_7__.A,onClick:lodash_es__WEBPACK_IMPORTED_MODULE_8__.A,iconType:_index__WEBPACK_IMPORTED_MODULE_6__.A.iconType.SVG,title:"The sun"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_index__WEBPACK_IMPORTED_MODULE_6__.A,{icon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_9__.A,onClick:lodash_es__WEBPACK_IMPORTED_MODULE_8__.A,iconType:_index__WEBPACK_IMPORTED_MODULE_6__.A.iconType.SVG,title:"The moon"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_index__WEBPACK_IMPORTED_MODULE_6__.A,{icon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_10__.A,onClick:lodash_es__WEBPACK_IMPORTED_MODULE_8__.A,iconType:_index__WEBPACK_IMPORTED_MODULE_6__.A.iconType.SVG,title:"And the stars"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_MenuButton__WEBPACK_IMPORTED_MODULE_3__.A,{size:_MenuButton__WEBPACK_IMPORTED_MODULE_3__.A.sizes.SMALL,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_index__WEBPACK_IMPORTED_MODULE_5__.A,{id:"menu",size:_index__WEBPACK_IMPORTED_MODULE_5__.A.sizes.MEDIUM,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_index__WEBPACK_IMPORTED_MODULE_6__.A,{icon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_7__.A,onClick:lodash_es__WEBPACK_IMPORTED_MODULE_8__.A,iconType:_index__WEBPACK_IMPORTED_MODULE_6__.A.iconType.SVG,title:"The sun"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_index__WEBPACK_IMPORTED_MODULE_6__.A,{icon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_9__.A,onClick:lodash_es__WEBPACK_IMPORTED_MODULE_8__.A,iconType:_index__WEBPACK_IMPORTED_MODULE_6__.A.iconType.SVG,title:"The moon"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_index__WEBPACK_IMPORTED_MODULE_6__.A,{icon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_10__.A,onClick:lodash_es__WEBPACK_IMPORTED_MODULE_8__.A,iconType:_index__WEBPACK_IMPORTED_MODULE_6__.A.iconType.SVG,title:"And the stars"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_MenuButton__WEBPACK_IMPORTED_MODULE_3__.A,{size:_MenuButton__WEBPACK_IMPORTED_MODULE_3__.A.sizes.MEDIUM,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_index__WEBPACK_IMPORTED_MODULE_5__.A,{id:"menu",size:_index__WEBPACK_IMPORTED_MODULE_5__.A.sizes.MEDIUM,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_index__WEBPACK_IMPORTED_MODULE_6__.A,{icon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_7__.A,onClick:lodash_es__WEBPACK_IMPORTED_MODULE_8__.A,iconType:_index__WEBPACK_IMPORTED_MODULE_6__.A.iconType.SVG,title:"The sun"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_index__WEBPACK_IMPORTED_MODULE_6__.A,{icon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_9__.A,onClick:lodash_es__WEBPACK_IMPORTED_MODULE_8__.A,iconType:_index__WEBPACK_IMPORTED_MODULE_6__.A.iconType.SVG,title:"The moon"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_index__WEBPACK_IMPORTED_MODULE_6__.A,{icon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_10__.A,onClick:lodash_es__WEBPACK_IMPORTED_MODULE_8__.A,iconType:_index__WEBPACK_IMPORTED_MODULE_6__.A.iconType.SVG,title:"And the stars"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_MenuButton__WEBPACK_IMPORTED_MODULE_3__.A,{size:_MenuButton__WEBPACK_IMPORTED_MODULE_3__.A.sizes.LARGE,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_index__WEBPACK_IMPORTED_MODULE_5__.A,{id:"menu",size:_index__WEBPACK_IMPORTED_MODULE_5__.A.sizes.MEDIUM,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_index__WEBPACK_IMPORTED_MODULE_6__.A,{icon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_7__.A,onClick:lodash_es__WEBPACK_IMPORTED_MODULE_8__.A,iconType:_index__WEBPACK_IMPORTED_MODULE_6__.A.iconType.SVG,title:"The sun"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_index__WEBPACK_IMPORTED_MODULE_6__.A,{icon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_9__.A,onClick:lodash_es__WEBPACK_IMPORTED_MODULE_8__.A,iconType:_index__WEBPACK_IMPORTED_MODULE_6__.A.iconType.SVG,title:"The moon"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_index__WEBPACK_IMPORTED_MODULE_6__.A,{icon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_10__.A,onClick:lodash_es__WEBPACK_IMPORTED_MODULE_8__.A,iconType:_index__WEBPACK_IMPORTED_MODULE_6__.A.iconType.SVG,title:"And the stars"})]})})]})},parameters:{docs:{liveEdit:{scope:{NOOP:lodash_es__WEBPACK_IMPORTED_MODULE_8__.A,Sun:_Icon_Icons__WEBPACK_IMPORTED_MODULE_7__.A,Moon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_9__.A,Favorite:_Icon_Icons__WEBPACK_IMPORTED_MODULE_10__.A}}}}},DifferentIcon={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_MenuButton__WEBPACK_IMPORTED_MODULE_3__.A,{component:_Icon_Icons_components_MoveArrowDown__WEBPACK_IMPORTED_MODULE_11__.A,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_index__WEBPACK_IMPORTED_MODULE_5__.A,{id:"menu",size:_index__WEBPACK_IMPORTED_MODULE_5__.A.sizes.MEDIUM,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_index__WEBPACK_IMPORTED_MODULE_6__.A,{icon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_7__.A,onClick:lodash_es__WEBPACK_IMPORTED_MODULE_8__.A,iconType:_index__WEBPACK_IMPORTED_MODULE_6__.A.iconType.SVG,title:"The sun"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_index__WEBPACK_IMPORTED_MODULE_6__.A,{icon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_9__.A,onClick:lodash_es__WEBPACK_IMPORTED_MODULE_8__.A,iconType:_index__WEBPACK_IMPORTED_MODULE_6__.A.iconType.SVG,title:"The moon"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_index__WEBPACK_IMPORTED_MODULE_6__.A,{icon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_10__.A,onClick:lodash_es__WEBPACK_IMPORTED_MODULE_8__.A,iconType:_index__WEBPACK_IMPORTED_MODULE_6__.A.iconType.SVG,title:"And the stars"})]})})},parameters:{docs:{liveEdit:{scope:{NOOP:lodash_es__WEBPACK_IMPORTED_MODULE_8__.A,MoveArrowDown:_Icon_Icons_components_MoveArrowDown__WEBPACK_IMPORTED_MODULE_11__.A,Sun:_Icon_Icons__WEBPACK_IMPORTED_MODULE_7__.A,Moon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_9__.A,Favorite:_Icon_Icons__WEBPACK_IMPORTED_MODULE_10__.A}}}}},WithText={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{width:200},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_MenuButton__WEBPACK_IMPORTED_MODULE_3__.A,{text:"Open",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_index__WEBPACK_IMPORTED_MODULE_5__.A,{id:"menu",size:_index__WEBPACK_IMPORTED_MODULE_5__.A.sizes.MEDIUM,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_index__WEBPACK_IMPORTED_MODULE_6__.A,{icon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_7__.A,onClick:lodash_es__WEBPACK_IMPORTED_MODULE_8__.A,iconType:_index__WEBPACK_IMPORTED_MODULE_6__.A.iconType.SVG,title:"The sun"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_index__WEBPACK_IMPORTED_MODULE_6__.A,{icon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_9__.A,onClick:lodash_es__WEBPACK_IMPORTED_MODULE_8__.A,iconType:_index__WEBPACK_IMPORTED_MODULE_6__.A.iconType.SVG,title:"The moon"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_index__WEBPACK_IMPORTED_MODULE_6__.A,{icon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_10__.A,onClick:lodash_es__WEBPACK_IMPORTED_MODULE_8__.A,iconType:_index__WEBPACK_IMPORTED_MODULE_6__.A.iconType.SVG,title:"And the stars"})]})})})},parameters:{docs:{liveEdit:{scope:{NOOP:lodash_es__WEBPACK_IMPORTED_MODULE_8__.A,Sun:_Icon_Icons__WEBPACK_IMPORTED_MODULE_7__.A,Moon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_9__.A,Favorite:_Icon_Icons__WEBPACK_IMPORTED_MODULE_10__.A}}}}},WithTextAndIconAtTheEnd={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{width:200},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_MenuButton__WEBPACK_IMPORTED_MODULE_3__.A,{text:"Open",component:_Icon_Icons__WEBPACK_IMPORTED_MODULE_12__.A,componentPosition:_MenuButton__WEBPACK_IMPORTED_MODULE_3__.A.componentPositions.END,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_index__WEBPACK_IMPORTED_MODULE_5__.A,{id:"menu",size:_index__WEBPACK_IMPORTED_MODULE_5__.A.sizes.MEDIUM,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_index__WEBPACK_IMPORTED_MODULE_6__.A,{icon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_7__.A,onClick:lodash_es__WEBPACK_IMPORTED_MODULE_8__.A,iconType:_index__WEBPACK_IMPORTED_MODULE_6__.A.iconType.SVG,title:"The sun"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_index__WEBPACK_IMPORTED_MODULE_6__.A,{icon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_9__.A,onClick:lodash_es__WEBPACK_IMPORTED_MODULE_8__.A,iconType:_index__WEBPACK_IMPORTED_MODULE_6__.A.iconType.SVG,title:"The moon"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_index__WEBPACK_IMPORTED_MODULE_6__.A,{icon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_10__.A,onClick:lodash_es__WEBPACK_IMPORTED_MODULE_8__.A,iconType:_index__WEBPACK_IMPORTED_MODULE_6__.A.iconType.SVG,title:"And the stars"})]})})})},parameters:{docs:{liveEdit:{scope:{NOOP:lodash_es__WEBPACK_IMPORTED_MODULE_8__.A,DropdownChevronDown:_Icon_Icons__WEBPACK_IMPORTED_MODULE_12__.A,Sun:_Icon_Icons__WEBPACK_IMPORTED_MODULE_7__.A,Moon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_9__.A,Favorite:_Icon_Icons__WEBPACK_IMPORTED_MODULE_10__.A}}}},name:"With Text and Icon at the end"},Disabled={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_MenuButton__WEBPACK_IMPORTED_MODULE_3__.A,{disabled:!0,tooltipContent:"This action is not available now",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_index__WEBPACK_IMPORTED_MODULE_5__.A,{id:"menu",size:_index__WEBPACK_IMPORTED_MODULE_5__.A.sizes.MEDIUM,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_index__WEBPACK_IMPORTED_MODULE_6__.A,{icon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_7__.A,onClick:lodash_es__WEBPACK_IMPORTED_MODULE_8__.A,iconType:_index__WEBPACK_IMPORTED_MODULE_6__.A.iconType.SVG,title:"The sun"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_index__WEBPACK_IMPORTED_MODULE_6__.A,{icon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_9__.A,onClick:lodash_es__WEBPACK_IMPORTED_MODULE_8__.A,iconType:_index__WEBPACK_IMPORTED_MODULE_6__.A.iconType.SVG,title:"The moon"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_index__WEBPACK_IMPORTED_MODULE_6__.A,{icon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_10__.A,onClick:lodash_es__WEBPACK_IMPORTED_MODULE_8__.A,iconType:_index__WEBPACK_IMPORTED_MODULE_6__.A.iconType.SVG,title:"And the stars"})]})})},parameters:{docs:{liveEdit:{scope:{NOOP:lodash_es__WEBPACK_IMPORTED_MODULE_8__.A,Sun:_Icon_Icons__WEBPACK_IMPORTED_MODULE_7__.A,Moon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_9__.A,Favorite:_Icon_Icons__WEBPACK_IMPORTED_MODULE_10__.A}}}}},CustomTriggerElement={render:function render(){var ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_MenuButton__WEBPACK_IMPORTED_MODULE_3__.A,{triggerElement:function triggerElement(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_index__WEBPACK_IMPORTED_MODULE_13__.A,_objectSpread(_objectSpread({kind:_index__WEBPACK_IMPORTED_MODULE_13__.A.kinds.SECONDARY},props),{},{className:"",ref,children:"Button"}))},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_index__WEBPACK_IMPORTED_MODULE_5__.A,{id:"menu",size:_index__WEBPACK_IMPORTED_MODULE_5__.A.sizes.MEDIUM,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_index__WEBPACK_IMPORTED_MODULE_6__.A,{icon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_7__.A,onClick:lodash_es__WEBPACK_IMPORTED_MODULE_8__.A,iconType:_index__WEBPACK_IMPORTED_MODULE_6__.A.iconType.SVG,title:"The sun"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_index__WEBPACK_IMPORTED_MODULE_6__.A,{icon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_9__.A,onClick:lodash_es__WEBPACK_IMPORTED_MODULE_8__.A,iconType:_index__WEBPACK_IMPORTED_MODULE_6__.A.iconType.SVG,title:"The moon"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_index__WEBPACK_IMPORTED_MODULE_6__.A,{icon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_10__.A,onClick:lodash_es__WEBPACK_IMPORTED_MODULE_8__.A,iconType:_index__WEBPACK_IMPORTED_MODULE_6__.A.iconType.SVG,title:"And the stars"})]})})},parameters:{docs:{liveEdit:{scope:{NOOP:lodash_es__WEBPACK_IMPORTED_MODULE_8__.A,Sun:_Icon_Icons__WEBPACK_IMPORTED_MODULE_7__.A,Moon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_9__.A,Favorite:_Icon_Icons__WEBPACK_IMPORTED_MODULE_10__.A}}}}};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: menuButtonTemplate.bind({}),\n  args: {\n    children: <Menu id="menu" size={Menu.sizes.MEDIUM}>\n        <MenuItem icon={Sun} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="The sun" />\n        <MenuItem icon={Moon} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="The moon" />\n        <MenuItem icon={Favorite} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="And the stars" />\n      </Menu>\n  },\n  parameters: {\n    docs: {\n      liveEdit: {\n        isEnabled: false\n      }\n    }\n  }\n}',...Overview.parameters?.docs?.source}}},Sizes.parameters={...Sizes.parameters,docs:{...Sizes.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <MenuButton size={MenuButton.sizes.XXS}>\n        <Menu id="menu" size={Menu.sizes.MEDIUM}>\n          <MenuItem icon={Sun} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="The sun" />\n          <MenuItem icon={Moon} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="The moon" />\n          <MenuItem icon={Favorite} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="And the stars" />\n        </Menu>\n      </MenuButton>\n      <MenuButton size={MenuButton.sizes.XS}>\n        <Menu id="menu" size={Menu.sizes.MEDIUM}>\n          <MenuItem icon={Sun} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="The sun" />\n          <MenuItem icon={Moon} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="The moon" />\n          <MenuItem icon={Favorite} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="And the stars" />\n        </Menu>\n      </MenuButton>\n      <MenuButton size={MenuButton.sizes.SMALL}>\n        <Menu id="menu" size={Menu.sizes.MEDIUM}>\n          <MenuItem icon={Sun} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="The sun" />\n          <MenuItem icon={Moon} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="The moon" />\n          <MenuItem icon={Favorite} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="And the stars" />\n        </Menu>\n      </MenuButton>\n      <MenuButton size={MenuButton.sizes.MEDIUM}>\n        <Menu id="menu" size={Menu.sizes.MEDIUM}>\n          <MenuItem icon={Sun} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="The sun" />\n          <MenuItem icon={Moon} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="The moon" />\n          <MenuItem icon={Favorite} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="And the stars" />\n        </Menu>\n      </MenuButton>\n      <MenuButton size={MenuButton.sizes.LARGE}>\n        <Menu id="menu" size={Menu.sizes.MEDIUM}>\n          <MenuItem icon={Sun} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="The sun" />\n          <MenuItem icon={Moon} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="The moon" />\n          <MenuItem icon={Favorite} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="And the stars" />\n        </Menu>\n      </MenuButton>\n    </>,\n  parameters: {\n    docs: {\n      liveEdit: {\n        scope: {\n          NOOP,\n          Sun,\n          Moon,\n          Favorite\n        }\n      }\n    }\n  }\n}',...Sizes.parameters?.docs?.source}}},DifferentIcon.parameters={...DifferentIcon.parameters,docs:{...DifferentIcon.parameters?.docs,source:{originalSource:'{\n  render: () => <MenuButton component={MoveArrowDown}>\n      <Menu id="menu" size={Menu.sizes.MEDIUM}>\n        <MenuItem icon={Sun} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="The sun" />\n        <MenuItem icon={Moon} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="The moon" />\n        <MenuItem icon={Favorite} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="And the stars" />\n      </Menu>\n    </MenuButton>,\n  parameters: {\n    docs: {\n      liveEdit: {\n        scope: {\n          NOOP,\n          MoveArrowDown,\n          Sun,\n          Moon,\n          Favorite\n        }\n      }\n    }\n  }\n}',...DifferentIcon.parameters?.docs?.source}}},WithText.parameters={...WithText.parameters,docs:{...WithText.parameters?.docs,source:{originalSource:'{\n  render: () => <div style={{\n    width: 200\n  }}>\n      <MenuButton text="Open">\n        <Menu id="menu" size={Menu.sizes.MEDIUM}>\n          <MenuItem icon={Sun} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="The sun" />\n          <MenuItem icon={Moon} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="The moon" />\n          <MenuItem icon={Favorite} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="And the stars" />\n        </Menu>\n      </MenuButton>\n    </div>,\n  parameters: {\n    docs: {\n      liveEdit: {\n        scope: {\n          NOOP,\n          Sun,\n          Moon,\n          Favorite\n        }\n      }\n    }\n  }\n}',...WithText.parameters?.docs?.source}}},WithTextAndIconAtTheEnd.parameters={...WithTextAndIconAtTheEnd.parameters,docs:{...WithTextAndIconAtTheEnd.parameters?.docs,source:{originalSource:'{\n  render: () => <div style={{\n    width: 200\n  }}>\n      <MenuButton text="Open" component={DropdownChevronDown} componentPosition={MenuButton.componentPositions.END}>\n        <Menu id="menu" size={Menu.sizes.MEDIUM}>\n          <MenuItem icon={Sun} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="The sun" />\n          <MenuItem icon={Moon} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="The moon" />\n          <MenuItem icon={Favorite} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="And the stars" />\n        </Menu>\n      </MenuButton>\n    </div>,\n  parameters: {\n    docs: {\n      liveEdit: {\n        scope: {\n          NOOP,\n          DropdownChevronDown,\n          Sun,\n          Moon,\n          Favorite\n        }\n      }\n    }\n  },\n  name: "With Text and Icon at the end"\n}',...WithTextAndIconAtTheEnd.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  render: () => <MenuButton disabled tooltipContent="This action is not available now">\n      <Menu id="menu" size={Menu.sizes.MEDIUM}>\n        <MenuItem icon={Sun} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="The sun" />\n        <MenuItem icon={Moon} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="The moon" />\n        <MenuItem icon={Favorite} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="And the stars" />\n      </Menu>\n    </MenuButton>,\n  parameters: {\n    docs: {\n      liveEdit: {\n        scope: {\n          NOOP,\n          Sun,\n          Moon,\n          Favorite\n        }\n      }\n    }\n  }\n}',...Disabled.parameters?.docs?.source}}},CustomTriggerElement.parameters={...CustomTriggerElement.parameters,docs:{...CustomTriggerElement.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const ref = useRef(null);\n    return <MenuButton triggerElement={props => <Button kind={Button.kinds.SECONDARY} {...props} className={""} ref={ref}>\n            Button\n          </Button>}>\n        <Menu id="menu" size={Menu.sizes.MEDIUM}>\n          <MenuItem icon={Sun} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="The sun" />\n          <MenuItem icon={Moon} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="The moon" />\n          <MenuItem icon={Favorite} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="And the stars" />\n        </Menu>\n      </MenuButton>;\n  },\n  parameters: {\n    docs: {\n      liveEdit: {\n        scope: {\n          NOOP,\n          Sun,\n          Moon,\n          Favorite\n        }\n      }\n    }\n  }\n}',...CustomTriggerElement.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","Sizes","DifferentIcon","WithText","WithTextAndIconAtTheEnd","Disabled","CustomTriggerElement"]},"./src/components/MenuButton/__stories__/MenuButton.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_home_runner_work_vibe_vibe_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),_storybook_components_related_components_component_description_map__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/storybook/components/related-components/component-description-map.tsx"),_MenuButton_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/MenuButton/__stories__/MenuButton.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",h2:"h2",p:"p",h3:"h3"},(0,_home_runner_work_vibe_vibe_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.RP)(),props.components),{Canvas,PropsTable,UsageGuidelines,RelatedComponents}=_components;return Canvas||_missingMdxReference("Canvas",!0),PropsTable||_missingMdxReference("PropsTable",!0),RelatedComponents||_missingMdxReference("RelatedComponents",!0),UsageGuidelines||_missingMdxReference("UsageGuidelines",!0),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.W8,{of:_MenuButton_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"menubutton",children:"MenuButton"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#usage",children:"Usage"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#variants",children:"Variants"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#related-components",children:"Related components"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#feedback",children:"Feedback"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"MenuButton is a component that opens a Dialog next to a button, the content of the dialog could be anything you want."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Canvas,{of:_MenuButton_stories__WEBPACK_IMPORTED_MODULE_4__.Overview}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PropsTable,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(UsageGuidelines,{guidelines:["When you want to place content next to an element","When the content needs to be on top of adjacent content "]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"sizes",children:"Sizes"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Canvas,{of:_MenuButton_stories__WEBPACK_IMPORTED_MODULE_4__.Sizes}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"different-icon",children:"Different Icon"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Canvas,{of:_MenuButton_stories__WEBPACK_IMPORTED_MODULE_4__.DifferentIcon}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"with-text",children:"With Text"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Canvas,{of:_MenuButton_stories__WEBPACK_IMPORTED_MODULE_4__.WithText}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"with-text-and-icon-at-the-end",children:"With Text and Icon at the end"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Canvas,{of:_MenuButton_stories__WEBPACK_IMPORTED_MODULE_4__.WithTextAndIconAtTheEnd}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"disabled",children:"Disabled"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Canvas,{of:_MenuButton_stories__WEBPACK_IMPORTED_MODULE_4__.Disabled}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"custom-trigger-element",children:"Custom trigger element"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["You can use any element as a trigger for the menu button, just pass it as a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"triggerElement"})," to the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"MenuButton"})," component."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Canvas,{of:_MenuButton_stories__WEBPACK_IMPORTED_MODULE_4__.CustomTriggerElement}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"related-components",children:"Related components"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RelatedComponents,{componentsNames:[_storybook_components_related_components_component_description_map__WEBPACK_IMPORTED_MODULE_5__.n5,_storybook_components_related_components_component_description_map__WEBPACK_IMPORTED_MODULE_5__.Bq,_storybook_components_related_components_component_description_map__WEBPACK_IMPORTED_MODULE_5__.uY]})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_vibe_vibe_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}},"../storybook-blocks/dist/src/functions/createComponentTemplate.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>r});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function r(r){return function(e){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r,Object.assign({},e))}}}}]);