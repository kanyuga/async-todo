import initialState from '../store/initialState';
import {TODO_ADD_SUCCESS, TODO_DELETE_SUCCESS, TODO_EDIT_SUCCESS, TODO_FETCH_SUCCESS} from "../actions/todoActions";

const todos = (state = initialState.todos, action) => {
  switch (action.type) {
    case TODO_ADD_SUCCESS:
    case TODO_EDIT_SUCCESS:
      return Object.assign({}, state, action.todo);
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