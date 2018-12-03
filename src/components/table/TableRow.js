import React from "react";
import PropTypes from "prop-types";
import TableEditPopup from "./TableEditPopup";

export const TableRow = props => {
  let rowsToReturn = props.rows.map(row => {
    if (row.id === 0) {
      return <tr style={{ display: "none" }} key={row.id} />;
    } else {
      return (
        <tr key={row.id}>
          {props.keys.map((key, i) => {
            if (row[key] !== undefined) {
              return <td key={row.id + "-" + i}>{row[key].toString()}</td>;
            }
            return <td key={row.id + "-" + i} />;
          })}
          <td className="delete-item">
            <a href="#/" onClick={() => props.handleRemove(row.id)}>
              X
            </a>
          </td>
          <td className="edit-item">
            {/* <a href="#/" onClick={() => props.handleEdit(row.id)}>
            edit
          </a> */}
            <TableEditPopup rowId={row.id} props={props} />
          </td>
        </tr>
      );
    }
  });

  return rowsToReturn;
};

TableRow.propTypes = {
  rows: PropTypes.array.isRequired,
  keys: PropTypes.array.isRequired
};
