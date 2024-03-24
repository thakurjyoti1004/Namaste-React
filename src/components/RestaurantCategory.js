import CategoryItemList from "./CategoryItemList";

const RestaurantCategory = ({ categoryData }) => {
  console.log(categoryData,22)
  return (
    <div className="border border-grey w-6/12 mx-auto my-6 rounded-3xl px-4 shadow text-center p-2">
      <div className="flex justify-between">
        <span className="font-semibold">
          {categoryData.title}({categoryData.itemCards.length})
        </span>
        <span>⏬</span>
      </div>
      <CategoryItemList categoryData={categoryData}/>
    </div>
  );
};

export default RestaurantCategory;
