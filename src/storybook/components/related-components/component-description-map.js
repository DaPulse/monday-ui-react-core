import { SplitButtonDescription } from "./descriptions/split-button-description";
import { ButtonGroupDescription } from "./descriptions/button-group-description";
import { CheckboxDescription } from "./descriptions/checkbox-description";
import { RadioButtonDescription } from "./descriptions/radio-button-description";
import { LabelDescription } from "./descriptions/label-description";
import { LinkDescription } from "./descriptions/link-description";
import { CounterDescription } from "./descriptions/counter-description";
import { ChipsDescription } from "./descriptions/chips-description";
import { TooltipDescription } from "./descriptions/tooltip-description";
import { ToggleDescription } from "./descriptions/toggle-description";
import { DropdownDescription } from "./descriptions/dropdown-description";
import { ButtonDescription } from "./descriptions/button-description";
import { TabsDescription } from "./descriptions/tab-description";
import { BreadcrumbsDescription } from "./descriptions/breadcrumbs-description";
import { MenuDescription } from "./descriptions/menu-description";
import { AttentionBoxDescription } from "./descriptions/attention-box-description";
import { AlertBannerDescription } from "./descriptions/alert-banner-description";
import { ToastDescription } from "./descriptions/toast-description";
import { WizardDescription } from "./descriptions/wizard-description";
import { TipseenDescription } from "./descriptions/tipseen-description";
import { TextFieldDescription } from "./descriptions/text-field-description";
import { SearchDescription } from "./descriptions/search-description";
import { ComboboxDescription } from "./descriptions/combobox-description";
import { StepperDescription } from "./descriptions/stepper-description";
import { ColorsDescription } from "./descriptions/colors-description/colors-description";
import { AvatarDescription } from "./descriptions/avatar-description";
import { AvatarGroupDescription } from "./descriptions/avatar-group-description";
import { IconsDescription } from "./descriptions/icons-description";
import { SpinnerDescription } from "./descriptions/spinner-description";
import { SkeletonDescription } from "./descriptions/skeleton-description";
import { TypographyDescription } from "./descriptions/typography-description/typography-description";
import { ProgressBarDescription } from "./descriptions/progress-bar-description";
import { EditableHeadingDescription } from "./descriptions/editable-heading-description";
import { ShadowDescription } from "./descriptions/shadow-description/shadow-description";
import { HeadingDescription } from "./descriptions/heading-description";
import { SpacingDescription } from "./descriptions/spacing-description/spacing-description";
import { IconButtonDescription } from "./descriptions/icon-button-description";
import { MenuButtonDescription } from "./descriptions/menu-button-description";
import { ClickableDescription } from "./descriptions/clickable-description/clickable-description";
import { HiddenTextDescription } from "./descriptions/hidden-text-description";
import { ListDescription } from "./descriptions/list-description";
import { FlexDescription } from "./descriptions/flex-description";
import { DividerDescription } from "./descriptions/divider";
import { DialogContentContainerDescription } from "./descriptions/dialog-content-container";
import { DialogDescription } from "./descriptions/dialog";
import { TextDescription } from "./descriptions/text-description";

export const SPLIT_BUTTON = "split-button";
export const BUTTON_GROUP = "button-group";
export const LABEL = "label";
export const LINK = "link";
export const CHECKBOX = "checkbox";
export const RADIO_BUTTON = "radio-button";
export const COUNTER = "counter";
export const TOOLTIP = "tooltip";
export const TOGGLE = "toggle";
export const DROPDOWN = "dropdown";
export const CHIP = "chips";
export const BUTTON = "button";
export const TABS = "tabs";
export const BREADCRUBMS = "breadcrumbs";
export const MENU = "menu";
export const ATTENTION_BOX = "attention-box";
export const ALERT_BANNER = "alert-banner";
export const TOAST = "toast";
export const WIZARD = "wizard";
export const TIPSEEN = "tipseen";
export const TEXT_FIELD = "text-field";
export const SEARCH = "search";
export const COMBOBOX = "combobox";
export const AVATAR = "avatar";
export const AVATAR_GROUP = "avatar-group";
export const ICONS = "icons";
export const STEPPER = "stepper";
export const SPINNER = "spinner";
export const SKELETON = "skeleton";
export const PROGRESS_BAR = "progress-bar";
export const HEADING = "heading";
export const EDITABLE_HEADING = "editable-heading";
export const ICON_BUTTON = "icon-button";
export const MENU_BUTTON = "menu-button";
export const CLICKABLE = "clickable";
export const HIDDEN_TEXT = "hidden-text-description";
export const LIST = "list";
export const FLEX = "flex";
export const DIVIDER = "divider";
export const DIALOG_CONTENT_CONTAINER = "dialog-content-container-description";
export const DIALOG = "dialog";
export const TEXT = "text";

// General description names (not related to specific components)
export const COLORS = "colors";
export const TYPOGRAPHY = "typography";
export const SHADOW = "shadow";
export const SPACING = "spacing";

export const descriptionComponentsMap = new Map();

descriptionComponentsMap.set(SPLIT_BUTTON, <SplitButtonDescription />);
descriptionComponentsMap.set(BUTTON_GROUP, <ButtonGroupDescription />);
descriptionComponentsMap.set(LABEL, <LabelDescription />);
descriptionComponentsMap.set(LINK, <LinkDescription />);
descriptionComponentsMap.set(CHECKBOX, <CheckboxDescription />);
descriptionComponentsMap.set(RADIO_BUTTON, <RadioButtonDescription />);
descriptionComponentsMap.set(COUNTER, <CounterDescription />);
descriptionComponentsMap.set(TOOLTIP, <TooltipDescription />);
descriptionComponentsMap.set(TOGGLE, <ToggleDescription />);
descriptionComponentsMap.set(DROPDOWN, <DropdownDescription />);
descriptionComponentsMap.set(CHIP, <ChipsDescription />);
descriptionComponentsMap.set(ATTENTION_BOX, <AttentionBoxDescription />);
descriptionComponentsMap.set(ALERT_BANNER, <AlertBannerDescription />);
descriptionComponentsMap.set(TOAST, <ToastDescription />);
descriptionComponentsMap.set(BUTTON, <ButtonDescription />);
descriptionComponentsMap.set(TABS, <TabsDescription />);
descriptionComponentsMap.set(BREADCRUBMS, <BreadcrumbsDescription />);
descriptionComponentsMap.set(MENU, <MenuDescription />);
descriptionComponentsMap.set(WIZARD, <WizardDescription />);
descriptionComponentsMap.set(TIPSEEN, <TipseenDescription />);
descriptionComponentsMap.set(TEXT_FIELD, <TextFieldDescription />);
descriptionComponentsMap.set(SEARCH, <SearchDescription />);
descriptionComponentsMap.set(COMBOBOX, <ComboboxDescription />);
descriptionComponentsMap.set(AVATAR, <AvatarDescription />);
descriptionComponentsMap.set(AVATAR_GROUP, <AvatarGroupDescription />);
descriptionComponentsMap.set(ICONS, <IconsDescription />);
descriptionComponentsMap.set(STEPPER, <StepperDescription />);
descriptionComponentsMap.set(SPINNER, <SpinnerDescription />);
descriptionComponentsMap.set(SKELETON, <SkeletonDescription />);
descriptionComponentsMap.set(ICON_BUTTON, <IconButtonDescription />);
descriptionComponentsMap.set(MENU_BUTTON, <MenuButtonDescription />);
descriptionComponentsMap.set(PROGRESS_BAR, <ProgressBarDescription />);
descriptionComponentsMap.set(EDITABLE_HEADING, <EditableHeadingDescription />);
descriptionComponentsMap.set(HEADING, <HeadingDescription />);
descriptionComponentsMap.set(CLICKABLE, <ClickableDescription />);
descriptionComponentsMap.set(HIDDEN_TEXT, <HiddenTextDescription />);
descriptionComponentsMap.set(LIST, <ListDescription />);
descriptionComponentsMap.set(FLEX, <FlexDescription />);
descriptionComponentsMap.set(DIVIDER, <DividerDescription />);
descriptionComponentsMap.set(DIALOG_CONTENT_CONTAINER, <DialogContentContainerDescription />);
descriptionComponentsMap.set(DIALOG, <DialogDescription />);
descriptionComponentsMap.set(TEXT, <TextDescription />);

// General description (not related to specific components)
descriptionComponentsMap.set(COLORS, <ColorsDescription />);
descriptionComponentsMap.set(TYPOGRAPHY, <TypographyDescription />);
descriptionComponentsMap.set(SHADOW, <ShadowDescription />);
descriptionComponentsMap.set(SPACING, <SpacingDescription />);
