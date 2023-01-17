import React, { forwardRef, useRef } from "react";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import Icon from "../Icon/Icon";
import { ListItemIconMargin } from "./ListItemIconConstants";
import { SubIcon, VibeComponentProps } from "../../types";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import styles from "./ListItemIcon.module.scss";

export interface ListItemIconProps extends VibeComponentProps {
  icon?: SubIcon;
  /**
   * the position of the icon inside the list item (this sets the margins of the icon)
   */
  margin?: ListItemIconMargin;
}

const ListItemIcon: React.FC<ListItemIconProps> = forwardRef(
  ({ className, id, icon, margin = ListItemIconMargin.START, "data-testid": dataTestId }, ref) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    return (
      <div
        ref={mergedRef}
        className={cx(styles.listItemIcon, "list-item-icon", className, styles[margin], `list-item-icon--${margin}`)}
        aria-hidden="true"
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.LIST_ITEM_ICON, id)}
      >
        <Icon icon={icon} clickable={false} ignoreFocusStyle iconSize={20} />
      </div>
    );
  }
);

Object.assign(ListItemIcon, {
  margin: ListItemIconMargin
});

export default ListItemIcon;
