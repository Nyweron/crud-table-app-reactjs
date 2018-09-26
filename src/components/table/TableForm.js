import React from "react";
import { TableListRows } from "./TableListRows";

export const TableForm = props => (
  <form onSubmit={props.handleSubmitAddRow}>

    <div className="container">
      <div className="form-group row">
        <div className="col-xs-2">
          <input type="text" className="form-control" id="firstNameInput" placeholder="firstName" name="firstName" value={props.firstName} onChange={props.handleChange}></input>
        </div>
        <div className="col-xs-2">
          <input type="text" className="form-control" placeholder="lastName" name="lastName" value={props.lastName} onChange={props.handleChange}></input>
        </div>
        <div className="col-xs-2">
          <input type="number" className="form-control" placeholder="age" name="age" value={props.age} onChange={props.handleChange} min="0" max="100"></input>
        </div>
        <div className="col-xs-2">
          <input type="text" className="form-control" placeholder="hobby" name="hobby" value={props.hobby} onChange={props.handleChange}></input>
        </div>
        <input type="submit" value="Submit" />
      </div>
      <TableListRows
        rows={props.rows}
        keys={props.keys}
        classCss="table table-striped table-bordered"
        handleChange={props.handleChange}
        sortColumn={props.sortColumn}
      />
    </div>
  </form >
);