import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css"
import TodoItem from './components/TodoItem';
import TodoItemF from './components/TodoItemF';
// Props
// - Data dari parent ke child
class App extends React.Component {
  state = {
    todoList: [
      { activity: "Makan", id: 1},
      { activity: "Mandi", id: 2},
      { activity: "Coding", id: 3},
      { activity: "Tidur", id: 4},
    ],
    inputTodo: "",
  }

  deleteTodo = (id) => { // id = 3
    this.setState(
      {
        todoList: this.state.todoList.filter((val) => {
          return val.id !== id
        })
      }
    )
  }

  renderTodoList = () => {
    return this.state.todoList.map((val) => {
      return (
        <TodoItem deleteTodoHandler={this.deleteTodo} todoData={val} />
      )
    })
  }

  addTodo = () => {
    this.setState(
      {
        todoList: [
          ...this.state.todoList,
          { activity: this.state.inputTodo, id: this.state.todoList.length + 1 },
        ]
      }
    )
  }

  inputHandler = (event) => {
    // event.target.value menyimpan value dari input text saat ini
    this.setState({ inputTodo: event.target.value });
  }

  render () {
    return (
      <div>
        <h1>Todo List</h1>
        { this.renderTodoList() }
        <div>
          <input onChange={this.inputHandler} type="text" className="mx-3"/>
          <button onClick={this.addTodo} className="btn btn-primary">Add Todo</button>
        </div>
      </div>
    );
  }
}

export default App;
