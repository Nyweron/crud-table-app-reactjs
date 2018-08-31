import React from "react";
import PropTypes from "prop-types";
import { TableListRows } from "./TableListRows";

export const TableForm = props => (
  <form onSubmit={props.handleSubmitAddRow}>
      {/* For test. TODO remove this */}
      <input type="text" value={props.name} onChange={props.handleChange} />
      {/* END for test */}

    <div className="container">
      <table className="table table-striped table-bordered ">
        <thead>
          <tr>
            <th>Id</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
            <th>Is actice</th>
          </tr>
        </thead>
        <tbody>
         {props.persons.map(row=>(
            <TableListRows rows={row}/>
          ))}
          <tr>
            <td>2</td>
            <td>John</td>
            <td>Doe</td>
            <td>27</td>
            <td>true</td>
          </tr>
        </tbody>
      </table>
    </div>
  </form>
);

TableForm.propTypes = {
  persons: PropTypes.array.isRequired
};