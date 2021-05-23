import React, { useRef, forwardRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../../hooks/useMergeRefs";
import "./Tab.scss";

const Tab = forwardRef(({ className, id }, ref) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    return (
    <div ref={mergedRef} className={cx("tab--wrapper", className)} id={id}>
        My awesome new component
    </div>
  );
});

Tab.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};
Tab.defaultProps = {
    className: "",
    id: ""
};

export default Tab;
