import React from "react";
import { useDispatch } from "react-redux";
import { toggleComplete, removeTodo } from "../../store/todoSlice";

export const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();
  const removeTodoHandler = () => {
    dispatch(removeTodo(id));
  };
  const toggleCompleteHandler = () => {
    dispatch(toggleComplete(id));
  };
  return (
    <li>
      <input
        type="checkbox"
        onChange={toggleCompleteHandler}
        checked={completed}
      />
      <span>{text}</span>
      <span onClick={removeTodoHandler} role="button">
        &times;
      </span>
    </li>
  );
};
