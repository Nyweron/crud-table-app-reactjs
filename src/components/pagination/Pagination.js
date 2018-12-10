import React, { Component } from "react";
import "./pagination.css";

class Pagination extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ["a", "b", "c", "d", "e", "f", "g"],
      currentPage: 1,
      todosPerPage: 3,
      rows: props.rows
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.rows !== this.state.todos) {
      console.log("nextProps.rows3", nextProps.rows);
      this.setState({ todos: nextProps.rows });
    }
  }

  render() {
    const { todos, currentPage, todosPerPage } = this.state;

    // Logic for displaying current todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

    const renderTodos = currentTodos.map((todo, index) => {
      return <li key={index}>{todo.id}</li>;
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li key={number} id={number} onClick={this.handleClick}>
          {number}
        </li>
      );
    });

    return (
      <div>
        <ul>{renderTodos}</ul>
        <ul id="page-numbers">{renderPageNumbers}</ul>
      </div>
    );
  }
}
export default Pagination;
