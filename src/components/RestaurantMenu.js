import { useEffect, useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  // custom hook for fetching API //
  const resMenuList = useRestaurantMenu(resId);
  if (!resMenuList) {
    return (
      <div>
        <Shimmer />
      </div>
    );
  }

  const { name, cuisines, city } = resMenuList?.cards[0]?.card?.card?.info;
  const { carousel } =
    resMenuList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;
  console.log(
    resMenuList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card,
    "accordian Data"
  );
  return (
    <div className="menu-container block m-5 justify-center mr-4">
      <h1 className="font-bold ml-24 mt-2">{name}</h1>
      <h2 className="font-bold ml-24">{cuisines.join(", ")}</h2>
      <h3 className="font-bold ml-24">{city}</h3>
      <h1 className="font-bold ml-24">{name} Menu:</h1>

      {carousel &&
        carousel.map((list) => {
          return (
            <div
              className="menu-card flex flex-row justify-between border border-solid border-black my-3 mx-24 max-h-40 overflow-hidden"
              key={list.dish.info.id}
            >
              <div className="menu-details p-4">
                <h2 className="font-bold">{list?.dish?.info?.name}</h2>
                <h4 className="font-bold">
                  ₹ {list?.dish?.info?.defaultPrice / 100}
                </h4>
                <p className="font-light">{list?.dish?.info?.description}</p>
              </div>
              <img
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                  list?.dish?.info?.imageId
                }
                alt="menu-img"
              />
            </div>
          );
        })}
      <RestaurantCategory />
    </div>
  );
};

export default RestaurantMenu;
