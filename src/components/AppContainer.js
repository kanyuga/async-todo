import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteTodo, fetchTodos} from "../actions/todoActions";
import App from "./App";

class AppContainer extends Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <App todos={this.props.todos} deleteTodo={this.props.deleteTodo} />
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(fetchTodos()),
  deleteTodo: (id) => dispatch(deleteTodo(id))
});

AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppContainer);

export default AppContainer;