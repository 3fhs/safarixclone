import React, { useState } from "react";
import "./Header.css";
import NavBar from "./header-ports/NavBar";
import NavLogo from "./header-ports/NavLogo";

function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="header">
      <NavLogo />
      <NavBar toggle={toggle} setToggle={setToggle} />
      {/* this is the menu  */}
      <div className="navbar-menu" onClick={() => setToggle((prev) => !prev)}>
        {toggle ? (
          <i className="bi bi-x-lg"></i>
        ) : (
          <i className="bi bi-list"></i>
        )}
      </div>
    </div>
  );
}

export default Header;
