import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import MainPage from "./components/MainPage/MainPage";


function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={
          <MainPage />
        } />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
