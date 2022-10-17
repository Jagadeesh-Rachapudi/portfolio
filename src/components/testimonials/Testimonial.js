/* eslint-disable jsx-a11y/alt-text */
import Button from "react-bootstrap/Button";
import React from "react";
import "./Testiomonial.scss";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

function Testimonial() {
  return (
    <div className="testimonial" id="tesimonials">
      <div className="testiintro">TESTIMONIALS</div>
      <div className="testihedding">What People Says</div>
      <TestimonialCard />
    </div>
  );
}

function TestimonialCard() {
  return (
    <div className="testimonial-card">
      <img
        className="avaatar"
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Portfolio-Images%2FEllipse%202.png?alt=media&token=8b76ec18-e2be-4a57-bd62-6e35c56df6ab"
      />
      <div className="content">
        <RiDoubleQuotesL className="left" />
        <div className="sub-content">
          <p>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s
          </p>
          <p className="author"> Karmani</p>
          <p className="designation">FOUNDER AND CEO OF KARMANI</p>
        </div>
        <RiDoubleQuotesR className="right" />
      </div>
      <div className="ButtonsContainer">
        <button
          className="leftB"
          onClick={() => {
            console.log("Left Button Clicked");
          }}
        >
          ←
        </button>
        <button
          className="rightB"
          onClick={() => {
            console.log("Right Button Clicked");
          }}
        >
          →
        </button>
      </div>
    </div>
  );
}
export default Testimonial;
