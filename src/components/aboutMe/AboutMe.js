/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./AboutMe.css";
function AboutMe() {
  return (
    <div className="aboutbody" id="aboutme">
      <Container>
        <Row className="aboutmerow">
          <Col className="text-center col-lg-6 col-md-12">
            <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Portfolio-Images%2Ftotalpic.png?alt=media&token=296cb92e-a660-4fca-aab1-328b2cc386a0"></img>
          </Col>      
          <Col className="text-left col-lg-6 col-md-12 mt-auto mb-auto">
            <div className="aboutinto">A BIT</div>
            <div className="abouttitle">About Me</div>
            <div className="aboutcontent">
              I’m a top online marketer and branding expert, I started my career
              by lauching the popular metaverse design, in just a few short
              years, I built the brand to millions of social media followers and
              websites visitors. I also created award-winning online products
              with millions of dolloars in online sales you want, you never get
              personalized experiences and they can be upwards of $1000 on hour.{" "}
            </div>
            <div className="aboutcontainer">
              <div className="aboutexperiance">
                <div className="Experianceimage">
                  <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Portfolio-Images%2FGroup%20(1).png?alt=media&token=3307ca92-9c3e-4e90-a87d-afd9ef0ef310"></img>
                </div>
                <div className="experianethingsccontainer">
                  <div className="Experianehedding">5 years+</div>
                  <div className="Experiancecontent">Experience</div>
                </div>
              </div>
              <div className="aboutprojectsinAboutme">
                <div className="projectsimage">
                  <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Portfolio-Images%2FGroup%201.png?alt=media&token=54291a0c-7364-4869-b8df-3db003b695d9"></img>
                </div>
                <div className="projectthingscontainer">
                  <div className="projecthedding">700+</div>
                  <div className="projectcontent">Projects</div>
                </div>
              </div>
            </div>
            <div className="aboutsupport">
              <div className="supportimage">
                <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Portfolio-Images%2FGroup.png?alt=media&token=5c3d2d37-f387-4fb4-9775-20c2a2870952"></img>
              </div>
              <div className="supportthingscontainer">
                <div className="supporthedding">24/7</div>
                <div className="supportcontent">Customer Support</div>
              </div>
            </div>
            <div className="aboutbuttoncontainer">
              <button
                className="abouthireme"
                onClick={() => {
                  "Hire_me button cliked";
                }}
              >
                Hire me
              </button>
              <button
                className="aboutdownlaod"
                onClick={() => {
                  "Download button cliked";
                }}
              >
                Download CV
                <img
                  className="aboutdownloadcvpic"
                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Portfolio-Images%2Fdownloadpic.png?alt=media&token=e405044f-cf49-44c8-8f8b-72f490e5959f"
                ></img>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutMe;
