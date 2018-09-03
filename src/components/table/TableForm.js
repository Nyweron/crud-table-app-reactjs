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
      <TableListRows rows={props.rows} keys={props.keys} classCss="table table-striped table-bordered" />
    </div>
  </form>
);

TableForm.propTypes = {
 // persons: PropTypes.array.isRequired
};
