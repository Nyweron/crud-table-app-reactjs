import React, { Component } from "react";
import "../../App.css";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  console.log("test45");
  return (
    <div className={showHideClassName}>
      <p>siema</p>
      <section className="modal-main">
        {children}
        <button onClick={handleClose}>Close</button>
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
    return (
      <main>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>Modal</p>
          <p>Data</p>
        </Modal>
        <button type="button" onClick={this.showModal}>
          Open
        </button>
      </main>
    );
  }
}

export default TableEditPopup;
