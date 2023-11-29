import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/Home";
import MealInfo from "./pages/MealInfo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<MealInfo />} />
      </Routes>
    </div>
  );
}

export default App;
