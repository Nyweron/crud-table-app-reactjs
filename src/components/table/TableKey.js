import React from "react";
import PropTypes from "prop-types";

export const TableKey = props => {

  return (
    <tr>
      {props.keys.map(item=>(
        <th key={item}>
          <a onClick={props.handleChange} value={props.sort} href={"#"+item }>{item}</a>
        </th>
      ))}
    </tr>
  );
};

TableKey.propTypes = {
  keys: PropTypes.array.isRequired
};