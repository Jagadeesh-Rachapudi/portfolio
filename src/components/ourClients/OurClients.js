/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./OurClients.css";
function OurClients() {
  return (
    <div className="our">
      <div className="ourinto">OUR CLIENTS</div>
      <div className="ourtitle">Who Makes Me Proud</div>
      <Container>
        <Row className="STACK">
          <Col className=" logo pl-10 col-lg-3  col-xs-12 pr-1">
            <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Portfolio-Images%2Fslack%20logo.png?alt=media&token=a0d8635d-d741-4acd-8e57-cbcbef950f58"></img>
          </Col>
          <Col className="logo col-lg-3  col-xs-12 pr-5">
            <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Portfolio-Images%2Fdropbox%20logo.png?alt=media&token=07cd2d75-0351-45f4-8778-a7c1e8578d0e"></img>
          </Col>
          <Col className=" logo col-lg-3 col-xs-12 pr-5">
            <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Portfolio-Images%2Fgoogle%20logo.png?alt=media&token=8025b9b4-7402-4a66-8394-3480ddde2c90"></img>
          </Col>
          <Col className=" logo col-lg-3  col-xs-12 pr-50 ">
            <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Portfolio-Images%2Ftesla%20logo.png?alt=media&token=dc7bedc8-94e6-45f3-91b9-c47ac02e4b0d"></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default OurClients;
