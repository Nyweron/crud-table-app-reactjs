import React from "react";
import PropTypes from "prop-types";

export const TableHead = props => {
  if (props.keys === null) {
    return null;
  }
  return (
    <tr style={{ color: "blue", cursor: "default" }}>
      {props.keys.map(item => (
        <th key={item}>
          <span onClick={() => props.sortColumn(item)}>{item}</span>
        </th>
      ))}
      <th>Remove</th>
      <th>Edit</th>
    </tr>
  );
};

TableHead.propTypes = {
  keys: PropTypes.array.isRequired
};
