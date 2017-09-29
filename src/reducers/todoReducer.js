import initialState from '../store/initialState';
import {
  TODO_ADD_SUCCESS, TODO_DELETE_SUCCESS, TODO_EDIT_SUCCESS, TODO_FETCH_SUCCESS,
  TODO_TOGGLE_SUCCESS
} from "../actions/todoActions";

const todos = (state = initialState.todos, action) => {
  switch (action.type) {
    case TODO_ADD_SUCCESS:
    case TODO_EDIT_SUCCESS:
    case TODO_TOGGLE_SUCCESS:
      state = { ...state };
      state[action.todo.id] = action.todo;
      return state;
    case TODO_FETCH_SUCCESS:
      return action.todos;
    case TODO_DELETE_SUCCESS:
      state = { ...state };
      delete state[action.id];
      return state;
    default:
      return state;
  }
};

export default todos;