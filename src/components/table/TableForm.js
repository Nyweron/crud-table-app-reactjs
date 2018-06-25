import React from "react";

export const TableForm = props => (
  <form onSubmit={props.handleSubmitAddRow}>
    <input type="text" value={props.name} onChange={props.handleChange} />

    <div className="container">
      <h2>Striped Rows</h2>
      <p>The .table-striped className adds zebra-stripes to a table:</p>
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
          <tr>
            <td>1</td>
            <td>John</td>
            <td>Doe</td>
            <td>27</td>
            <td>true</td>
          </tr>
          <tr>
            <td>2</td>
            <td>John</td>
            <td>Doe</td>
            <td>27</td>
            <td>true</td>
          </tr>
          <tr>
            <td>3</td>
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
