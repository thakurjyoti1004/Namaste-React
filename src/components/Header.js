import { useState } from "react";
import Logo from "../../logos/fooodLogo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  const handleLoginBtn = () => {
    loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login");
  };

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header bg-purple-100 flex border shadow justify-between items-center ">
      <div className="logo-container ">
        <img className="logo w-32" src={Logo} alt="logo" />
      </div>
      <div className="nav-items">
        <ul className="flex mr-8">
          <li className="p-3 text-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="p-3 text-lg">
            <Link to="/about">About Us</Link>
          </li>
          <li className="p-3 text-lg">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="p-3 text-lg">Cart</li>
          <li className="p-3 text-lg">
            <Link to="/groccery">Groccery</Link>
          </li>
          <li className="p-3 text-lg">
            <button
              className="login-btn bg-green-600 px-3 rounded-xl"
              onClick={handleLoginBtn}
            >
              {loginBtn}
            </button>
          </li>
          <div className="p-3 text-lg">
            {onlineStatus === false ? <li>🔴 Offline</li> : <li>🔵 Online</li>}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
