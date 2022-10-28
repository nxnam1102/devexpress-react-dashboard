import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { DashboardPage } from "./dashboard";

function App() {
  return (
    <Routes>
      <Route path={`/`} element={<DashboardPage />}></Route>
    </Routes>
  );
}

export default App;
