import React from "react";
import "../css/footer.css";
import { useNavigate } from "react-router-dom";
import Fade from "react-reveal";
function Footer() {
  const navigate = useNavigate();
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
              <div className="heading">
                <h1>About</h1>
                <h2>This, Site.</h2>
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
                <button
                  onClick={() => navigate("/about")}
                  className="primary-btn"
                >
                  READ MORE
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
