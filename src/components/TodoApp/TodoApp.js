import React, { useState } from "react";
import { Select } from "../Select";
import { useSelector, useDispatch } from "react-redux";
import { getTodoSelectore } from "../../store/selectors";
import styles from "./TodoApp.module.css";

const options = ["home work", "study", "project"];

export const TodoApp = ({ todos, setTodos, setIsShowPopUp }) => {
  const data = useSelector(getTodoSelectore);
  const dispatch = useDispatch();
  console.log(data);
  const [todo, setTodo] = useState({ name: "", type: options[0] });
  const onChange = (e) => {
    const fieldName = e.target.name;
    setTodo((prevValue) => ({ ...prevValue, [fieldName]: e?.target?.value }));
  };
  const addTodo = () => {
    setTodos((prevTodos) => [...prevTodos, todo]);
    setTodo({ name: "", type: options[0] });
    setIsShowPopUp(true);
    dispatch({ type: "addTodo", payload: todo });
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
