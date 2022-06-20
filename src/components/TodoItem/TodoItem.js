import React from "react";

export const TodoItem = ({ id, text, completed }) => {
  return (
    <li>
      <input type="checkbox" checked={completed} />
      <span>{text}</span>
      <span role="button">&times;</span>
    </li>
  );
};
