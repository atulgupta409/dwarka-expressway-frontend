import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo_dew.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top w-100">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="dwarka expressway logo" className="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav navbar_nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link nav_link active"
                aria-current="page"
                to="/"
              >
                New Launch Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav_link" to="/">
                Best Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav_link" to="/">
                All Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav_link" to="/">
                Contact
              </Link>
            </li>
          </ul>
          <div className="call_now_btn_box">
            <a href="tel:9999063322" className="call_now_btn">
              Call Now: +91 9999063322
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
