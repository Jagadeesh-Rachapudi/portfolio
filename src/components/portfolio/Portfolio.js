/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Portfolio.css";
function Portfolio() {
  return (
    <div className="portbody" id="portfolio">
      <div className="portintro">PORTFOLIO</div>
      <div className="porttitle">People Lie Work Don’t</div>
      <a className="portviewall" href="#Explore_All_Services">
        Explore All Services
      </a>
      <Container className="pcontainer">
        <Row className=" portfloor1 pb-4">
          <Col className=" porta1 col-lg-6 col-xs-6 ">
            <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Portfolio-Images%2Fporta1.png?alt=media&token=14d550be-6539-422d-b9f4-f9ab0975718a" />
          </Col>

          <Col className=" portb1 col-lg-6  col-xs-12 ">
            <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Portfolio-Images%2Fportb1.png?alt=media&token=35ff8380-174f-46a9-a95d-d215d3de0646" />
          </Col>
        </Row>
        <Row className="portfloor2">
          <Col className=" porta2 col-lg-6 col-xs-12 ">
            <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Portfolio-Images%2Fporta2.png?alt=media&token=d9a57d68-c916-4268-81dc-f1cd2d247ba5" />
          </Col>
          <Col className=" portb2 col-lg-6 col-xs-12 ">
            <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Portfolio-Images%2Fportb2.png?alt=media&token=d9d142d3-0514-4e8c-8a42-7ff57654497c" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Portfolio;
