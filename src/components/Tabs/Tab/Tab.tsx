/* eslint-disable jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events */
import cx from "classnames";
import React, { FC, forwardRef, ReactElement, useRef } from "react";
import { noop as NOOP } from "lodash-es";
import useMergeRefs from "../../../hooks/useMergeRefs";
import Icon, { IconSubComponentProps } from "../../Icon/Icon";
import VibeComponentProps from "../../../types/VibeComponentProps";
import { IconType } from "../../Icon/IconConstants";
import { ComponentDefaultTestId, getTestId } from "../../../tests/test-ids-utils";
import styles from "./Tab.module.scss";

export interface TabProps extends VibeComponentProps {
  /**
   * Class name for tab link-name
   */
  tabInnerClassName?: string;
  /**
   * Tab index
   */
  value?: number;
  disabled?: boolean;
  active?: boolean;
  focus?: boolean;
  icon?: string | React.FunctionComponent<IconSubComponentProps> | null;
  iconType?: IconType;
  iconSide?: string;
  onClick?: (value: number) => void;
  /**
   * Tab link-name
   */
  children?: string | ReactElement[];
}

const Tab: FC<TabProps> = forwardRef(
  (
    {
      className,
      tabInnerClassName,
      id,
      value = 0,
      disabled = false,
      active = false,
      focus = false,
      onClick = NOOP,
      icon,
      iconType,
      iconSide = "left",
      children,
      "data-testid": dataTestId
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    function renderIconAndChildren() {
      if (!icon) return children;

      const iconElement = (
        <Icon
          clickable={false}
          ariaHidden={true}
          iconType={iconType}
          icon={icon}
          // css-modules-migration: iconSide - used only for overrides
          className={cx(styles.tabIcon, "tab-icon", iconSide)}
          iconSize={18}
          ignoreFocusStyle
        />
      );

      if (iconSide === "left") {
        return [iconElement, ...children];
      }

      return [...children, iconElement];
    }
    return (
      <li
        ref={mergedRef}
        key={id}
        className={cx(styles.tabWrapper, "tab--wrapper", className, {
          [styles.active]: active,
          ["active"]: active,
          [styles.disabled]: disabled,
          ["disabled"]: disabled,
          [styles.tabFocusVisibleInset]: focus,
          ["tab-focus-visible-inset"]: focus
        })}
        id={id}
        role="tab"
        aria-selected={active}
        aria-disabled={disabled}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.TAB, id)}
      >
        <a className={cx(styles.tabInner, "tab-inner", tabInnerClassName)} onClick={() => !disabled && onClick(value)}>
          {renderIconAndChildren()}
        </a>
      </li>
    );
  }
);

export default Tab;
