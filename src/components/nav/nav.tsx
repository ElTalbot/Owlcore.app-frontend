import React, { useState } from "react";
import "./nav.scss";
import { Link } from "react-router-dom";

export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const clickHandler = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <>
      <section className="nav">
        <Link to="/sessions" className="nav__link">
          <h3 className="nav__text">Sessions</h3>
        </Link>
        <Link to="/movements" className="nav__link">
          <h3 className="nav__text">Movements</h3>
        </Link>
        <Link to="/community" className="nav__link">
          <h3 className="nav__text">Community</h3>
        </Link>
      </section>
      <section className="mob-nav" onClick={clickHandler}>
        <div className="mob-nav__icon">burger menu</div>
        {isNavOpen && (
          <div className="mob-nav__container">
            <div className="mob-nav__close" onClick={clickHandler}>
              close icon
            </div>
            <Link to="/sessions" className="nav__link">
              <h3 className="nav__text">Sessions</h3>
            </Link>
            <Link to="/movements" className="nav__link">
              <h3 className="nav__text">Movements</h3>
            </Link>
            <Link to="/community" className="nav__link">
              <h3 className="nav__text">Community</h3>
            </Link>
          </div>
        )}
      </section>
    </>
  );
}
