import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const navLinks = {
  ["create new"]: "/create",
  ["home work"]: "/homeWork",
  study: "/study",
  project: "/project",
};

export const Navigation = () => {
  const activeStyle = ({ isActive }) => (isActive ? { color: "yellow" } : null);
  return (
    <nav className={styles.links}>
      {Object.entries(navLinks).map(([name, route], index) => {
        return (
          <NavLink key={index} style={activeStyle} to={route}>
            {name}
          </NavLink>
        );
      })}
      <span className={styles.line}></span>
    </nav>
  );
};
