import React from "react";
import ReactDOM from "react-dom/client";

import Logo from "./logos/fooodLogo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={Logo} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-image"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resObj.cloudinaryImageId
        }
        alt="res-img"
      />
      <h3>{resObj.name}</h3>
      <h4>{resObj.cuisines.join(", ")}</h4>
      <h4>{resObj.avgRatingString} stars</h4>
      <h4>{resObj.sla.slaString}</h4>
      <h4>{resObj.costForTwo}</h4>
    </div>
  );
};

const resObj = {
  id: "337335",
  name: "Kannur food kitchen",
  cloudinaryImageId: "a27weqanhnszqiuzsoik",
  locality: "1st  Stage",
  areaName: "BTM Layout",
  costForTwo: "₹200 for two",
  cuisines: ["Kerala", "Biryani", "Beverages"],
  avgRating: 4,
  parentId: "114756",
  avgRatingString: "4.0",
  totalRatingsString: "10K+",
  sla: {
    deliveryTime: 27,
    lastMileTravel: 2.9,
    serviceability: "SERVICEABLE",
    slaString: "27 mins",
    lastMileTravelString: "2.9 km",
    iconType: "ICON_TYPE_EMPTY",
  },
  availability: {
    nextCloseTime: "2024-01-19 04:00:00",
    opened: true,
  },
  badges: {
    textExtendedBadges: [
      {
        iconId: "guiltfree/GF_Logo_android_3x",
        shortDescription: "options available",
        fontColor: "#7E808C",
      },
    ],
  },
  isOpen: true,
  type: "F",
  badgesV2: {
    entityBadges: {
      imageBased: {},
      textBased: {},
      textExtendedBadges: {
        badgeObject: [
          {
            attributes: {
              description: "",
              fontColor: "#7E808C",
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
            },
          },
        ],
      },
    },
  },
  aggregatedDiscountInfoV3: {
    header: "50% OFF",
    discountTag: "FLAT DEAL",
  },
  orderabilityCommunication: {
    title: {},
    subTitle: {},
    message: {},
    customIcon: {},
  },
  differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
      mediaType: "ADS_MEDIA_ENUM_IMAGE",
      lottie: {},
      video: {},
    },
  },
  reviewsSummary: {},
  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  restaurantOfferPresentationInfo: {},
};

const Body = () => {
  return (
    <div className="body-container">
      <div className="search-bar">Search bar</div>
      <div className="restaurant-container">
        <RestaurantCard resData={resObj} />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
