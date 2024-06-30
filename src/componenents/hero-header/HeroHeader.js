import React from "react";
import "./HeroHeader.css";

function HeroHeader() {
  return (
    <div className="hero-header">
      <div className="search-box">
        <div className="input-search">
          <i className="bi bi-search"></i>
          <input type="search" placeholder="what are you lokking for ?" />
        </div>
        <button className="btn-search">search</button>
      </div>
      <div className="hero-text">
        <h1>EGYPT</h1>
        <h3>come to visit egypt </h3>
      </div>
    </div>
  );
}

export default HeroHeader;
