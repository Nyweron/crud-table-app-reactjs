import React, { Component } from "react";
import { TableForm } from "../components/table/index";
import PropTypes from "prop-types";
import {
  getAll,
  getKeyFromJson,
  filterTable,
  createPerson
} from "../lib/personService";

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
    id: 0
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

    const allRows = this.state.rowsFromDbJson;
    const newId = allRows[allRows.length - 1].id + 1;
    const newPerson = {
      id: newId,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      age: this.state.age,
      isActive: true,
      hobby: this.state.hobby
    };

    createPerson(newPerson);
    this.setState({
      rowsFromDbJson: [...this.state.rowsFromDbJson, newPerson]
    });
  };

  handleChange = event => {
    event.preventDefault();

    for (let index = 0; index < this.state.keysFromDbJson.length; index++) {
      if (event.target.name === this.state.keysFromDbJson[index].toString()) {
        this.setState({ [event.target.name]: event.target.value });
      }
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
