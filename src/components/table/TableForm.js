import React from "react";
import { TableListRows } from "./TableListRows";

export const TableForm = props => (
  <form onSubmit={props.handleSubmitAddRow}>
    <div className="container">
      <TableListRows
        rows={props.rows}
        keys={props.keys}
        classCss="table table-striped table-bordered"
        handleChange={props.handleChange}
      />
    </div>
  </form>
);