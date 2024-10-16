import React from "react";
import "./HeroHeader.css";

function HeroHeader() {
  return (
    <div className="hero-header">
      <div className="search-box">
        <div className="input-search">
          <i className="bi bi-search"></i>
          <input type="search" placeholder=" عن ماذا تبحث ؟ " />
        </div>
        <button className="btn-search"> بحث </button>
      </div>
      <div className="hero-text">
        <h3> مرحبا باشقائنا و اصدقائنا فى أحلى بقاع الأرض مصر </h3>
      </div>
    </div>
  );
}

export default HeroHeader;
