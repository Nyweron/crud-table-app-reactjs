import React, { Component } from "react";
import { TableListRows } from "../components/table/TableListRows";
import TableAdd from "../components/table/TableAdd";
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
  state = {
    rowsFromDbJson: [],
    keysFromDbJson: [],
    sort: true,
    columnName: "",
    previousColumnName: "",
    add: false
  };

  componentDidMount() {
    getAll().then(rows => {
      this.setState({ rowsFromDbJson: rows });
      const keys = getKeyFromJson(rows);
      if (keys !== null) {
        this.setState({ keysFromDbJson: keys });
      }
    });
  }

  handleSubmitAddRow = addObj => {
    if (
      addObj.firstName === null ||
      addObj.firstName === undefined ||
      addObj.firstName === ""
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
      firstName: addObj.firstName,
      lastName: addObj.lastName,
      age: addObj.age,
      isActive: true,
      hobby: addObj.hobby
    };

    createPerson(newPerson).then(
      () => this.showTempMessage("person created"),
      this.setState({
        rowsFromDbJson: [...this.state.rowsFromDbJson, newPerson]
      })
    );
  };

  handleChange = event => {
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
    let listOfRows = this.state.rowsFromDbJson;
    const newListWithoutRemovedItem = removeRowById(listOfRows, id);

    deleteRow(id).then(
      () => this.showTempMessage("row deleted"),
      this.setState({ rowsFromDbJson: newListWithoutRemovedItem })
    );
  };

  handleEdit = editObj => {
    let listOfRows = this.state.rowsFromDbJson;

    const editExistRow = {
      id: editObj.id,
      firstName: editObj.firstName,
      lastName: editObj.lastName,
      age: editObj.age,
      isActive: true,
      hobby: editObj.hobby
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
    /* We use 2 because in list always will be empty row with id=0 and new row which we will create. */
    if (this.state.rowsFromDbJson.length === 2) {
      return;
    }
    if (this.state.previousColumnName === currentColumnName) {
      this.setState({ columnName: currentColumnName });
      this.setState(prevState => ({
        sort: !prevState.sort
      }));
    } else {
      this.setState({
        columnName: currentColumnName,
        previousColumnName: currentColumnName
      });
      this.setState(prevState => ({
        sort: !prevState.sort
      }));
    }
  };

  negationAdd = () => {
    this.setState({ add: !this.state.add });
  };

  render() {
    const displayTable = filterTable(
      this.state.keysFromDbJson,
      this.state.rowsFromDbJson,
      this.state.columnName,
      this.state.sort
    );

    return (
      <div className="container">
        <div className="row">
          <button className="btn" onClick={this.negationAdd}>
            Add row
          </button>
        </div>

        <TableAdd
          show={this.state.add}
          handleSubmitAddRow={this.handleSubmitAddRow}
          handleChange={this.handleChange}
          negationAdd={this.negationAdd}
        />
        <div className="row">
          <TableListRows
            rows={displayTable}
            keys={this.state.keysFromDbJson}
            classCss="table table-striped table-bordered"
            handleChange={this.handleChange}
            sortColumn={this.sortColumn}
            handleRemove={this.handleRemove}
            handleEdit={this.handleEdit}
          />
          {this.state.message && (
            <span className="success">{this.state.message}</span>
          )}
        </div>
      </div>
    );
  }
}

export default TableContainer;
