import React from "react";
import Tooltip from "../Tooltip/Tooltip";
import Avatar from "../Avatar/Avatar";
import PropTypes from "prop-types";
import AvatarGroupCounterTooltipContainer from "./AvatarGroupCounterTooltipContainer";
import cx from "classnames";
import Counter from "../Counter/Counter";
import styles from "./AvatarGroupCounter.module.scss";

const AvatarGroupCounter = ({
  counterTooltipAvatars,
  counterProps,
  counterTooltipCustomProps,
  counterTooltipIsVirtualizedList,
  counterTooltipTheme,
  avatarSize,
  avatarType
}) => {
  const {
    color: counterColor = Counter.colors.LIGHT,
    count: counterValue = counterTooltipAvatars.length,
    prefix: counterPrefix = "+",
    maxDigits: counterMaxDigits = 3
  } = counterProps || {};

  const counterSizeStyle = styles[avatarSize?.toString()];
  const counterColorStyle = styles[counterColor];

  if (!counterTooltipAvatars.length && !counterValue) {
    return null;
  }

  return (
    <AvatarGroupCounterTooltipContainer
      avatars={counterTooltipAvatars}
      counterTooltipCustomProps={counterTooltipCustomProps}
      type={avatarType}
      counterTooltipIsVirtualizedList={counterTooltipIsVirtualizedList}
      counterTooltipTheme={counterTooltipTheme}
    >
      {/* eslint-disable jsx-a11y/no-noninteractive-tabindex */}
      <div tabIndex={0} className={cx(styles.counterContainer, counterSizeStyle, counterColorStyle)}>
        {/* eslint-enable jsx-a11y/no-noninteractive-tabindex */}
        <Counter color={counterColor} count={counterValue} prefix={counterPrefix} maxDigits={counterMaxDigits} />
      </div>
    </AvatarGroupCounterTooltipContainer>
  );
};

AvatarGroupCounter.propTypes = {
  /**
   * Array of Avatar elements
   */
  counterTooltipAvatars: PropTypes.arrayOf(PropTypes.element),
  /**
   * Counter.propTypes: props for counter
   */
  counterProps: PropTypes.shape({ ...Counter.propTypes }),
  counterTooltipCustomProps: PropTypes.shape({ ...Tooltip.propTypes }),
  counterTooltipIsVirtualizedList: PropTypes.bool,
  counterTooltipTheme: PropTypes.oneOf(Object.values(Tooltip.themes)),
  avatarSize: PropTypes.oneOf(Object.values(Avatar.sizes)),
  avatarType: PropTypes.oneOf(Object.values(Avatar.types))
};
AvatarGroupCounter.defaultProps = {
  counterTooltipAvatars: [],
  counterProps: undefined,
  counterTooltipCustomProps: undefined,
  counterTooltipIsVirtualizedList: false,
  counterTooltipTheme: undefined,
  avatarSize: Avatar.sizes.MEDIUM,
  avatarType: undefined
};

export default AvatarGroupCounter;
