import React, { useState } from "react";
import { useDispatch } from "react-redux";

export const TodoForm = ({ setIsShowPopUp }) => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const addTodo = () => {
    dispatch({
      type: "addTodo",
      payload: { id: new Date().toISOString(), text: todo, completed: false },
    });
    setIsShowPopUp(true);
    setTodo("");
  };
  const onChange = (e) => {
    setTodo(e.target.value);
  };
  return (
    <div>
      <input name="name" type="text" value={todo} onChange={onChange} />
      <br />
      <button disabled={!todo?.length} onClick={addTodo}>
        Add todo
      </button>
    </div>
  );
};
