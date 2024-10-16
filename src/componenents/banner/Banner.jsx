import React from "react";
import "./Banner.css";
import banner from "../../images/باب-زويلة.jpeg";

function Banner() {
  return (
    <div className="banner">
      <div className="banner-container">
        <div className="banner-text">
          <h1> أجمل بلاد العالم بلدى , مصر ترحب بضيوفها و اشقائها و اصدقائها </h1>
        </div>
        <img src={banner} alt="banner" />
      </div>
    </div>
  );
}

export default Banner;
