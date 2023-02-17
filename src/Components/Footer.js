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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                dolor eum rem laudantium ipsum unde aspernatur ipsam quas,
                veniam repellat numquam placeat? Repellat minus quae quo iure,
                sapiente repellendus reprehenderit. Sunt, quod ex. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Quas eos
                perferendis quos laborum, dolorem, vel accusantium omnis
                delectus autem quasi similique officiis!
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
