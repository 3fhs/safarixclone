import React from "react";
import "./Sorting.css";

function Sorting({ toursLength, sortItems, setSortItems }) {
  return (
    <div className="sorting">
      <div className="available-tours">
        {toursLength} tours found <i className="bi bi-info-circle"></i>
      </div>
      <select value={sortItems} onChange={(e) => setSortItems(e.target.value)}>
        <option value="recomended">recomended</option>
        <option value="low">price - low to high</option>
        <option value="high">price - high to low</option>
      </select>
    </div>
  );
}

export default Sorting;
