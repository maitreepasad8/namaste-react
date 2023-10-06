import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../utils/mockData";
import React from "react";
import { useState } from "react";
const Body = () => {
  const [restList, setRestList] = useState(restaurants);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setRestList(restList.filter((r) => r.avgRating > 4.2));
          }}
        >
          Filter
        </button>
      </div>
      <div className="res-container">
        {restList.map((r) => (
          <RestaurantCard restaurant={r} key={r.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
