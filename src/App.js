import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='register/' element={<Register />}/>
          <Route path='home/' element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
