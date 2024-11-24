"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[2285],{"./src/components/List/__stories__/List.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ListWithAvatars:()=>ListWithAvatars,ListWithCategories:()=>ListWithCategories,ListWithIcons:()=>ListWithIcons,ListWithVirtualizationOptimization:()=>ListWithVirtualizationOptimization,Overview:()=>Overview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_List__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/List/List.tsx"),_Icon_Icons_components_Board__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/Icon/Icons/components/Board.tsx"),_Icon_Icons_components_Team__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/components/Icon/Icons/components/Team.tsx"),_Icon_Icons_components_ThumbsUp__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./src/components/Icon/Icons/components/ThumbsUp.tsx"),_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/ListItem/ListItem.tsx"),_ListItemIcon_ListItemIcon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/ListItemIcon/ListItemIcon.tsx"),_ListItemAvatar_ListItemAvatar__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/ListItemAvatar/ListItemAvatar.tsx"),_ListTitle_ListTitle__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/ListTitle/ListTitle.tsx"),_DialogContentContainer_DialogContentContainer__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./src/components/DialogContentContainer/DialogContentContainer.tsx"),vibe_storybook_components__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("../storybook-blocks/dist/src/components/story-description/story-description.js"),_storybook__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/storybook/functions/createStoryMetaSettingsDecorator.ts"),___WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./src/components/Flex/Flex.tsx"),_Avatar_stories_assets__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./src/components/Avatar/__stories__/assets/person1.png"),_Avatar_stories_assets__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./src/components/Avatar/__stories__/assets/person2.png"),_Avatar_stories_assets__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./src/components/Avatar/__stories__/assets/person3.png"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var metaSettings=(0,_storybook__WEBPACK_IMPORTED_MODULE_2__.B)({component:_List__WEBPACK_IMPORTED_MODULE_3__.A,enumPropNamesArray:["component"]});const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:'import React from "react";\nimport List, { ListProps } from "../List";\nimport Board from "../../Icon/Icons/components/Board";\nimport Team from "../../Icon/Icons/components/Team";\nimport ThumbsUp from "../../Icon/Icons/components/ThumbsUp";\nimport { useCallback } from "react";\nimport ListItem from "../../ListItem/ListItem";\nimport ListItemIcon from "../../ListItemIcon/ListItemIcon";\nimport ListItemAvatar from "../../ListItemAvatar/ListItemAvatar";\nimport ListTitle from "../../ListTitle/ListTitle";\nimport DialogContentContainer from "../../DialogContentContainer/DialogContentContainer";\nimport { StoryDescription } from "vibe-storybook-components";\nimport { createStoryMetaSettingsDecorator } from "../../../storybook";\nimport { Flex } from "../../";\nimport { person1, person2, person3 } from "../../Avatar/__stories__/assets";\n\nconst metaSettings = createStoryMetaSettingsDecorator({\n  component: List,\n  enumPropNamesArray: ["component"]\n});\n\nexport default {\n  title: "Navigation/List/List",\n  component: List,\n  subcomponents: {\n    ListItem,\n    ListItemIcon,\n    ListItemAvatar\n  },\n  argTypes: metaSettings.argTypes,\n  decorators: metaSettings.decorators\n};\n\nconst listTemplate = (args: ListProps) => {\n  const onClick = useCallback(() => alert("On click!"), []);\n  return (\n    <List {...args}>\n      <ListItem onClick={onClick}>Board Power up</ListItem>\n      <ListItem onClick={onClick}>Team Power up</ListItem>\n      <ListItem onClick={onClick}>Essentials</ListItem>\n    </List>\n  );\n};\n\nexport const Overview = {\n  render: listTemplate.bind({}),\n  name: "Overview",\n  args: {}\n};\n\nexport const ListWithCategories = {\n  render: () => (\n    <List>\n      <ListTitle>First category</ListTitle>\n      <ListItem>List item 1</ListItem>\n      <ListItem>List item 2</ListItem>\n      <ListTitle>Second category</ListTitle>\n      <ListItem>List item 3</ListItem>\n      <ListItem>List item 4</ListItem>\n    </List>\n  ),\n\n  name: "List with categories"\n};\n\nexport const ListWithIcons = {\n  render: () => (\n    <List>\n      <ListItem id="list-1">\n        <ListItemIcon icon={Board} />\n        List item 1\n      </ListItem>\n      <ListItem id="list-2">\n        <ListItemIcon icon={Team} />\n        List item 2\n      </ListItem>\n      <ListItem id="list-3">\n        <ListItemIcon icon={ThumbsUp} />\n        List item 3\n      </ListItem>\n    </List>\n  ),\n\n  name: "List with icons"\n};\n\nexport const ListWithAvatars = {\n  render: () => (\n    <List>\n      <ListItem id="list-1">\n        <ListItemAvatar src={person1} />\n        List item 1\n      </ListItem>\n      <ListItem id="list-2">\n        <ListItemAvatar src={person2} />\n        List item 2\n      </ListItem>\n      <ListItem id="list-3">\n        <ListItemAvatar src={person3} />\n        List item 3\n      </ListItem>\n    </List>\n  ),\n\n  name: "List with avatars"\n};\n\nexport const ListWithVirtualizationOptimization = {\n  render: () => (\n    <Flex\n      align={Flex.align.START}\n      gap={Flex.gaps.LARGE}\n      style={{\n        width: "100%"\n      }}\n      direction={Flex.directions.COLUMN}\n    >\n      <StoryDescription description="Regular">\n        <DialogContentContainer\n          style={{\n            height: "162px",\n            width: "200px"\n          }}\n        >\n          <List\n            renderOnlyVisibleItems\n            style={{\n              height: "100%",\n              width: "100%"\n            }}\n          >\n            <ListItem>List item 1</ListItem>\n            <ListItem>List item 2</ListItem>\n            <ListItem>List item 3</ListItem>\n            <ListItem>List item 4</ListItem>\n            <ListItem>List item 5</ListItem>\n            <ListItem>List item 6</ListItem>\n            <ListItem>List item 7</ListItem>\n            <ListItem>List item 8</ListItem>\n            <ListItem>List item 9</ListItem>\n            <ListItem>List item 10</ListItem>\n            <ListItem>List item 11</ListItem>\n            <ListItem>List item 12</ListItem>\n          </List>\n        </DialogContentContainer>\n      </StoryDescription>\n      <StoryDescription description="With categories">\n        <DialogContentContainer\n          style={{\n            height: "159px",\n            width: "200px"\n          }}\n        >\n          <List\n            renderOnlyVisibleItems\n            style={{\n              height: "100%",\n              width: "100%"\n            }}\n          >\n            <ListTitle>First category</ListTitle>\n            <ListItem>List item 1</ListItem>\n            <ListItem>List item 2</ListItem>\n            <ListTitle>Second category</ListTitle>\n            <ListItem>List item 3</ListItem>\n            <ListItem>List item 4</ListItem>\n            <ListItem>List item 5</ListItem>\n            <ListItem>List item 6</ListItem>\n            <ListItem>List item 7</ListItem>\n            <ListItem>List item 8</ListItem>\n            <ListItem>List item 9</ListItem>\n            <ListItem>List item 10</ListItem>\n            <ListItem>List item 11</ListItem>\n            <ListItem>List item 12</ListItem>\n          </List>\n        </DialogContentContainer>\n      </StoryDescription>\n    </Flex>\n  ),\n\n  name: "List with virtualization optimization"\n};\n',locationsMap:{overview:{startLoc:{col:24,line:45},endLoc:{col:1,line:49},startBody:{col:24,line:45},endBody:{col:1,line:49}},"list-with-categories":{startLoc:{col:34,line:51},endLoc:{col:1,line:64},startBody:{col:34,line:51},endBody:{col:1,line:64}},"list-with-icons":{startLoc:{col:29,line:66},endLoc:{col:1,line:85},startBody:{col:29,line:66},endBody:{col:1,line:85}},"list-with-avatars":{startLoc:{col:31,line:87},endLoc:{col:1,line:106},startBody:{col:31,line:87},endBody:{col:1,line:106}},"list-with-virtualization-optimization":{startLoc:{col:50,line:108},endLoc:{col:1,line:182},startBody:{col:50,line:108},endBody:{col:1,line:182}}}}},title:"Navigation/List/List",component:_List__WEBPACK_IMPORTED_MODULE_3__.A,subcomponents:{ListItem:_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_4__.A,ListItemIcon:_ListItemIcon_ListItemIcon__WEBPACK_IMPORTED_MODULE_5__.A,ListItemAvatar:_ListItemAvatar_ListItemAvatar__WEBPACK_IMPORTED_MODULE_6__.A},argTypes:metaSettings.argTypes,decorators:metaSettings.decorators};var listTemplate=function listTemplate(args){var onClick=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){return alert("On click!")}),[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_List__WEBPACK_IMPORTED_MODULE_3__.A,_objectSpread(_objectSpread({},args),{},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_4__.A,{onClick,children:"Board Power up"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_4__.A,{onClick,children:"Team Power up"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_4__.A,{onClick,children:"Essentials"})]}))};listTemplate.displayName="listTemplate";var Overview={render:listTemplate.bind({}),name:"Overview",args:{}},ListWithCategories={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_List__WEBPACK_IMPORTED_MODULE_3__.A,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ListTitle_ListTitle__WEBPACK_IMPORTED_MODULE_7__.A,{children:"First category"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_4__.A,{children:"List item 1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_4__.A,{children:"List item 2"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ListTitle_ListTitle__WEBPACK_IMPORTED_MODULE_7__.A,{children:"Second category"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_4__.A,{children:"List item 3"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_4__.A,{children:"List item 4"})]})},name:"List with categories"},ListWithIcons={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_List__WEBPACK_IMPORTED_MODULE_3__.A,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_4__.A,{id:"list-1",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ListItemIcon_ListItemIcon__WEBPACK_IMPORTED_MODULE_5__.A,{icon:_Icon_Icons_components_Board__WEBPACK_IMPORTED_MODULE_8__.A}),"List item 1"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_4__.A,{id:"list-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ListItemIcon_ListItemIcon__WEBPACK_IMPORTED_MODULE_5__.A,{icon:_Icon_Icons_components_Team__WEBPACK_IMPORTED_MODULE_9__.A}),"List item 2"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_4__.A,{id:"list-3",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ListItemIcon_ListItemIcon__WEBPACK_IMPORTED_MODULE_5__.A,{icon:_Icon_Icons_components_ThumbsUp__WEBPACK_IMPORTED_MODULE_10__.A}),"List item 3"]})]})},name:"List with icons"},ListWithAvatars={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_List__WEBPACK_IMPORTED_MODULE_3__.A,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_4__.A,{id:"list-1",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ListItemAvatar_ListItemAvatar__WEBPACK_IMPORTED_MODULE_6__.A,{src:_Avatar_stories_assets__WEBPACK_IMPORTED_MODULE_11__}),"List item 1"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_4__.A,{id:"list-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ListItemAvatar_ListItemAvatar__WEBPACK_IMPORTED_MODULE_6__.A,{src:_Avatar_stories_assets__WEBPACK_IMPORTED_MODULE_12__}),"List item 2"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_4__.A,{id:"list-3",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ListItemAvatar_ListItemAvatar__WEBPACK_IMPORTED_MODULE_6__.A,{src:_Avatar_stories_assets__WEBPACK_IMPORTED_MODULE_13__}),"List item 3"]})]})},name:"List with avatars"},ListWithVirtualizationOptimization={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(___WEBPACK_IMPORTED_MODULE_14__.A,{align:___WEBPACK_IMPORTED_MODULE_14__.A.align.START,gap:___WEBPACK_IMPORTED_MODULE_14__.A.gaps.LARGE,style:{width:"100%"},direction:___WEBPACK_IMPORTED_MODULE_14__.A.directions.COLUMN,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(vibe_storybook_components__WEBPACK_IMPORTED_MODULE_15__.A,{description:"Regular",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_DialogContentContainer_DialogContentContainer__WEBPACK_IMPORTED_MODULE_16__.A,{style:{height:"162px",width:"200px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_List__WEBPACK_IMPORTED_MODULE_3__.A,{renderOnlyVisibleItems:!0,style:{height:"100%",width:"100%"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_4__.A,{children:"List item 1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_4__.A,{children:"List item 2"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_4__.A,{children:"List item 3"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_4__.A,{children:"List item 4"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_4__.A,{children:"List item 5"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_4__.A,{children:"List item 6"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_4__.A,{children:"List item 7"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_4__.A,{children:"List item 8"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_4__.A,{children:"List item 9"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_4__.A,{children:"List item 10"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_4__.A,{children:"List item 11"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_4__.A,{children:"List item 12"})]})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(vibe_storybook_components__WEBPACK_IMPORTED_MODULE_15__.A,{description:"With categories",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_DialogContentContainer_DialogContentContainer__WEBPACK_IMPORTED_MODULE_16__.A,{style:{height:"159px",width:"200px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_List__WEBPACK_IMPORTED_MODULE_3__.A,{renderOnlyVisibleItems:!0,style:{height:"100%",width:"100%"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ListTitle_ListTitle__WEBPACK_IMPORTED_MODULE_7__.A,{children:"First category"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_4__.A,{children:"List item 1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_4__.A,{children:"List item 2"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ListTitle_ListTitle__WEBPACK_IMPORTED_MODULE_7__.A,{children:"Second category"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_4__.A,{children:"List item 3"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_4__.A,{children:"List item 4"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_4__.A,{children:"List item 5"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_4__.A,{children:"List item 6"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_4__.A,{children:"List item 7"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_4__.A,{children:"List item 8"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_4__.A,{children:"List item 9"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_4__.A,{children:"List item 10"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_4__.A,{children:"List item 11"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_4__.A,{children:"List item 12"})]})})})]})},name:"List with virtualization optimization"};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: listTemplate.bind({}),\n  name: "Overview",\n  args: {}\n}',...Overview.parameters?.docs?.source}}},ListWithCategories.parameters={...ListWithCategories.parameters,docs:{...ListWithCategories.parameters?.docs,source:{originalSource:'{\n  render: () => <List>\n      <ListTitle>First category</ListTitle>\n      <ListItem>List item 1</ListItem>\n      <ListItem>List item 2</ListItem>\n      <ListTitle>Second category</ListTitle>\n      <ListItem>List item 3</ListItem>\n      <ListItem>List item 4</ListItem>\n    </List>,\n  name: "List with categories"\n}',...ListWithCategories.parameters?.docs?.source}}},ListWithIcons.parameters={...ListWithIcons.parameters,docs:{...ListWithIcons.parameters?.docs,source:{originalSource:'{\n  render: () => <List>\n      <ListItem id="list-1">\n        <ListItemIcon icon={Board} />\n        List item 1\n      </ListItem>\n      <ListItem id="list-2">\n        <ListItemIcon icon={Team} />\n        List item 2\n      </ListItem>\n      <ListItem id="list-3">\n        <ListItemIcon icon={ThumbsUp} />\n        List item 3\n      </ListItem>\n    </List>,\n  name: "List with icons"\n}',...ListWithIcons.parameters?.docs?.source}}},ListWithAvatars.parameters={...ListWithAvatars.parameters,docs:{...ListWithAvatars.parameters?.docs,source:{originalSource:'{\n  render: () => <List>\n      <ListItem id="list-1">\n        <ListItemAvatar src={person1} />\n        List item 1\n      </ListItem>\n      <ListItem id="list-2">\n        <ListItemAvatar src={person2} />\n        List item 2\n      </ListItem>\n      <ListItem id="list-3">\n        <ListItemAvatar src={person3} />\n        List item 3\n      </ListItem>\n    </List>,\n  name: "List with avatars"\n}',...ListWithAvatars.parameters?.docs?.source}}},ListWithVirtualizationOptimization.parameters={...ListWithVirtualizationOptimization.parameters,docs:{...ListWithVirtualizationOptimization.parameters?.docs,source:{originalSource:'{\n  render: () => <Flex align={Flex.align.START} gap={Flex.gaps.LARGE} style={{\n    width: "100%"\n  }} direction={Flex.directions.COLUMN}>\n      <StoryDescription description="Regular">\n        <DialogContentContainer style={{\n        height: "162px",\n        width: "200px"\n      }}>\n          <List renderOnlyVisibleItems style={{\n          height: "100%",\n          width: "100%"\n        }}>\n            <ListItem>List item 1</ListItem>\n            <ListItem>List item 2</ListItem>\n            <ListItem>List item 3</ListItem>\n            <ListItem>List item 4</ListItem>\n            <ListItem>List item 5</ListItem>\n            <ListItem>List item 6</ListItem>\n            <ListItem>List item 7</ListItem>\n            <ListItem>List item 8</ListItem>\n            <ListItem>List item 9</ListItem>\n            <ListItem>List item 10</ListItem>\n            <ListItem>List item 11</ListItem>\n            <ListItem>List item 12</ListItem>\n          </List>\n        </DialogContentContainer>\n      </StoryDescription>\n      <StoryDescription description="With categories">\n        <DialogContentContainer style={{\n        height: "159px",\n        width: "200px"\n      }}>\n          <List renderOnlyVisibleItems style={{\n          height: "100%",\n          width: "100%"\n        }}>\n            <ListTitle>First category</ListTitle>\n            <ListItem>List item 1</ListItem>\n            <ListItem>List item 2</ListItem>\n            <ListTitle>Second category</ListTitle>\n            <ListItem>List item 3</ListItem>\n            <ListItem>List item 4</ListItem>\n            <ListItem>List item 5</ListItem>\n            <ListItem>List item 6</ListItem>\n            <ListItem>List item 7</ListItem>\n            <ListItem>List item 8</ListItem>\n            <ListItem>List item 9</ListItem>\n            <ListItem>List item 10</ListItem>\n            <ListItem>List item 11</ListItem>\n            <ListItem>List item 12</ListItem>\n          </List>\n        </DialogContentContainer>\n      </StoryDescription>\n    </Flex>,\n  name: "List with virtualization optimization"\n}',...ListWithVirtualizationOptimization.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","ListWithCategories","ListWithIcons","ListWithAvatars","ListWithVirtualizationOptimization"]},"../storybook-blocks/dist/src/components/story-description/story-description.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>p});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/react/index.js"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),withStaticProps=__webpack_require__("../storybook-blocks/dist/src/types/withStaticProps.js"),FlexConstants=__webpack_require__("../storybook-blocks/dist/src/helpers/components/Flex/FlexConstants.js"),Flex=__webpack_require__("../storybook-blocks/dist/src/helpers/components/Flex/Flex.js"),e_description="story-description-module_description__yFjQO",e_vertical="story-description-module_vertical__C1SJj";function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperty(obj,key,value){return key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(key),key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var p=(0,withStaticProps.N)((function m(t){var o,l,n,_t$description=t.description,a=void 0===_t$description?"":_t$description,p=t.headerStyle,u=t.children,_t$vertical=t.vertical,v=void 0!==_t$vertical&&_t$vertical,f=t.className,j=t.align,_t$justify=t.justify,g=void 0===_t$justify?null===(o=m.justify)||void 0===o?void 0:o.START:_t$justify,h=t.headerAlign,y=t.headerJustify,x=(0,react.useMemo)((function(){var i,s;return v?null===(i=m.directions)||void 0===i?void 0:i.COLUMN:null===(s=m.directions)||void 0===s?void 0:s.ROW}),[v]);return(0,jsx_runtime.jsxs)(Flex.A,{direction:x,gap:null===(l=m.gaps)||void 0===l?void 0:l.MEDIUM,justify:g,align:j||void 0,className:f,children:[(0,jsx_runtime.jsx)(Flex.A,{className:classnames_default()(e_description,_defineProperty({},e_vertical,v)),style:Object.assign({width:"120px"},p),justify:y,align:h||(null===(n=m.align)||void 0===n?void 0:n.CENTER),children:a}),u]})}),{justify:FlexConstants.aP,align:FlexConstants.xB,gaps:FlexConstants.Us,directions:FlexConstants.bo})}}]);