import React from "react";
import "../Header.css";
import logo from "../../../images/egyptSafari.png";

function NavLogo() {
  return (
    <div className="logo">
      <img src={logo} alt="logo" />
    </div>
  );
}

export default NavLogo;
