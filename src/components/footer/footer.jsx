import React from "react";
import "./footer.styles.css";
import { ReactComponent as Footerlogo } from "../../assets/imgs/logo-footer.svg";
import CustomButton from "../custom-button/custom-button";

const Footer = () => (
  <div className="footer">
    <div className="footer-container container">
      <div className="first-foot">
        <div className="footer-logo foot1">
          <Footerlogo />
          <div class="icon">
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-youtube"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-pinterest"></i>
            <i class="fab fa-instagram"></i>
          </div>
        </div>
        <div className="foot2">
          <ul>
            <li>About Us</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="foot3">
          <ul>
            <li>Careers</li>
            <li>Support</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      <div className="second-foot">
        <CustomButton />
        <p className="easy">© Easybank. All Rights Reserved</p>
      </div>
    </div>
  </div>
);

export default Footer;
