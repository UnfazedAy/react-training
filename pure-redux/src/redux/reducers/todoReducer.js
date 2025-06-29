import { ADD, DELETE, CLEAR, TOGGLE } from "../types/todoTypes";

const initialState = {
  todos: [
    {
      id: new Date().getTime(),
      text: "Test",
      completed: false,
    },
  ],
};

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD:
      return {
        todos: [
          ...state.todos,
          { id: new Date().getTime(), text: payload, completed: false },
        ],
      };
    case CLEAR:
      return initialState;

    default:
      return state;
  }
};

export default todoReducer;
