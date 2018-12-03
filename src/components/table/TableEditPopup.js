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
    this.props.props.handleEdit(this.state);
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
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="name" className="cols-sm-2 control-label">
                  Firstname
                </label>
                <div className="cols-sm-5">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-user fa" aria-hidden="true" />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="firstName"
                      name="firstNameEdit"
                      value={this.state.firstNameEdit}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="name" className="cols-sm-2 control-label">
                  Lastname
                </label>
                <div className="cols-sm-5">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-user fa" aria-hidden="true" />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="lastName"
                      name="lastNameEdit"
                      value={this.state.lastNameEdit}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="name" className="cols-sm-2 control-label">
                  Age
                </label>
                <div className="cols-sm-5">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-user fa" aria-hidden="true" />
                    </span>
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
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="name" className="cols-sm-2 control-label">
                  Age
                </label>
                <div className="cols-sm-5">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-user fa" aria-hidden="true" />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="hobby"
                      name="hobbyEdit"
                      value={this.state.hobbyEdit}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <button onClick={this.submitForm2}>Save</button>
        </Modal>

        <a href="/#" onClick={this.submitForm}>
          edit
        </a>
      </main>
    );
  }
}

export default TableEditPopup;
