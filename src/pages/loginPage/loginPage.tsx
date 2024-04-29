import LoginForm from "../../components/loginForm/loginForm";
import React from "react";
import "./loginPage.scss";
import Divider from "../../components/divider/divider";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <main className="login">
      <div className="login__container">
        <div className="login__logo">A Owl</div>
        <h2 className="login__title">Log In</h2>
        <LoginForm />
        <div className="login__wrapper">
          <Divider />
          <p>forgotten password</p>
          <Link to="/signup" className="link">
            <p>Don't have an account? Sign Up</p>
          </Link>
        </div>
      </div>
      <div className="login__container">
        <div className="login__img">A picture goes here</div>
      </div>
    </main>
  );
}
