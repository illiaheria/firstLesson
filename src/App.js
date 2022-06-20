import React, { useState } from "react";
import { Header } from "./components/Header";
import { Provider } from "react-redux";
import { store } from "./store";
import { TodoApp } from "./components/TodoApp";
import { Notification } from "./components/Notification";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [isShowPopUp, setIsShowPopUp] = useState(false);

  return (
    <Provider store={store}>
      <Header>Todo application</Header>
      <TodoApp
        todos={todos}
        setTodos={setTodos}
        setIsShowPopUp={setIsShowPopUp}
      />
      <Notification isShowPopUp={isShowPopUp} setIsShowPopUp={setIsShowPopUp} />
    </Provider>
  );
}

export default App;
