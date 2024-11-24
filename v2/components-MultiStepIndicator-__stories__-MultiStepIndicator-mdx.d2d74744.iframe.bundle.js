"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[6471],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/MultiStepIndicator/__stories__/MultiStepIndicator.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>_stories_MultiStepIndicator});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),MultiStepIndicator=__webpack_require__("./src/components/MultiStepIndicator/MultiStepIndicator.tsx"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),component_description_map=__webpack_require__("./src/storybook/components/related-components/component-description-map.tsx"),tip=__webpack_require__("../storybook-blocks/dist/src/components/tip/tip.js"),storybook_link=__webpack_require__("../storybook-blocks/dist/src/components/storybook-link/storybook-link.js"),firstSteps=[{status:MultiStepIndicator.A.stepStatuses.FULFILLED,titleText:"Plan options",subtitleText:"Choose plan"},{status:MultiStepIndicator.A.stepStatuses.PENDING,titleText:"Seats",subtitleText:"Number of users"},{status:MultiStepIndicator.A.stepStatuses.PENDING,titleText:"Paying method",subtitleText:"How to pay"}],secondSteps=[{status:MultiStepIndicator.A.stepStatuses.FULFILLED,titleText:"Plan options",subtitleText:""},{status:MultiStepIndicator.A.stepStatuses.PENDING,titleText:"Seats",subtitleText:"Number of users"},{status:MultiStepIndicator.A.stepStatuses.PENDING,titleText:"Paying method",subtitleText:"How to pay"}],thirdSteps=[{status:MultiStepIndicator.A.stepStatuses.FULFILLED,titleText:"Plan",subtitleText:""},{status:MultiStepIndicator.A.stepStatuses.PENDING,titleText:"Seats",subtitleText:""},{status:MultiStepIndicator.A.stepStatuses.PENDING,titleText:"Method",subtitleText:""}],TipNotWhatYouAreLookingFor=function TipNotWhatYouAreLookingFor(){return(0,jsx_runtime.jsxs)(tip.A,{title:"Not what you were looking for?",children:["In order to navigate between content without a linear progress, use the"," ",(0,jsx_runtime.jsx)(storybook_link.A,{page:"Navigation/Tabs",size:storybook_link.A.sizes.SMALL,children:"Tabs"})," ","or"," ",(0,jsx_runtime.jsx)(storybook_link.A,{page:"Buttons/ButtonGroup",size:storybook_link.A.sizes.SMALL,children:"Button group"})," ","component."]})};TipNotWhatYouAreLookingFor.displayName="TipNotWhatYouAreLookingFor";var MultiStepIndicator_stories=__webpack_require__("./src/components/MultiStepIndicator/__stories__/MultiStepIndicator.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",h2:"h2",p:"p",h3:"h3",div:"div"},(0,lib.RP)(),props.components),{PropsTable,UsageGuidelines,ComponentRules,RelatedComponents}=_components;return ComponentRules||_missingMdxReference("ComponentRules",!0),PropsTable||_missingMdxReference("PropsTable",!0),RelatedComponents||_missingMdxReference("RelatedComponents",!0),UsageGuidelines||_missingMdxReference("UsageGuidelines",!0),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:MultiStepIndicator_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"multistepindicator",children:"MultiStepIndicator"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#usage",children:"Usage"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#variants",children:"Variants"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#dos-and-donts",children:"Do’s and don’ts"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#use-cases-and-examples",children:"Use cases and examples"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#related-components",children:"Related components"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#feedback",children:"Feedback"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Tabular navigation component that helps users visualize and interact with a multi-step process."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{of:MultiStepIndicator_stories.Overview}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(PropsTable,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(UsageGuidelines,{guidelines:["Use wizard to break a larger goal into manageable steps.","If a workflow needs more than 6 steps, consider how you might simplify it or break it up into multiple tasks.","Always position the wizard at the top of the multi-step process so that the user has a common reference point as they move between steps."]}),"\n",(0,jsx_runtime.jsx)(TipNotWhatYouAreLookingFor,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"placements",children:"Placements"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Placements"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{of:MultiStepIndicator_stories.Placements}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"types",children:"Types"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"There are 4 types: Primary, success, danger, dark."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{of:MultiStepIndicator_stories.Types}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"sizes",children:"Sizes"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Compact is a smaller version of the Regular Wizard Stepper, and is suitable for smaller containers. In case you need to display more content, use the Regular size. As of now, vertical placement is not supported."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{of:MultiStepIndicator_stories.Sizes}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"fulfilled-icons",children:"Fulfilled Icons"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{of:MultiStepIndicator_stories.FulfilledIcons}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"transition-animation",children:"Transition Animation"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"State transition automatic example"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{of:MultiStepIndicator_stories.TransitionAnimation}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"dos-and-donts",children:"Do’s and Don’ts"}),"\n",(0,jsx_runtime.jsx)(ComponentRules,{rules:[{positive:{component:(0,jsx_runtime.jsx)(MultiStepIndicator.A,{steps:firstSteps,textPlacement:MultiStepIndicator.A.textPlacements.VERTICAL,className:"monday-storybook-multiStepIndicator_big-size"}),description:"Be consistent with the information you include under each step. If you’re using a subtitle on one step, use for all steps."},negative:{component:(0,jsx_runtime.jsx)(MultiStepIndicator.A,{steps:secondSteps,textPlacement:MultiStepIndicator.A.textPlacements.VERTICAL,className:"monday-storybook-multiStepIndicator_big-size"}),description:"Don’t place subheader on one step only."}},{positive:{component:(0,jsx_runtime.jsxs)(_components.div,{className:"monday-storybook-multiStepIndicator_box-wrapper",children:[(0,jsx_runtime.jsx)(MultiStepIndicator.A,{steps:thirdSteps,textPlacement:MultiStepIndicator.A.textPlacements.VERTICAL,className:"monday-storybook-multiStepIndicator_small-size"}),(0,jsx_runtime.jsx)(_components.div,{className:"monday-storybook-multiStepIndicator_spacing"})]}),description:"While using the wizard component, keep the default spacing between the wizard steps, even if the wizard width is smaller than the page width."},className:"monday-storybook-multiStepIndicator_overflow",negative:{component:(0,jsx_runtime.jsxs)(_components.div,{className:"monday-storybook-multiStepIndicator_box-wrapper",children:[(0,jsx_runtime.jsx)(MultiStepIndicator.A,{steps:thirdSteps,textPlacement:MultiStepIndicator.A.textPlacements.VERTICAL,className:"monday-storybook-multiStepIndicator_line",dividerComponentClassName:"monday-storybook-multiStepIndicator_line_divider"}),(0,jsx_runtime.jsx)(_components.div,{className:"monday-storybook-multiStepIndicator_spacing"})]}),description:"Do not override the spacing between the wizard steps according to the page width."}}]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"use-cases-and-examples",children:"Use cases and examples"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"multi-step-wizard",children:"Multi step wizard"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{of:MultiStepIndicator_stories.MultiStepWizard}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"related-components",children:"Related components"}),"\n",(0,jsx_runtime.jsx)(RelatedComponents,{componentsNames:[component_description_map.DF,component_description_map.b_,component_description_map.UT]})]})}const _stories_MultiStepIndicator=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);