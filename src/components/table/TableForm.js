import React from "react";
import { TableListRows } from "./TableListRows";

export const TableForm = props => (
  <form onSubmit={props.handleSubmitAddRow}>

    <div className="container">
        <input name="firstName" value={props.firstName} onChange={props.handleChange}></input>
         <input name="lastName" value={props.lastName} onChange={props.handleChange}></input>
         <input name="lastName" value={props.age} onChange={props.handleChange}></input>
         <input name="lastName" value={props.hobby} onChange={props.handleChange}></input>
         <input type="submit" value="Submit" />
      <TableListRows
        rows={props.rows}
        keys={props.keys}
        classCss="table table-striped table-bordered"
        handleChange={props.handleChange}
      />
    </div>
  </form>
);