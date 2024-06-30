import React from "react";
import "./Banner.css";
import banner from "../../images/skyscrepper.jpg";

function Banner() {
  return (
    <div className="banner">
      <div className="banner-container">
        <div className="banner-text">
          <h1>welcome to egypt</h1>
        </div>
        <img src={banner} alt="banner" />
      </div>
    </div>
  );
}

export default Banner;
