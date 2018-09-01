import React from "react";
import PropTypes from "prop-types";

export const TableRow = props => {
  let rowsToReturn = [];
  Object.keys(props).forEach(function(key,index) {
    if(props[key] == true || props[key] == false){
      rowsToReturn.push(<th>{props[key].toString()}</th>);
    }else{
      rowsToReturn.push(<th>{props[key]}</th>);
    }
  });

  return <tr>{rowsToReturn}</tr>
};

TableRow.propTypes = {
  id: PropTypes.number.isRequired
};