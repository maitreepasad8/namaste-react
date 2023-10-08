import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../utils/mockData";
import React, { useEffect } from "react";
import { useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [restList, setRestList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRest, setFilteredRest] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setRestList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
        (r) => r.info
      )
    );
    setFilteredRest(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
        (r) => r.info
      )
    );
  };

  if (restList.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              setFilteredRest(
                restList.filter((r) =>
                  r.name.toLowerCase().includes(searchText)
                )
              );
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            setFilteredRest(restList.filter((r) => r.avgRating > 4.2));
          }}
        >
          Filter
        </button>
      </div>
      <div className="res-container">
        {filteredRest.map((r) => (
          <RestaurantCard restaurant={r} key={r.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
