const initialState = {
  todos: [
    {
      value: 'finish todo list',
      completed: false
    },
    {
      value: 'add toggle completed option',
      completed: false
    },
    {
      value: 'add clear finished option',
      completed: false
    }
  ]
}

const reducer = (state = initialState, action) => {
  switch(action.type) {

    default:
      return state;
  }
};

export default reducer;
