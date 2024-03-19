import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.scss";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  return (
    <>
      <HomePage />
    </>
  );
}

export default App;
