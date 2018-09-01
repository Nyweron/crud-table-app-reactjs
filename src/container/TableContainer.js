import React, { Component } from "react";
import { TableForm } from "../components/table/index";
import { getAll, getKeyFromJson } from "../lib/personService";

class TableContainer extends Component {
  state = {
    persons: [],
    keysFromDbJson: []
  };

  componentDidMount() {
    console.log("componentDidMount");
    getAll().then(person => this.setState({ persons: person }));
    getKeyFromJson().then(key => this.setState({ keysFromDbJson: key }));
  }

  handleSubmitAddRow = event => {
    event.preventDefault();
    console.log("handleSubmitAddRow");
    console.log("this.state", this.state);
  };

  handleChange = event => {
    console.log(event.target.value);
    this.setState({ name: event.target.value });
  };

  render() {
    console.log("this.state.keysFromDbJson", this.state.keysFromDbJson);
    return (
      <div>
        <TableForm
          handleSubmitAddRow={this.handleSubmitAddRow}
          rows={this.state.persons}
          keys={this.state.keysFromDbJson}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default TableContainer;
