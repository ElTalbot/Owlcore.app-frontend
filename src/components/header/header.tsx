import React, { useState } from "react";
import "./header.scss";
import Nav from "../nav/nav";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); //change true to false once auth has been set up to hide the nav if the user isn't logged in
  return (
    <header className="header">
      <section className="header__container">
        <div className="header__wrapper">
          <img src="#" alt="Owlcore Logo" className="header__logo" />
        </div>
        {isLoggedIn && (
          <div className="header__wrapper header__wrapper--nav">
            <Nav />
          </div>
        )}
      </section>
    </header>
  );
}
