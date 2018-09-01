import React from "react";
import PropTypes from "prop-types";
import { TableListRows } from "./TableListRows";
import { TableKey } from "./TableKey";
import { TableRow } from "./TableRow";

export const TableForm = props => (
  <form onSubmit={props.handleSubmitAddRow}>
    {/* For test. TODO remove this */}
    <input type="text" value={props.name} onChange={props.handleChange} />
    {/* END for test */}

    <div className="container">
      <table className="table table-striped table-bordered ">
        <thead>
          {/* <tr>
            <th>Id</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
            <th>Is actice</th>
          </tr> */}

          <TableKey keys={props.keys} />
          {props.keys.map(item => (
            <th>{item}</th>
          ))}
        </thead>
        <tbody>
          {props.persons.map(row => (
            <TableListRows rows={row} />
          ))}
          {props.persons.map(person => (
            <TableRow key={person.id} {...person} />
          ))}

        </tbody>
      </table>
    </div>
  </form>
);

TableForm.propTypes = {
  persons: PropTypes.array.isRequired
};
