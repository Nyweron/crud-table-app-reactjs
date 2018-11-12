import React, { Component } from "react";
import "./test.css";

const Modal = props => {
  const showHideClassName = props.show
    ? "modal display-block"
    : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {props.children}
        <button onClick={props.handleClose}>Close</button>
      </section>
    </div>
  );
};

class TableEditPopup extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    console.log("pross", props);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  submitForm = () => {
    console.log("this.props.props", this.props.props);
    console.log("this.rowId", this.props.rowId);
    this.props.props.handleEdit(this.props.rowId);
    this.showModal();
  };

  submitForm2 = () => {
    console.log("submitForm2");
    this.props.props.handleEdit2();
  };

  render() {
    //console.log("Test5");

    return (
      <main>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <div className="form-group row">
            <div className="col-xs-2">
              <input
                type="text"
                className="form-control"
                id="firstNameInput"
                placeholder="firstName"
                name="firstName"
                ref={this.state.firstNameRef}
              />
            </div>
            <div className="col-xs-2">
              <input
                type="text"
                className="form-control"
                placeholder="lastName"
                name="lastName"
                ref={this.state.lastNameRef}
              />
            </div>
            <div className="col-xs-2">
              <input
                type="number"
                className="form-control"
                placeholder="age"
                name="age"
                ref={this.state.ageRef}
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
                ref={this.state.hobbyRef}
              />
            </div>
            <button onClick={this.submitForm2}>Save</button>
          </div>
        </Modal>

        <a href="/#" onClick={this.submitForm}>
          edit
        </a>
      </main>
    );
  }
}

export default TableEditPopup;
