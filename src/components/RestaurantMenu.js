import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resMenuList, setResMenuList] = useState("");
  const { resId } = useParams();

  useEffect(() => {
    restaurantMenuFetchedData();
  }, []);

  // Client-side Routing

  const restaurantMenuFetchedData = async () => {
    const fetchedData = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" +
        resId
    );
    const jsonData = await fetchedData.json();

    setResMenuList(jsonData.data);
  };

  if (!resMenuList) {
    return (
      <div>
        <Shimmer />
      </div>
    );
  }

  const { name, cuisines, city } = resMenuList?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resMenuList.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card
      .card;
  return (
    <div className="menu-container">
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h3>{city}</h3>
      {itemCards.map((list) => {
        return (
          <div className="menu-card" key={list.card.info.id}>
            <div className="menu-details">
              <h2>{list.card.info.name}</h2>
              <h4>{list.card.info.price}</h4>
              <p>{list.card.info.description}</p>
            </div>
            <img
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                list.card.info.imageId
              }
              alt="menu-img"
            />
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
