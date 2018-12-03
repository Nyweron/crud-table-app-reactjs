import React, { Component } from "react";
import { TableForm } from "../components/table/index";
import { TableListRows } from "../components/table/TableListRows";
import PropTypes from "prop-types";
import {
  getAll,
  getKeyFromJson,
  filterTable,
  createPerson,
  deleteRow,
  updateRow
} from "../lib/personService";
import {
  removeRowById,
  updateByObjectId,
  sortIds,
  generateNewId
} from "../lib/personHelpers";

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
    previousColumnName: "",
    text: ""
  };

  componentDidMount() {
    //console.log("componentDidMount");
    getAll().then(rows => {
      this.setState({ rowsFromDbJson: rows });
      const keys = getKeyFromJson(rows);
      if (keys !== null) {
        this.setState({ keysFromDbJson: keys });
      }
    });
  }

  handleSubmitAddRow = event => {
    console.log("handleSubmitAddRow");
    event.preventDefault();

    if (
      this.state.firstName === null ||
      this.state.firstName === undefined ||
      this.state.firstName === ""
    ) {
      this.showTempMessage("Firstname is required");
      return;
    }

    const allRows = this.state.rowsFromDbJson;
    const sortedIds = sortIds(allRows);
    if (sortedIds.length === 0) {
      sortedIds.push("");
    }
    const newId = generateNewId(sortedIds);
    const newPerson = {
      id: newId,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      age: this.state.age,
      isActive: true,
      hobby: this.state.hobby
    };

    createPerson(newPerson).then(
      () => this.showTempMessage("person created"),
      this.setState({
        rowsFromDbJson: [...this.state.rowsFromDbJson, newPerson]
      })
    );
  };

  handleChange = event => {
    console.log("handleChange");
    event.preventDefault();
    if (this.state.keysFromDbJson.length === 0) {
      this.setState({
        keysFromDbJson: this.state.keysFromDbJson.push(event.target.name)
      });
    }
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

    deleteRow(id).then(
      () => this.showTempMessage("row deleted"),
      this.setState({ rowsFromDbJson: newListWithoutRemovedItem })
    );
  };

  handleEdit2 = editObj => {
    console.log("handleEdit2", editObj);
    let listOfRows = this.state.rowsFromDbJson;

    const editExistRow = {
      id: editObj.idEdit,
      firstName: editObj.firstNameEdit,
      lastName: editObj.lastNameEdit,
      age: editObj.ageEdit,
      isActive: true,
      hobby: editObj.hobbyEdit
    };

    const newUpdatedRowList = updateByObjectId(listOfRows, editExistRow);

    updateRow(editExistRow).then(
      () => this.showTempMessage("row updated"),
      this.setState({
        rowsFromDbJson: newUpdatedRowList
      })
    );
  };

  showTempMessage = msg => {
    this.setState({ message: msg });
    setTimeout(() => {
      this.setState({ message: "" });
    }, 2000);
  };

  sortColumn = currentColumnName => {
    if (this.state.rowsFromDbJson.length == 2) {
      return;
    }
    if (this.state.previousColumnName === currentColumnName) {
      this.setState({ columnName: currentColumnName });
      this.setState(prevState => ({
        sort: !prevState.sort
      }));
    } else {
      this.setState({ columnName: currentColumnName });
      this.setState({ previousColumnName: currentColumnName });
      this.setState(prevState => ({
        sort: !prevState.sort
      }));
    }
  };

  render() {
    if (
      this.state.keysFromDbJson === null ||
      this.state.keysFromDbJson.length === 0
    ) {
      return (
        <TableForm
          handleSubmitAddRow={this.handleSubmitAddRow}
          handleChange={this.handleChange}
          personData={this.state}
        />
      );
    }

    const displayTable = filterTable(
      this.state.keysFromDbJson,
      this.state.rowsFromDbJson,
      this.state.columnName,
      this.state.sort
    );

    return (
      <div className="container">
        <TableForm
          handleSubmitAddRow={this.handleSubmitAddRow}
          handleChange={this.handleChange}
          personData={this.state}
        />
        <TableListRows
          rows={displayTable}
          keys={this.state.keysFromDbJson}
          classCss="table table-striped table-bordered"
          handleChange={this.handleChange}
          sortColumn={this.sortColumn}
          handleRemove={this.handleRemove}
          handleEdit={this.handleEdit}
          handleEdit2={this.handleEdit2}
        />
        {this.state.message && (
          <span className="success">{this.state.message}</span>
        )}
      </div>
    );
  }
  // }
}

export default TableContainer;
