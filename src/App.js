import React, { useState } from "react";
import { Header } from "./components/Header";
import { TodoApp } from "./components/TodoApp";
import { Provider } from "react-redux";
import store from "./store";
import { Notification } from "./components/Notification";
import "./App.css";

function App() {
  const [isShowPopUp, setIsShowPopUp] = useState(false);
  return (
    <Provider store={store}>
      <Header>Todo application</Header>
      <TodoApp setIsShowPopUp={setIsShowPopUp} />
      <Notification isShowPopUp={isShowPopUp} setIsShowPopUp={setIsShowPopUp} />
    </Provider>
  );
}

export default App;
