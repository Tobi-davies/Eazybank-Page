import React from "react";
import "./custom-button.styles.css";

const CustomButton = ({ headerbtn }) => (
  <button className={headerbtn ? "hide custom" : "custom"}>
    Requite Invite
  </button>
);

export default CustomButton;
