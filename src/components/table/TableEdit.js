import React, { Component } from "react";
import { Modal } from "../modal/Modal";
import { PersonForm } from "./PersonForm";

class TableEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      firstName: "",
      lastName: "",
      age: 0,
      hobby: "",
      idEdit: props.rowId
    };
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  editForm = () => {
    this.showModal();
  };

  submitEditForm = () => {
    this.hideModal();
    console.log("submitEditForm");
    this.props.handleEdit(this.state);
  };

  handleChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <main>
        <Modal show={this.state.show}>
          <PersonForm handleChange={this.handleChange} />
          <button onClick={this.submitEditForm}>Save editing row</button>
          <button onClick={this.hideModal}>Close</button>
        </Modal>

        <a href="/#" onClick={this.editForm}>
          edit
        </a>
      </main>
    );
  }
}

export default TableEdit;
