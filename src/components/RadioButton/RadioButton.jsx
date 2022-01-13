import React, { useRef, forwardRef, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import { baseClassName } from "./RadioButtonConstants";
import Clickable from "../Clickable/Clickable";
import "./RadioButton.scss";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";

const RadioButton = forwardRef(
  (
    {
      className,
      // Backward compatibility for props naming
      componentClassName,
      text,
      value,
      name,
      disabled,
      defaultChecked,
      children,
      onSelect,
      checked
    },
    ref
  ) => {
    const inputRef = useRef();
    const mergedRef = useMergeRefs({ refs: [ref, inputRef] });
    const overrideClassName = backwardCompatibilityForProperties([className, componentClassName]);
    const onChildClick = useCallback(() => {
      if (disabled) return;
      if (inputRef.current) {
        inputRef.current.checked = true;
      }
      if (onSelect) {
        onSelect();
      }
    }, [onSelect, inputRef, disabled]);

    const checkedProps = useMemo(() => {
      if (checked !== undefined) {
        return { checked };
      }
      return { defaultChecked };
    }, [checked, defaultChecked]);

    return (
      <label className={cx(baseClassName, overrideClassName, { disabled })}>
        <span className={`${baseClassName}__radio-input-container`}>
          <input
            className={`${baseClassName}__radio-input-container__radio-input`}
            type="radio"
            value={value}
            name={name}
            disabled={disabled}
            {...checkedProps}
            onChange={onSelect}
            ref={mergedRef}
          />
          <span className={`${baseClassName}__radio-input-container__radio-control`} />
        </span>
        {text && <span className={`${baseClassName}__radio-label`}>{text}</span>}
        {children && (
          <Clickable className="radio-children-wrapper" onClick={onChildClick}>
            {children}
          </Clickable>
        )}
      </label>
    );
  }
);

RadioButton.defaultProps = {
  className: undefined,
  text: "",
  value: "",
  name: "",
  disabled: false,
  defaultChecked: false,
  checked: undefined,
  onSelect: undefined
};
RadioButton.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  checked: PropTypes.bool,
  onSelect: PropTypes.func
};

export default RadioButton;
