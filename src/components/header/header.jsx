import React from "react";

import "./header.styles.css";
import { ReactComponent as Logo } from "../../assets/imgs/logo.svg";
import Hamburger from "../../assets/imgs/icon-hamburger.svg";
import close from "../../assets/imgs/icon-close.svg";

import CustomButton from "../custom-button/custom-button";

const Header = ({ toggler, toggle }) => {
  const changeToggle = () => {
    toggler((prev) => !prev);
  };

  return (
    <div className="header">
      <div className="header-container container">
        <div className="logo-container">
          <Logo />
        </div>
        <ul className="nav-links">
          <li className="nav-link">Home</li>
          <li className="nav-link">About</li>
          <li className="nav-link">Contact</li>
          <li className="nav-link">Blog</li>
          <li className="nav-link">Careers</li>
        </ul>
        <CustomButton headerbtn />
        <button onClick={changeToggle} className="menu-btn">
          <img
            src={close}
            className={!toggle ? "close showclose" : "close"}
            alt="img"
          />
          <img
            src={Hamburger}
            className={toggle ? "burger showburger" : "burger"}
            alt="img"
          />
        </button>
      </div>
    </div>
  );
};

export default Header;
