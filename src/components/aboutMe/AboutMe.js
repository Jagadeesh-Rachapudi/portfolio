/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Button from "react-bootstrap/Button";
import "./AboutMe.css";
function AboutMe() {
  return (
    <div className="parent1">
      <div className="fullPic"></div>
      <div className="data">
        <div className="intro">A BIT</div>
        <div className="about">About Me</div>
        <div className="originalintro">
          I’m a top online marketer and branding expert, I started my career by
          lauching the popular metaverse design, in just a few short years, I
          built the brand to millions of social media followers and websites
          visitors. I also created award-winning online products with millions
          of dolloars in online sales you want, you never get personalized
          experiences and they can be upwards of $1000 on hour.
        </div>
        <div className="container1">
          <img
            className="innerbadge"
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Portfolio-Images%2Fphoto_6170117655311267215_m%20(1)%20(1).jpg?alt=media&token=080ef25c-4149-4bd1-a84f-c64ce854664d"
          ></img>
          <div className="box1">
            5 years+
            <div className="exeperience">Experience</div>
          </div>
          <img
            className="checklist"
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Portfolio-Images%2FProjects.png?alt=media&token=0db08875-b9af-4e48-906a-b7314e14cf1a"
          ></img>
          <div className="box2">700+</div>
          <div className="Projects">Projects</div>
        </div>
        <img
          className="onduty"
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Portfolio-Images%2Fcustomer%20support.png?alt=media&token=71ddf9ce-76c1-4254-bf5f-d2508f294f52"
        ></img>
        <div className="timings">24/7</div>
        <div className="nameee">Customer Support</div>
        <div className="containerme">
          <button className="button button1me" color="white">
            Hire me
          </button>
          <Button variant="light button2me">
            Download CV
            <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Portfolio-Images%2Fdownloadpic.png?alt=media&token=e405044f-cf49-44c8-8f8b-72f490e5959f"></img>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
