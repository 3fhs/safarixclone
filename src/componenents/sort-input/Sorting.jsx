import React from "react";
import "./Sorting.css";

function Sorting({ toursLength, sortItems, setSortItems }) {
  return (
    <div className="sorting">
      <div className="available-tours">
        {toursLength} عدد الرحلات المتاحة <i className="bi bi-info-circle"></i>
      </div>
      <select value={sortItems} onChange={(e) => setSortItems(e.target.value)}>
        <option value="recomended"> الأسعار </option>
        <option value="low"> السعر - من أقل سعر الى أعلى سعر </option>
        <option value="high"> السعر - من أعلى سعر الى أقل سعر</option>
      </select>
    </div>
  );
}

export default Sorting;
