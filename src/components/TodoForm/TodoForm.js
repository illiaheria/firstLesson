import React, { useState } from "react";
import { addTodo } from "../../store/todoSlice";
import { useDispatch } from "react-redux";

export const TodoForm = ({ setIsShowPopUp }) => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const handleAddTodo = () => {
    dispatch(
      addTodo({ id: new Date().toISOString(), text: todo, completed: false })
    );
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
      <button disabled={!todo?.length} onClick={handleAddTodo}>
        Add todo
      </button>
    </div>
  );
};
