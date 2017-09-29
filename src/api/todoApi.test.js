import TodoAPI from "./todoApi";

const mockTodos = {
  1: {
    id: 1,
    title: "Get Something Done",
    completed: false
  },
};

jest.mock('./todoApi', () => ({
  addTodo : jest.fn((text) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let id = Math.max(...Object.keys(mockTodos)) + 1;
        mockTodos[id] = {id, title: text, completed: false};
        return resolve(mockTodos[id]);
      }, 500);
    });
  }),

  deleteTodo : jest.fn((id) => {
    return new Promise((resolve, reject) => {
      if (mockTodos[id]) {
        delete mockTodos[id];
        return resolve(true);
      }
      return reject(`Todo ${id} not found`);
    });
  }),

  editTodo : jest.fn((id, title) => {
    return new Promise((resolve, reject) => {
      if (mockTodos[id]) {
        mockTodos[id].title = title;
        return resolve(mockTodos[id]);
      }
      return reject(`Todo ${id} not found`);
    });
  }),

  toggleTodo : jest.fn((id, completed) => {
    return new Promise((resolve, reject) => {
      if (mockTodos[id]) {
        mockTodos[id].completed = completed;
        return resolve(mockTodos[id]);
      }
      return reject(`Todo ${id} not found`);
    });
  }),


  fetchTodos: jest.fn(() => {
    return new Promise((resolve, reject) => resolve({ ...todos }));
  })
}));

describe('testing API', () => {
  it ('returns the only item', async () => {
    expect.assertions(1);
    let todos = await TodoAPI.fetchTodos();
    expect(todos).toEqual({1: { id: 1, title: 'Get Something Done', completed: false }});
  });

  it ('add new item', async () => {
    expect.assertions(2);
    let response = await TodoAPI.addTodo('Next One');
    expect(response).toEqual({ id: 2, title: 'Next One', completed: false});
    let todos = await TodoAPI.fetchTodos();
    expect(todos).toEqual({
      1: { id: 1, title: 'Get Something Done', completed: false },
      2: { id: 2, title: 'Next One', completed: false}
    });
  });

  it ('edit item', async () => {
    expect.assertions(1);
    let todo = await TodoAPI.editTodo(1, "Got Something Done");
    expect(todo).toEqual({ id: 1, title: 'Got Something Done', completed: false });
  });

  it ('edit item that doesn\'t exist', async () => {
    expect.assertions(1);
    try {
      await TodoAPI.editTodo(6, "Something");
    } catch (e) {
      expect(e).toEqual('Todo 6 not found');
    }
  });

  it ('delete item', async() => {
    expect.assertions(1);
    let result = await TodoAPI.deleteTodo(1);
    expect(result).toBe(true);
  });

  it ('delete item that doesn\'t exist', async () => {
    expect.assertions(1);
    try {
      await TodoAPI.deleteTodo(6);
    } catch (e) {
      expect(e).toEqual('Todo 6 not found');
    }
  });

  it ('toggle item', async () => {
    expect.assertions(2);
    let todo = await TodoAPI.toggleTodo(2, true);
    expect(todo.completed).toEqual(true);
    todo = await TodoAPI.toggleTodo(2, false);
    expect(todo.completed).toEqual(false);
  });

  it ('toggle item that doesn\'t exist', async () => {
    expect.assertions(1);
    try {
      await TodoAPI.editTodo(6, true);
    } catch (e) {
      expect(e).toEqual('Todo 6 not found');
    }
  });


});