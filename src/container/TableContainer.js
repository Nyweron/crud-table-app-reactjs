import React, { Component } from "react";
import { TableForm } from "../components/table/index";
import { getAll, getKeyFromJson } from "../lib/personService";

class TableContainer extends Component {
  state = {
    rowsFromDbJson: [],
    keysFromDbJson: [],
    sort:false
  };

  componentDidMount() {
    console.log("componentDidMount");
    getAll().then(person => this.setState({ rowsFromDbJson: person }));
    getKeyFromJson().then(key => this.setState({ keysFromDbJson: key }));
  }

  handleSubmitAddRow = event => {
    event.preventDefault();
    console.log("handleSubmitAddRow");
  };

  handleChange = event => {
    console.log(event.target);
   // console.log(event.target.value);
    this.setState({ sort: true });
    console.log("sort",this.sort);
  };

  render() {
    return (
      <div>
        <TableForm
          handleSubmitAddRow={this.handleSubmitAddRow}
          rows={this.state.rowsFromDbJson}
          keys={this.state.keysFromDbJson}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default TableContainer;
