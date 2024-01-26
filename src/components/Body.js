import { useState } from "react";
import resList from "../utils/constants";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [res, setTopRatedRes] = useState(resList);

  const handleClick = () => {
    let topRatedRestaurant = resList.filter((ele) => {
      if (ele.info.avgRating >= 4) {
        return ele;
      }
    });
    console.log(topRatedRestaurant);
    setTopRatedRes(topRatedRestaurant);
  };

  return (
    <div className="body-container">
      <div className="filter">
        <div className="filter-btn" onClick={handleClick}>
          Top Rated Restaurant
        </div>
      </div>
      <div className="restaurant-container">
        {res.map((restaurants) => (
          <RestaurantCard key={restaurants.info.id} resData={restaurants} />
        ))}
      </div>
    </div>
  );
};

export default Body;
