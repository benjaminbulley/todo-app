import React from "react"
import './App.css';
import TodoItem from './TodoItem';
import todosData from "./todosData";

class App extends React.Component {
  constructor(){
      super();
      this.state = {
        todos: todoItems
      }
  }
  render(){
      const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}/>)
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
    )
  }
  
}

export default App;
