import React from "react";
import PropTypes from "prop-types";

export const TableRow = props => {
  return (
    <tr>
      <th>{props.id}</th>
      <th>{props.firstName}</th>
      <th>{props.lastName}</th>
      <th>{props.age}</th>
      <th>{props.isActive.toString()}</th>
    </tr>
  );
};

TableRow.propTypes = {
  id: PropTypes.number.isRequired
};