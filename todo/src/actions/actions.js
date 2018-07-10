export const addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    payload: todo
  };
};

export const toggleCompleted = (todo) => {
  return {
    type: 'TOGGLE_COMPLETED',
    payload: todo
  };
};

export const clearTodos = () => {
  return {
    type: 'CLEAR_TODOS',

  };
};
