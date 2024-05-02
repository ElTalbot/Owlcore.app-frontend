import "./app.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/loginPage/loginPage";
import React from "react";
import SignupPage from "./pages/signupPage/signupPage";
import MySessionsPage from "./pages/mySessionsPage/mySessionsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MySessionsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/my-sessions" element={<MySessionsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
