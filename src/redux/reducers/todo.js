const init_state = {
  todoList: [],
  inputTodo: "",
  todoCount: 0, // 2
}

export default (state = init_state, action) => {
  switch (action.type) {
    case "INCREMENT_TODO_COUNT":
      return { ...state, todoCount: state.todoCount + 1 };
    case "DECREMENT_TODO_COUNT":
      return { ...state, todoCount: state.todoCount - 1};
    case "CHANGE_TODO_COUNT":
      return { ...state, todoCount: action.payload };
    default:
      return state;
  }
};