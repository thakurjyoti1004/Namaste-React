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
  const { resName, cuisine } = props;
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-image"
        src="https://d4t7t8y8xqo0t.cloudfront.net/resized/720X480/group%2F1542%2Fmenu020170930184033.jpg"
        alt="res-img"
      />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>4.5 Stars</h4>
      <h4>38 min.</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body-container">
      <div className="search-bar">Search bar</div>
      <div className="restaurant-container">
        <RestaurantCard
          resName="Meghna foods"
          cuisine="Biryani, North Indian, Asian"
        />
        <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" />
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
