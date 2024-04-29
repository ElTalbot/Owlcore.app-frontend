import "./app.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/loginPage/loginPage";
import React from "react";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}
