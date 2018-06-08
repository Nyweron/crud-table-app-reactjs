import React from "react";
import "./table.css";

export const TableForm = props => (
  <form onSubmit={props.handleSubmitAddRow}>
    <input type="text" value={props.name} onChange={props.handleChange} />
    <div className="container">
      <div id="table">
        <h2>Striped Rows</h2>
        <p>The .table-striped className adds zebra-stripes to a table:</p>
        <table className="table table-striped table-bordered ">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John</td>
              <td>Doe</td>
              <td>john@example.com</td>
            </tr>
            <tr>
              <td>Mary</td>
              <td>Moe</td>
              <td>mary@example.com</td>
            </tr>
            <tr>
              <td>July</td>
              <td>Dooley</td>
              <td>july@example.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </form>
);
