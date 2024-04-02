import { useState, useContext } from "react";
import Logo from "../../logos/fooodLogo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const userName = useContext(UserContext);

  const handleLoginBtn = () => {
    loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login");
  };

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header flex justify-between items-center bg-gray-100">
      <div className="logo-container ">
        <img className="logo h-16 w-16" src={Logo} alt="logo" />
      </div>
      <div className="nav-items">
        <ul className="flex mr-8 p-3">
          <li className="p-3">
            <Link to="/">Home</Link>
          </li>
          <li className="p-3">
            <Link to="/about">About Us</Link>
          </li>
          <li className="p-3 ">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="p-3">Cart</li>
          <li className="p-3">
            <Link to="/groccery">Groccery</Link>
          </li>
          <li className="p-3 text-md">
            <button
              className="login-btn bg-gray-200 px-3 rounded-sm"
              onClick={handleLoginBtn}
            >
              {loginBtn}
            </button>
          </li>
          <li className="p-3">
            {onlineStatus === false ? <li>🔴 Offline</li> : <li>🔵 Online</li>}
          </li>
          <li className="p-3">{userName.userName}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
