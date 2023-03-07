import React from "react";
import "../css/footer.css";
import { useLocation, useNavigate } from "react-router-dom";
import Fade from "react-reveal";
function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const handleClick = () => {
    if (location.pathname === "/about") {
      navigate("/contact");
    } else {
      navigate("/about");
    }
  };

  return (
    <>
      <div className="footer__section__main" id="about">
        <div className="footer__section__child child farmer">
          <Fade>
            <div className="farmer_explaination__logos">
              <img src="/imgs/logo.png" alt="" />
            </div>
          </Fade>
          <Fade bottom>
            <div className="info">
              <div
                className={`heading ${
                  location.pathname === "/about" ? "__about" : ""
                }`}
              >
                <h1> {location.pathname === "/about" ? "Our" : "About"}</h1>
                <h2>
                  {location.pathname === "/about" ? "Mission" : "This, Site."}
                </h2>
                <h2></h2>
              </div>
              <p>
                {location.pathname === "/about"
                  ? "At our website, we are passionate about bringing the world's cuisines to your kitchen. Our mission is to inspire and empower home cooks to explore global flavors and expand their culinary horizons. We believe that food is a powerful way to connect with different cultures and create meaningful experiences, and we are committed to making international cooking accessible, enjoyable, and delicious for everyone."
                  : " Our blog is run by food enthusiasts who share a love for cooking and exploring new flavors. We offer a variety of recipes, cooking tips, and product reviews, and aim to inspire you to get creative in the kitchen. We promote sustainable and ethical food practices, and love to showcase local and regional cuisine."}
              </p>
              <div className="button__farmer">
                <button onClick={handleClick} className="primary-btn">
                  {location.pathname === "/about" ? "CONTACT US" : "READ MORE"}
                </button>
              </div>
            </div>
          </Fade>
        </div>
        <div className="footer">
          <div class="copyright">
            Copyright ©2023 FarmFresh. All rights reserved.
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
