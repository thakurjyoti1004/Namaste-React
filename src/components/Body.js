import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [res, setTopRatedRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const apiData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const apiJsonData = await apiData.json();

    setTopRatedRes(
      apiJsonData?.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const handleClick = () => {
    let topRatedRestaurant = resList.filter((ele) => {
      if (ele.info.avgRating >= 4) {
        return ele;
      }
    });
    setTopRatedRes(topRatedRestaurant);
  };

  return (
    <div className="body-container">
      <div className="filter">
        <div className="filter-btn" onClick={handleClick}>
          Top Rated Restaurant
        </div>
      </div>
      {/* <div className="search-box">
        <input type="search" name="search-box"/>
      </div> */}
      <div className="restaurant-container">
        {res.map((restaurants) => (
          <RestaurantCard key={restaurants.info.id} resData={restaurants} />
        ))}
      </div>
    </div>
  );
};

export default Body;
