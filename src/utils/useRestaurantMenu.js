import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resMenuList, setResMenuList] = useState("");

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
  return resMenuList;
};

export default useRestaurantMenu;
