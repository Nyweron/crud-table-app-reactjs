import React from "react";
import PropTypes from "prop-types";

export const TableKey = props => {
  return (
    <tr>
      {props.keys.map(item=>(
        <th key={item}>{item}</th>
      ))}
    </tr>
  );
};

TableKey.propTypes = {
  keys: PropTypes.array.isRequired
};