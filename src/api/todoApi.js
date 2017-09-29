const todos = {
  1: {
    id: 1,
    title: "Get Something Done",
    completed: false
  },
};

class TodoAPI {

  static addTodo = (text) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let id = Math.max(...Object.keys(todos)) + 1;
        todos[id] = { id, title: text, completed: false };
        return resolve(todos[id]);
      }, 500);
    });
  };

  static deleteTodo = (id) => {
    return new Promise((resolve, reject) => {
      if (todos[id]) {
        delete todos[id];
        return resolve(true);
      }
      return reject(`Todo ${id} not found`);
    });
  };

  static editTodo = (id, title) => {
    return new Promise((resolve, reject) => {
      if (todos[id]) {
        todos[id].title = title;
        return resolve(todos[id]);
      }
      return reject(`Todo ${id} not found`);
    });
  };

  static toggleTodo = (id, completed) => {
    return new Promise((resolve, reject) => {
      if (todos[id]) {
        todos[id].completed = completed;
        return resolve(todos[id]);
      }
      return reject(`Todo ${id} not found`);
    });
  };


  static fetchTodos = () => {
    return new Promise((resolve, reject) => resolve({ ...todos }));
  };
}

export default TodoAPI;

