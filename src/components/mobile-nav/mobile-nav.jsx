import React from "react";
import "./mobile-nav.css";

const Mobilenav = ({ toggle }) => {
  return (
    <div className={!toggle ? "mobilenav reveal" : "mobilenav"}>
      <ul className="mobile-links">
        <li className="mobile-link">Home</li>
        <li className="mobile-link">About</li>
        <li className="mobile-link">Contact</li>
        <li className="mobile-link">Blog</li>
        <li className="mobile-link">Careers</li>
      </ul>
    </div>
  );
};

export default Mobilenav;
