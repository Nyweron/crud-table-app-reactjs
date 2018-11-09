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
  state = { show: false };

  showModal = () => {
    console.log("Test1");
    this.setState({ show: true });
  };

  hideModal = () => {
    console.log("Test2");
    this.setState({ show: false });
  };

  render() {
    console.log("Test5");
    return (
      <main>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>Modal</p>
          <p>Data</p>
        </Modal>
        {/* <button type="button">Open</button> */}
        <button
          type="button"
          onClick={this.showModal}
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Launch demo modal
        </button>
      </main>
    );
  }
}

export default TableEditPopup;
