/* eslint-disable jsx-a11y/alt-text */
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";

function CollapsibleExample() {
  return (
    <div className="navbody">
      <div className="navlogo">
        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Portfolio-Images%2FNav%20logo.png?alt=media&token=7f231ee5-ca39-4577-b46b-33e73a6b95b1"></img>
      </div>
      <div className="navbarbalck">
        <Navbar collapseOnSelect expand="lg">
          <Container>
            <Navbar.Brand href="#home"> </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto ms-auto ">
                <Nav.Link href="#aboutme">ABOUTME</Nav.Link>
                <Nav.Link href="#services">SERVICES</Nav.Link>
                <Nav.Link href="#portfolio">PORTFOLIO</Nav.Link>
                <Nav.Link href="#tesimonials">TESTIMONIALS</Nav.Link>
                <Nav.Link href="#contactme">CONTACT ME</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className="navbuttoncontainer">
        <button className="Buttonbb">Hire me</button>
      </div>
    </div>
  );
}

export default CollapsibleExample;
