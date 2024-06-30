import React from "react";
import "../Header.css";
import { Link } from "react-router-dom";

function NavBar({ toggle, setToggle }) {
  return (
    <nav className="navbar">
      <ul
        className="navbar-links"
        style={{
          clipPath: toggle && "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        }}
      >
        <Link to="/" className="navbar-link" onClick={() => setToggle(false)}>
          <i className="bi bi-house-fill"></i> HOME
        </Link>
        <Link
          to="/about"
          className="navbar-link"
          onClick={() => setToggle(false)}
        >
          <i className="bi bi-bank2"></i>ABOUT
        </Link>
        <Link
          to="/login"
          className="navbar-link"
          onClick={() => setToggle(false)}
        >
          <i className="bi bi-arrow-right-square-fill"></i>LOGIN
        </Link>
        <Link
          to="/register"
          className="navbar-link"
          onClick={() => setToggle(false)}
        >
          <i className="bi bi-person-plus-fill"></i>REGISTER
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
