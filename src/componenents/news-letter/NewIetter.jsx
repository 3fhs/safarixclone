import React from "react";
import "./NewIetter.css";
import letter from "../../images/اماكن-اثرية-معبد-ابو-سمبل.jpg";

function NewIetter() {
  return (
    <div className="new-letter">
      <div className="new-letter-container">
        <div className="letter-img">
          <img src={letter} alt="letter-img" />
        </div>

        <div className="letter-content">
          <h2> لمعرفة مسار رحلتك </h2>
          <p> من فضلك ادخل بريدك الاليكترونى </p>
          <div className="input-letter">
            <input type="email" placeholder=" اكتب بريدك الالكترونى " />
            <button className="btn-letter"> تسجيل الدخول </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewIetter;
