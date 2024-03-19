const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData.info;
  const { deliveryTime } = resData.info.sla;

  return (
    <div className="restaurant-card rounded-b-lg bg-slate-100 transition duration-150 ease-in-out hover:scale-95">
      <img
        className="restaurant-image w-full object-cover h-52 rounded-t-lg"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="res-img"
      />
      <h3 className="my-2 pl-2">{name}</h3>
      <div className="primary-text font-bold pl-2">
        <span>★ {avgRating}</span>
        <span> • {deliveryTime} mins.</span>
      </div>
      <span className="cuisines w-52 overflow-hidden whitespace-nowrap text-ellipsis mt-2 pl-2 inline-block font-light">
        {cuisines.join(", ")}
      </span>
      {/* <h4>{costForTwo}</h4> */}
    </div>
  );
};

export default RestaurantCard;
