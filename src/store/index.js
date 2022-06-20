import { createStore } from "redux";

const initialState = [];

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "addTodo":
      return state;
    default:
      return state;
  }
}

export const store = createStore(todoReducer);
