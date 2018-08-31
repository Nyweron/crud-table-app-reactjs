import React, { Component } from "react";
import "./App.css";
import TableContainer from "./container/TableContainer"


class App extends Component {

  render() {
    return (
      <div className="App">
        {/* <header className="App-header" /> */}
        {/* <p className="App-intro">Hello world</p> */}
        <TableContainer/>
      </div>
    );
  }
}

export default App;
