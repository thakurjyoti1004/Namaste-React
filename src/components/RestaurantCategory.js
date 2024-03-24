import { useState } from "react";
import CategoryItemList from "./CategoryItemList";

const RestaurantCategory = ({ categoryData }) => {
  const [showAccordian, setShowAccordian] = useState(false);
  console.log(categoryData, 22);
  const handleAccordianOnClick = () => {
    setShowAccordian(!showAccordian);
  };

  return (
    <div className="border border-grey w-6/12 mx-auto my-6 rounded-3xl px-4 shadow text-center p-2">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleAccordianOnClick}
      >
        <span className="font-semibold">
          {categoryData.title}({categoryData.itemCards.length})
        </span>
        <span>⏬</span>
      </div>
      {showAccordian && (
        <CategoryItemList
          key={categoryData.title}
          categoryData={categoryData}
        />
      )}
    </div>
  );
};

export default RestaurantCategory;
