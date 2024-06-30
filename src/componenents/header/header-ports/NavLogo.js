import React from "react";
import "../Header.css";
import logo from "../../../images/logo.png";

function NavLogo() {
  return (
    <div className="logo">
      <img src={logo} alt="logo" />
      <div className="logo-text">
        <span>SAFARI</span>
        <span className="logo-text-in">IN</span>
        <span>EGYPT</span>
      </div>
    </div>
  );
}

export default NavLogo;
