import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
  const [loginLogoutButton, setLoginLogoutButton] = useState("Login");
  return (
    <div className="header">
      <div className="image-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="loginLogoutBtn"
            onClick={() => {
              loginLogoutButton === "Login"
                ? setLoginLogoutButton("Logout")
                : setLoginLogoutButton("Login");
            }}>
            {loginLogoutButton}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
