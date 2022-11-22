/* eslint-disable react/jsx-props-no-spreading */
// Libraries import
import React, { FC, ReactElement, useCallback, useMemo, useRef, useState } from "react";
import cx from "classnames";
// Constants import
import {
  DEFAULT_DIALOG_HIDE_TRIGGER,
  DEFAULT_DIALOG_SHOW_TRIGGER,
  DIALOG_MOVE_BY,
  EMPTY_ARR,
  ENTER_KEYS,
  SECONDARY_BUTTON_ARIA_LABEL,
  SECONDARY_BUTTON_WRAPPER_CLASSNAME,
  SplitButtonSecondaryContentPosition
} from "./SplitButtonConstants";
// Utils import
import { NOOP } from "../../utils/function-utils";
import { isInsideClass } from "../../utils/dom-utils";
// Hooks import
import useKeyEvent from "../../hooks/useKeyEvent";
import useEventListener from "../../hooks/useEventListener";
// Components import
import Button, { ButtonProps } from "../Button/Button";
import Dialog from "../Dialog/Dialog";
import DropdownChevronDown from "../Icon/Icons/components/DropdownChevronDown";
import DialogContentContainer from "../DialogContentContainer/DialogContentContainer";
// SCSS import
import "./SplitButton.scss";

export interface SplitButtonProps extends ButtonProps {
  /*
   * The element or renderer which display inside the dialog which open by clicking on the split button's secondary button.
   */
  secondaryDialogContent?: ReactElement | (() => string | ReactElement);
  onSecondaryDialogDidShow?: () => void;
  onSecondaryDialogDidHide?: () => void;
  zIndex?: number;
  /*
   * Class name to provide the element which wraps the popover/modal/dialog
   */
  secondaryDialogClassName?: string;
  secondaryDialogPosition?: SplitButtonSecondaryContentPosition;
  /*
    Popover Container padding size
   */
  // @ts-ignore TODO TS-migration, when DialogContentContainer is converted to TS
  dialogPaddingSize?: typeof DialogContentContainer.sizes;
  shouldCloseOnClickInsideDialog?: boolean;
}

const SplitButton: FC<SplitButtonProps> & {
  secondaryPositions?: typeof SplitButtonSecondaryContentPosition;
  secondaryDialogPositions?: typeof SplitButtonSecondaryContentPosition;
  sizes?: typeof Button.sizes;
  colors?: typeof Button.colors;
  kinds?: typeof Button.kinds;
  inputTags?: typeof Button.inputTags;
  // @ts-ignore TODO TS-migration, when DialogContentContainer is converted to TS
  dialogPaddingSizes?: typeof DialogContentContainer.sizes;
} = ({
  secondaryDialogContent,
  onSecondaryDialogDidShow = NOOP,
  onSecondaryDialogDidHide = NOOP,
  shouldCloseOnClickInsideDialog,
  zIndex = null,
  secondaryDialogClassName,
  secondaryDialogPosition = SplitButtonSecondaryContentPosition.BOTTOM_START,
  // @ts-ignore TODO TS-migration, when DialogContentContainer is converted to TS
  dialogPaddingSize = DialogContentContainer.sizes.MEDIUM,
  ...buttonProps
}) => {
  const overrideButtonProps = { ...Button.defaultProps, ...buttonProps };
  const {
    disabled,
    success,
    loading,
    kind,
    color,
    className,
    leftIcon,
    rightIcon,
    onClick,
    children,
    marginLeft,
    marginRight
  } = overrideButtonProps;

  // State //
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [isHovered, setIsHover] = useState(false);
  const [isActive, setIsActive] = useState(false);

  // Refs //
  const ref = useRef(null);

  // Callbacks //
  const setHovered = useCallback(() => setIsHover(true), [setIsHover]);
  const setNotHovered = useCallback(() => setIsHover(false), [setIsHover]);

  const shouldSetActive = useCallback(
    (e: React.KeyboardEvent<HTMLElement>) => {
      if (disabled) return false;
      return !isInsideClass(e.target as HTMLElement, SECONDARY_BUTTON_WRAPPER_CLASSNAME);
    },
    [disabled]
  );

  const setActive = useCallback(
    (e: React.KeyboardEvent<HTMLElement>) => {
      if (!shouldSetActive(e)) return;
      setIsActive(true);
    },
    [setIsActive, shouldSetActive]
  );
  const setNotActive = useCallback(() => setIsActive(false), [setIsActive]);
  const setActiveOnEnter = useCallback(
    (e: React.KeyboardEvent<HTMLElement>) => {
      if (!shouldSetActive(e)) return;
      setIsActive(true);
    },
    [setIsActive, shouldSetActive]
  );

  const showDialog = useCallback(() => {
    setDialogOpen(true);
    onSecondaryDialogDidShow();
  }, [setDialogOpen, onSecondaryDialogDidShow]);

  const hideDialog = useCallback(() => {
    setDialogOpen(false);
    onSecondaryDialogDidHide();
  }, [setDialogOpen, onSecondaryDialogDidHide]);

  // Event listeners //

  // Used to set both buttons as hovered no matter what button was hovered
  useEventListener({ eventName: "mouseenter", callback: setHovered, ref });
  useEventListener({ eventName: "mouseleave", callback: setNotHovered, ref });

  useEventListener({ eventName: "mousedown", callback: setActive, ref });
  useEventListener({ eventName: "mouseup", callback: setNotActive, ref });

  // Used to finish active transition if clicked on enter
  useEventListener({ eventName: "transitionend", callback: setNotActive, ref });

  // Key events
  useKeyEvent({ keys: ENTER_KEYS, ref, callback: setActiveOnEnter });

  // We won't show the secondary button in case of success or loading
  const shouldRenderSplitContent = !(success || loading);

  const classNames = useMemo(
    () =>
      cx(
        "monday-style-split-button",
        `monday-style-split-button--kind-${kind}`,
        `monday-style-split-button--color-${color}`,
        {
          "monday-style-split-button--active": isActive,
          "monday-style-split-button--split-content-open": isDialogOpen,
          "monday-style-split-button--hovered": isHovered,
          "monday-style-split-button--disabled": disabled
        },
        className
      ),
    [className, kind, color, isActive, isDialogOpen, isHovered, disabled]
  );

  const dialogShowTrigger = useMemo(() => (disabled ? EMPTY_ARR : DEFAULT_DIALOG_SHOW_TRIGGER), [disabled]);

  const dialogHideTrigger = useMemo(() => {
    if (shouldCloseOnClickInsideDialog) return [...DEFAULT_DIALOG_HIDE_TRIGGER, "onContentClick"];
    return DEFAULT_DIALOG_HIDE_TRIGGER;
  }, [shouldCloseOnClickInsideDialog]);

  const actionsContent = useCallback(() => {
    const content = typeof secondaryDialogContent === "function" ? secondaryDialogContent() : secondaryDialogContent;
    return (
      // @ts-ignore TODO TS-migration, when DialogContentContainer is converted to TS
      <DialogContentContainer type={DialogContentContainer.types.POPOVER} size={dialogPaddingSize}>
        {content}
      </DialogContentContainer>
    );
  }, [secondaryDialogContent, dialogPaddingSize]);

  const animationEdgePosition = useMemo(() => {
    if (secondaryDialogPosition === SplitButtonSecondaryContentPosition.BOTTOM_MIDDLE) {
      return "";
    }
    if (secondaryDialogPosition === SplitButtonSecondaryContentPosition.BOTTOM_START) {
      return "bottom";
    }

    return "top";
  }, [secondaryDialogPosition]);

  return (
    <div className={classNames} ref={ref} role="button">
      <Button
        {
          ...overrideButtonProps /* We are enriching button with other props so we must use spreading */
        }
        preventClickAnimation
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        rightFlat
        color={color}
        kind={kind}
        onClick={onClick}
        className="monday-style-split-button__main-button"
        marginLeft={marginLeft}
        onFocus={setHovered}
        onBlur={setNotHovered}
        disabled={disabled}
      >
        {children}
      </Button>
      {shouldRenderSplitContent && (
        <div className={SECONDARY_BUTTON_WRAPPER_CLASSNAME}>
          <Dialog
            wrapperClassName={secondaryDialogClassName}
            zIndex={zIndex}
            content={actionsContent}
            position={secondaryDialogPosition}
            startingEdge={animationEdgePosition}
            animationType="expand"
            moveBy={DIALOG_MOVE_BY}
            onDialogDidShow={showDialog}
            onDialogDidHide={hideDialog}
            showTrigger={dialogShowTrigger}
            hideTrigger={dialogHideTrigger}
          >
            <Button
              {...overrideButtonProps}
              onClick={NOOP} // TODO temp fix, might need to dig into that
              preventClickAnimation
              leftFlat
              noSidePadding
              color={color}
              kind={kind}
              className="monday-style-split-button__secondary-button"
              active={isDialogOpen}
              marginRight={marginRight}
              onFocus={setHovered}
              onBlur={setNotHovered}
              disabled={disabled}
              ariaLabel={SECONDARY_BUTTON_ARIA_LABEL}
              ariaHasPopup
              ariaExpanded={isDialogOpen}
            >
              <div className="monday-style-split-button__secondary-button-icon-wrapper">
                <DropdownChevronDown aria-hidden="true" />
              </div>
            </Button>
          </Dialog>
        </div>
      )}
    </div>
  );
};

Object.assign(SplitButton, {
  // Backward compatibility for enum naming
  secondaryPositions: SplitButtonSecondaryContentPosition,
  secondaryDialogPositions: SplitButtonSecondaryContentPosition,
  sizes: Button.sizes,
  colors: Button.colors,
  kinds: Button.kinds,
  inputTags: Button.inputTags,
  // @ts-ignore TODO TS-migration, when DialogContentContainer is converted to TS
  dialogPaddingSizes: DialogContentContainer.sizes
});

export default SplitButton;
