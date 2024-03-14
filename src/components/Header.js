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
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={Logo} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button className="login-btn" onClick={handleLoginBtn}>
            {loginBtn}
          </button>
          {onlineStatus===false ? <li>🔴 Offline</li> : <li>🔵 Online</li>}
        </ul>
      </div>
    </div>
  );
};

export default Header;
