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
    if (this.state.editing) return <TodoForm id={this.props.id} text={this.props.text}/>;
    return (
      <div>
        {this.props.text}
        <button onClick={this.toggleEditor}>Edit</button>
        <button onClick={() => this.props.deleteTodo(this.props.id)}>&times;</button>
      </div>
    );
  }
}

TodoItem.propTypes = {

};
