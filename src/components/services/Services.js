/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Services.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function Services() {
  return (
    <div className="sbody" id="services">
      <div className="sinto">SERVICES</div>
      <div className="stitle">Check My Services</div>
      <div className="sgetall">Explore All Services</div>
      <div className="smainbody">
        <Container>
          <Row className="threepics">
            <Col className=" spic1 col-lg-4 col-md-8 col-sm-12">
              <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Portfolio-Images%2FFrame%208.png?alt=media&token=1532a290-b44a-45d4-87eb-b5e471a0c5a7" />
              <div className="shedding">Landing page design</div>
              <div className="scontent">
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s
              </div>
            </Col>
            <Col className=" spic2 col-lg-4 col-md-8 col-sm-12">
              <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Portfolio-Images%2FFrame%209.png?alt=media&token=1b380bb2-7db4-4401-929d-0328c9b5f071" />
              <div className="shedding">Landing page design</div>
              <div className="scontent">
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s
              </div>
            </Col>
            <Col className=" spic3 col-lg-4 col-md-8 col-sm-12">
              <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Portfolio-Images%2FFrame%2010.png?alt=media&token=87142e29-96d0-4c00-8969-f8bd1fbc9388" />
              <div className="shedding">Landing page design</div>
              <div className="scontent">
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Services;
