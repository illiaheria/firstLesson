import React from "react";
import { TodoForm } from "../TodoForm";
import { TodoList } from "../TodoList";
import styles from "./TodoApp.module.css";

export const TodoApp = ({ todos, setTodos, setIsShowPopUp }) => {
  console.log(todos);
  return (
    <div className={styles.createTodoContainer}>
      <TodoForm setTodos={setTodos} setIsShowPopUp={setIsShowPopUp} />
      <TodoList />
    </div>
  );
};
