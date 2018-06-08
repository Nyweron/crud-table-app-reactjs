import React, { Component } from "react";
import { TableForm } from "../components/table/index";

class TableContainer extends Component {
  state = {
    id: "",
    name: "",
    price: ""
  };

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
          name={this.state.name}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default TableContainer;
