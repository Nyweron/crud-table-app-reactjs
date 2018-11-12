import React, { Component } from "react";
import { TableForm } from "../components/table/index";
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
  findById,
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
    editing: false,
    text: "",
    tempIdEdit: -1,
    firstNameRef: React.createRef(),
    lastNameRef: React.createRef(),
    ageRef: React.createRef(),
    hobbyRef: React.createRef()
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
    console.log("createPerson");
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

    deleteRow(id).then(
      () => this.showTempMessage("row deleted"),
      this.setState({ rowsFromDbJson: newListWithoutRemovedItem })
    );
  };

  handleEdit = id => {
    console.log("handleEdit id", id);
    this.setState({ tempIdEdit: id });
    // let listOfRows = this.state.rowsFromDbJson;
    //let row = findById(listOfRows, id);
    // //row.isComplete = row.isComplete ? false : true;
    //console.log("handleEdit row", row);
    // const newUpdatedRowsList = updateByObjectId(listOfRows, row);
    // console.log("listOfRows", listOfRows);
    // console.log("newUpdatedRowsList", newUpdatedRowsList);
    //this.setState({ rowsFromDbJson: newUpdatedRowsList });
    //updateRow(row).then(() => this.showTempMessage("row updated"));

    this.setState({ editing: true });
  };

  handleEdit2 = () => {
    console.log("handleEdit2");
    let listOfRows = this.state.rowsFromDbJson;
    let row = findById(listOfRows, this.state.tempIdEdit);

    const editExistRow = {
      id: row.id,
      firstName: this.state.firstNameRef.current.value,
      lastName: this.state.lastNameRef.current.value,
      age: this.state.ageRef.current.value,
      isActive: true,
      hobby: this.state.hobbyRef.current.value
    };

    const newUpdatedRowList = updateByObjectId(listOfRows, editExistRow);

    updateRow(editExistRow).then(
      () => this.showTempMessage("row updated"),
      this.setState({ rowsFromDbJson: newUpdatedRowList })
    );
    this.setState({ editing: false });
  };

  showTempMessage = msg => {
    // console.log("showTempMessage");
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
      this.setState(prevState => ({
        sort: !prevState.sort
      }));
    } else {
      //console.log("2");
      this.setState({ columnName: currentColumnName });
      this.setState({ previousColumnName: currentColumnName });
      this.setState(prevState => ({
        sort: !prevState.sort
      }));
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
    var val = this.refs.newText.value;

    this.setState({
      text: val,
      editing: false
    });
  };

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

    // if (this.state.editing) {
    //   return this.renderForm();
    // } else {
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
          handleEdit2={this.handleEdit2}
        />
      </div>
    );
  }
  // }
}

export default TableContainer;
