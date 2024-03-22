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
                to="/new-launch-projects.php"
              >
                New Launch Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav_link" to="/sco-plots-gurgaon">
                SCO Plots
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav_link" to="/best-deals">
                Best Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link nav_link"
                to="/dwarka-expressway-projects-list.php"
              >
                All Projects
              </Link>
            </li>
          </ul>
          <div className="call_now_btn_box" style={{ marginRight: "10px" }}>
            <a href="tel:9999063322">
              <button className="call_now_btn">
                <i class="fa fa-solid fa-phone-volume"></i> 9999063322
              </button>
            </a>
          </div>
          <div className="call_now_btn_box">
            <button className="call_now_btn">Enquire Now</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
