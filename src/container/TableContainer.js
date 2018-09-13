import React, { Component } from "react";
import { TableForm } from "../components/table/index";
import PropTypes from "prop-types";
import { getAll, getKeyFromJson, filterTable } from "../lib/personService";

class TableContainer extends Component {

  static contextTypes = {
    route: PropTypes.string
  }

  state = {
    rowsFromDbJson: [],
    keysFromDbJson: [],
    sort:true
  }

  componentDidMount() {
    console.log("componentDidMount");
    getAll().then(person => this.setState({ rowsFromDbJson: person }));
    getKeyFromJson().then(key => this.setState({ keysFromDbJson: key }));
  }

  handleSubmitAddRow = event => {
    event.preventDefault();
    console.log("handleSubmitAddRow");
  };

  handleChange = event => {
    event.preventDefault();
    console.log(event);
    console.log(event.target);
   // console.log(event.target.value);
    this.setState({ sort: true });
    console.log("sort",this.sort);
  };

  render() {
    this.state.sort = !this.state.sort
    const displayTable = filterTable(this.state.keysFromDbJson, this.state.rowsFromDbJson, this.context.route, this.state.sort)
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
