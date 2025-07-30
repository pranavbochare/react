import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginLogoutButton, setLoginLogoutButton] = useState("Login");

  const status = useOnlinestatus();
  return (
    <div className="header">
      <div className="image-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>online status : {status ? "online" : "offline"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/about">About Us</Link>
          </li>
          <li>
            {" "}
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
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
