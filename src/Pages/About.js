import React from "react";
import { Fade } from "react-reveal";
function About() {
  return (
    <div>
      <div className="user__page__main main">
        <Fade bottom>
          <div className="user__page__child child">
            <p>Our Journey</p>
            <h1 className="heading">ABOUT US</h1>
          </div>
        </Fade>
      </div>
      <div className="about_us_body">
        <img src="/imgs/blog-2.png" alt="" />
        <h1></h1>
      </div>
    </div>
  );
}

export default About;
