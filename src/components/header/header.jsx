import React from "react";

import "./header.styles.css";
import { ReactComponent as Logo } from "../../assets/imgs/logo.svg";
import CustomButton from "../custom-button/custom-button";

const Header = () => (
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
      <CustomButton />
    </div>
  </div>
);

export default Header;
