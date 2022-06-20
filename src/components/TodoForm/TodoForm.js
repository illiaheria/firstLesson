import React, { useState } from "react";

export const TodoForm = ({ setTodos, setIsShowPopUp }) => {
  const [todo, setTodo] = useState("");
  const addTodo = () => {
    setIsShowPopUp(true);
  };
  const onChange = (e) => {};
  return (
    <div>
      <input name="name" type="text" value={todo?.name} onChange={onChange} />
      <br />
      <button disabled={!todo?.length} onClick={addTodo}>
        Add todo
      </button>
    </div>
  );
};
