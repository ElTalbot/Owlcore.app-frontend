import { Link } from "react-router-dom";
import Divider from "../../components/divider/divider";
import SignupForm from "../../components/signupForm/signupForm";
import "./signupPage.scss";
import React from "react";

export default function SignupPage() {
  return (
    <main className="signup">
      <div className="signup__container">
        <h2 className="signup__title">Join the Community</h2>
        <Divider />
      </div>
      <SignupForm />
      <div className="signup__wrapper">
        <Divider />
        <Link to="/" className="link">
          Already have an account? Log in
        </Link>
      </div>
    </main>
  );
}
