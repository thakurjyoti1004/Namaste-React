import { useEffect, useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  // lifting the state up //
  const [index, setIndex] = useState("");
  const [showAccordian, setShowAccrodian] = useState(false);

  // custom hook for fetching API //
  const resMenuList = useRestaurantMenu(resId);
  if (!resMenuList) {
    return (
      <div>
        <Shimmer />
      </div>
    );
  }

  const name = resMenuList?.cards[2]?.card?.card?.info?.name;
  const cuisines = resMenuList?.cards[2]?.card?.card?.info?.cuisines;
  const city = resMenuList?.cards[2]?.card?.card?.info?.city;
  console.log(resMenuList, name, "list");

  const getRestaurantMenuData = () => {
    const carousel =
      resMenuList &&
      resMenuList.cards[4] &&
      resMenuList.cards[4].groupedCard &&
      resMenuList.cards[4].groupedCard.cardGroupMap &&
      resMenuList.cards[4].groupedCard.cardGroupMap.REGULAR &&
      resMenuList.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1] &&
      resMenuList.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card?.card
        .carousel;
    const itemCards =
      resMenuList &&
      resMenuList.cards[4] &&
      resMenuList.cards[4].groupedCard &&
      resMenuList.cards[4].groupedCard.cardGroupMap &&
      resMenuList.cards[4].groupedCard.cardGroupMap.REGULAR &&
      resMenuList.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1] &&
      resMenuList.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card?.card
        .itemCards;
    if (carousel && carousel.length) {
      return carousel;
    } else if (itemCards && itemCards.length) {
      return itemCards;
    }
    return [];
  };
  const categoryItemsData =
    resMenuList &&
    resMenuList.cards[4] &&
    resMenuList.cards[4].groupedCard &&
    resMenuList.cards[4].groupedCard.cardGroupMap &&
    resMenuList.cards[4].groupedCard.cardGroupMap.REGULAR &&
    resMenuList.cards[4].groupedCard.cardGroupMap.REGULAR.cards;

  const categoryItems =
    categoryItemsData &&
    categoryItemsData.filter(
      (items) =>
        items &&
        items.card &&
        items.card?.["card"] &&
        items.card?.["card"]?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categoryItems, 455);

  const getItemPrice = (menuData) => {
    if (
      menuData &&
      menuData.dish &&
      menuData.dish.info &&
      menuData.dish.info.defaultPrice
    ) {
      return menuData.dish.info.defaultPrice / 100;
    } else if (
      menuData &&
      menuData.dish &&
      menuData.dish.info &&
      menuData.dish.info.price
    ) {
      return menuData.dish.info.price / 100;
    }
    if (
      menuData &&
      menuData.card &&
      menuData.card.info &&
      menuData.card.info.defaultPrice
    ) {
      return menuData.card.info.defaultPrice / 100;
    } else if (
      menuData &&
      menuData.card &&
      menuData.card.info &&
      menuData.card.info.price
    ) {
      return menuData.card.info.price / 100;
    }
  };

  const getImageId = (data) => {
    if (data && data.dish && data.dish.info && data.dish.info.imageId) {
      return data.dish.info.imageId;
    } else if (data && data.card && data.card.info && data.card.info.imageId) {
      return data.card.info.imageId;
    }
  };

  return (
    <div className="menu-container block m-5 justify-center mr-4">
      <h1 className="font-bold ml-24 mt-2">{name}</h1>
      <h2 className="font-bold ml-24">{cuisines && cuisines.join(",")}</h2>
      <h3 className="font-bold ml-24">{city}</h3>
      <h1 className="font-bold ml-24">{name} Menu:</h1>

      {getRestaurantMenuData().map((list) => {
        console.log(list.dish, "dish", list.card, "Menu Data");
        return (
          <div
            className="menu-card flex flex-row justify-between border border-solid border-gray-300 rounded-lg my-3 mx-24 max-h-40 overflow-hidden"
            key={list.dish ? list.dish.info.id : list.card.info.id}
          >
            <div className="menu-details p-4">
              <h2 className="font-bold">
                {list.dish ? list.dish.info.name : list.card.info.name}
              </h2>
              <h4 className="font-bold">₹ {getItemPrice(list)}</h4>
              <p className="font-light">
                {list && list.dish
                  ? list.dish.info.description
                  : list.card.info.description}
              </p>
            </div>
            <img
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                getImageId(list)
              }
              alt="menu-img"
            />
          </div>
        );
      })}
      {categoryItems.map((category, idx) => (
        // controlled component- controlled by RestaurantMenu // 
        <RestaurantCategory
          key={idx}
          idx={idx}
          showAccordian={index === idx ? true : false}
          setIndex={setIndex}
          categoryData={category && category.card && category.card.card}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
