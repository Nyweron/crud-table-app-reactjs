import React from "react";
import PropTypes from "prop-types";

export const TableRow = props => {
  console.log("TableRow",props)
  return (
<div>
{props.rows.map(row=>(
    <tr>
        <th>{row.id}</th>
         <th>{row.firstName}</th>
          <th>{row.lastName}</th>
         <th>{row.age}</th>
        <th>{row.isActive.toString()}</th>
    </tr>
        ))}
    </div>
  );
};

TableRow.propTypes = {
  id: PropTypes.number.isRequired
};