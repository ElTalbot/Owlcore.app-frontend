import "./loginForm.scss";
import React, { useState } from "react";

export default function LoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const changeHandler = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevformData) => ({ ...prevformData, [name]: value }));
  };

  return (
    <form className="login-form">
      <div className="login-form__wrapper">
        <label htmlFor="email" className="login-form__label">
          Email<span className="required">*</span>
        </label>
        <input
          type="text"
          id="email"
          name="email"
          className="login-form__input"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Email"
        />
      </div>
      <div className="login-form__wrapper">
        <label htmlFor="password" className="login-form__label">
          Password<span className="required">*</span>
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="login-form__input"
          value={formData.password}
          onChange={changeHandler}
          placeholder="Password"
        />
      </div>
      <button className="login-form__btn">Login</button>
    </form>
  );
}
