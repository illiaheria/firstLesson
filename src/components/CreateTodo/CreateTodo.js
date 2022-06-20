import React, { useState } from "react";
import { Select } from "../Select";
import styles from "./CreateTodo.module.css";

const options = ["home work", "study", "project"];

export const CreateTodo = ({ todos, setTodos, setIsShowPopUp }) => {
  const [todo, setTodo] = useState({ name: "", type: options[0] });
  const onChange = (e) => {
    const fieldName = e.target.name;
    setTodo((prevValue) => ({ ...prevValue, [fieldName]: e?.target?.value }));
  };
  const addTodo = () => {
    setTodos((prevTodos) => [...prevTodos, todo]);
    setTodo({ name: "", type: options[0] });
    setIsShowPopUp(true);
  };

  return (
    <div className={styles.createTodoContainer}>
      <div>
        <input name="name" type="text" value={todo?.name} onChange={onChange} />
        <Select
          options={options}
          value={todo.type}
          onTypeChange={onChange}
          label="Тип занятия"
          name="type"
        />
        <br />
        <button disabled={!todo?.name?.length} onClick={addTodo}>
          Add todo
        </button>
      </div>
    </div>
  );
};
