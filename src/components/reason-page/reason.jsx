import React from "react";
import "./reason.styles.css";

import online from "../../assets/imgs/icon-online.svg";
import budgeting from "../../assets/imgs/icon-budgeting.svg";
import onboarding from "../../assets/imgs/icon-onboarding.svg";
import iconApi from "../../assets/imgs/icon-api.svg";

const ReasonPage = () => (
  <div className="reasons">
    <div className="reason-container container">
      <h1>Why choose Easybank?</h1>
      <p className="leverage">
        We leverage Open Banking to turn your bank account into your financial
        hub. Control your finances like never before.
      </p>
      <div class="list">
        <div class="online">
          <img src={online} alt="img" />
          <h3>Online Banking</h3>
          <p>
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </p>
        </div>
        <div class="online">
          <img src={budgeting} alt="img" />
          <h3>Simple Budgeting</h3>
          <p>
            See exactly where your money goes each month. Receive notifications
            when you’re close to hitting your limits.
          </p>
        </div>
        <div class="online">
          <img src={onboarding} alt="img" />
          <h3>Fast Onboarding</h3>
          <p>
            We don’t do branches. Open your account in minutes online and start
            taking control of your finances right away
          </p>
        </div>
        <div class="online">
          <img src={iconApi} alt="img" />
          <h3>Open API</h3>
          <p>
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default ReasonPage;
