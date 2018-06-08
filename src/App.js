import React, { Component } from "react";
import "./App.css";
import FormContainer from "./container/FormContainer"

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <p className="App-intro">Hello world</p>
        <FormContainer/>
      </div>
    );
  }
}

export default App;
