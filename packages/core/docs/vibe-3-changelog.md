# Vibe 3 Changelog

This is the complete list of changes and deprecations in the Vibe 3 release. Changes that are marked with a 🔀 are covered by a migration script (codemod).

For the complete migration guide see the [Vibe 3 Migration Guide](https://style.monday.com/?path=/docs/vibe-3-migration-guide--docs).

## General

- CommonJS support removed
- Package rename - `monday-ui-react-core` renamed to `@vibe/core`: 🔀
  - `/tokens` -> `@vibe/core/tokens` 🔀
  - `/interactionsTests` -> `@vibe/core/interactionsTests` 🔀
  - `/testIds` -> `@vibe/core/testIds` 🔀
  - `/mockedClassNames` -> `@vibe/core/mockedClassNames`
- Removed entry points:
  - `/types` removed, import from `@vibe/core` instead 🔀
- Entry points moved to a new package:
  - `/icons` -> use `@vibe/icons` package instead 🔀
  - `/storybookComponents` removed, use the `vibe-storybook-components` package instead
- `monday-ui-react-core/dist/main.css` removed, use `@vibe/core/tokens` instead
- Removed svg icons from `monday-ui-style/src/Icons/`, use `@vibe/icons/raw` instead
- All components' props interfaces are exported

## Colors

- The `--shareable-color` and `--private-color` CSS variables were removed for all themes
- The `color-warning`, `color-warning-hover`, `color-warning-select`, `color-warning-select-hover` colors were removed from the `colors.json` file (in `monday-ui-style` package), use `warning-color-*` respectively

## Typography

- Overhauled typography system, for more information check out the [Typography page](https://style.monday.com/?path=/docs/foundations-typography--docs)
- `Text` and `Heading` API and style changed

## Components

### AttentionBox

> codemod: `AttentionBox-component-migration`

- The `componentClassName` prop has been removed, use `className` instead 🔀

### Avatar

> codemod: `Avatar-component-migration`

- The `isSquare` prop has been removed, use `square` instead 🔀
- The `isDisabled` prop has been removed, use `disabled` instead 🔀

### AvatarGroup

> codemod: `AvatarGroup-component-migration`

- The `removePadding` prop has been removed, and the component no longer gets a padding bottom 🔀

### Box

> codemod: `Box-component-migration`

- The `border` prop type has been changed from string to boolean, and so the `Box.borders` static prop has been removed 🔀

### BreadcrumbItem

> codemod: `BreadcrumbItem-component-migration`

- The `isDisabled` prop has been removed, use `disabled` instead 🔀

### Button

> codemod: `Button-component-migration`

- The `dataTestId` prop has been removed, use `data-testid` instead 🔀
- The `children` prop is now mandatory
- The `sm`, `md`, `lg` sizes were removed, use `small`, `medium`, `large` respectively

### ButtonGroup

> codemod: `ButtonGroup-component-migration`

- The `componentClassName` prop has been removed, use `className` instead 🔀

### Checkbox

> codemod: `Checkbox-component-migration`

- The `componentClassName` prop has been removed, use `className` instead 🔀

### Chips

> codemod: `Chips-component-migration`

- The `dataTestId` prop has been removed, use `data-testid` instead 🔀
- The `DARK_INDIGO` and `BLACKISH` colors were removed from the `color` prop
- The `clickable` and `isClickable` props were removed, use `onClick` instead, to get clickable behavior and style 🔀

### Clickable

> codemod: `Clickable-component-migration`

- The `dataTestId` prop has been removed, use `data-testid` instead 🔀

### Counter

> codemod: `Counter-component-migration`

- The `wrapperClassName` prop has been removed, use `className` instead 🔀
- The `sm`, `md`, `lg` sizes were removed, use `small`, `medium`, `large` respectively

### Dialog

> codemod: `Dialog-component-migration`

- The `shoudlCallbackOnMount` prop has been removed, use `shouldCallbackOnMount` instead 🔀

### DialogContentContainer

> codemod: `DialogContentContainer-component-migration`

- The "medium" `size` now has an increased padding, correcting a previous sizing issue where "medium" and "small" had identical paddings. As a result, "small" is now the default size 🔀

### Divider

> codemod: `Divider-component-migration`

- The `classname` prop has been removed, use `className` instead 🔀

### Flex

- The `Flex.gaps.NONE` property has been removed. To specify no gap simply omit the `gap` prop

### Dropdown

> codemod: `Dropdown-component-migration`

- The `Dropdown.size` property was removed, use `Dropdown.sizes` instead 🔀
- The `xxs`, `xs` sizes were acting as the `small` size and therefore removed. Use `small` instead
- The `withReadOnlyStyle` prop was removed, new readonly style will be applied automatically when using the `readOnly` prop 🔀

### EditableInput

- `EditableInput` removed, use [EditableText](https://style.monday.com/?path=/docs/inputs-editabletext--docs) instead

### Heading

- `Heading` component API and style changed, follow the [Heading](https://style.monday.com/?path=/docs/text-heading--docs) docs for the new API.

### Icon

> codemod: `Icon-component-migration`

- The `clickable`, `onClick` props were removed 🔀, use `<IconButton>` for clickable icons

### IconButton

> codemod: `IconButton-component-migration`

- The `dataTestId` prop has been removed, use `data-testid` instead 🔀

## Input

> codemod: `InputField-component-import-migration`

- `Input` removed - use [TextField](https://style.monday.com/?path=/docs/inputs-textfield--docs) 🔀

### Label

> codemod: `Label-component-migration`

- The `wrapperClassName` prop has been removed, use `className` instead 🔀
- The "Spin In" animation was removed, and so the `isAnimationDisabled` prop has been removed 🔀

### EditableHeading

- API and style changed, follow the [EditableHeading](https://style.monday.com/?path=/docs/inputs-editableheading--docs) docs for the new API

### Link

> codemod: `Link-component-migration`

- The `componentClassName` prop has been removed, use `className` instead 🔀
- The static `Link.target` property was removed, use `Link.targets` instead 🔀

### Loader

> codemod: `Loader-component-migration`

- The `svgClassName` prop has been removed, use `className` instead 🔀

### Menu

> codemod: `Menu-component-migration`

- The `classname` prop has been removed, use `className` instead 🔀

### MenuDivider

> codemod: `MenuDivider-component-migration`

- The `classname` prop has been removed, use `className` instead 🔀

### MenuItem

> codemod: `MenuItem-component-migration`

- The `classname` prop has been removed, use `className` instead 🔀
- The provided tooltip (when the text is overflowing) now wraps the entire element so non-block layout given to the `title` prop may break

### MenuItemButton

> codemod: `MenuItemButton-component-migration`

- The `classname` prop has been removed, use `className` instead 🔀

### MenuTitle

> codemod: `MenuTitle-component-migration`

- The `classname` prop has been removed, use `className` instead 🔀

### MenuButton

> codemod: `MenuButton-component-migration`

- The `componentClassName` prop has been removed, use `className` instead 🔀
- The `closeDialogOnContentClick` prop has been removed, use `closeMenuOnItemClick` instead 🔀
- The `disabledReason` prop has been removed, use `tooltipContent` instead 🔀
- The `hideWhenReferenceHidden` prop default value changes to "true", meaning when the MenuButton is hidden hide the dialog and tooltip as well. To disable this behavior set `hideWhenReferenceHidden` to "false"


### Modal

> codemod: `Modal-component-migration`

- The `hideCloseButton` has been removed since Modals should always have a close button 🔀
- The `unmountOnClose` prop default value changes to "true", meaning the Modal will not render when `show` is "false". To disable this behavior set `unmountOnClose` to "false"
- Tooltips, Tipseens, and Dialogs on Modals will now be rendered inside the Modal's container by default, without any z-index interference

### ModalHeader

> codemod: `ModalHeader-component-migration`

- The `hideCloseButton` has been removed since Modals should always have a close button 🔀

### RadioButton

> codemod: `RadioButton-component-migration`

- The `classname` prop has been removed, use `className` instead 🔀

## Search

- `Search` has changed - follow the [Search](https://style.monday.com/?path=/docs/inputs-search--docs) docs for the new API.

## SearchComponent

> codemod: `SearchComponent-import-migration`

- `SearchComponent` component removed - use [Search](https://style.monday.com/?path=/docs/inputs-search--docs) 🔀

## SplitButton

- The `data-testId` prop will no longer be applied to the internal elements, only the root element

### Steps

> codemod: `Steps-component-migration`

- The `isOnPrimary` prop was removed, use `color="primary` instead 🔀

### Tabs

- Browser's default margin/padding for ul, li elements was reset

### TabList

> codemod: `TabList-component-migration`

- The component no longer gets a padding bottom, and so the `noPadding` prop was removed 🔀

### TabPanels

> codemod: `TabPanels-component-migration`

- TabPanels will render only the active tab instead of rendering all the panels, and so the `renderOnlyActiveTab` was removed 🔀

### TextField

> codemod: `TextField-component-migration`

- The `dataTestId` prop has been removed, use `data-testid` instead 🔀
- The `iconsNames` prop no longer accepts the `layout` property
- Providing the `required` prop will now show a red asterisk, implying that the field is mandatory, and so the `requiredAsterisk` prop was removed 🔀
- The `withReadOnlyStyle` prop was removed, new readonly style will be applied automatically when using the `readOnly` prop 🔀
- The `sm`, `md`, `lg` sizes were removed, use `small`, `medium`, `large` respectively

### ThemeProvider

> codemod: `ThemeProvider-component-migration`

- The `theme` has been removed, use `themeConfig` instead 🔀

### Tipseen

> codemod: `Tipseen-component-migration`

- The `content` prop is now mandatory
- The default `color` has changed from 'primary' to 'inverted'. To keep the previous color, set the `color` prop to 'primary'
- The `isCloseButtonHidden` prop has been removed, use `hideCloseButton` instead 🔀
- The `showDelay` prop's default value has changed to 100
- The `justify` prop was removed, and so the `Tipseen.justifyTypes` static property was removed as well

### TipseenContent

> codemod: `TipseenContent-component-migration`

- The `isDismissHidden` prop has been removed, use `hideDismiss` instead 🔀
- The `isSubmitHidden` prop has been removed, use `hideSubmit` instead 🔀
- The `submitButtonProps`, `dismissButtonProps` props were removed, use `submitButtonText` and `dismissButtonText` to change the buttons' text

### Toggle

> codemod: `Toggle-component-migration`

- The `componentClassName` prop has been removed, use `className` instead 🔀
- The `isDisabled` prop has been removed, use `disabled` instead 🔀

### Tooltip

> codemod: `Tooltip-component-migration`

- The `paddingSize`, `justify`, and `arrowPosition` props were removed. Accordingly the `Tooltip.paddingSizes`, `Tooltip.justifyTypes`, and `Tooltip.arrowPositions` static properties were removed as well
- The `theme` prop can now accept only "dark" or "primary"
- The `position` prop can now accept only "top, right, bottom, left"
- The `showOnDialogEnter` props's default value has changed to `true`; now the tooltip will remain open be default when hovering over it
- The `hideDelay` props's default value has changed to 100
- The `addKeyboardHideShowTriggersByDefault` default changed to true, making it accessible with keyboard navigation
- The tooltip's max-width is now set to 240px, and so the `withMaxWidth` prop removed 🔀
- Tooltip's `content` is now wrapped in another `div`, meaning that non-block layouts inside the tooltip may break
- The `containerSelector` will now fallback to `document.body` instead of `#tooltips-container` if not provided

### ColorPicker

> codemod: `ColorPicker-component-migration`

- The static `ColorPicker.COLOR_STYLES` property has been removed, use `ColorPicker.colorStyles` instead 🔀

### ColorPickerContent

> codemod: `ColorPickerContent-component-migration`

- The static `ColorPickerContent.COLOR_STYLES` property has been removed, use `ColorPickerContent.colorStyles` instead 🔀

### ResponsiveList

- Component was removed, use the [useIsOverflowing](https://style.monday.com/?path=/docs/hooks-useisoverflowing--docs) hook instead

## Icons

- The `Upgrade` icon has been removed, and the `Featured` icon has been renamed to `Upgrade`
- The `Replay` icon has been renamed to `Reply`

## Hooks

### useClickableProps

> codemod: `useClickableProps-hook-migration`

- The `dataTestId` prop has been removed, use `data-testid` instead 🔀
