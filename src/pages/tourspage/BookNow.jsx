import React from "react";
import "./SingleTour.css";

function BookNow({ priceFrom }) {
  return (
    <div className="book-now">
      <div className="book-now-header"> وفر حتى 35 % </div>
      <div className="book-now-body">
        <div className="book-now-booked">تم الحجز 42 مرة أمس</div>
        <div className="book-now-price-wrapper">
          <div className="book-now-price">
            <b>{priceFrom}$</b>
            <p>لكل شخص</p>
          </div>
          <button className="book-now-btn">احجز الآن</button>
        </div>
        <p className="book-now-more-info">
          <i className="bi bi-calendar-check"></i>
          <span>احجز الآن وادفع لاحقاً</span>
          لتأمين مكانك بدون دفع اليوم
        </p>
      </div>
    </div>
  );
}

export default BookNow;
