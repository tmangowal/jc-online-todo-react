import logo from './logo.svg';
import './App.css';
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css"
import TodoItem from './components/TodoItem';
import TodoItemF from './components/TodoItemF';

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      {/* <TodoItemF />
      <TodoItemF />
      <TodoItemF /> */}
    </div>
  );
}

export default App;
