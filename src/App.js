import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import Main from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={
          <Main />
        } />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
