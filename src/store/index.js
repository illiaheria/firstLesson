import { createStore } from "redux";

const initialState = [];

function todoReducer(state = initialState, action) {
  const { type, payload = null } = action;
  switch (type) {
    case "addTodo":
      return [...state, payload];
    case "removeTodo":
      return state.filter((todo) => todo.id !== payload);
    case "toggleComplete":
      return state.map((todo) => {
        return todo.id === payload
          ? { ...todo, completed: !todo.completed }
          : todo;
      });
    default:
      return state;
  }
}

export const store = createStore(todoReducer);
