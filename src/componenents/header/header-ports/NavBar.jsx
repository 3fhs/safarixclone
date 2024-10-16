import React from "react";
import "../Header.css";
import { Link } from "react-router-dom";

function NavBar({ toggle, setToggle }) {
  return (
      <ul
        className="navbar-links"
        style={{
          clipPath: toggle && "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        }}
      >
        <Link to="/" className="navbar-link" onClick={() => setToggle(false)}>
          <i className="bi bi-house-fill"></i> الرئيسية
        </Link>
        <Link
          to="/about"
          className="navbar-link"
          onClick={() => setToggle(false)}
        >
          <i className="bi bi-bank2"></i> من نحن
        </Link>
        <Link
          to="/login"
          className="navbar-link"
          onClick={() => setToggle(false)}
        >
          <i className="bi bi-arrow-right-square-fill"></i> تسجيل الدخول
        </Link>
        <Link
          to="/register"
          className="navbar-link"
          onClick={() => setToggle(false)}
        >
          <i className="bi bi-person-plus-fill"></i> انشاء حساب
        </Link>
      </ul>
  );
}

export default NavBar;
