/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import Form from "react-bootstrap/Form"
import React from "react";
import "./ContactUs.css";
function ContactUs() {
  return (
    <div className="Usbody">
      <div className="usformandinfo">
        <div className="usinfo">
          <div className="uscontactus">Contact us</div>
          <div className="uspromise">
            We are committed to processing the information in order to contact
            you and talk about your project.
          </div>
          <div className="usmailc">
            <img
              className="us1"
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Portfolio-Images%2Fmail.png?alt=media&token=6c72b287-a812-402b-9a16-6ec67b27258a"
            />
            example@teamwebflow.com
          </div>
          <div className="usaddrc">
            <img
              className="us2"
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Portfolio-Images%2Faddr.png?alt=media&token=3c3e0562-adbb-4942-96ba-5c71f3e98e02"
            />
            4040 Lekki Summit Suite 402 Lake Manchester City
          </div>
          <div className="uspc">
            <img
              className="us3"
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Portfolio-Images%2Fphone.png?alt=media&token=ba3bf0bd-3e49-4013-a0f7-11ab59fecd35"
            />
            +44 123 777 5401
          </div>
        </div>
        <div className="usform">
          <div className="formcontainer">
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
              <div className="formbuttoncontainer">
                <button className="formbutton">Submit</button>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <div className="uslinks">
        <div className="uslogocol">
          <img
            className="uslogo"
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Portfolio-Images%2Flastlogo.png?alt=media&token=b05878fc-989c-4fd7-9ee4-c82068634804"
          />
          <div className="uslogodes">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum
          </div>
        </div>
        <div className="uscol1">
          <a className="E1" href="#">
            EXPLORE
          </a>
          <a className="E2" href="#">
            SUPPORTS
          </a>
          <a className="E3" href="#">
            ABOUT US
          </a>
          <a className="E4" href="#">
            BLOG
          </a>
        </div>
        <div className="uscol2">
          <a className="E5" href="#">
            LEGAL
          </a>
          <a className="E6" href="#">
            TERMS OF USE
          </a>
          <a className="E7" href="#">
            PRIVACY POLICY
          </a>
        </div>
        <div className="uscol2">
          <a className="E8" href="#">
            SOCIALS
          </a>
          <a className="E9" href="#">
            TWITTER
          </a>
          <a className="E10" href="#">
            LINKEDIN
          </a>
          <a className="E11" href="#">
            INSTAGRAM
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
