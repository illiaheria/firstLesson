import React from "react";
import { useDispatch } from "react-redux";

export const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();
  const removeTodo = () => {
    dispatch({ type: "removeTodo", payload: id });
  };
  const toggleComplete = () => {
    dispatch({ type: "toggleComplete", payload: id });
  };
  return (
    <li>
      <input type="checkbox" onChange={toggleComplete} checked={completed} />
      <span>{text}</span>
      <span onClick={removeTodo} role="button">
        &times;
      </span>
    </li>
  );
};
