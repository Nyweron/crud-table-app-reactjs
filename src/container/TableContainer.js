import React, { Component } from "react";
import { TableForm } from "../components/table/index";
import PropTypes from "prop-types";
import {
  getAll,
  getKeyFromJson,
  filterTable,
  createPerson,
  deleteRow
} from "../lib/personService";
import { removeRowById } from "../lib/personHelpers";

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
    id: 0,
    columnName: "",
    previousColumnName: ""
  };

  componentDidMount() {
    console.log("componentDidMount");
    getAll().then(rows => {
      this.setState({ rowsFromDbJson: rows })
      const keys = getKeyFromJson(rows);
      if(keys !== null){
        this.setState({  keysFromDbJson: keys })
      }
    })
  }

  handleSubmitAddRow = event => {
    console.log("handleSubmitAddRow");
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
    console.log("createPerson");
    this.setState({
      rowsFromDbJson: [...this.state.rowsFromDbJson, newPerson]
    });
  };

  handleChange = event => {
    console.log("handleChange");
    event.preventDefault();

    for (let index = 0; index < this.state.keysFromDbJson.length; index++) {
      if (event.target.name === this.state.keysFromDbJson[index].toString()) {
        this.setState({ [event.target.name]: event.target.value });
      }
    }
  };

  handleRemove = id => {
    console.log("handleRemove");
    let listOfRows = this.state.rowsFromDbJson;
    const newListWithoutRemovedItem = removeRowById(listOfRows, id);
    this.setState({ rowsFromDbJson: newListWithoutRemovedItem });
    deleteRow(id).then(() => this.showTempMessage("row deleted"));
  };

  showTempMessage = msg => {
    console.log("showTempMessage");
    this.setState({ message: msg });
    setTimeout(() => {
      this.setState({ message: "" });
    }, 2000);
  };

  sortColumn = currentColumnName => {
    console.log("sortColumn", currentColumnName);
    if (this.state.previousColumnName === currentColumnName) {
      console.log("1");
      this.setState({ columnName: currentColumnName });
      this.setState({ sort: !this.state.sort });
    } else {
      console.log("2");
      this.setState({ columnName: currentColumnName });
      this.setState({ previousColumnName: currentColumnName });
      this.setState({ sort: !this.state.sort });
    }
    console.log("sortColumn", currentColumnName);
    console.log("this.state.sort", this.state.sort);
  };

  render() {
    if(this.state.keysFromDbJson === null || this.state.keysFromDbJson.length === 0){
      return (<div></div>);
    }
    const displayTable = filterTable(
      this.state.keysFromDbJson,
      this.state.rowsFromDbJson,
      this.state.columnName,
      this.state.sort
    );
    return (
      <div>
        {this.state.message && (
          <span className="success">{this.state.message}</span>
        )}
        <TableForm
          handleSubmitAddRow={this.handleSubmitAddRow}
          rows={displayTable}
          keys={this.state.keysFromDbJson}
          handleChange={this.handleChange}
          sortColumn={this.sortColumn}
          handleRemove={this.handleRemove}
        />
      </div>
    );
  }
}

export default TableContainer;
