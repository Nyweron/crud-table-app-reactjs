import React, { Component } from "react";
import { Modal } from "../modal/Modal";
import PersonForm from "./PersonForm";

class TableEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdit: false,
      show: false,
      firstName: "",
      lastName: "",
      age: 0,
      hobby: "",
      id: props.row.id
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

  submitEditForm = data => {
    this.hideModal();
    this.props.handleEdit(data);
  };

  handleChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    if (this.state.show === false) {
      return (
        <a href="/#" onClick={this.editForm}>
          edit
        </a>
      );
    }

    return (
      <main>
        <Modal show={this.state.show}>
          <PersonForm
            submitEditForm={this.submitEditForm}
            hideModal={this.hideModal}
            isEdit={true}
            data={this.props.row}
          />
        </Modal>

        <a href="/#" onClick={this.editForm}>
          edit
        </a>
      </main>
    );
  }
}

export default TableEdit;
