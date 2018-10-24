import React, { Component } from "react";
import { TableForm } from "../components/table/index";
import PropTypes from "prop-types";
import {
  getAll,
  getKeyFromJson,
  filterTable,
  createPerson,
  deleteRow
  //,
  //updateRow
} from "../lib/personService";
import {
  removeRowById,
  findById,
  updateByObjectId
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
    editing: false,
    text: ""
  };

  componentDidMount() {
    console.log("componentDidMount");
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
    allRows.sort(function(a, b) {
      return a.id - b.id || a.name.localeCompare(b.name);
    });
    const newId = allRows[allRows.length - 1].id + 1;
    const newPerson = {
      id: newId,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      age: this.state.age,
      isActive: true,
      hobby: this.state.hobby
    };

    createPerson(newPerson).then(() => this.showTempMessage("person created"));
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

  handleEdit = id => {
    console.log("handleEdit id", id);
    let listOfRows = this.state.rowsFromDbJson;
    let row = findById(listOfRows, id);
    // //row.isComplete = row.isComplete ? false : true;
    console.log("handleEdit row", row);
    // const newUpdatedRowsList = updateByObjectId(listOfRows, row);
    // console.log("listOfRows", listOfRows);
    // console.log("newUpdatedRowsList", newUpdatedRowsList);
    //this.setState({ rowsFromDbJson: newUpdatedRowsList });
    //updateRow(row).then(() => this.showTempMessage("row updated"));

    this.setState({ editing: true });
  };

  handleEdit2 = id => {
    console.log("handleEdit2 id", id);
    //  let listOfRows = this.state.rowsFromDbJson;
    //  let row = findById(listOfRows, id);
    // //row.isComplete = row.isComplete ? false : true;
    // console.log("handleEdit row", row);
    // const newUpdatedRowsList = updateByObjectId(listOfRows, row);
    // console.log("listOfRows", listOfRows);
    // console.log("newUpdatedRowsList", newUpdatedRowsList);
    //this.setState({ rowsFromDbJson: newUpdatedRowsList });
    //updateRow(row).then(() => this.showTempMessage("row updated"));
    this.setState({ editing: false });
  };

  showTempMessage = msg => {
    console.log("showTempMessage");
    this.setState({ message: msg });
    setTimeout(() => {
      this.setState({ message: "" });
    }, 2000);
  };

  sortColumn = currentColumnName => {
    //console.log("sortColumn", currentColumnName);
    if (this.state.previousColumnName === currentColumnName) {
      //console.log("1");
      this.setState({ columnName: currentColumnName });
      this.setState({ sort: !this.state.sort });
    } else {
      //console.log("2");
      this.setState({ columnName: currentColumnName });
      this.setState({ previousColumnName: currentColumnName });
      this.setState({ sort: !this.state.sort });
    }
    //console.log("sortColumn", currentColumnName);
    //console.log("this.state.sort", this.state.sort);
  };

  edit = x => {
    console.log("x", x);
    this.setState({ editing: true });
  };
  save = x => {
    console.log("this.refs.newText", this.refs.newText.text);
    console.log("x", x.value);
    // if (this.refs.newText !== undefined) {
    var val = this.refs.newText.value;

    this.setState({
      // ** Update "text" property with new value (this fires render() again)
      text: val,
      editing: false
    });
    // }
  };
  // renderNormal() {
  //   // ** Render "state.text" inside your <p> whether its empty or not...
  //   return (
  //     <div>
  //       <p>{this.state.text}</p>
  //       <button onClick={this.edit}>Edit</button>
  //     </div>
  //   );
  // }
  renderForm() {
    return (
      <div>
        <textarea ref="newText" defaultValue="Edit me" />

        <div className="form-group row">
          <div className="col-xs-2">
            <input
              type="text"
              className="form-control"
              id="firstNameInput"
              placeholder="firstName"
              name="firstName"
            />
          </div>
          <div className="col-xs-2">
            <input
              type="text"
              className="form-control"
              placeholder="lastName"
              name="lastName"
            />
          </div>
          <div className="col-xs-2">
            <input
              type="number"
              className="form-control"
              placeholder="age"
              name="age"
              min="0"
              max="100"
            />
          </div>
          <div className="col-xs-2">
            <input
              type="text"
              className="form-control"
              placeholder="hobby"
              name="hobby"
            />
          </div>
          {/* <input type="submit" value="Submit" /> */}
          <button onClick={this.handleEdit2}>Save</button>
        </div>
      </div>
    );
  }

  render() {
    if (
      this.state.keysFromDbJson === null ||
      this.state.keysFromDbJson.length === 0
    ) {
      return <div />;
    }

    const displayTable = filterTable(
      this.state.keysFromDbJson,
      this.state.rowsFromDbJson,
      this.state.columnName,
      this.state.sort
    );

    if (this.state.editing) {
      return this.renderForm();
    } else {
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
            handleEdit={this.handleEdit}
          />
        </div>
      );
    }
  }
}

export default TableContainer;
