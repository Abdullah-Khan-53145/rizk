import React from "react";
import "../css/footer.css";
import Fade from "react-reveal";
function Footer() {
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
                <h2>Agri-Zone</h2>
              </div>
              <p>
                We are a platform that connects farmers who produce high-quality
                goods with wholesalers who resell them to customers. Our mission
                is to provide fresher, more responsibly-sourced products by
                cutting out middlemen and providing a direct link between
                producers and consumers.
              </p>
              <div className="button__farmer">
                <button className="primary-btn">CONTACT US</button>
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
