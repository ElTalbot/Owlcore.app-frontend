import "./app.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/loginPage/loginPage";
import React from "react";
import SignupPage from "./pages/signupPage/signupPage";
import SessionsPage from "./pages/sessionsPage/sessionsPage";
import MovementsPage from "./pages/movementsPage/movementsPage";
import Header from "./components/header/header";
import Community from "./pages/community/community";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<SessionsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/sessions" element={<SessionsPage />} />
        <Route path="/movements" element={<MovementsPage />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </BrowserRouter>
  );
}
