import React, {Component} from 'react';
import TodoForm from "./TodoForm";

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };
  }

  componentWillReceiveProps() {
    this.setState({editing: false});
  }

  toggleEditor = () => {
    this.setState({
      editing: !this.state.editing
    });
  };

  render() {
    if (this.state.editing) return <TodoForm id={this.props.todo.id} text={this.props.todo.title}/>;
    return (
      <div>
        <span style={{ textDecoration: !this.props.todo.completed ? "none" : "line-through" }}>
        {this.props.todo.title}
        </span>
        <button onClick={() => this.props.toggleTodo(this.props.todo.id, !this.props.todo.completed)}>&#10004;</button>
        <button onClick={this.toggleEditor}> &#9999; </button>
        <button onClick={() => this.props.deleteTodo(this.props.todo.id)}>&times;</button>
      </div>
    );
  }
}

TodoItem.propTypes = {

};
