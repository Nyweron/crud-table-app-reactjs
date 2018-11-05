import React from "react";
import PropTypes from "prop-types";

export const TableRow = props => {
  let rowsToReturn = props.rows.map(row => {
    return (
      <tr key={row.id}>
        {props.keys.map((key, i) => {
          if (row[key] !== undefined) {
            return <td key={row.id + "-" + i}>{row[key].toString()}</td>;
          }
          return <td key={row.id + "-" + i} />;
        })}
        <td className="delete-item">
          <a href="#/" onClick={props.handleRemove.bind(null, row.id)}>
            X
          </a>
        </td>
        <td className="edit-item">
          <a href="#/" onClick={props.handleEdit.bind(null, row.id)}>
            edit
          </a>
        </td>
      </tr>
    );
  });

  return rowsToReturn;
};

TableRow.propTypes = {
  rows: PropTypes.array.isRequired,
  keys: PropTypes.array.isRequired
};
