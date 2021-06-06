import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import NOOP from "lodash/noop";
import { useToggleState } from "@react-stately/toggle";
import { useSwitch } from "@react-aria/switch";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { BASE_TOGGLE_CLASS_NAME } from "./ToggleConstants";
import ToggleText from "./ToggleText";
import "./Toggle.scss";
import { useToggle } from "../../hooks/useToggle";

const Toggle = ({
  id,
  componentClassName,
  isDefaultSelected,
  isSelected,
  onChange,
  value,
  name,
  isDisabled,
  ariaLabel,
  ariaControls,
  isHideLabels
}) => {
  const { inputProps } = useToggle({
    id,
    isDefaultSelected,
    isSelected,
    onChange,
    value,
    name,
    isDisabled,
    ariaLabel,
    ariaControls
  });

  const className = classNames(`${BASE_TOGGLE_CLASS_NAME}__toggle`, componentClassName, {
    [`${BASE_TOGGLE_CLASS_NAME}__toggle--selected`]: inputProps.checked,
    [`${BASE_TOGGLE_CLASS_NAME}__toggle--not-selected`]: !inputProps.checked,
    [`${BASE_TOGGLE_CLASS_NAME}__toggle--disabled`]: isDisabled
  });

  // TODO: ask orr about support for all browsers? MARGIN INLINE
  // TODO: ask about on and off text

  return (
    <label htmlFor={id} className={`${BASE_TOGGLE_CLASS_NAME}__wrapper`}>
      <VisuallyHidden>
        <input disabled={isDisabled} {...inputProps} />
      </VisuallyHidden>
      {isHideLabels ? null : <ToggleText>Off</ToggleText>}
      <div className={className} aria-hidden="true" />
      {isHideLabels ? null : <ToggleText>On</ToggleText>}
    </label>
  );
};

Toggle.propTypes = {
  /**
   * use toggle props
   */
  id: PropTypes.string,
  componentClassName: PropTypes.string,
  isDefaultSelected: PropTypes.bool,
  isSelected: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
  isDisabled: PropTypes.bool,
  isHideLabels: PropTypes.bool,
  /**
   * Aria props
   */
  ariaLabel: PropTypes.string,
  ariaControls: PropTypes.string
};

Toggle.defaultProps = {
  id: undefined,
  componentClassName: "",
  isDefaultSelected: true,
  isSelected: undefined,
  onChange: NOOP,
  value: undefined,
  name: undefined,
  isDisabled: false,
  isHideLabels: false,
  ariaLabel: undefined,
  ariaControls: undefined
};

export default Toggle;
