import React, { SyntheticEvent, useState } from "react";
import axios from "axios";
import "./signupForm.scss";
import { useNavigate } from "react-router-dom";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const nav = useNavigate();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      // const resp = await axios.post(URL GOES HERE);
      nav("/");
    } catch (error) {
      console.log(error);
    }
  };

  const changeHandler = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevformData) => ({ ...prevformData, [name]: value }));
  };
  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <div className="signup-form__container">
        <div className="signup-form__wrapper">
          <label htmlFor="firstName" className="signup-form__label">
            First Name<span className="required">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="signup-form__input"
            value={formData.firstName}
            onChange={changeHandler}
          />
        </div>
        <div className="signup-form__wrapper">
          <label htmlFor="lastName" className="signup-form__label">
            Last Name<span className="required">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="signup-form__input"
            value={formData.lastName}
            onChange={changeHandler}
          />
        </div>
      </div>
      <div className="signup-form__wrapper">
        <label htmlFor="email" className="signup-form__label">
          Email<span className="required">*</span>
        </label>
        <input
          type="text"
          id="email"
          name="email"
          className="signup-form__input"
          value={formData.email}
          onChange={changeHandler}
        />
      </div>
      <div className="signup-form__wrapper">
        <label htmlFor="phone" className="signup-form__label">
          Phone Number<span className="required">*</span>
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          className="signup-form__input"
          value={formData.phone}
          onChange={changeHandler}
        />
      </div>
      <div className="signup-form__wrapper">
        <label htmlFor="password" className="signup-form__label">
          Password<span className="required">*</span>
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="signup-form__input"
          value={formData.password}
          onChange={changeHandler}
        />
      </div>
      <div className="signup-form__wrapper">
        <label htmlFor="confirmPassword" className="signup-form__label">
          Confirm Password<span className="required">*</span>
        </label>
        <input
          type="confirmPassword"
          id="confirmPassword"
          name="confirmPassword"
          className="signup-form__input"
          value={formData.confirmPassword}
          onChange={changeHandler}
        />
      </div>
      <p className="">Ts & Cs and privacy checkbox</p>
      <button className="signup-form__btn">Sign Up</button>
    </form>
  );
}
