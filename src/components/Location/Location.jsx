import React from "react";
import "./Location.css";

function Location() {
  return (
    <div className="location">
      <div className="title">
        <span>Enter your address to know Whats near you</span>
      </div>
      <div className="location-input">
        <div className="loc-img">
        <img
          src="	https://res.cloudinary.com/glovoapp/image/fetch///https://glovoapp.com/images/icons/flag--white.svg"
          alt=""
        />
        </div>
        <span>What's your adrress?</span>
      </div>
    </div>
  );
}
export default Location;
