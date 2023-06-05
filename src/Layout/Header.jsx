import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="fixed-top shadow-sm">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <NavLink className="navbar-brand fw-semibold fs-3" to="/">
              React-Forms
            </NavLink>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/form-1">
                    Form-1
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/form-2">
                    Form-2
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/formValidation">
                    FormValidation
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/formField">
                    FormField
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/JsonFormField">
                    JsonFormField
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/react-hook-form">
                    React-Hook-Form
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
