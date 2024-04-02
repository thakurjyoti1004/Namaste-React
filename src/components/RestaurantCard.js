import { data } from "autoprefixer";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData.info;
  const { deliveryTime } = resData.info.sla;
  return (
    <div className="restaurant-card rounded-b-lg bg-slate-100 transition duration-150 ease-in-out hover:scale-95 z-0">
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
      <span className="cuisines whitespace-nowrap w-52 overflow-hidden  text-ellipsis mt-2 pl-2 inline-block font-light">
        {cuisines.join(", ")}
      </span>
      {/* <h4>{costForTwo}</h4> */}
    </div>
  );
};

export const withPromotedLabel = (Component) => {
  return (props) => {
    const { header, subHeader } = props.resData.info.aggregatedDiscountInfoV3;

    return (
      <div className="relative">
        <label className="border border-black text-black-100 font-bold cursor rounded-r-3xl rounded-tl-2xl p-1  ml-2 mb-2 bg-white absolute bottom-24 left-0 hover: z-10">
          {header} {subHeader}
        </label>
        <Component {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
