import React from "react";
import PropTypes from "prop-types";

export const TableRow = props => {
  // return (
  //   <tr>
  //     <th>{props.id}</th>
  //     <th>{props.firstName}</th>
  //     <th>{props.lastName}</th>
  //     <th>{props.age}</th>
  //     {/* <th>{props.isActive.toString()}</th> */}

  //   </tr>
  // );

  let rowsToReturn = [];
  var keys=props.keys;
  console.log("keys",keys)
  console.log("props.rows",props.rows)
  console.log("props.keys",props.keys)

  for(let i = 0; i < 5; i++){
    for(let j = 0; j < 5; j++){
      console.log("test",props.rows[i][keys[j]]);
     // rowsToReturn.push(<th>{props.rows[i][keys[j]]}</th>)
    }
  }

  return <tr>{rowsToReturn}</tr>
};

TableRow.propTypes = {
  id: PropTypes.number.isRequired
};