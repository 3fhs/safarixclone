import React from "react";
import TourListItem from "./TourListItem";

function ToursList({ toursList }) {
  return (
    <div className="tourlist">
      {toursList.map((item) => (
        <TourListItem item={item} key={item.id} />
      ))}
    </div>
  );
}

export default ToursList;
