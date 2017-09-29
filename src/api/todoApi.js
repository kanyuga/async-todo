import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_ENDPOINT;

axios.interceptors.response.use(response => response.data);

class TodoAPI {
  static addTodo = (title) => {
    return axios.post('/todos', { title }).then(response => response.data);
  };

  static deleteTodo = (id) => {
    return axios.delete(`/todos/${id}`);
  };

  static editTodo = (id, title) => {
    return axios.patch(`/todos/${id}`, { title }).then(response => response.data);
  };

  static toggleTodo = (id, completed) => {
    return axios.patch(`/todos/${id}`, { completed }).then(response => response.data);
  };

  static fetchTodos = () => {
    return axios.get('/todos').then(response => response.data);
  };
}

export default TodoAPI;

