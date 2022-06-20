import React from "react";
import styles from "./Header.module.css";

export const Header = ({ children }) => {
  return <h3 className={styles.mainHeader}>{children}</h3>;
};
