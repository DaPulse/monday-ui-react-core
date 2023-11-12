import cx from "classnames";
import React from "react";
import { components } from "react-select";
import styles from "./menu.module.scss";

const Menu = ({ children, Renderer, selectProps, dropdownMenuWrapperClassName, ...props }) => {
  const rendererProps = { children, selectProps, ...props };
  // Temporary fix, which disables animation :
  // - when using menuPortalTarget or popupsContainerSelector there are issues that animation goes above the select preventing from tapping it (pr #1543)
  // - when using menuPosition="fixed" (e.g. inside of Modal) not whole list is visible for scroll cause of it (pr #1738)
  const withoutAnimation =
    !!selectProps?.menuPortalTarget || !!selectProps.popupsContainerSelector || selectProps?.menuPosition === "fixed";
  return (
    <components.Menu
      {...props}
      className={cx(
        styles.dropdownMenuWrapper,
        {
          [styles.withoutAnimation]: withoutAnimation
        },
        dropdownMenuWrapperClassName
      )}
    >
      {Renderer && Renderer(rendererProps)}
      {!Renderer && children}
    </components.Menu>
  );
};

export default Menu;
