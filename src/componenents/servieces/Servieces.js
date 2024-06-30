import React from "react";
import "./Servieces.css";

function Servieces() {
  return (
    <div className="serviecs">
      <div className="serv-link">
        <i className="bi bi-card-image"></i>
        <span>Adventures</span>
      </div>
      <div className="serv-link">
        <i className="bi bi-people-fill"></i>
        <span>Family tours</span>
      </div>
      <div className="serv-link">
        <i className="bi bi-buildings"></i>
        <span>City cards</span>
      </div>
      <div className="serv-link">
        <i className="bi bi-globe"></i>
        <span>Multy-day trips</span>
      </div>
    </div>
  );
}

export default Servieces;
