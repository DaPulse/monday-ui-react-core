import React, { useCallback, useMemo } from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import Flex from "../Flex/Flex";
import Avatar from "../Avatar/Avatar";
import AvatarGroupCounterTooltipContentVirtualizedList from "./AvatarGroupCounterTooltipContentVirtualizedList";
import { avatarRenderer } from "./AvatarGroupCounterTooltipHelper";
import styles from "./AvatarGroupCounterTooltipContent.module.scss";

const AvatarGroupCounterTooltipContent = ({
  avatars,
  type,
  className,
  isVirtualizedList,
  tooltipContentContainerRef
}) => {
  const getTooltipContent = useCallback(avatarProps => {
    return avatarProps?.tooltipProps?.content || avatarProps?.ariaLabel;
  }, []);

  const { avatarItems, displayAsGrid, tooltipContainerAriaLabel } = useMemo(() => {
    const avatarItems = avatars.map(avatar => ({
      value: { ...avatar.props, tooltipContent: getTooltipContent(avatar.props) }
    }));
    const displayAsGrid = !avatarItems.some(item => item.value.tooltipContent);
    const tooltipContainerAriaLabel = !displayAsGrid
      ? avatarItems.map(item => item.value.tooltipContent).join(",")
      : undefined;
    return { avatarItems, displayAsGrid, tooltipContainerAriaLabel };
  }, [avatars, getTooltipContent]);

  const renderedItems = useMemo(
    () => avatarItems.map((item, index) => avatarRenderer(item, index, undefined, type, displayAsGrid)),
    [avatarItems, displayAsGrid, type]
  );

  if (isVirtualizedList) {
    return (
      <AvatarGroupCounterTooltipContentVirtualizedList
        avatarRenderer={avatarRenderer}
        tooltipContentContainerRef={tooltipContentContainerRef}
        tooltipContainerAriaLabel={tooltipContainerAriaLabel}
        avatarItems={avatarItems}
        type={type}
      />
    );
  }

  // TODO separate to different component or commit e6cee718?
  if (displayAsGrid) {
    return (
      <Flex
        ref={tooltipContentContainerRef}
        tabIndex={-1}
        role="treegrid"
        ariaLabel={tooltipContainerAriaLabel}
        className={cx(styles.scrollableContainer, styles.tooltipContainer, styles.tooltipGridContainer, className)}
        direction={Flex.directions.ROW}
        gap={Flex.gaps.XS}
        wrap
      >
        {renderedItems}
      </Flex>
    );
  }

  return (
    <Flex
      ref={tooltipContentContainerRef}
      tabIndex={-1}
      role="treegrid"
      ariaLabel={tooltipContainerAriaLabel}
      className={cx(styles.scrollableContainer, styles.tooltipContainer, className)}
      direction={Flex.directions.COLUMN}
      gap={Flex.gaps.SMALL}
    >
      {renderedItems}
    </Flex>
  );
};

AvatarGroupCounterTooltipContent.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf([Avatar.types.TEXT, Avatar.types.ICON, Avatar.types.IMG]),
  /**
   * Array of Avatar components
   */
  avatars: PropTypes.arrayOf(PropTypes.element),
  isVirtualizedList: PropTypes.bool,
  tooltipContentContainerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any })])
};
AvatarGroupCounterTooltipContent.defaultProps = {
  className: undefined,
  type: undefined,
  avatars: [],
  isVirtualizedList: false,
  tooltipContentContainerRef: undefined
};

export default AvatarGroupCounterTooltipContent;
