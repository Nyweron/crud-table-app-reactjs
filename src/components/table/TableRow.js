import React from "react";
import PropTypes from "prop-types";

export const TableRow = props => {
  let rowsToReturn = props.rows.map(function(row) {
    return (
      <tr key={row.id}>
        {props.keys.map(function(key, i) {
          if (row[key] !== undefined) {
            return <td key={row.id + "-" + i}>{row[key].toString()}</td>;
          }
          return <td key={row.id + "-" + i}></td>
        })}
      </tr>
    );
  });

  return rowsToReturn;
};

TableRow.propTypes = {
  rows: PropTypes.array.isRequired,
  keys: PropTypes.array.isRequired
};
