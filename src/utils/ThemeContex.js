import React from "react";

export const themes = {
  light: {
    background: "#eeeeee",
    color: "#000",
  },
  dark: {
    background: "#222222",
    color: "#fff",
  },
};

export const ThemeContext = React.createContext(themes.light);
