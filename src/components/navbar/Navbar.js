/* eslint-disable jsx-a11y/alt-text */
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";

function CollapsibleExample() {
  return (
    <Container>
      <div className="navbody">
        <div className="navlogoleft">
          <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Portfolio-Images%2FNav%20logo.png?alt=media&token=7f231ee5-ca39-4577-b46b-33e73a6b95b1"></img>
        </div>
        <div className="navbarbalck">
          <Navbar collapseOnSelect expand="lg">
            <Container>
              <Navbar.Brand href="#home"> </Navbar.Brand>
              <div className="burgermenu">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              </div>

              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto ms-auto ">
                  <div className="aboutmelink">
                    <Nav.Link href="#aboutme">ABOUT ME</Nav.Link>
                  </div>
                  <div className="serviceslink">
                    <Nav.Link href="#services">SERVICES</Nav.Link>
                  </div>
                  <div className="portfoliolink">
                    <Nav.Link href="#portfolio">PORTFOLIO</Nav.Link>
                  </div>
                  <div className="testilink">
                    <Nav.Link href="#tesimonials">TESTIMONIALS</Nav.Link>
                  </div>

                  <div className="contactlink">
                    <Nav.Link className="contactlink" href="#contactme">
                      CONTACT ME
                    </Nav.Link>
                  </div>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div className="navlogoright">
          <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Portfolio-Images%2FNav%20logo.png?alt=media&token=7f231ee5-ca39-4577-b46b-33e73a6b95b1"></img>
        </div>
        <div className="navbuttonouterContainer">
          <div className="navbuttoncontainer">
            <button
              className="Buttonbb"
              onClick={() => {
                console.log("Hire_me button clicked");
              }}
            >
              Hire me
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default CollapsibleExample;
