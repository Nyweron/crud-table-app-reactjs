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
    id: 0,
    columnName: "",
    previousColumnName: ""
  };

  componentDidMount() {
    console.log("componentDidMount");
    getAll().then(person => this.setState({ rowsFromDbJson: person }));
    getKeyFromJson().then(key => this.setState({ keysFromDbJson: key }));
  }

  handleSubmitAddRow = event => {
    console.log("handleSubmitAddRow")
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
    console.log("handleChange")
    event.preventDefault();

    for (let index = 0; index < this.state.keysFromDbJson.length; index++) {
      if (event.target.name === this.state.keysFromDbJson[index].toString()) {
        this.setState({ [event.target.name]: event.target.value });
      }
    }
  };

  sortColumn = (temp) => {

    if(this.state.previousColumnName === temp){
    console.log("1")
      this.setState({columnName: temp});
      this.state.sort = !this.state.sort;
      this.setState({sort:  this.state.sort});
    }else{
      console.log("2")
      this.setState({columnName: temp});
      this.setState({previousColumnName: temp});
      this.state.sort = !this.state.sort;
      this.setState({sort:  this.state.sort});
    }
    console.log("sortColumn",temp)
    console.log("this.state.sort",this.state.sort)

  }

  render() {
    const displayTable = filterTable(
      this.state.keysFromDbJson,
      this.state.rowsFromDbJson,
      this.state.columnName,
      this.state.sort
     );
    return (
      <div>
        <TableForm
          handleSubmitAddRow={this.handleSubmitAddRow}
          rows={displayTable}
          keys={this.state.keysFromDbJson}
          handleChange={this.handleChange}
          sortColumn={this.sortColumn}
        />
      </div>
    );
  }
}

export default TableContainer;
