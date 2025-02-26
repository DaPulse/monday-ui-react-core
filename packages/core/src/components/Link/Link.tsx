import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import cx from "classnames";
import React, { forwardRef, useCallback } from "react";
import { NOOP } from "../../utils/function-utils";
import Icon from "../Icon/Icon";
import { IconPosition as IconPositionEnum, LinkTarget as LinkTargetEnum } from "./LinkConsts";
import { LinkIconPosition, LinkTarget } from "./Link.types";
import { SubIcon, VibeComponent, VibeComponentProps, withStaticProps } from "../../types";
import styles from "./Link.module.scss";

export interface LinkProps extends VibeComponentProps {
  /**
   * Class name applied to the link text.
   */
  textClassName?: string;
  /**
   * The URL the link points to.
   */
  href?: string;
  /**
   * The text content of the link.
   */
  text?: string;
  /**
   * Specifies the relationship between the current document and the linked resource.
   */
  rel?: string;
  /**
   * Callback fired when the link is clicked.
   */
  onClick?: (event: React.MouseEvent) => void;
  /**
   * Specifies where to open the linked document.
   */
  target?: LinkTarget;
  /**
   * The ARIA label description for accessibility.
   */
  ariaLabelDescription?: string;
  /**
   * The ID of the element that describes this link.
   */
  ariaDescribedby?: string;
  /**
   * The ID of the element labeling this link.
   */
  ariaLabeledBy?: string;
  /**
   * Icon displayed next to the link text.
   */
  icon?: SubIcon;
  /**
   * The position of the icon relative to the text.
   */
  iconPosition?: LinkIconPosition;
  /**
   * If true, disables navigation when the link is clicked.
   */
  disableNavigation?: boolean;
  /**
   * If true, the link inherits the surrounding text's font size.
   */
  inheritFontSize?: boolean;
  /**
   * If true, the link is styled to fit within inline text content.
   */
  inlineText?: boolean;
}

const Link: VibeComponent<LinkProps, HTMLAnchorElement> & {
  targets?: typeof LinkTargetEnum;
  iconPositions?: typeof IconPositionEnum;
  position?: typeof IconPositionEnum;
} = forwardRef(
  (
    {
      className,
      textClassName,
      href = "",
      text = "",
      rel = "noreferrer",
      onClick = NOOP,
      target = "_blank",
      ariaLabelDescription = "",
      ariaDescribedby = "",
      icon = "",
      iconPosition = "start",
      id = "",
      ariaLabeledBy = "",
      disableNavigation = false,
      inheritFontSize = false,
      inlineText = false,
      "data-testid": dataTestId
    }: LinkProps,
    ref: React.ForwardedRef<HTMLAnchorElement>
  ) => {
    const isStart = iconPosition === "start";

    const onClickWrapper = useCallback(
      (e: React.MouseEvent<HTMLElement>) => {
        if (disableNavigation) {
          e.preventDefault();
        }
        onClick && onClick(e);
      },
      [disableNavigation, onClick]
    );

    return (
      <a
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.LINK, id)}
        id={id}
        href={href}
        rel={rel}
        ref={ref}
        onClick={onClickWrapper}
        target={target}
        className={cx(styles.link, className, {
          [styles.inheritFontSize]: inheritFontSize,
          [styles.inlineText]: inlineText
        })}
        aria-label={ariaLabelDescription}
        aria-describedby={ariaDescribedby}
        aria-labelledby={ariaLabeledBy}
      >
        {getIcon(isStart, icon, cx(styles.iconStart))}
        <span className={cx(styles.text, textClassName)}>{text}</span>
        {getIcon(!isStart, icon, cx(styles.iconEnd))}
      </a>
    );
  }
);

function getIcon(shouldShow: boolean, icon: string | React.FunctionComponent | null, className: string) {
  if (!shouldShow) return;
  return <Icon className={className} icon={icon} iconType="font" />;
}

export default withStaticProps(Link, {
  position: IconPositionEnum,
  iconPositions: IconPositionEnum,
  targets: LinkTargetEnum
});
