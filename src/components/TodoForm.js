import React from 'react';
import {connect} from 'react-redux';
import {addTodo, editTodo} from "../actions/todoActions";

let TodoForm = (props) => {
  let input;
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      props.onSubmit(input.value);
      input.value = "";
    }}>
      <input
        type="text"
        defaultValue={props.text || ''}
        ref={(item) => {
          input = item
        }}
      />
      <button>{props.id ? "Update" : "Add"}</button>
    </form>
  );
};

TodoForm.defaultProps = {
  text: '',
  id: 0
};

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: (text) => dispatch(ownProps.id ? editTodo(ownProps.id, text) :  addTodo(text))
});

TodoForm = connect(mapStateToProps, mapDispatchToProps)(TodoForm);

export default TodoForm;