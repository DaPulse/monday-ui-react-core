export const ELEMENT_TYPES = {
  // Don't remove next line
  // plop_marker:default-data-testid-declarations
  COMBOBOX: "combobox",
  DROPDOWN: "dropdown",
  BUTTON: "button",
  CLICKABLE: "clickable",
  VIRTUALIZED_LIST: "virtualized-list",
  VIRTUALIZED_GRID: "virtualized-grid",
  TEXT_FIELD: "text-field",
  TEXT_FIELD_SECONDARY_BUTTON: "text-field-secondary-button",
  SEARCH: "search",
  CLEAN_SEARCH_BUTTON: "clean-search-button",
  COLOR_PICKER: "color-picker",
  COLOR_PICKER_CONTENT_COMPONENT: "color-picker-content-component",
  COLOR_PICKER_ITEM: "color-picker-item",
  ICON_BUTTON: "icon-button",
  CHIP: "chip",
  ALERT_BANNER: "alert-banner",
  ALERT_BANNER_BUTTON: "alert-banner-button",
  ALERT_BANNER_LINK: "alert-banner-link",
  ALERT_BANNER_TEXT: "alert-banner-text",
  ATTENTION_BOX: "attention-box",
  AVATAR: "avatar",
  AVATAR_BADGE: "avatar-badge",
  AVATAR_CONTENT: "avatar-content",
  BREADCRUMB_ITEM: "breadcrumb-item",
  BREADCRUMB_CONTENT: "breadcrumb-content",
  BREADCRUMBS_BAR: "breadcrumbs-bar",
  COLOR_PICKER_ITEM_COMPONENT: "color-picker-item-component",
  COMBOBOX_CATEGORY: "combobox-category",
  COMBOBOX_OPTION: "combobox-option",
  COUNTER: "counter",
  DROPDOWN_MENU: "dropdown-menu",
  DROPDOWN_OPTION: "dropdown-option",
  EDITABLE_HEADING: "editable-heading",
  EDITABLE_INPUT: "editable-input",
  HEADING: "heading",
  LABEL: "label",
  LINK: "link",
  LIST: "list",
  LIST_ITEM: "list-item",
  LIST_ITEM_ICON: "list-item-icon",
  LIST_TITLE: "list-title",
  MENU_DIVIDER: "menu-divider",
  MENU_ITEM: "menu-item",
  MENU_GRID_ITEM: "menu-grid-item",
  MENU_ITEM_BUTTON: "menu-item-button",
  MENU_TITLE: "menu-title",
  MENU_BUTTON: "menu-button",
  STEP_INDICATOR: "step-indicator",
  SKELETON: "skeleton",
  SPLIT_BUTTON: "split-button",
  TEXT_WITH_HIGHLIGHT: "text-with-highlight",
  TOAST: "toast",
  TOAST_LINK: "toast-link",
  TOGGLE: "toggle",
  TOOLTIP: "tooltip",
  TAB: "tab",
  TAB_PANEL: "tab-panel",
  TAB_LIST: "tab-list",
  TAB_PANELS: "tab-panels",
  TABS_CONTEXT: "tabs-context",
  RESPONSIVE_LIST: "responsive-list",
  RADIO_BUTTON: "radio-button",
  ICON: "icon",
  FIELD_LABEL: "field-label",
  EXPAND_COLLAPSE: "expand-collapse",
  FORMATTED_NUMBER: "formatted-number",
  HIDDEN_TEXT: "hidden-text",
  DIALOG: "dialog",
  DIALOG_CONTENT_CONTAINER: "dialog-content-container",
  BANNER: "banner",
  BUTTON_GROUP: "button-group",
  ACCORDION: "accordion",
  TOGGLE_TEXT: "toggle-text",
  MOCK_TOGGLE: "mock-toggle",
  STEPS: "steps",
  STEPS_NUMBERS_HEADER: "steps-numbers-header",
  STEPS_HEADER: "steps-header",
  STEPS_GALLERY_HEADER: "steps-gallery-header",
  STEPS_DOT: "steps-dot",
  SLIDER: "slider",
  SLIDER_FILLED_TRACK: "slider-filled-track",
  SLIDER_INFIX: "slider-infix",
  SLIDER_THUMB: "slider-thumb",
  LINEAR_PROGRESS_BAR: "linear-progress-bar",
  DIVIDER: "divider",
  DATEPICKER: "date-picker",
  DATEPICKER_HEADER: "date-picker-header",
  DATEPICKER_YEAR_SELECTION: "date-picker-year-selection",
  LOADER: "loader"
};

export const NAVIGATIONS_COMMANDS = {
  RIGHT_ARROW: "{arrowright}",
  LEFT_ARROW: "{arrowleft}",
  UP_ARROW: "{arrowup}",
  DOWN_ARROW: "{arrowdown}",
  TAB: "#TAB#",
  ENTER: "{enter}",
  PAGE_UP: "{pageup}",
  PAGE_DOWN: "{pagedown}"
};

export const getTestId = (elementType, id) => {
  return id ? `${elementType}_${id}` : elementType;
};
