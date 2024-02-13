import { useState } from "react";
import Logo from "../../logos/fooodLogo.png";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  const handleLoginBtn = () => {
    loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login");
  };

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
          <button className="login-btn" onClick={handleLoginBtn}>
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
