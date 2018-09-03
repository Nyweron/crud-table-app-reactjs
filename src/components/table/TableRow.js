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
  var key = ["id", "firstName", "age", "lastName", "isActive"];
  var rows = [
    {
      "id": 1,
      "firstName": "Homer",
      "lastName": "Simpson",
      "age": 45,
      "isActive": true
    },
    {
      "id": 2,
      "firstName": "Merge",
      "lastName": "Simpson",
      "age": 42,
      "isActive": true
    },
    {
      "id": 3,
      "firstName": "Bart",
      "lastName": "Simpson",
      "age": 15,
      "isActive": true
    },
    {
      "id": 4,
      "firstName": "Lisa",
      "lastName": "Simpson",
      "age": 12,
      "isActive": false
    },
    {
      "id": 5,
      "firstName": "Maggie",
      "lastName": "Simpson",
      "age": 1,
      "isActive": true
    }
  ];
  console.log("keys",keys)
  console.log("props.rows",props.rows)
  console.log("props.keys",props.keys)

  const keyLength = props.keys.length;

  for(let i = 0; i < keyLength; i++){
    rowsToReturn.push('<td>'); //<- this part should have <td>
    for(let j = 0; j < keyLength; j++){
      console.log("test",rows[i][key[j]]);
      rowsToReturn.push(<th>{rows[i][key[j]].toString()}</th>)
      if(j==4){
        rowsToReturn.push(`\n`)
        rowsToReturn.push('</tr>') //<- this part should cloase </td>
      }
    }
  }
console.log("rowsToReturn", rowsToReturn)
 // return <tr>{rowsToReturn}</tr>
  return rowsToReturn
};

TableRow.propTypes = {
  id: PropTypes.number.isRequired
};