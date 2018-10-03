import React from "react";
import PropTypes from "prop-types";
import { Link } from '../router'

export const TableKey = props => {
  return (
    <tr>
      {props.keys.map(item=>(
        <th key={item}>
          <a onClick={props.sortColumn.bind(null,item)} href={"#"+item }>
            {item}
          </a>
        </th>
      ))}
      <th>Remove</th>
    </tr>
  );
};

TableKey.propTypes = {
  keys: PropTypes.array.isRequired
};