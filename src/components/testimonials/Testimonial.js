/* eslint-disable jsx-a11y/alt-text */
import Button from "react-bootstrap/Button";
import React from "react";
import "./Testiomonial.css";

function Testimonial() {
  return (
    <div className="testibody">
      <div className="testiintro">TESTIMONIALS</div>
      <div className="testihedding">What People Says</div>
      <div className="testiroseboxcontainer">
        <div className="testirosebox"></div>

        <div className="testimage">
          <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Portfolio-Images%2Ftesti%20image.png?alt=media&token=e2634f66-8774-4a43-a8c6-32ba1007d64d" />
        </div>
        <img
          className="testiRectangles"
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Portfolio-Images%2FFrame%2017.png?alt=media&token=76b7aff0-9901-41dc-8e63-c541eb56f2c6"
        ></img>

        <div className="testicard">
          <img
            className="up"
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Portfolio-Images%2Fdown.png?alt=media&token=7b4178e2-6264-4c13-b084-85ef446a6fb7"
          ></img>

          <div className="testicardcontent">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s
            <div className="peoplename">Karmani</div>
            <div className="testirole">FOUNDER AND CEO OF KARMANI</div>
          </div>
          <img
            className="down"
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Portfolio-Images%2Fup.png?alt=media&token=c6ed4476-6272-45dc-9508-587d3e02fa57"
          ></img>
        </div>
      </div>
      <div className="testibuttons">
        <Button variant="warning" size="lg">
          {"<="}
        </Button>
        <Button variant="warning" size="lg">
          {"=>"}
        </Button>
      </div>
    </div>
  );
}

export default Testimonial;
