import React from "react";
import "./PagiNumber.css";

function PagiNumber({ pages, currentIndex, setCurrentIndex }) {
  const pagiNumber = [];
  for (let i = 1; i <= pages; i++) {
    pagiNumber.push(i);
  }

  return (
    <div className="pagination">
      <button
        className="btn-pre page"
        onClick={() => setCurrentIndex((prev) => prev - 1)}
        disabled={currentIndex === 1}
      >
        previous
      </button>
      {pagiNumber.map((page) => (
        <div
          className={currentIndex === page ? "page active" : "page"}
          key={page}
          onClick={() => setCurrentIndex(page)}
        >
          {page}
        </div>
      ))}
      <button
        className="btn-next page"
        onClick={() => setCurrentIndex((prev) => prev + 1)}
        disabled={currentIndex === pages}
      >
        next
      </button>
    </div>
  );
}

export default PagiNumber;
