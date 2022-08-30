import React from "react";
import cx from "classnames";
import { components } from "react-select";
import "./menu.scss";

const Menu = props => {
  const { children, Renderer, selectProps } = props;
  const insideScroll = selectProps?.selectProps?.insideScroll;
  return (
    <components.Menu
      {...props}
      className={cx("menu", "dropdown-menu-wrapper", { ["dropdown-menu-wrapper--inside-scroll"]: insideScroll })}
    >
      {Renderer && Renderer(props)}
      {!Renderer && children}
    </components.Menu>
  );
};

export default Menu;
