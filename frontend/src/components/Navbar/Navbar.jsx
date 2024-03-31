import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/quizz" className="navbar-item">
            Home
          </Link>
          <Link to="/add/question" className="navbar-item">
            Contibute
          </Link>
          <Link to="/user/detail" className="navbar-item">
            Detail
          </Link>

          <div className="navbar-item has-dropdown is-hoverable"></div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link to="/" className="button is-primary has-background-danger">
                <strong>Sign up</strong>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
