import React, { Component } from "react";
import { TableForm } from "../components/table/index";
import {getAll} from "../lib/personService";

class TableContainer extends Component {
  state = {
    id: "",
    name: "",
    price: "",
    persons: []
  };

  componentDidMount() {
    console.log("componentDidMount");
    getAll().then(person => this.setState({ persons: person }));
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
    return (
      <div>
        <TableForm
          handleSubmitAddRow={this.handleSubmitAddRow}
          persons={this.state.persons}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default TableContainer;
