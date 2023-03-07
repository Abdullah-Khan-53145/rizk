import React, { useEffect } from "react";
import "../css/about.css";
import { useLocation } from "react-router-dom";
import { Fade } from "react-reveal";
function About() {
  const services = [
    "Global Variety",
    "Beginner Friendly",
    "Fun Recipes",
    "Authentic Cuisine",
  ];
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
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
      <div className="about_us_body ">
        <div className="services_about_us child">
          <div className="text">
            <h2>Explore.</h2>
            <h3>Taste. Share.</h3>
          </div>
          <div className="services">
            {services.map((service, index) => (
              <div className="service__card">
                <img src={`/imgs/icon-${index + 1}.svg`} alt="" />
                <p>{service}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="about__us__text ">
          <div className="text">
            <h1>Welcome to our food blog! </h1>
            <p>
              We are a group of food enthusiasts who are passionate about
              cooking and discovering new flavors. We started this blog as a way
              to share our love of food with others and to document our culinary
              journey.
            </p>{" "}
            <p>
              On our blog, you'll find a variety of recipes, from classic dishes
              to unique and innovative creations. We also share cooking tips,
              product reviews, and other helpful information to make your time
              in the kitchen more enjoyable. Whether you're an experienced cook
              or just starting out, we hope that our blog will inspire you to
              get creative in the kitchen and to have fun experimenting with
              different ingredients and techniques.
            </p>{" "}
            <p>
              We also love to showcase local and regional cuisine, and we strive
              to promote sustainable and ethical food practices. We believe that
              food should be not only delicious but also healthy for you and for
              the planet.
            </p>{" "}
            <p>
              Thank you for visiting our blog. We look forward to sharing our
              passion for food with you!
            </p>{" "}
          </div>
          <img src="/imgs/about.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
