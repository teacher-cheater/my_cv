import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import AboutMe from "./components/AboutMe/AboutMe";
import MainPage from "./components/MainPage/MainPage";


function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={
          <MainPage />
        } />
        <Route />
        <Route path="/AboutMe" element={
          <AboutMe />
        } />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;