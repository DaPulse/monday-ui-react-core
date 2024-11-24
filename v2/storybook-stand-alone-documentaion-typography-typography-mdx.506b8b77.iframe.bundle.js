"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[8937],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/storybook/stand-alone-documentaion/typography/typography.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>typography});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),frame_frame=__webpack_require__("../storybook-blocks/dist/src/components/frame/frame.js"),Heading=__webpack_require__("./src/components/Heading/Heading.tsx"),Text=__webpack_require__("./src/components/Text/Text.tsx"),text_colors=__webpack_require__("./src/storybook/stand-alone-documentaion/colors/text-colors/text-colors.jsx"),component_description_map=__webpack_require__("./src/storybook/components/related-components/component-description-map.tsx");const typographyExample1_namespaceObject=__webpack_require__.p+"static/media/typographyExample1.d42f6186.png",typographyExample2_namespaceObject=__webpack_require__.p+"static/media/typographyExample2.f19010e5.png",typographyExample3_namespaceObject=__webpack_require__.p+"static/media/typographyExample3.f7555fbf.png",typographyExample4_namespaceObject=__webpack_require__.p+"static/media/typographyExample4.4f3d68ab.png";var injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),example_table_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[16].use[3]!./src/storybook/stand-alone-documentaion/typography/examples-table/example-table.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(example_table_module.A,options);const examples_table_example_table_module=example_table_module.A&&example_table_module.A.locals?example_table_module.A.locals:void 0;var ExamplesTable=function ExamplesTable(_ref){var data=_ref.data;return(0,jsx_runtime.jsxs)("table",{className:examples_table_example_table_module.table,children:[(0,jsx_runtime.jsx)(Text.A,{type:Text.A.types.TEXT2,element:"thead",ellipsis:!1,color:Text.A.colors.SECONDARY,weight:Text.A.weights.MEDIUM,align:Text.A.align.START,children:(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("th",{children:"Name"}),(0,jsx_runtime.jsx)("th",{children:"SASS"})]})}),(0,jsx_runtime.jsx)(Text.A,{type:Text.A.types.TEXT2,element:"tbody",ellipsis:!1,align:Text.A.align.START,children:data.map((function(item,index){return(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:item.name}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)("code",{children:item.sass})})]},index)}))})]})};ExamplesTable.displayName="ExamplesTable";const examples_table=ExamplesTable;try{examplestable.displayName="examplestable",examplestable.__docgenInfo={description:"",displayName:"examplestable",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/storybook/stand-alone-documentaion/typography/examples-table/examples-table.tsx#examplestable"]={docgenInfo:examplestable.__docgenInfo,name:"examplestable",path:"src/storybook/stand-alone-documentaion/typography/examples-table/examples-table.tsx#examplestable"})}catch(__react_docgen_typescript_loader_error){}var typograpghy_stories_helpers=__webpack_require__("./src/storybook/stand-alone-documentaion/typography/typograpghy.stories.helpers.tsx"),typography_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[16].use[3]!./src/storybook/stand-alone-documentaion/typography/typography.module.scss"),typography_module_options={};typography_module_options.styleTagTransform=styleTagTransform_default(),typography_module_options.setAttributes=setAttributesWithoutAttributes_default(),typography_module_options.insert=insertBySelector_default().bind(null,"head"),typography_module_options.domAPI=styleDomAPI_default(),typography_module_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(typography_module.A,typography_module_options);const typography_typography_module=typography_module.A&&typography_module.A.locals?typography_module.A.locals:void 0;function _createMdxContent(props){const _components=Object.assign({ul:"ul",li:"li",a:"a",h2:"h2",p:"p",pre:"pre",code:"code"},(0,lib.RP)(),props.components),{ComponentName,UsageGuidelines,RelatedComponents}=_components;return ComponentName||_missingMdxReference("ComponentName",!0),RelatedComponents||_missingMdxReference("RelatedComponents",!0),UsageGuidelines||_missingMdxReference("UsageGuidelines",!0),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Foundations/Typography"}),"\n",(0,jsx_runtime.jsx)(ComponentName,{withFoundationBackground:!0,children:"Typography"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#fonts",children:"Fonts"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#type-styles",children:"Type styles"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#text-colors",children:"Text colors"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#usage-and-examples",children:"Usage and examples"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#feedback",children:"Feedback"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Like in other UI in mondays interface, typography works by principle of accessibility before aesthetics.\nTherefore, the text should be readable and help the user understand what’s important by well contrasted size and colors hierarchy."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"fonts",children:"Fonts"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"We are using two fonts for our UI hierarchy: Poppins and Figtree.\nWe are using Poppins font for our main titles (heading), and Figtree for text, labels and paragraphs.\nWe don't import the font within our CSS in order to give full control of the fonts which you wish to bring to your client, the following code snippet is what we recommend in order to include our recommended fonts."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<link\n  href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"\n  rel="stylesheet"\n/>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"More ever this is how we are building our css variable for our main font families"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-css",children:"--font-family: Figtree, Roboto, Noto Sans Hebrew, Noto Kufi Arabic, Noto Sans JP, sans-serif;\n--title-font-family: Poppins, Roboto, Noto Sans Hebrew, Noto Kufi Arabic, Noto Sans JP, sans-serif;\n"})}),"\n",(0,jsx_runtime.jsx)(typograpghy_stories_helpers.OR,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"type-styles",children:"Type styles"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"We use two key type styles: heading and text"}),"\n",(0,jsx_runtime.jsxs)(frame_frame.A,{children:[(0,jsx_runtime.jsx)(Text.A,{type:Text.A.types.TEXT1,weight:Text.A.weights.BOLD,children:(0,jsx_runtime.jsx)(_components.p,{children:"H1 - 32px"})}),(0,jsx_runtime.jsx)(examples_table,{data:[{name:(0,jsx_runtime.jsx)(Heading.A,{type:Heading.A.types.H1,weight:Heading.A.weights.BOLD,children:"H1 bold"}),sass:"@include vibe-heading(h1, bold);"},{name:(0,jsx_runtime.jsx)(Heading.A,{type:Heading.A.types.H1,weight:Heading.A.weights.MEDIUM,children:"H1 medium"}),sass:"@include vibe-heading(h1, medium);"},{name:(0,jsx_runtime.jsx)(Heading.A,{type:Heading.A.types.H1,weight:Heading.A.weights.NORMAL,children:"H1 normal"}),sass:"@include vibe-heading(h1, normal);"},{name:(0,jsx_runtime.jsx)(Heading.A,{type:Heading.A.types.H1,weight:Heading.A.weights.LIGHT,children:"H1 light"}),sass:"@include vibe-heading(h1, light);"}]}),(0,jsx_runtime.jsx)(Text.A,{type:Text.A.types.TEXT1,weight:Text.A.weights.BOLD,children:(0,jsx_runtime.jsx)(_components.p,{children:"H2 - 24px"})}),(0,jsx_runtime.jsx)(examples_table,{data:[{name:(0,jsx_runtime.jsx)(Heading.A,{type:Heading.A.types.H2,weight:Heading.A.weights.BOLD,children:"H2 bold"}),sass:"@include vibe-heading(h2, bold);"},{name:(0,jsx_runtime.jsx)(Heading.A,{type:Heading.A.types.H2,weight:Heading.A.weights.MEDIUM,children:"H2 medium"}),sass:"@include vibe-heading(h2, medium);"},{name:(0,jsx_runtime.jsx)(Heading.A,{type:Heading.A.types.H2,weight:Heading.A.weights.NORMAL,children:"H2 normal"}),sass:"@include vibe-heading(h2, normal);"},{name:(0,jsx_runtime.jsx)(Heading.A,{type:Heading.A.types.H2,weight:Heading.A.weights.LIGHT,children:"H2 light"}),sass:"@include vibe-heading(h2, light);"}]}),(0,jsx_runtime.jsx)(Text.A,{type:Text.A.types.TEXT1,weight:Text.A.weights.BOLD,children:(0,jsx_runtime.jsx)(_components.p,{children:"H3 - 18px"})}),(0,jsx_runtime.jsx)(examples_table,{data:[{name:(0,jsx_runtime.jsx)(Heading.A,{type:Heading.A.types.H3,weight:Heading.A.weights.BOLD,children:"H3 bold"}),sass:"@include vibe-heading(h3, bold);"},{name:(0,jsx_runtime.jsx)(Heading.A,{type:Heading.A.types.H3,weight:Heading.A.weights.MEDIUM,children:"H3 medium"}),sass:"@include vibe-heading(h3, medium);"},{name:(0,jsx_runtime.jsx)(Heading.A,{type:Heading.A.types.H3,weight:Heading.A.weights.NORMAL,children:"H3 normal"}),sass:"@include vibe-heading(h3, normal);"},{name:(0,jsx_runtime.jsx)(Heading.A,{type:Heading.A.types.H3,weight:Heading.A.weights.LIGHT,children:"H3 light"}),sass:"@include vibe-heading(h3, light);"}]}),(0,jsx_runtime.jsx)(Text.A,{type:Text.A.types.TEXT1,weight:Text.A.weights.BOLD,children:(0,jsx_runtime.jsx)(_components.p,{children:"Text1 - 16px"})}),(0,jsx_runtime.jsx)(examples_table,{data:[{name:(0,jsx_runtime.jsx)(Text.A,{type:Text.A.types.TEXT1,weight:Text.A.weights.BOLD,children:"Text1 bold"}),sass:"@include vibe-text(text1, bold);"},{name:(0,jsx_runtime.jsx)(Text.A,{type:Text.A.types.TEXT1,weight:Text.A.weights.MEDIUM,children:"Text1 medium"}),sass:"@include vibe-text(text1, medium);"},{name:(0,jsx_runtime.jsx)(Text.A,{type:Text.A.types.TEXT1,weight:Text.A.weights.NORMAL,children:"Text1 normal"}),sass:"@include vibe-text(text1, normal);"}]}),(0,jsx_runtime.jsx)(Text.A,{type:Text.A.types.TEXT1,weight:Text.A.weights.BOLD,children:(0,jsx_runtime.jsx)(_components.p,{children:"Text2 - 14px"})}),(0,jsx_runtime.jsx)(examples_table,{data:[{name:(0,jsx_runtime.jsx)(Text.A,{type:Text.A.types.TEXT2,weight:Text.A.weights.BOLD,children:"Text2 bold"}),sass:"@include vibe-text(text2, bold);"},{name:(0,jsx_runtime.jsx)(Text.A,{type:Text.A.types.TEXT2,weight:Text.A.weights.MEDIUM,children:"Text2 medium"}),sass:"@include vibe-text(text2, medium);"},{name:(0,jsx_runtime.jsx)(Text.A,{type:Text.A.types.TEXT2,weight:Text.A.weights.NORMAL,children:"Text2 normal"}),sass:"@include vibe-text(text2, normal);"}]}),(0,jsx_runtime.jsx)(Text.A,{type:Text.A.types.TEXT1,weight:Text.A.weights.BOLD,children:(0,jsx_runtime.jsx)(_components.p,{children:"Text3 - 12px"})}),(0,jsx_runtime.jsx)(examples_table,{data:[{name:(0,jsx_runtime.jsx)(Text.A,{type:Text.A.types.TEXT3,weight:Text.A.weights.MEDIUM,children:"Text3 medium"}),sass:"@include vibe-text(text3, medium);"},{name:(0,jsx_runtime.jsx)(Text.A,{type:Text.A.types.TEXT3,weight:Text.A.weights.NORMAL,children:"Text3 normal"}),sass:"@include vibe-text(text3, normal);"}]})]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"text-colors",children:"Text colors"}),"\n",(0,jsx_runtime.jsx)(text_colors.A,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage-and-examples",children:"Usage and examples"}),"\n",(0,jsx_runtime.jsx)(UsageGuidelines,{guidelines:["Avoid using text size smaller than 14px.","Don't underline words. For typographic emphasis use bold text.","Don't use 2 different sizes of text in the same line."]}),"\n",(0,jsx_runtime.jsx)(frame_frame.A,{className:typography_typography_module.usageImageFrame,children:(0,jsx_runtime.jsx)("img",{src:typographyExample1_namespaceObject,className:typography_typography_module.bigImage,alt:"",role:"presentation"})}),"\n",(0,jsx_runtime.jsx)(frame_frame.A,{className:typography_typography_module.usageImageFrame,children:(0,jsx_runtime.jsx)("img",{src:typographyExample2_namespaceObject,className:typography_typography_module.smallImage,alt:"",role:"presentation"})}),"\n",(0,jsx_runtime.jsx)(frame_frame.A,{className:typography_typography_module.usageImageFrame,children:(0,jsx_runtime.jsx)("img",{src:typographyExample3_namespaceObject,className:typography_typography_module.smallImage,alt:"",role:"presentation"})}),"\n",(0,jsx_runtime.jsx)(frame_frame.A,{className:typography_typography_module.usageImageFrame,children:(0,jsx_runtime.jsx)("img",{src:typographyExample4_namespaceObject,className:typography_typography_module.smallImage,alt:"",role:"presentation"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"related-components",children:"Related components"}),"\n",(0,jsx_runtime.jsx)(RelatedComponents,{componentsNames:[component_description_map.a$,component_description_map.TB,component_description_map.kd]})]})}const typography=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}},"./src/storybook/stand-alone-documentaion/colors/colors-description/colors-description.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>ColorsDescription,A:()=>colors_description});var react=__webpack_require__("../../node_modules/react/index.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),i_visualDescription="visual-description-module_visualDescription__ucr0q",i_visualDescriptionVisual="visual-description-module_visualDescriptionVisual__2PrLr",i_visualDescriptionText="visual-description-module_visualDescriptionText__E4eqG",i_visualDescriptionTitle="visual-description-module_visualDescriptionTitle__bxuHc",l=function l(_ref){var l=_ref.title,r=_ref.ariaLabel,c=_ref.children,t=_ref.description,o=_ref.code,n=_ref.className,d=_ref.visualDescriptionClassName;return(0,jsx_runtime.jsxs)("div",{className:classnames_default()(i_visualDescription,n),"aria-label":r,children:[(0,jsx_runtime.jsx)("figure",{className:classnames_default()(i_visualDescriptionVisual,d),"aria-hidden":!0,children:c}),(0,jsx_runtime.jsxs)("section",{className:i_visualDescriptionText,children:[(0,jsx_runtime.jsx)("h5",{className:i_visualDescriptionTitle,children:l}),t,o&&(0,jsx_runtime.jsx)("code",{children:o})]})]})},o_colorDescription="color-description-module_colorDescription__Y5Iga",o_withBorder="color-description-module_withBorder__1QtNB";function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperty(obj,key,value){return key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(key),key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var t=function t(_ref){var t=_ref.colorName,e=_ref.description,c=_ref.withBorder,a=(0,jsx_runtime.jsx)("div",{className:classnames_default()(o_colorDescription,_defineProperty({},o_withBorder,c)),style:{backgroundColor:"var(--".concat(t,")")}});return(0,jsx_runtime.jsx)(l,{title:t,description:e,ariaLabel:e,children:a})},colors_vars_map=__webpack_require__("./src/utils/colors-vars-map.ts"),colorsWithBorder=new Set(["text-color-on-inverted","text-color-on-primary","fixed-light-color","text-color-on-brand","primary-background-color","secondary-background-color"]),ColorsDescription=function ColorsDescription(_ref){var colorNames=_ref.colorNames,descriptions=(0,react.useMemo)((function(){return colorNames.map((function(color){return(0,jsx_runtime.jsx)(t,{colorName:color,description:colors_vars_map.xw.get(color),withBorder:colorsWithBorder.has(color)},color)}))}),[colorNames]);return(0,jsx_runtime.jsx)("div",{children:descriptions})};ColorsDescription.displayName="ColorsDescription";const colors_description=ColorsDescription;ColorsDescription.__docgenInfo={description:"",methods:[],displayName:"ColorsDescription"}},"./src/storybook/stand-alone-documentaion/colors/text-colors/text-colors.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_colors_description_colors_description__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/storybook/stand-alone-documentaion/colors/colors-description/colors-description.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),TextColors=function TextColors(){var colorKeys=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return["primary-text-color","secondary-text-color","secondary-text-on-secondary-color","text-color-on-inverted","text-color-on-primary","disabled-text-color","placeholder-color","link-color"]}),[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_colors_description_colors_description__WEBPACK_IMPORTED_MODULE_2__.R,{colorNames:colorKeys})};TextColors.displayName="TextColors";const __WEBPACK_DEFAULT_EXPORT__=TextColors;TextColors.__docgenInfo={description:"",methods:[],displayName:"TextColors"}},"./src/storybook/stand-alone-documentaion/typography/typograpghy.stories.helpers.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{OR:()=>TipHowToUseFonts,aL:()=>TipNextEndpoint,kT:()=>TipUseComponent});__webpack_require__("../../node_modules/react/index.js");var vibe_storybook_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../storybook-blocks/dist/src/components/tip/tip.js"),vibe_storybook_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../storybook-blocks/dist/src/components/link/link.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),TipHowToUseFonts=function TipHowToUseFonts(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(vibe_storybook_components__WEBPACK_IMPORTED_MODULE_2__.A,{title:"How to use the fonts?",children:["Figtree and Poppins are both Google Fonts. Click",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(vibe_storybook_components__WEBPACK_IMPORTED_MODULE_3__.A,{size:vibe_storybook_components__WEBPACK_IMPORTED_MODULE_3__.A.sizes.SMALL,href:"https://fonts.google.com/specimen/Figtree",children:"here"}),"to download Figtree, and click",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(vibe_storybook_components__WEBPACK_IMPORTED_MODULE_3__.A,{size:vibe_storybook_components__WEBPACK_IMPORTED_MODULE_3__.A.sizes.SMALL,href:"https://fonts.google.com/specimen/Poppins",children:"here"}),"to download Poppins."]})};TipHowToUseFonts.displayName="TipHowToUseFonts";var TipNextEndpoint=function TipNextEndpoint(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(vibe_storybook_components__WEBPACK_IMPORTED_MODULE_2__.A,{emoji:"⚠️",title:"Notice",children:["Heading is imported from ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"/next"})," since ","there's"," a legacy component with the same name. This component will replace the legacy component in the next major version."]})};TipNextEndpoint.displayName="TipNextEndpoint";var TipUseComponent=function TipUseComponent(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(vibe_storybook_components__WEBPACK_IMPORTED_MODULE_2__.A,{title:"Notice",children:"No need to define classes for text element and use typography CSS variables anymore, these components cover all the possible variants."})};TipUseComponent.displayName="TipUseComponent"},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[16].use[3]!./src/storybook/stand-alone-documentaion/typography/examples-table/example-table.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".example-table-module_table{width:100%;margin-block:var(--spacing-medium) var(--spacing-xl);border-inline:1px solid var(--sb-layout-border-color);border-block-start:1px solid var(--sb-layout-border-color);border-spacing:0}.example-table-module_table th,.example-table-module_table td{text-align:start !important;padding:var(--spacing-small) var(--spacing-medium);height:40px;border-bottom:1px solid var(--sb-layout-border-color)}.example-table-module_table th:not(:last-child),.example-table-module_table td:not(:last-child){border-right:1px solid var(--sb-layout-border-color)}.example-table-module_table thead tr th:first-of-type{width:270px}","",{version:3,sources:["webpack://./src/storybook/stand-alone-documentaion/typography/examples-table/example-table.module.scss"],names:[],mappings:"AAAA,4BAEE,UAAA,CACA,oDAAA,CACA,qDAHS,CAIT,0DAJS,CAKT,gBAAA,CAEA,8DAEE,2BAAA,CACA,kDAAA,CACA,WAAA,CACA,qDAZO,CAaP,gGACE,oDAdK,CAkBT,sDACE,WAAA",sourcesContent:[".table {\n  $border: 1px solid var(--sb-layout-border-color);\n  width: 100%;\n  margin-block: var(--spacing-medium) var(--spacing-xl);\n  border-inline: $border;\n  border-block-start: $border;\n  border-spacing: 0;\n\n  th,\n  td {\n    text-align: start !important;\n    padding: var(--spacing-small) var(--spacing-medium);\n    height: 40px;\n    border-bottom: $border;\n    &:not(:last-child) {\n      border-right: $border; // Adds right border to all cells except the last ones in a row\n    }\n  }\n\n  thead tr th:first-of-type {\n    width: 270px;\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={table:"example-table-module_table"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[16].use[3]!./src/storybook/stand-alone-documentaion/typography/typography.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".typography-module_usageImageFrame{display:flex;justify-content:center}.typography-module_usageImageFrame:first-of-type{margin-bottom:var(--sb-spacing-between-section-items)}.typography-module_usageImageFrame .typography-module_bigImage{width:100%}.typography-module_usageImageFrame .typography-module_smallImage{max-width:70%}","",{version:3,sources:["webpack://./src/storybook/stand-alone-documentaion/typography/typography.module.scss"],names:[],mappings:"AAAA,mCACE,YAAA,CACA,sBAAA,CAEA,iDACE,qDAAA,CAGF,+DACE,UAAA,CAGF,iEACE,aAAA",sourcesContent:[".usageImageFrame {\n  display: flex;\n  justify-content: center;\n\n  &:first-of-type {\n    margin-bottom: var(--sb-spacing-between-section-items);\n  }\n\n  .bigImage {\n    width: 100%;\n  }\n\n  .smallImage {\n    max-width: 70%;\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={usageImageFrame:"typography-module_usageImageFrame",bigImage:"typography-module_bigImage",smallImage:"typography-module_smallImage"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);