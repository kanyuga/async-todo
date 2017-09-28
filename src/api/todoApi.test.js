import TodoAPI from "./todoApi";

describe('testing API', () => {
  it ('returns the only item', async () => {
    expect.assertions(1);
    let todos = await TodoAPI.fetchTodos();
    expect(todos).toEqual({"1": 'Get Something Done'});
  });

  it ('add new item', async () => {
    expect.assertions(2);
    let response = await TodoAPI.addTodo('Next One');
    expect(response).toEqual(2);
    let todos = await TodoAPI.fetchTodos();
    expect(todos).toEqual({"1": 'Get Something Done', "2": 'Next One'});
  });

  it ('edit item', async () => {
    expect.assertions();
    await TodoAPI.editTodo(1, "Got Something Done");
    let todos = await TodoAPI.fetchTodos();
    expect(todos).toEqual({"1": 'Got Something Done', "2": 'Next One'});
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
    await TodoAPI.deleteTodo(1);
    let todos = await TodoAPI.fetchTodos();
    expect(todos).toEqual({"2": 'Next One'});
  });

  it ('delete item that doesn\'t exist', async () => {
    expect.assertions(1);
    try {
      await TodoAPI.deleteTodo(6);
    } catch (e) {
      expect(e).toEqual('Todo 6 not found');
    }
  });

});