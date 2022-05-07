import React from "react";

import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <div className="logoContainer">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="headerCenter">
        <div className="headerLinks">
          <p>Background</p>
          <p>What we do?</p>
          <p>About Us</p>
          <p>Team</p>
          <p>Contact us</p>
        </div>
      </div>
      <div className="headerRight">
        <button className="btn">Register now! </button>
      </div>
    </div>
  );
};
export default Header;
