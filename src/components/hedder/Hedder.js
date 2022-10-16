/* eslint-disable jsx-a11y/alt-text */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Hedder.css";
function Hedder() {    
  return (
    <div className="hedderbody">
      <Container className="outerdiv">
        <Row className="hedderrow">
          <Col className=" text-left col-lg-6 col-md-12">
            <div className="col1container">
              <div className=" hedderinto">Hello, I am</div>
              <div className="heddername">CALEB NYONG</div>
              <div className="hedderproffession">UI/UX & Product Designer</div>
              <div className="hedderdes">
                I’m a top online marketer and branding expert, I started my
                career by lauching the popular metaverse design, in just a few
                short years, I built the brand to millions of social media
                followers and websites visitors.
              </div>
              <div>
                <div className="hedderbuttoncontainer">
                  <button
                    className="hedderbutton"
                    onClick={() => {
                      "hire_me button cliked";
                    }}
                  >
                    Hire me
                  </button>
                  <button
                    className="hedderbuttondownload"
                    onClick={() => {
                      "Download button cliked";
                    }}
                  >
                    Download CV{" "}
                    <img
                      className="hedderdownloadbuttonpic"
                      src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Portfolio-Images%2Fdownloadpic.png?alt=media&token=e405044f-cf49-44c8-8f8b-72f490e5959f"
                    ></img>
                  </button>
                </div>
              </div>
              <div className="heddercardcontainer">
                <div className="heddercard">
                  <div className="hedddercardpart1">
                    <div className="heddercardimage">
                      <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Portfolio-Images%2FEllipse%201.png?alt=media&token=77a4eabd-7def-4e92-abfd-50fd059bde11"></img>
                    </div>
                    <div>
                      <div className="heddercardname">Phanny - Nigeria</div>
                      <div className="heddercarddate">Sat 28 May 2022</div>
                    </div>
                  </div>
                  <div className="heddercardpart2">
                    In just a few short years, I built the brand to millions of
                    social media followers and websites visitors.
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col className=" fristpic text-center col-lg-6 col-md-12">
            <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Portfolio-Images%2Fpic%201.png?alt=media&token=0c3d02d8-8449-4941-9ade-2c5e703b73a2"></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hedder;
