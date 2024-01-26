const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData.info;
  const { deliveryTime } = resData.info.sla;

  return (
    <div className="restaurant-card">
      <img
        className="restaurant-image"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="res-img"
      />
      <h3>{name}</h3>
      <div className="primary-text">
        <span>★ {avgRating}</span>
        <span> • {deliveryTime} mins.</span>
      </div>
      <span className="cuisines">{cuisines.join(", ")}</span>
      {/* <h4>{costForTwo}</h4> */}
    </div>
  );
};

export default RestaurantCard;
