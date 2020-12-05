import React from "react";
import CustomButton from "../custom-button/custom-button";
// import { ReactComponent as Phones } from "../../assets/imgs/image-mockups.png";
import phones from "../../assets/imgs/image-mockups.png";
import "./intro-page.styles.css";
import Mobilenav from "../mobile-nav/mobile-nav";

const IntroPage = ({ toggle }) => (
  <div className="intro">
    <div className="intro-container container">
      <div className="left">
        <div className="left-flex">
          <h1>Next generation digital banking</h1>
          <p>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <CustomButton />
        </div>
      </div>
      <div className="right">
        {/* <Phones /> */}
        <div>
          <img src={phones} alt="phones" className="phones" />
        </div>
      </div>
      <Mobilenav toggle={toggle} />
    </div>
  </div>
);

export default IntroPage;
