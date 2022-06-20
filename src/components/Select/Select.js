import React, { useState } from "react";

export const Select = ({ options, label, name, value, onTypeChange }) => {
  return (
    <div style={{ marginTop: "8px" }}>
      <label htmlFor={name}>{label}</label>
      <br />
      <select value={value} onChange={onTypeChange} name={name} id={name}>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
