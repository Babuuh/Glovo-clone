import { React } from "react";
import "./CustomButton.css";

const CustomButton = ({ children }) => {
  return (
    <button className="custom-btn">
      {children}
    </button>
  );
};

export default CustomButton;