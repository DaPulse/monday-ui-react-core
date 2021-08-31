import React, { useLayoutEffect } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { TYPES } from "./HeadingConstants";
import Tooltip from "../Tooltip/Tooltip";
import useIsOverflowing from "../../hooks/useIsOverflowing";
import useRefWithCallback from "../../hooks/useRefWithCallback";
import { SIZES } from "../../constants/sizes";
import "./Heading.scss";

const Heading = ({
  className,
  value,
  type,
  size,
  ariaLabel,
  id,
  ellipsis,
  ellipsisMaxLines,
  style,
  tooltipPosition,
  suggestEditOnHover,
  nonEllipsisTooltip // tooltip to show when no overflow
}) => {
  const [componentRef, setRef] = useRefWithCallback(node =>
    node.style.setProperty("--heading-clamp-lines", ellipsisMaxLines)
  );
  const classNames = cx("heading-component", className, `element-type-${type}`, `size-${size}`, {
    "heading-element-ellipsis": ellipsis,
    "suggest-edit-on-hover": suggestEditOnHover
  });
  const Element = React.createElement(
    type,
    { className: classNames, "aria-label": ariaLabel, id, ref: setRef, style },
    value
  );

  const isOverflowing = useIsOverflowing({ ref: ellipsis && componentRef });

  useLayoutEffect(() => {
    if (componentRef.current) {
      componentRef.current.style.setProperty("--heading-clamp-lines", ellipsisMaxLines);
    }
  }, [componentRef, ellipsisMaxLines, isOverflowing]);

  if (isOverflowing || nonEllipsisTooltip) {
    const tooltipContent = isOverflowing ? value : nonEllipsisTooltip;
    return (
      <Tooltip content={tooltipContent} position={tooltipPosition}>
        {Element}
      </Tooltip>
    );
  }
  return Element;
};

Heading.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(Object.keys(TYPES)),
  ariaLabel: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  ellipsis: PropTypes.bool,
  ellipsisMaxLines: PropTypes.number,
  suggestEditOnHover: PropTypes.bool,
  nonEllipsisTooltip: PropTypes.string,
  size: PropTypes.oneOf(Object.values(SIZES))
};
Heading.defaultProps = {
  className: "",
  type: TYPES.h1,
  ariaLabel: "",
  value: "",
  id: "",
  ellipsis: true,
  ellipsisMaxLines: 1,
  suggestEditOnHover: false,
  nonEllipsisTooltip: null,
  size: SIZES.LARGE
};

Heading.types = TYPES;
Heading.sizes = SIZES;

export default Heading;
