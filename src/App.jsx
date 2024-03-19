import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.scss";
import Nav from "./Components/Header/Nav";

function App() {
  return (
    <>
      <Nav />
    </>
  );
}

export default App;
