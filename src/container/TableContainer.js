import React, { Component } from "react";
import { TableForm } from "../components/table/index";
import PropTypes from "prop-types";
import { getAll, getKeyFromJson, filterTable, createPerson } from "../lib/personService";

class TableContainer extends Component {
  static contextTypes = {
    route: PropTypes.string
  };

  state = {
    rowsFromDbJson: [],
    keysFromDbJson: [],
    sort: true,
    firstName: "",
    lastName: "",
    age: "",
    isActive: true,
    hobby: "",
    id:6
  };

  componentDidMount() {
    console.log("componentDidMount");
    getAll().then(person => this.setState({ rowsFromDbJson: person }));
    getKeyFromJson().then(key => this.setState({ keysFromDbJson: key }));
  }

  componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  handleSubmitAddRow = event => {
    event.preventDefault();
    console.log("handleSubmitAddRow", event.target);
    console.log("firstName", this.state.firstName);
    console.log("lastName", this.state.lastName);

console.log("id",6+1)
    const newPerson = {
      id: this.state.id + 1,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      age: this.state.age,
      isActive: true,
      hobby: this.state.hobby
    }
    createPerson(newPerson);
  };

  handleChange = event => {
    event.preventDefault();
    console.log("handleChange", event.target);
    console.log("handleChange name", event.target.name);
    console.log("handleChange value", event.target.value);

    if (event.target.name === "firstName") {
      this.setState({ firstName: event.target.value });
    } else if (event.target.name === "lastName") {
      this.setState({ lastName: event.target.value });
    }

  };


  render() {
    this.state.sort = !this.state.sort;
    const displayTable = filterTable(
      this.state.keysFromDbJson,
      this.state.rowsFromDbJson,
      this.context.route,
      this.state.sort
    );
    return (
      <div>
        <TableForm
          handleSubmitAddRow={this.handleSubmitAddRow}
          rows={displayTable}
          keys={this.state.keysFromDbJson}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default TableContainer;
