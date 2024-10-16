import React from "react";
import "./ToursList.css";
import RatingFile from "../rating/RatingFile";
import { Link } from "react-router-dom";

function TourListItem({ item }) {
  return (
    <div>
      <div className="item-tour" key={item.id}>
        <div className="item-tour-img">
          <img src={item.image} alt={item.title} />
          <span className="item-tour-text-img"> الرحلة </span>
        </div>
        <div className="body-item">
          <h3>{item.title.slice(0, 50)} ...</h3>
          <div className="item-duration">
            <span>{item.duration}</span>
            <i className="bi bi-dot"></i>
            المدة :
          </div>
          <div className="item-rating">
            <RatingFile rating={item.rating} reviews={item.reviews} />
          </div>
          <div className="item-price">
            <strong> السعر يبدا من $ {item.priceFrom}</strong>  للفرد الواحد
          </div>
          <Link to={`/tours/singel/${item.id}`} className="item-link">
            مشاهدة المزيد
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TourListItem;
