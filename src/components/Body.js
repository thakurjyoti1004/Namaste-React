import { useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCategory from "./RestaurantCategory";

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

  const RestaurantCardWithDiscountOffer = withPromotedLabel(RestaurantCard);

  return (
    <div className="body-container px-20">
      <div className="flex search-container mr-4 mt-4 items-center ">
        <input
          type="search"
          name="search-bar"
          className="search-bar m-1 border rounded-md py-1 px-2 border-gray-600"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button
          className="bg-gray-200 rounded-md py-1 px-4 text-base text-center cursor-pointer mx-2"
          onClick={handleSearch}
        >
          Search
        </button>
        <button
          className="rounded-md px-4 py-1 cursor-pointer text-center  bg-blue-500 text-white"
          onClick={handleClick}
        >
          Top Rated
        </button>
      </div>
      <div className="restaurant-container grid my-10 gap-8 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1">
        {res.map((restaurants) => (
          <Link
            key={restaurants.info.id}
            to={`/restaurantMenu/${restaurants.info.id}`}
          >
            {restaurants?.info?.aggregatedDiscountInfoV3?.header ? (
              <RestaurantCardWithDiscountOffer resData={restaurants} />
            ) : (
              <RestaurantCard resData={restaurants} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
