import React from "react";
import { useSelector } from "react-redux";
import { getTodos } from "../../store/selectors";
import { TodoItem } from "../TodoItem";

export const TodoList = () => {
  const todosList = useSelector(getTodos);
  console.log(todosList);
  return (
    <ul>
      {todosList?.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};
