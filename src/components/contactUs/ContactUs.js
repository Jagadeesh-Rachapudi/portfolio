/* eslint-disable jsx-a11y/alt-text */
import Form from "react-bootstrap/Form";
import React from "react";
import "./ContactUs.css";
function ContactUs() {
  return (
    <div className="Usbody">
      <div className="UsUpper">
        <div className="doornumber">
          <div className="Contactus">Contact us</div>
          <div className="welcome">
            We are committed to processing the information in order to contact
            you and talk about your project.
          </div>
          <div className="email">
            <img
              className="mailpic"
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Portfolio-Images%2Fmail.png?alt=media&token=6c72b287-a812-402b-9a16-6ec67b27258a"
            ></img>
            example@teamwebflow.com
          </div>
          <img
            className="addpic"
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Portfolio-Images%2Faddr.png?alt=media&token=3c3e0562-adbb-4942-96ba-5c71f3e98e02"
          ></img>
          <div className="address">
            4040 Lekki Summit Suite 402 Lake Manchester City
          </div>
          <div className="phone">
            <img
              className="phonepic"
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Portfolio-Images%2Fphone.png?alt=media&token=ba3bf0bd-3e49-4013-a0f7-11ab59fecd35"
            ></img>
            +44 123 777 5401
          </div>
        </div>
        <div className="usform">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control placeholder="Name*" type="text" id="formname" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control placeholder="Email*" type="Email" id="formmail" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control placeholder="Website*" type="text" id="formweb" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control placeholder="Message" type="text" id="formmsg" />
            </Form.Group>
            <button className="formbutton">Submit</button>
          </Form>
        </div>
      </div>
      <img
        className="lastlogo"
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Portfolio-Images%2Flastlogo.png?alt=media&token=b05878fc-989c-4fd7-9ee4-c82068634804"
      ></img>
      <div className="lasttext">
        is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum
      </div>
      <div className="E1">EXPLORE</div>
      <div className="E2">SUPPORTS</div>
      <div className="E3">ABOUT US</div>
      <div className="E4">BLOG</div>
      <div className="E5">LEGAL</div>
      <div className="E6">TERMS OF USE</div>
      <div className="E7">PRIVACY POLICY</div>
      <div className="E8">SOCIALS</div>
      <div className="E9">TWITTER</div>
      <div className="E10">LINKEDIN</div>
      <div className="E11">INSTAGRAM</div>
    </div>
  );
}

export default ContactUs;
