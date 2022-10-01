/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <div className="nav">
        <div className="navbox">
          <a className="A" href="#">
            ABOUT ME
          </a>
          <a className="A" href="#">
            SERVICES
          </a>
          <a className="A" href="#">
            PORTFOLIO
          </a>
          <a className="A" href="#">
            TESTIMONIALS
          </a>
          <a className="A" href="#">
            CONTACT ME
          </a>
        </div>
      </div>
      <div>
        <button className="navbuttonb">Hire me</button>
      </div>
      <div>
        <button className="navlogo">
          <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Portfolio-Images%2FNav%20logo.png?alt=media&token=7f231ee5-ca39-4577-b46b-33e73a6b95b1"></img>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
