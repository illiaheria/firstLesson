import { createStore } from "redux";

function todoReducer(state = [], action) {
  switch (action.type) {
    case "add":
      return {};
    default:
      return state;
  }
}

const store = createStore(todoReducer);
