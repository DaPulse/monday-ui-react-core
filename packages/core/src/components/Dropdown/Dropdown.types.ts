import {
  ActionMeta,
  FocusEventHandler,
  InputActionMeta,
  KeyboardEventHandler,
  MenuProps,
  OptionProps,
  OptionTypeBase,
  SingleValueProps
} from "react-select";
import React, { UIEventHandler, WheelEventHandler } from "react";
import { VibeComponentProps } from "../../types";

export type DropdownOption = any;

export interface CustomSingleValueProps extends SingleValueProps<DropdownOption> {
  Renderer: React.ComponentType;
  readOnly: boolean;
  selectedOption: DropdownOption;
}

export interface CustomMenuBaseProps {
  /*
   * ClassName to be added to dropdown menu wrapper (dropdown-menu-wrapper)
   */
  dropdownMenuWrapperClassName?: string;
  /**
   * ID for the menu container
   */
  menuId?: string;
  /**
   * aria-label attribute for the menu container
   */
  menuAriaLabel?: string;
  /**
   * aria-label attribute for the dropdown input
   */
  inputAriaLabel?: string;
}

export type CustomMenuProps = CustomMenuBaseProps & MenuProps<OptionTypeBase, boolean>;

export interface CustomOptionBaseProps {
  /*
   * ClassName to be added to dropdown option wrapper (dropdown-wrapper__option--reset)
   */
  optionWrapperClassName?: string;
}

export type CustomOptionProps = CustomOptionBaseProps & OptionProps<OptionTypeBase, boolean>;

export type DropdownState = {
  isDisabled: boolean;
  selectProps: { readOnly: boolean };
};

export interface DropdownComponentProps extends CustomMenuBaseProps, CustomOptionBaseProps, VibeComponentProps {
  /** ClassName to be added to dropdown single value wrapper (dropdown-wrapper__single-value--reset) */
  singleValueWrapperClassName?: string;
  /**
   * Placeholder to show when no value was selected
   */
  placeholder?: string;
  /**
   * When set to true, the component's placeholder will be displayed as ellipsis when it's too long
   */
  allowPlaceholderEllipsis?: boolean;
  /**
   * If set to true, dropdown will be disabled
   */
  disabled?: boolean;
  /**
   * If set to true, dropdown won't be editable
   */
  readOnly?: boolean;
  /**
   * Called when menu is opened
   */
  onMenuOpen?: () => void;
  /**
   * Called when menu is closed
   */
  onMenuClose?: () => void;
  /**
   * Called when key is pressed in the dropdown
   */
  onKeyDown?: KeyboardEventHandler;
  /**
   * Called when focused
   */
  onFocus?: FocusEventHandler;
  /**
   * Called when blurred
   */
  onBlur?: FocusEventHandler;
  /**
   * Called when scrolling
   */
  onScroll?: UIEventHandler<HTMLDivElement>;
  /**
   * Fired when the user scrolls to the bottom of the menu
   */
  onMenuScrollToBottom?: WheelEventHandler<HTMLDivElement>;
  /**
   * When the user reaches the top/bottom of the menu, prevent scroll on the scroll-parent
   */
  captureMenuScroll?: boolean;
  /**
   * Called when selected value has changed
   */
  onChange?: (
    option: DropdownOption | DropdownOption[],
    meta: ActionMeta<DropdownOption> | React.MouseEvent | React.KeyboardEvent
  ) => void;
  /**
   * Called when the dropdown's input changes.
   */
  onInputChange?: (newValue: string, actionMeta: InputActionMeta) => void;
  /**
   * If true, search in options will be enabled
   */
  searchable?: boolean;
  /**
   * The dropdown options
   */
  options?: DropdownOption[];
  /**
   * Text to display when there are no options
   */
  noOptionsMessage?: (obj: { inputValue: string }) => string | null;
  /**
   * If set to true, the menu will open when focused
   */
  openMenuOnFocus?: boolean;
  /**
   * If set to true, the menu will open when clicked
   */
  openMenuOnClick?: boolean;
  /**
   * If set to true, clear button will be added
   */
  clearable?: boolean;
  /**
   * custom option render function
   */
  optionRenderer?: (option: DropdownOption) => JSX.Element;
  /**
   * custom value render function
   */
  valueRenderer?:
    | React.ReactNode
    | ((props: Omit<CustomSingleValueProps, "Renderer"> & DropdownOption) => React.ReactNode);
  ValueRenderer?: React.ReactNode;
  /**
   * custom menu render function
   */
  menuRenderer?: React.ReactElement | ((props: CustomMenuProps) => React.ReactElement);
  /**
   * Default placement of the Dropdown menu in relation to its control. Use "auto" to flip the menu when there isn't enough space below the control.
   */
  menuPlacement?: DropdownMenuPlacement;

  /**
   * The CSS position value of the menu, when "fixed" extra layout management might be required
   * Fixed position can be used to solve the issue of positioning Dropdown inside overflow container like Modal or Dialog
   */
  menuPosition?: DropdownMenuPosition;
  /**
   * If set to true, the dropdown will be in Right to Left mode
   */
  rtl?: boolean;
  /**
   * Set default selected value
   */
  defaultValue?: DropdownOption[];
  /**
   * The component's value.
   * When passed, makes this a [controlled](https://reactjs.org/docs/forms.html#controlled-components) component.
   */
  value?: DropdownOption | DropdownOption[];
  /**
   * Select menu size from `Dropdown.sizes` - Dropdown.sizes.LARGE | Dropdown.sizes.MEDIUM | Dropdown.sizes.SMALL
   */
  size?: DropdownSize;
  /**
   * If provided Dropdown will work in async mode. Can be either promise or callback
   */
  asyncOptions?: (inputValue: string) => Promise<DropdownOption[]>;
  /**
   * If set to true, fetched async options will be cached
   */
  cacheOptions?: boolean;
  /**
   * If set, `asyncOptions` will be invoked with its value on mount and the resolved results will be loaded
   */
  defaultOptions?: boolean | DropdownOption[];
  /**
   * If set to true, the menu will use virtualization. Virtualized async works only with
   */
  isVirtualized?: boolean;
  /**
   * Whether the menu should use a portal, and where it should attach
   */
  menuPortalTarget?: HTMLElement;
  /**
   * Custom function to override existing styles (similar to `react-select`'s `style` prop), for example: `base => ({...base, color: 'red'})`, where `base` is the component's default styles
   */
  extraStyles?: (...args: unknown[]) => unknown;
  /**
   * Maximum height of the menu before scrolling
   */
  maxMenuHeight?: number;
  /**
   * Tab index for keyboard navigation purposes
   */
  tabIndex?: number | string;
  /**
   * focusAuto when component mount
   */
  autoFocus?: boolean;
  /**
   * If set to true, the dropdown will be in multi-select mode.
   * When in multi-select mode, the selected value will be an array,
   * and it will be displayed as our [`<Chips>`](/?path=/docs/components-chips--sandbox) component.
   */
  multi?: boolean;
  /**
   * If set to true together with `multi`, it will make the dropdown expand to multiple lines when new values are selected.
   */
  multiline?: boolean;
  /**
   Pass closeMenuOnSelect to close the multi choose any time an options is chosen.
   */
  closeMenuOnSelect?: boolean;
  // Won't be needed once we upgrade to react-select ^5.5 https://github.com/JedWatson/react-select/issues/4088#issuecomment-1276835389
  /**
   * If menu should be closed on scroll - helpful for some tricky use cases
   * @default false, but true when insideOverflowContainer or insideOverflowWithTransformContainer are true
   */
  closeMenuOnScroll?: boolean;
  /**
   * callback to be called when `multiline` is `true` and the option is removed
   */
  onOptionRemove?: (option?: DropdownOption) => void;
  /**
   The options set by default will be set as mandatory and the user will not be able to cancel their selection
   */
  withMandatoryDefaultOptions?: boolean;
  /**
   * Override the built-in logic to detect whether an option is selected.
   */
  isOptionSelected?: (option: DropdownOption, options: DropdownOption[]) => boolean;
  /**
   * Allows the dropdown menu to overflow its container.
   */
  insideOverflowContainer?: boolean;
  /**
   * Allows the dropdown menu to overflow its container, including CSS transformations.
   */
  insideOverflowWithTransformContainer?: boolean;
  /**
   * When content is passed, the dropdown will include a tooltip on the dropdown's value.
   */
  tooltipContent?: string;
  /**
   * Display the drop down with loading state.
   */
  isLoading?: boolean;
  /**
   * Overrides the built-in logic of loading message design
   */
  loadingMessage?: (obj: { inputValue: string }) => string | null;
  /**
   * aria-label attribute for dropdown
   */
  ariaLabel?: string;
  /**
   * Overrides the built-in logic of tab selecting value (default: true)
   */
  tabSelectsValue?: boolean;
  /**
   * Overrides the build-in search filter logic - https://react-select.com/advanced#custom-filter-logic
   * createFilter function is available at Dropdown.createFilter
   */
  filterOption?: (option: DropdownOption, inputValue: string) => boolean;
  /**
   * The current value of the input field, used to control the current value of the input field programmatically
   */
  inputValue?: string;
  /**
   * If true, the input field will lose focus when an option is selected
   */
  blurInputOnSelect?: boolean;
  OptionRenderer?: React.ReactNode;
  menuIsOpen?: boolean;
  onOptionSelect?: (option: DropdownOption) => void;
  onClear?: () => void;
  popupsContainerSelector?: string;
  selectProps?: Record<string, string>;
  withGroupDivider?: boolean;
}

export type DropdownProps = DropdownComponentProps;

export type DropdownChipColors = "primary" | "negative" | "positive";

export type DropdownMenuPosition = "absolute" | "fixed";

export type DropdownMenuPlacement = "top" | "bottom" | "auto";

export type DropdownSize = "small" | "medium" | "large";
