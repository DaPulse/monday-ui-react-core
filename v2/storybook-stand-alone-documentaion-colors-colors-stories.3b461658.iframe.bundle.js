"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[2789],{"./src/storybook/stand-alone-documentaion/colors/colors.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Background:()=>Background,Border:()=>Border,Content:()=>Content,Semantic:()=>Semantic,Text:()=>colors_stories_Text,__namedExportsOrder:()=>__namedExportsOrder,default:()=>colors_stories});var react=__webpack_require__("../../node_modules/react/index.js"),colors_description=__webpack_require__("./src/storybook/stand-alone-documentaion/colors/colors-description/colors-description.jsx"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),colorKeys=["primary-color","primary-hover-color","primary-selected-color","primary-selected-hover-color","primary-highlighted-color","primary-surface-color","positive-color","positive-color-hover","positive-color-selected","positive-color-selected-hover","negative-color","negative-color-hover","negative-color-selected","negative-color-selected-hover","warning-color","warning-color-hover","warning-color-selected","warning-color-selected-hover","private-color","shareable-color","inverted-color-background","icon-color","fixed-light-color","fixed-dark-color"],SemanticColors=function SemanticColors(){return(0,jsx_runtime.jsx)(colors_description.A,{colorNames:colorKeys})};SemanticColors.displayName="SemanticColors";var background_colors_colorKeys=["primary-background-color","secondary-background-color","primary-background-hover-color","inverted-color-background","grey-background-color","allgrey-background-color","ui-background-color"],BackgroundColors=function BackgroundColors(){return(0,jsx_runtime.jsx)(colors_description.A,{colorNames:background_colors_colorKeys})};BackgroundColors.displayName="BackgroundColors",BackgroundColors.__docgenInfo={description:"",methods:[],displayName:"BackgroundColors"};var text_colors=__webpack_require__("./src/storybook/stand-alone-documentaion/colors/text-colors/text-colors.jsx"),border_colors_colorKeys=["ui-border-color","layout-border-color"],BorderColors=function BorderColors(){return(0,jsx_runtime.jsx)(colors_description.A,{colorNames:border_colors_colorKeys})};BorderColors.displayName="BorderColors",BorderColors.__docgenInfo={description:"",methods:[],displayName:"BorderColors"};var colors_utils=__webpack_require__("./src/utils/colors-utils.ts"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),content_color_cell_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[16].use[3]!./src/storybook/stand-alone-documentaion/colors/content-color-cell/content-color-cell.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(content_color_cell_module.A,options);const content_color_cell_content_color_cell_module=content_color_cell_module.A&&content_color_cell_module.A.locals?content_color_cell_module.A.locals:void 0;var ContentColorCell=function ContentColorCell(_ref){var children=_ref.children,style=_ref.style;return(0,jsx_runtime.jsx)("td",{className:content_color_cell_content_color_cell_module["content-colors-cell"],style,children})};ContentColorCell.displayName="ContentColorCell",ContentColorCell.__docgenInfo={description:"",methods:[],displayName:"ContentColorCell"};var Text=__webpack_require__("./src/components/Text/Text.tsx"),ContentColorRow=function ContentColorRow(_ref){var colorName=_ref.colorName,regularStyle=(0,react.useMemo)((function(){return{backgroundColor:colors_utils.A.getMondayColorAsStyle(colorName,colors_utils.A.modes.REGULAR)}}),[colorName]),hoverStyle=(0,react.useMemo)((function(){return{backgroundColor:colors_utils.A.getMondayColorAsStyle(colorName,colors_utils.A.modes.HOVER)}}),[colorName]),selectedStyle=(0,react.useMemo)((function(){return{backgroundColor:colors_utils.A.getMondayColorAsStyle(colorName,colors_utils.A.modes.SELECTED)}}),[colorName]);return(0,jsx_runtime.jsxs)("tr",{className:"content-color-row",children:[(0,jsx_runtime.jsx)(ContentColorCell,{children:(0,jsx_runtime.jsx)(Text.A,{children:"--".concat(colorName)})}),(0,jsx_runtime.jsx)(ContentColorCell,{style:regularStyle}),(0,jsx_runtime.jsx)(ContentColorCell,{style:hoverStyle}),(0,jsx_runtime.jsx)(ContentColorCell,{style:selectedStyle})]})};ContentColorRow.displayName="ContentColorRow",ContentColorRow.__docgenInfo={description:"",methods:[],displayName:"ContentColorRow"};var colors_vars_map=__webpack_require__("./src/utils/colors-vars-map.ts"),content_colors_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[16].use[3]!./src/storybook/stand-alone-documentaion/colors/content-colors/content-colors.module.scss"),content_colors_module_options={};content_colors_module_options.styleTagTransform=styleTagTransform_default(),content_colors_module_options.setAttributes=setAttributesWithoutAttributes_default(),content_colors_module_options.insert=insertBySelector_default().bind(null,"head"),content_colors_module_options.domAPI=styleDomAPI_default(),content_colors_module_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(content_colors_module.A,content_colors_module_options);const content_colors_content_colors_module=content_colors_module.A&&content_colors_module.A.locals?content_colors_module.A.locals:void 0;var ContentColors=function ContentColors(){var colorsCells=(0,react.useMemo)((function(){return Object.values(colors_vars_map.D).map((function(colorName){return(0,jsx_runtime.jsx)(ContentColorRow,{colorName},colorName)}))}),[]);return(0,jsx_runtime.jsxs)("table",{className:content_colors_content_colors_module["content-colors-table"],cellSpacing:1,children:[(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)(ContentColorCell,{}),(0,jsx_runtime.jsx)(ContentColorCell,{children:(0,jsx_runtime.jsx)(Text.A,{children:"Default"})}),(0,jsx_runtime.jsx)(ContentColorCell,{children:(0,jsx_runtime.jsx)(Text.A,{children:"Hover"})}),(0,jsx_runtime.jsx)(ContentColorCell,{children:(0,jsx_runtime.jsx)(Text.A,{children:"Selected"})})]}),colorsCells]})};ContentColors.displayName="ContentColors",ContentColors.__docgenInfo={description:"",methods:[],displayName:"ContentColors"};const colors_stories={parameters:{storySource:{source:'import { Meta, StoryObj } from "@storybook/react";\nimport { SemanticColors } from "./semantic-colors/semantic-colors";\nimport { BackgroundColors } from "./background-colors/background-colors";\nimport TextColors from "./text-colors/text-colors";\nimport { BorderColors } from "./border-colors/border-colors";\nimport { ContentColors } from "./content-colors/content-colors";\n\nconst meta: Meta = {\n  title: "Foundations/Colors"\n};\nexport default meta;\n\ntype Story = StoryObj;\n\nexport const Semantic: Story = {\n  render: SemanticColors\n};\n\nexport const Background: Story = {\n  render: BackgroundColors\n};\n\nexport const Text: Story = {\n  render: TextColors\n};\n\nexport const Border: Story = {\n  render: BorderColors\n};\n\nexport const Content: Story = {\n  render: ContentColors\n};\n',locationsMap:{semantic:{startLoc:{col:31,line:15},endLoc:{col:1,line:17},startBody:{col:31,line:15},endBody:{col:1,line:17}},background:{startLoc:{col:33,line:19},endLoc:{col:1,line:21},startBody:{col:33,line:19},endBody:{col:1,line:21}},text:{startLoc:{col:27,line:23},endLoc:{col:1,line:25},startBody:{col:27,line:23},endBody:{col:1,line:25}},border:{startLoc:{col:29,line:27},endLoc:{col:1,line:29},startBody:{col:29,line:27},endBody:{col:1,line:29}},content:{startLoc:{col:30,line:31},endLoc:{col:1,line:33},startBody:{col:30,line:31},endBody:{col:1,line:33}}}}},title:"Foundations/Colors"};var Semantic={render:SemanticColors},Background={render:BackgroundColors},colors_stories_Text={render:text_colors.A},Border={render:BorderColors},Content={render:ContentColors};Semantic.parameters={...Semantic.parameters,docs:{...Semantic.parameters?.docs,source:{originalSource:"{\n  render: SemanticColors\n}",...Semantic.parameters?.docs?.source}}},Background.parameters={...Background.parameters,docs:{...Background.parameters?.docs,source:{originalSource:"{\n  render: BackgroundColors\n}",...Background.parameters?.docs?.source}}},colors_stories_Text.parameters={...colors_stories_Text.parameters,docs:{...colors_stories_Text.parameters?.docs,source:{originalSource:"{\n  render: TextColors\n}",...colors_stories_Text.parameters?.docs?.source}}},Border.parameters={...Border.parameters,docs:{...Border.parameters?.docs,source:{originalSource:"{\n  render: BorderColors\n}",...Border.parameters?.docs?.source}}},Content.parameters={...Content.parameters,docs:{...Content.parameters?.docs,source:{originalSource:"{\n  render: ContentColors\n}",...Content.parameters?.docs?.source}}};const __namedExportsOrder=["Semantic","Background","Text","Border","Content"]},"./src/storybook/stand-alone-documentaion/colors/colors-description/colors-description.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>ColorsDescription,A:()=>colors_description});var react=__webpack_require__("../../node_modules/react/index.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),i_visualDescription="visual-description-module_visualDescription__ucr0q",i_visualDescriptionVisual="visual-description-module_visualDescriptionVisual__2PrLr",i_visualDescriptionText="visual-description-module_visualDescriptionText__E4eqG",i_visualDescriptionTitle="visual-description-module_visualDescriptionTitle__bxuHc",l=function l(_ref){var l=_ref.title,r=_ref.ariaLabel,c=_ref.children,t=_ref.description,o=_ref.code,n=_ref.className,d=_ref.visualDescriptionClassName;return(0,jsx_runtime.jsxs)("div",{className:classnames_default()(i_visualDescription,n),"aria-label":r,children:[(0,jsx_runtime.jsx)("figure",{className:classnames_default()(i_visualDescriptionVisual,d),"aria-hidden":!0,children:c}),(0,jsx_runtime.jsxs)("section",{className:i_visualDescriptionText,children:[(0,jsx_runtime.jsx)("h5",{className:i_visualDescriptionTitle,children:l}),t,o&&(0,jsx_runtime.jsx)("code",{children:o})]})]})},o_colorDescription="color-description-module_colorDescription__Y5Iga",o_withBorder="color-description-module_withBorder__1QtNB";function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperty(obj,key,value){return key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(key),key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var t=function t(_ref){var t=_ref.colorName,e=_ref.description,c=_ref.withBorder,a=(0,jsx_runtime.jsx)("div",{className:classnames_default()(o_colorDescription,_defineProperty({},o_withBorder,c)),style:{backgroundColor:"var(--".concat(t,")")}});return(0,jsx_runtime.jsx)(l,{title:t,description:e,ariaLabel:e,children:a})},colors_vars_map=__webpack_require__("./src/utils/colors-vars-map.ts"),colorsWithBorder=new Set(["text-color-on-inverted","text-color-on-primary","fixed-light-color","text-color-on-brand","primary-background-color","secondary-background-color"]),ColorsDescription=function ColorsDescription(_ref){var colorNames=_ref.colorNames,descriptions=(0,react.useMemo)((function(){return colorNames.map((function(color){return(0,jsx_runtime.jsx)(t,{colorName:color,description:colors_vars_map.xw.get(color),withBorder:colorsWithBorder.has(color)},color)}))}),[colorNames]);return(0,jsx_runtime.jsx)("div",{children:descriptions})};ColorsDescription.displayName="ColorsDescription";const colors_description=ColorsDescription;ColorsDescription.__docgenInfo={description:"",methods:[],displayName:"ColorsDescription"}},"./src/storybook/stand-alone-documentaion/colors/text-colors/text-colors.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_colors_description_colors_description__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/storybook/stand-alone-documentaion/colors/colors-description/colors-description.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),TextColors=function TextColors(){var colorKeys=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return["primary-text-color","secondary-text-color","secondary-text-on-secondary-color","text-color-on-inverted","text-color-on-primary","disabled-text-color","placeholder-color","link-color"]}),[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_colors_description_colors_description__WEBPACK_IMPORTED_MODULE_2__.R,{colorNames:colorKeys})};TextColors.displayName="TextColors";const __WEBPACK_DEFAULT_EXPORT__=TextColors;TextColors.__docgenInfo={description:"",methods:[],displayName:"TextColors"}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[16].use[3]!./src/storybook/stand-alone-documentaion/colors/content-color-cell/content-color-cell.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".content-color-cell-module_content-colors-cell{height:40px;width:25%;padding:0;margin:0}","",{version:3,sources:["webpack://./src/storybook/stand-alone-documentaion/colors/content-color-cell/content-color-cell.module.scss"],names:[],mappings:"AAAA,+CACE,WAAA,CACA,SAAA,CACA,SAAA,CACA,QAAA",sourcesContent:[".content-colors-cell {\n  height: 40px;\n  width: 25%;\n  padding: 0;\n  margin: 0;\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"content-colors-cell":"content-color-cell-module_content-colors-cell"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[16].use[3]!./src/storybook/stand-alone-documentaion/colors/content-colors/content-colors.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".content-colors-module_content-colors-table{width:60%;justify-self:center}","",{version:3,sources:["webpack://./src/storybook/stand-alone-documentaion/colors/content-colors/content-colors.module.scss"],names:[],mappings:"AAAA,4CACE,SAAA,CACA,mBAAA",sourcesContent:[".content-colors-table {\n  width: 60%;\n  justify-self: center;\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"content-colors-table":"content-colors-module_content-colors-table"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);