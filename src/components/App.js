import React, { Component } from 'react';
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

import '../style.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Todos</h1>
        <TodoForm/>
        <ol>
          {Object.keys(this.props.todos).map((key, index) => (
            <li key={index}><TodoItem id={key} text={this.props.todos[key]} deleteTodo={this.props.deleteTodo} /></li>
          ))}
        </ol>
      </div>
    );
  }
}

export default App;
