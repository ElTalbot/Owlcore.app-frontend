import LoginForm from "../../components/loginForm/loginForm";
import React from "react";
import "./loginPage.scss";
import Divider from "../../components/divider/divider";

export default function LoginPage() {
  return (
    <main className="login">
      <div className="login__container">
        <div className="login__logo">A Owl</div>
        <h2 className="login__title">Log In</h2>
        <LoginForm />
        <Divider />
        <p>forgotten password</p>
        <p>sign ups</p>
      </div>
      <div className="login__container">
        <div className="login__img">A picture goes here</div>
      </div>
    </main>
  );
}
