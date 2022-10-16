/* eslint-disable jsx-a11y/alt-text */
import Button from "react-bootstrap/Button";
import React from "react";
import "./Testiomonial.scss";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

function Testimonial() {
  return (
    <div className="testimonial">
      <h6>Testimonials</h6>
      <h2>What People Says</h2>
      <TestimonialCard />
    </div>
  );
}

function TestimonialCard() {
  return (
    <div className="testimonial-card">
      <img
        className="avaatar"
        src="https://i.pinimg.com/474x/1f/53/45/1f5345c69adb4511f213ea826024ed67.jpg"
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
    </div>
  );
}
export default Testimonial;
