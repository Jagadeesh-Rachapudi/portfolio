/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Button from "react-bootstrap/Button";
import "./CaseStudy.css";
function CaseStudy() {
  return (
    <div className="bodyofcasestudy">
      <div className="csinto">Case Study</div>
      <div className="cstitle">My Case Studies</div>
      <div className="cscontainer1">
        <div className="cspic1">
          <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Portfolio-Images%2FFrame%2011.png?alt=media&token=b3d1e1f8-351d-4f05-8b24-c608cee685b6"></img>
        </div>
        <div className="cscontent1">
          <div className="cscontent1num">01</div>
          <div className="cscontent1hedding"> Bakery Landing Page Design</div>
          <div className="cscontent1content">
            when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining essentially
            unchanged.
          </div>
          <div className="csbuttoncontainer">
            <button className="cscontentbutton">Details</button>
          </div>
        </div>
      </div>
      <div className="cscontainer2">
        <div className="cscontent2">
          <div className="cscontent2num">02</div>
          <div className="cscontent2hedding">
            Shoe Store Ecommerce Landing Page
          </div>
          <div className="cscontent2content">
            when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining essentially
            unchanged.
          </div>
          <div className="csbuttoncontainer">
            <button className="cscontentbutton">Details</button>
          </div>
        </div>
        <div className="cspic2">
          <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Portfolio-Images%2FFrame%2013.png?alt=media&token=59a9d9fd-431d-4dfe-9aab-46b11154f02b"></img>
        </div>
      </div>
      <div className="cscontainer3">
        <div className="cspic3">
          <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Portfolio-Images%2FFrame%2015.png?alt=media&token=5271e8a2-9458-42a9-a461-eb3109ee7bf1"></img>
        </div>
        <div className="cscontent3">
          <div className="cscontent1num">03</div>
          <div className="cscontent1hedding"> Bakery Landing Page Design</div>
          <div className="cscontent1content">
            when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining essentially
            unchanged.
          </div>
          <div className="csbuttoncontainer">
            <button className="cscontentbutton">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudy;
