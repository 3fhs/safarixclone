import React from "react";
import "./NewIetter.css";
import letter from "../../images/newsletterimage.jpg";

function NewIetter() {
  return (
    <div className="new-letter">
      <div className="new-letter-container">
        <div className="letter-img">
          <img src={letter} alt="letter-img" />
        </div>
        <div className="letter-content">
          <h2>your egypt itinerary</h2>
          <p>hi guys ....................</p>
          <div className="input-letter">
            <input type="text" placeholder="email" />
            <button className="btn-letter">sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewIetter;
