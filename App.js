import React from "react";
import ReactDOM from "react-dom/client";

import Logo from './logos/fooodLogo.png';

const Header = () => {
  return (
    <div className="header">
      <div>
        <img src={Logo} alt="logo"/>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
