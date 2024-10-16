import React from "react";
import "./Servieces.css";

function Servieces() {
  return (
    <div className="serviecs">
      <div className="serv-link peach">
        <span> سياحة شاطئية </span>
      </div>
      <div className="serv-link deny">
        <span> سياحة دينية </span>
      </div>
      <div className="serv-link medical">
      <span> سياحة علاجية </span>
      </div>
      <div className="serv-link history">
      <span> أماكن أثرية </span>
      </div>
    </div>
  );
}

export default Servieces;
