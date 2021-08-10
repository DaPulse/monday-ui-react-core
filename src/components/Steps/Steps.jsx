import React, { useRef, forwardRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { STEPS_GALLERY_TYPE, STEPS_CSS_BASE_CLASS, STEPS_TYPES } from "./StepsConstants";
import useMergeRefs from "../../hooks/useMergeRefs";
import { StepsHeader } from "./StepsHeader";
import { NOOP } from "../../utils/function-utils";
import { BEMClass } from "../../helpers/bem-helper";
import "./Steps.scss";

const bemHelper = BEMClass(STEPS_CSS_BASE_CLASS);

const Steps = forwardRef(
  (
    { className, id, steps, activeStepIndex, type, onChangeActiveStep, isOnPrimary, areNavigationButtonsHidden },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });
    return (
      <div
        ref={mergedRef}
        className={cx(STEPS_CSS_BASE_CLASS, className, { [bemHelper({ state: "on-primary" })]: isOnPrimary })}
        id={id}
      >
        <StepsHeader
          onChangeActiveStep={onChangeActiveStep}
          type={type}
          activeStepIndex={activeStepIndex}
          stepsCount={steps.length}
          areNavigationButtonsHidden={areNavigationButtonsHidden}
          isOnPrimary={isOnPrimary}
        />
        {steps[activeStepIndex]}
      </div>
    );
  }
);

Steps.types = STEPS_TYPES;

Steps.propTypes = {
  activeStepIndex: PropTypes.number,
  onChangeActiveStep: PropTypes.func,
  areNavigationButtonsHidden: PropTypes.bool,
  steps: PropTypes.arrayOf(PropTypes.element),
  className: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.oneOf([Steps.types.GALLERY, Steps.types.NUMBERS]),
  isOnPrimary: PropTypes.bool
};

Steps.defaultProps = {
  activeStepIndex: 1,
  isOnPrimary: false,
  steps: [],
  className: "",
  id: "",
  onChangeActiveStep: NOOP,
  areNavigationButtonsHidden: false,
  type: STEPS_GALLERY_TYPE
};

export default Steps;
