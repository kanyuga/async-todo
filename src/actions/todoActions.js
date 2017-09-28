import TodoAPI from '../api/todoApi';

export const TODO_ADD_SUCCESS = 'TODO_ADD_SUCCESS';
export const TODO_EDIT_SUCCESS = 'TODO_EDIT_SUCCESS';
export const TODO_DELETE_SUCCESS = 'TODO_DELETE_SUCCESS';
export const TODO_FETCH_SUCCESS = 'TODO_FETCH_SUCCESS';

export const addTodoSuccess = (todo) => ({ type: TODO_ADD_SUCCESS, todo });

export const editTodoSuccess = (todo) => ({ type: TODO_EDIT_SUCCESS, todo });

export const deleteTodoSuccess = (id) => ({ type: TODO_DELETE_SUCCESS, id });

export const fetchTodoSuccess = (todos) => ({ type: TODO_FETCH_SUCCESS, todos });

export const addTodo = text => dispatch => {
  TodoAPI.addTodo(text)
    .then((id) => {
      const todo = {};
      todo[id] = text;
      dispatch(addTodoSuccess(todo))
    })
    .catch();
};

export const deleteTodo = id => dispatch => {
  TodoAPI.deleteTodo(id)
    .then(() => {
      dispatch(deleteTodoSuccess(id))
    })
    .catch();
};


export const editTodo = (id, text) => dispatch => {
  TodoAPI.editTodo(id, text)
    .then(() => {
      const todo = {};
      todo[id] = text;
      dispatch(editTodoSuccess(todo))
    })
    .catch();
};

export const fetchTodos = () => dispatch => {
  TodoAPI.fetchTodos()
    .then((todos) => {
      dispatch(fetchTodoSuccess(todos))
    })
    .catch();
};