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
          <PersonForm
            handleChange={this.handleChange}
            isEdit={false}
            submitAddForm={this.submitAddForm}
            hideModal={this.hideModal}
            data={this.props.row}
          />
        </Modal>
      </main>
    );
  }
}

export default TableAdd;
