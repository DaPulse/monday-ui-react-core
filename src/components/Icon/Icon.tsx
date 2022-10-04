import React, { forwardRef, Ref, CSSProperties } from "react";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import { IconType } from "./IconConstants";
import CustomSvgIcon from "./CustomSvgIcon/CustomSvgIcon";
import FontIcon from "./FontIcon/FontIcon";
import useIconProps from "./hooks/useIconProps";
import VibeComponentProps from "../../types/VibeComponentProps";
import VibeComponent from "../../types/VibeComponent";
import "./Icon.scss";
import { MouseEventCallBack } from "src/types/events";

// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-function
const CLICK_NOOP = (event: React.MouseEvent) => {};

interface iconSubComponentProps {
  ref?: Ref<any>;
  id?: string;
  size?: string | number;
  onClick?: MouseEventCallBack;
  className?: string;
  style?: CSSProperties;
  "data-testid"?: string;
}

interface IconProps extends VibeComponentProps {
  // eslint-disable-next-line no-unused-vars
  onClick?: (event: React.MouseEvent) => void;
  icon: string | React.FunctionComponent<iconSubComponentProps> | null;
  clickable?: boolean;
  iconLabel?: string;
  iconType?: IconType;
  iconSize?: number | string;
  ignoreFocusStyle?: boolean;
  tabindex?: number | string;
  ariaHidden?: boolean;
  style?: React.CSSProperties;
  useCurrentColor?: boolean;
  customColor?: string;
}

const Icon: VibeComponent<IconProps, HTMLElement> & { type?: typeof IconType } = forwardRef(
  (
    {
      /**
       * component id
       */
      id,
      onClick = CLICK_NOOP,
      /**
       * class name to be added to icon
       */
      className,
      /**
       * we support three types of icons - SVG, FONT and SRC (classname) so this prop is either the name of the icon or the component
       */
      icon = "",
      /**
       * Is icon is a button
       */
      clickable = true,
      /**
       * icon aria label support
       */
      iconLabel,
      /**
       *  the type of the component - svg, font or custom svg (using react-inlinesvg)
       */
      iconType = IconType.SVG,
      /**
       * size for font icon
       */
      iconSize = 16,
      /**
       * remove focus style
       */
      ignoreFocusStyle = false,
      tabindex: externalTabIndex,
      /**
       * Hide icon asset from screen reader. No need to set value for this prop when clickable = false
       */
      ariaHidden,
      style,
      /**
       * when using svg from src (Icon.type.SRC) this boolean will transform the "fill" property to "currentColor"
       */
      useCurrentColor = false,
      /**
       * If you want to override to coloring of currentColor
       */
      customColor,
      "data-testid": dataTestId
    },
    ref
  ) => {
    const overrideExternalTabIndex = externalTabIndex && +externalTabIndex;
    const { screenReaderAccessProps, onClickCallback, computedClassName, iconRef } = useIconProps({
      onClick,
      iconLabel,
      clickable,
      className,
      isDecorationOnly: ariaHidden,
      ignoreFocusStyle,
      externalTabIndex: overrideExternalTabIndex
    });

    const mergedRef = useMergeRefs({ refs: [ref, iconRef] });

    if (!icon) {
      return null;
    }

    // Replace in major version change with more accurate check
    const isFunctionType = typeof icon === "function";
    // Replace in major version change with more accurate check
    if (iconType === IconType.SVG || isFunctionType || typeof icon === "object") {
      const IconComponent = icon;
      return (
        <IconComponent
          id={id}
          {...screenReaderAccessProps}
          ref={isFunctionType ? undefined : mergedRef}
          size={iconSize.toString()}
          onClick={onClick}
          className={computedClassName}
          style={style}
          data-testid={dataTestId}
        />
      );
    }
    if (iconType === IconType.SRC) {
      return (
        <CustomSvgIcon
          id={id}
          src={icon}
          {...screenReaderAccessProps}
          className={cx(computedClassName)}
          onClick={onClickCallback}
          replaceToCurrentColor={useCurrentColor}
          customColor={customColor}
          data-testid={dataTestId}
        />
      );
    }
    return (
      <FontIcon
        id={id}
        {...screenReaderAccessProps}
        className={cx(computedClassName)}
        onClick={onClickCallback}
        ref={mergedRef}
        icon={icon}
        data-testid={dataTestId}
      />
    );
  }
);

Icon.type = IconType;

export default Icon;
