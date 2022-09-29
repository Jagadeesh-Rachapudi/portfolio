import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav">
      <ul className="horizontal-list">
        <li className="logo"></li>
        <li className="buttoninnav">ABOUT ME</li>
        <li className="buttoninnav">SERVICES</li>
        <li className="buttoninnav">PORTFOLIO</li>
        <li className="buttoninnav">TESTIMONIALS</li>
        <li className="buttoninnavend">CONTACT ME</li>
        <button className="Button">Hire Me</button>
      </ul>
    </div>
  );
}

export default Navbar;
