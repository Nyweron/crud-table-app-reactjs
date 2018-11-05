import React from "react";
import PropTypes from "prop-types";

export const TableHead = props => {
  if (props.keys !== null) {
    return (
      <tr>
        {props.keys.map(item => (
          <th key={item}>
            <a onClick={props.sortColumn.bind(null, item)} href={"#" + item}>
              {item}
            </a>
          </th>
        ))}
        <th>Remove</th>
        <th>Edit</th>
      </tr>
    );
  }
};

TableHead.propTypes = {
  keys: PropTypes.array.isRequired
};
