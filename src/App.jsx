import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.scss";
import HomePage from "./Pages/HomePage/HomePage";
import HeadPhonesPage from "./Pages/HeadPhones-Page/HeadPhonesPage";
import SpeakersPage from "./Pages/Speakers-Page/SpeakersPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="headphones" element={<HeadPhonesPage />} />
          <Route path="speakers" element={<SpeakersPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
