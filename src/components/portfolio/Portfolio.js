/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import "./Portfolio.css";
function Portfolio() {
  return (
    <div className="portbody" id="portfolio">
      <div className="portintro">PORTFOLIO</div>
      <div className="porttitle">People Lie Work Don’t</div>
      <a className="portviewall" href="#Explore_All_Services">
        Explore All Services
      </a>

      <div className="portfloor1">
        <div className="porta1">
          <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Portfolio-Images%2Fporta1.png?alt=media&token=14d550be-6539-422d-b9f4-f9ab0975718a"></img>
        </div>
        <div className="portb1">
          <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Portfolio-Images%2Fportb1.png?alt=media&token=35ff8380-174f-46a9-a95d-d215d3de0646"></img>
        </div>
      </div>
      <div className="portfloor2">
        <div className="porta2">
          <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Portfolio-Images%2Fporta2.png?alt=media&token=d9a57d68-c916-4268-81dc-f1cd2d247ba5"></img>
        </div>
        <div className="portb2">
          <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Portfolio-Images%2Fportb2.png?alt=media&token=d9d142d3-0514-4e8c-8a42-7ff57654497c"></img>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
