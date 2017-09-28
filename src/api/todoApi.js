const todos = {
  1: "Get Something Done"
};

class TodoAPI {

  static addTodo = (text) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let id = Math.max(...Object.keys(todos)) + 1;
        todos[id] = text;
        return resolve(id);
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

  static editTodo = (id, text) => {
    return new Promise((resolve, reject) => {
      if (todos[id]) {
        todos[id] = text;
        return resolve(id);
      }
      return reject(`Todo ${id} not found`);
    });
  };

  static fetchTodos = () => {
    return new Promise((resolve, reject) => resolve({ ...todos }));
  };
}

export default TodoAPI;

