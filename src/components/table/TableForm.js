import React from "react";
import { TableListRows } from "./TableListRows";

export const TableForm = props => (
  <form onSubmit={props.handleSubmitAddRow}>
    {/* For test. TODO remove this */}
    <input type="text" value={props.name} onChange={props.handleChange} />
    {/* END for test */}

    <div className="container">
      <TableListRows rows={props.rows} keys={props.keys} classCss="table table-striped table-bordered" />
    </div>
  </form>
);


