import React, { forwardRef, useState } from "react";
import cx from "classnames";
import { SubIcon, VibeComponent, VibeComponentProps } from "../../../types";
import styles from "./TableHeaderCell.module.scss";
import Icon from "../../Icon/Icon";
import IconButton from "../../IconButton/IconButton";
import { Info } from "@vibe/icons";
import Text from "../../Text/Text";
import Flex from "../../Flex/Flex";
import { getAriaSort, getNextSortState, getSortIcon } from "../Table/tableHelpers";
import Tooltip from "../../Tooltip/Tooltip";
import { getTestId } from "../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../tests/constants";
import { getStyle } from "../../../helpers/typesciptCssModulesHelper";

export interface TableHeaderCellProps extends VibeComponentProps {
  title: string;
  icon?: SubIcon;
  infoContent?: string;
  sortState?: "asc" | "desc" | "none";
  onSortClicked?: (direction: "asc" | "desc" | "none") => void;
  sortButtonAriaLabel?: string;
  sticky?: boolean;
}

const TableHeaderCell: VibeComponent<TableHeaderCellProps, HTMLDivElement> = forwardRef(
  (
    {
      id,
      className,
      "data-testid": dataTestId,
      title,
      onSortClicked,
      infoContent,
      icon,
      sortState = "none",
      sortButtonAriaLabel = "Sort",
      sticky
    }: TableHeaderCellProps,
    ref
  ) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const ariaSort = getAriaSort(sortState);
    const isSortActive = onSortClicked && ariaSort !== "none";
    const shouldShowSortIcon = ariaSort !== "none" || isHovered;

    return (
      <div
        ref={ref}
        id={id}
        className={cx(
          styles.tableHeaderCell,
          { [styles.sortActive]: isSortActive, [styles.sticky]: sticky },
          className
        )}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.TABLE_HEADER_CELL, id)}
        role="columnheader"
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        aria-sort={onSortClicked ? ariaSort : undefined}
        tabIndex={onSortClicked ? 0 : undefined}
      >
        <Flex direction="row" align="center" className={styles.tableHeaderCellContent} gap="xs">
          {icon && <Icon icon={icon} className={styles.icon} />}
          {
            <Text type="text2" weight="medium" color="secondary">
              {title}
            </Text>
          }
          {infoContent && (
            <Tooltip content={infoContent} referenceWrapperClassName={styles.infoTooltip}>
              <Icon icon={Info} iconLabel={infoContent} />
            </Tooltip>
          )}
        </Flex>
        {onSortClicked && (
          <Flex direction="row" align="center" className={styles.tableHeaderCellSort}>
            <IconButton
              icon={getSortIcon(sortState)}
              kind="tertiary"
              size="xs"
              ariaLabel={sortButtonAriaLabel}
              aria-hidden={!shouldShowSortIcon}
              className={cx(styles.sort, getStyle(styles, sortState), {
                [styles.show]: shouldShowSortIcon
              })}
              onClick={() => onSortClicked(getNextSortState(sortState))}
            />
          </Flex>
        )}
      </div>
    );
  }
);

export default TableHeaderCell;
