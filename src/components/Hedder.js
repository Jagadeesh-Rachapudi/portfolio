import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Hedder.css";
function Hedder() {
  return (
    <div className="parent">
      <div className="part1">
        <div className="greetings">Hello, I am</div>
        <div className="name">CALEB NYONG</div>
        <div className="role">UI/UX & Product Designer</div>
        <div className="des">
          I’m a top online marketer and branding expert, I started my career by
          lauching the popular metaverse design, in just a few short years, I
          built the brand to millions of social media followers and websites
          visitors.
        </div>
        <div className="container">
          <button className="button button1" color="white">
            Hire me
          </button>
          <Button variant="light button2">
            Download CV
            <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Portfolio-Images%2Fdownloadpic.png?alt=media&token=e405044f-cf49-44c8-8f8b-72f490e5959f"></img>
          </Button>
        </div>
        <div className="card">
          <Card border="light" style={{ width: "18rem" }} className="uppercard">
            <Card.Body>
              <Card.Text>
                <div className="imageofcommentator"></div>
                <div className="Author">Phanny - Nigeria</div>
                <div className="Date">Sat 28 May 2022</div>
                <div className="comment">
                  In just a few short years, I built the brand to millions of
                  social media followers and websites visitors.
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="part2">
        <div className="pic1"></div>
      </div>
    </div>
  );
}

export default Hedder;
