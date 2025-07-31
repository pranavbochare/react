import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginLogoutButton, setLoginLogoutButton] = useState("Login");

  const status = useOnlinestatus();
  return (
    <div className="flex justify-between">
      <div className="image-container">
        <img className="w-40" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex">
          <li className="mx-10">online status : {status ? "online" : "offline"}</li>
          <li className="mx-10">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-10">
            {" "}
            <Link to="/about">About Us</Link>
          </li>
          <li className="mx-10">
            {" "}
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="mx-10">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="mx-10">Cart</li>
          <button
            className="mx-10"
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
