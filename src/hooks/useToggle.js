import { useRef } from "react";
import { useToggleState } from "@react-stately/toggle";
import { useSwitch } from "@react-aria/switch";
import { useFocusRing } from "@react-aria/focus";

export const useToggle = ({
  id,
  isDefaultSelected,
  isSelected,
  onChange,
  value,
  name,
  isDisabled,
  ariaLabel,
  ariaControls
}) => {
  const toggleRef = useRef();
  const { isFocusVisible, focusProps } = useFocusRing();
  const toggleState = useToggleState({ defaultSelected: isDefaultSelected, isSelected, onChange });
  const { inputProps: switchProps } = useSwitch(
    {
      id,
      defaultSelected: isDefaultSelected,
      isSelected,
      onChange,
      value,
      name,
      isDisabled,
      "aria-label": ariaLabel,
      "aria-controls": ariaControls
    },
    toggleState,
    toggleRef
  );

  return { isChecked: switchProps.checked, isFocusVisible, inputProps: { ...switchProps, ...focusProps } };
};
