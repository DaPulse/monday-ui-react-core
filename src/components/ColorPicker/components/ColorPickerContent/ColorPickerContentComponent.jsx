import cx from "classnames";
import PropTypes from "prop-types";
import React, { useCallback } from "react";
import { contentColors, COLOR_STYLES } from "../../../../general-stories/colors/colors-vars-map";
import Button from "../../../Button/Button";
import NoColor from "../../../Icon/Icons/components/NoColor";
import ColorPickerItemComponent from "../ColorPickerItemComponent/ColorPickerItemComponent";
import "./ColorPickerContentComponent.scss";

const ColorPickerContentComponent = ({
  className,
  onValueChange,
  value,
  defaultColorText,
  mode,
  colorStyle = COLOR_STYLES.REGULAR
}) => {
  const colors = contentColors;
  const onClearButton = useCallback(() => {
    onValueChange(null);
  }, [onValueChange]);
  return (
    <div className={cx("color-picker-content--wrapper", className)}>
      <div className={cx("color-picker")}>
        {colors.map(color => {
          return (
            <ColorPickerItemComponent
              key={color}
              color={color}
              onValueChange={onValueChange}
              value={value}
              mode={mode}
              colorStyle={colorStyle}
            />
          );
        })}
      </div>
      <Button
        size={Button.sizes.SMALL}
        kind={Button.kinds.TERTIARY}
        onClick={onClearButton}
        className="clear-color-button"
      >
        <NoColor size="16" className="clear-color-icon" />
        {defaultColorText}
      </Button>
    </div>
  );
};

ColorPickerContentComponent.COLOR_STYLES = COLOR_STYLES;

ColorPickerContentComponent.propTypes = {
  className: PropTypes.string,
  onValueChange: PropTypes.func,
  value: PropTypes.string,
  defaultColorText: PropTypes.string,
  mode: PropTypes.string
};

ColorPickerContentComponent.defaultProps = {
  className: "",
  onValueChange: () => {},
  value: "",
  defaultColorText: "TODO - default-text",
  mode: "full"
};

export default ColorPickerContentComponent;
