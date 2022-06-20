import React from "react";
import { TodoForm } from "../TodoForm";
import { TodoList } from "../TodoList";
import styles from "./TodoApp.module.css";

export const TodoApp = ({ setIsShowPopUp }) => {
  return (
    <div className={styles.createTodoContainer}>
      <TodoForm setIsShowPopUp={setIsShowPopUp} />
      <TodoList />
    </div>
  );
};
