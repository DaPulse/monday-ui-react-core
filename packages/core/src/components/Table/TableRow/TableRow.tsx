import React, { forwardRef, useCallback, useRef } from "react";
import { VibeComponent, VibeComponentProps } from "../../../types";
import { TableCellProps } from "../TableCell/TableCell";
import useMergeRef from "../../../hooks/useMergeRef";
import { getTestId } from "../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../tests/constants";
import cx from "classnames";
import styles from "./TableRow.module.scss";
import { useTableRowMenu } from "../context/TableRowMenuContext/TableRowMenuContext";

export interface TableRowProps extends VibeComponentProps {
  /**
   * Does the row have a highlighted style
   */
  highlighted?: boolean;
  children?: React.ReactElement<TableCellProps> | React.ReactElement<TableCellProps>[];
  style?: React.CSSProperties;
}

const TableRow: VibeComponent<TableRowProps, HTMLDivElement> = forwardRef(
  ({ highlighted, children, style, id, className, "data-testid": dataTestId }: TableRowProps, ref) => {
    const componentRef = useRef<HTMLDivElement>(null);
    const mergedRef = useMergeRef(componentRef, ref);
    const { onMouseOverRow, onMouseLeaveRow } = useTableRowMenu();

    const onMouseOver = useCallback(() => {
      onMouseOverRow(componentRef);
    }, [onMouseOverRow]);

    return (
      <div
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.TABLE_ROW, id)}
        ref={mergedRef}
        role="row"
        aria-selected={highlighted || false}
        className={cx(styles.tableRow, className)}
        style={style}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeaveRow}
        tabIndex={-1}
      >
        {children}
      </div>
    );
  }
);

export default TableRow;
