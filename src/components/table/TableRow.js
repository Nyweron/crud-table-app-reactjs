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

  const keyLength = props.keys.length;

  var x = rows.map(function(row) {
        return(
          <tr>
            {keys.map(function (column){
              return <td>{row[column].toString()}</td>;
            })}
          </tr>
  )});

  console.log("x",x)

  return x

};

TableRow.propTypes = {
  id: PropTypes.number.isRequired
};