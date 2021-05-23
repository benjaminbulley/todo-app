import React from "react"
import './App.css';
import TodoItem from './TodoItem';
import todosData from "./todosData";

function App() {
  const todoItems = todosData.map(item => <TodoItem key={item.id} item={item}/>)
  return (
    <div className="App">
      <header className="App-header">
        <p>
          **TODO**
        </p>
      </header>
      <div className="todo-list">
        {todoItems}
      </div>
    </div>
  );
}

export default App;
