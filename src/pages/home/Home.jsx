import React, { useState } from "react";
import HeroHeader from "../../componenents/hero-header/HeroHeader";
import PagiNumber from "../../componenents/pagiNumber/PagiNumber";
import Servieces from "../../componenents/servieces/Servieces";
import ToursList from "../../componenents/tours/ToursList";
import { toursList } from "../../data";
import Sorting from "../../componenents/sort-input/Sorting";
import Banner from "../../componenents/banner/Banner";
import NewIetter from "../../componenents/news-letter/NewIetter";

function Home() {
  // pagination number
  const [currentIndex, setCurrentIndex] = useState(1);
  const ITEMS_NUMBER = 6;
  const pages = Math.ceil(toursList.length / ITEMS_NUMBER);
  const firstIndex = (currentIndex - 1) * ITEMS_NUMBER;
  const lastIndex = currentIndex * ITEMS_NUMBER;

  //sort items
  const [sortItems, setSortItems] = useState("recomended");

  const sortingAllItems =
    sortItems === "low"
      ? toursList.sort((a, b) => a.priceFrom - b.priceFrom)
      : sortItems === "high"
      ? toursList.sort((a, b) => b.priceFrom - a.priceFrom)
      : toursList.sort((a, b) => a.rating - b.rating);

  const tours = sortingAllItems.slice(firstIndex, lastIndex);

  return (
    <div className="home">
      <HeroHeader />
      <Servieces />
      <Sorting
        toursLength={toursList.length}
        sortItems={sortItems}
        setSortItems={setSortItems}
        sortingAllItems={sortingAllItems}
      />
      <ToursList toursList={tours} />
      <PagiNumber
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        pages={pages}
      />
      <Banner />
      <NewIetter />
    </div>
  );
}

export default Home;
