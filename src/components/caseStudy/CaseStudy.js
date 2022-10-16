/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./CaseStudy.css";
function CaseStudy() {  
  return (
    <div className="bodyofcasestudy">
      <div className="csinto">CASE STUDY</div>
      <div className="cstitle">My Case Studies</div>
      <Container>
        <Row className="csrow1">
          <Col className=" col-lg-6 col-sm-12">
            <img
              className="pic1"
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Portfolio-Images%2FFrame%2011.png?alt=media&token=b3d1e1f8-351d-4f05-8b24-c608cee685b6"
            />
          </Col>
          <Col className=" c1 col-lg-6 col-md-12">
            <div className="cscontent1num">01</div>
            <div className="cscontent1hedding"> Bakery Landing Page Design</div>
            <div className="cscontent1content">
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </div>
            <div className="csbuttoncontainer">
              <button
                className="cscontentbutton"
                onClick={() => {
                  "Details button cliked";
                }}
              >
                Details
              </button>
            </div>
          </Col>
        </Row>
        <Row className="csrow2">
          <Col className="col-lg-6 col-md-12">
            <div className="cscontent2num">02</div>
            <div className="cscontent2hedding">
              Shoe Store Ecommerce Landing Page
            </div>
            <div className="cscontent2content">
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </div>
            <div className="csbuttoncontainer">
              <button
                className="cscontentbutton"
                onClick={() => {
                  "Deatils button cliked";
                }}
              >
                Details
              </button>
            </div>
          </Col>
          <Col className="col-lg-6 col-md-12">
            <img
              className="pic1"
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Portfolio-Images%2FFrame%2013.png?alt=media&token=59a9d9fd-431d-4dfe-9aab-46b11154f02b"
            />
          </Col>
        </Row>
        <Row className="csrow3">
          <Col className="col-lg-6 col-md-12">
            <img
              className="pic1"
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Portfolio-Images%2FFrame%2015.png?alt=media&token=5271e8a2-9458-42a9-a461-eb3109ee7bf1"
            />
          </Col>
          <Col className="col-lg-6 col-md-12">
            <div className="cscontent3num">03</div>
            <div className="cscontent3hedding"> Bakery Landing Page Design</div>
            <div className="cscontent3content">
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </div>
            <div className="csbuttoncontainer">
              <button
                className="cscontentbutton"
                onClick={() => {
                  "Download button cliked";
                }}
              >
                Details
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CaseStudy;
