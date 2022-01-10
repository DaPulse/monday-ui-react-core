import React, { useRef, forwardRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../../hooks/useMergeRefs";
import "./TabPanels.scss";

const TabPanels = forwardRef(({ className, id, activeTabId, animationDirection, children }, ref) => {
  const componentRef = useRef(null);
  const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

  return (
    <div ref={mergedRef} className={cx("tab-panels--wrapper", className)} id={id}>
      {React.Children.map(children, (child, index) => {
        if (activeTabId === index) {
          return React.cloneElement(child, {
            ...child.props,
            className: cx("tab-panel", "active", `animation-direction-${animationDirection}`, child.props.className)
          });
        }
        return React.cloneElement(child, { ...child.props, className: cx("tab-panel", child.props.className) });
      })}
    </div>
  );
});

TabPanels.animationDirections = {
  RTL: "rtl",
  LTR: "ltr"
};

TabPanels.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  activeTabId: PropTypes.number,
  animationDirection: PropTypes.oneOf([TabPanels.animationDirections.LTR, TabPanels.animationDirections.RTL])
};

TabPanels.defaultProps = {
  className: "",
  id: "",
  activeTabId: 0,
  animationDirection: TabPanels.animationDirections.RTL
};

TabPanels.isTabPanels = true;

export default TabPanels;
