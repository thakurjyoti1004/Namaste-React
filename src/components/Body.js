import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [res, setRes] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // useEffect(() => {
  //   if (!inputValue) {
  //     fetchData();
  //   }

  //   const lowercaseInputValue = inputValue.toLowerCase();
  //   let searchedTextResList = res.filter((restaurant) => {
  //     const lowercaseResList = restaurant.info.name.toLowerCase();
  //     return lowercaseResList.includes(lowercaseInputValue);
  //   });
  //   setRes(searchedTextResList);
  // }, [inputValue]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const apiData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const apiJsonData = await apiData.json();
    setRes(
      apiJsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h2>You're offline!! Please check your internet connection.</h2>;

  const handleClick = () => {
    let topRatedRestaurant = res.filter((ele) => {
      if (ele.info.avgRating > 4.3) {
        return ele;
      }
    });
    setRes(topRatedRestaurant);
  };

  const handleSearch = () => {
    if (inputValue === "") {
      fetchData();
    }

    const lowercaseInputValue = inputValue.toLowerCase();
    let searchedTextResList = res.filter((restaurant) => {
      const lowercaseResList = restaurant.info.name.toLowerCase();
      return lowercaseResList.includes(lowercaseInputValue);
    });
    setRes(searchedTextResList);
  };

  if (res.length === 0) {
    return (
      <div>
        <Shimmer />
      </div>
    );
  }

  return (
    <div className="body-container">
      <div className="filter flex">
        <div className="search-container mr-4 mt-1 p-1">
          <input
            type="search"
            name="search-bar"
            className="search-bar m-1 border rounded-md h-8 border-black"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <button
            className="search-btn h-8 px-1 text-base text-center cursor-pointer border rounded-md border-black"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div
          className="filter-btn border border-solid border-black rounded-lg h-8 w-52 cursor-pointer text-center p-1 mt-3 text-base"
          onClick={handleClick}
        >
          Top Rated Restaurant
        </div>
      </div>
      <div className="restaurant-container grid my-10 mx-20 gap-8 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1">
        {res.map((restaurants) => (
          <Link
            key={restaurants.info.id}
            to={`/restaurantMenu/${restaurants.info.id}`}
          >
            <RestaurantCard resData={restaurants} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
