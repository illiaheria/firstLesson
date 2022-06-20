import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { WellcomePage } from "./components/WellcomePage";
import { CreateTodo } from "./components/CreateTodo";
import { Notification } from "./components/Notification";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [isShowPopUp, setIsShowPopUp] = useState(false);

  return (
    <BrowserRouter>
      <Navigation />
      <Header>Todo application</Header>
      <Routes>
        <Route path="/" element={<WellcomePage />} />
        <Route
          path="/create"
          element={
            <CreateTodo
              todos={todos}
              setTodos={setTodos}
              setIsShowPopUp={setIsShowPopUp}
            />
          }
        />
        <Route path="/one" element={<>1</>} />
        <Route path="/two" element={<>2</>} />
        <Route path="/three" element={<>3</>} />
      </Routes>
      <Notification isShowPopUp={isShowPopUp} setIsShowPopUp={setIsShowPopUp} />
    </BrowserRouter>
  );
}

export default App;
