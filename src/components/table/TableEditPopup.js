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

    this.state = {
      show: false,
      firstNameEdit: "",
      lastNameEdit: "",
      ageEdit: 0,
      hobbyEdit: "",
      idEdit: props.rowId
    };
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  submitForm = () => {
    this.showModal();
  };

  submitForm2 = () => {
    this.hideModal();
    console.log("submitForm2");
    this.props.props.handleEdit2(this.state);
  };

  handleChange = event => {
    console.log("handleChange");
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <main>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <div className="form-group row">
            <div className="col-xs-2">
              <input
                type="text"
                className="form-control"
                placeholder="firstName"
                name="firstNameEdit"
                value={this.state.firstNameEdit}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-xs-2">
              <input
                type="text"
                className="form-control"
                placeholder="lastName"
                name="lastNameEdit"
                value={this.state.lastNameEdit}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-xs-2">
              <input
                type="number"
                className="form-control"
                placeholder="age"
                name="ageEdit"
                min="0"
                max="100"
                value={this.state.ageEdit}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-xs-2">
              <input
                type="text"
                className="form-control"
                placeholder="hobby"
                name="hobbyEdit"
                value={this.state.hobbyEdit}
                onChange={this.handleChange}
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
