import React from "react";
import "./Navbar.css";
import CustomButton from "../Buttons/CustomButton";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img
          src="https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/logo_green.svg"
          alt=""
        />
      </div>
      <div className="nav-btn">
        <CustomButton type="submit">Get Started</CustomButton>
      </div>
    </div>
  );
}

export default Navbar;
