import React, { Component } from "react";
import { Modal } from "../modal/Modal";
import PersonForm from "./PersonForm";

class TableAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    };
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
    this.props.negationAdd();
  };

  addForm = () => {
    this.showModal();
  };

  submitAddForm = () => {
    this.hideModal();
    this.props.handleSubmitAddRow(this.state);
  };

  handleChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.show !== this.props.show) {
      this.setState({ show: this.props.show });
    }
  }

  render() {
    if (this.state.show === false) {
      return null;
    }

    return (
      <main>
        <Modal show={this.state.show}>
          <PersonForm handleChange={this.handleChange} isEdit={false} />
          <button onClick={this.submitAddForm}>Save row</button>
          <button onClick={this.hideModal}>Close</button>
        </Modal>
      </main>
    );
  }
}

export default TableAdd;