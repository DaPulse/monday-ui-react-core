import React, { useMemo, useState, useRef, useCallback, useEffect } from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import useEventListener from "../../../../hooks/useEventListener";
import Icon from "../../../Icon/Icon";
import Check from "../../../Icon/Icons/components/Check";

import { MULTI_STEP_TYPES, STEP_STATUSES } from "../../MultiStepConstants";
import { baseClassName } from "./StepIndicatorConstants";
import "./StepIndicator.scss";
import HiddenText from "../../../HiddenText/HiddenText";

const StepIndicator = ({ stepComponentClassName, stepNumber, status, titleText, subtitleText, type }) => {
  // Animations state
  const [statusChangeAnimationState, setStatusChangeAnimationState] = useState(false);

  // Refs
  const componentRef = useRef(null);
  const prevStatusRef = useRef(status);

  // Callbacks for modifying animation state
  const enableStatusChangeAnimation = useCallback(() => {
    setStatusChangeAnimationState(true);
  }, [setStatusChangeAnimationState]);

  const disableStatusChangeAnimation = useCallback(() => {
    setStatusChangeAnimationState(false);
  }, [setStatusChangeAnimationState]);

  const isStatusTransition = useCallback(() => prevStatusRef.current !== status, [prevStatusRef]);

  // Event listeners for removing animation.
  useEventListener({
    eventName: "animationend",
    callback: disableStatusChangeAnimation,
    componentRef
  });

  // Effect - triggering animation when necessary.
  useEffect(() => {
    if (isStatusTransition()) {
      enableStatusChangeAnimation();
    }
  }, [status]);

  // Effect - updating previous status ref value (for animation) after component update.
  useEffect(() => {
    prevStatusRef.current = status;
  }, [status]);

  const ariaLabel = useMemo(() => {
    return `Step ${stepNumber}: ${titleText} - ${subtitleText}, status: ${status}`;
  }, [status]);

  const baseClassNameWithType = `${baseClassName}--type-${type}`;
  const baseClassNameWithStatus = `${baseClassName}--status-${status}`;
  const baseClassNameWithAnimation = `${baseClassName}--with-animation`;

  const getClassNamesWithSuffix = suffix => {
    return [`${baseClassName}${suffix}`, `${baseClassNameWithType}${suffix}`, `${baseClassNameWithStatus}${suffix}`];
  };

  return (
    <div
      className={cx(...getClassNamesWithSuffix(""), stepComponentClassName, {
        [baseClassNameWithAnimation]: statusChangeAnimationState
      })}
      aria-label={ariaLabel}
    >
      <div className={cx(...getClassNamesWithSuffix("__number-container"))} ref={componentRef}>
        <SwitchTransition mode="out-in">
          <CSSTransition
            classNames={`${baseClassName}--swap`}
            addEndListener={(node, done) => {
              node.addEventListener("transitionend", done, false);
            }}
            key={status}
          >
            <span className={cx(...getClassNamesWithSuffix("__number-container__text"))}>
              {status === STEP_STATUSES.FULFILLED ? (
                <Icon
                  icon={Check}
                  className={`${baseClassName}__number-container__text__check-icon`}
                  iconLabel={STEP_STATUSES.FULFILLED}
                />
              ) : (
                stepNumber
              )}
            </span>
          </CSSTransition>
        </SwitchTransition>
      </div>
      <div className={cx(...getClassNamesWithSuffix("__text-container"))}>
        <div className={cx(...getClassNamesWithSuffix("__text-container__title"))}>
          <HiddenText text={status} /> {/* for accessibility */}
          <span className={cx(...getClassNamesWithSuffix("__text-container__title__text"))}>{titleText}</span>
        </div>
        <span className={cx(...getClassNamesWithSuffix("__text-container__subtitle__text"))}>{subtitleText}</span>
      </div>
    </div>
  );
};

StepIndicator.propTypes = {
  status: PropTypes.oneOf([STEP_STATUSES.PENDING, STEP_STATUSES.ACTIVE, STEP_STATUSES.FULFILLED]).isRequired,
  titleText: PropTypes.string.isRequired,
  subtitleText: PropTypes.string,
  stepNumber: PropTypes.number.isRequired,
  stepComponentClassName: PropTypes.string,
  type: PropTypes.oneOf(
    MULTI_STEP_TYPES.PRIMARY,
    MULTI_STEP_TYPES.SUCCESS,
    MULTI_STEP_TYPES.DANGER,
    MULTI_STEP_TYPES.DARK
  )
};

StepIndicator.defaultProps = {
  stepComponentClassName: "",
  stepNumber: 1,
  status: STEP_STATUSES.PENDING,
  titleText: "Title text",
  subtitleText: "Subtitle text",
  type: MULTI_STEP_TYPES.PRIMARY
};

export default StepIndicator;
