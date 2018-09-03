import React from "react";
import PropTypes from "prop-types";

export const TableRow = props => {
  let rowsToReturn = props.rows.map(function(row) {
    return(
      <tr>
        {props.keys.map(function (key){
          return <td>{row[key].toString()}</td>;
        })}
      </tr>
  );});

  return rowsToReturn
};

TableRow.propTypes = {
  id: PropTypes.number.isRequired
};