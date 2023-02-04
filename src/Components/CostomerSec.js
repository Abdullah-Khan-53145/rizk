import React from "react";
import Fade from "react-reveal";
import { setColorAPI } from "../actions";
import { connect } from "react-redux";
import "../css/farmerhero.css";
import { Link } from "react-router-dom";

function FarmerHero() {
  return (
    <div className="farmer__section__main main" id="customer">
      <div className="farmer__section__child child farmer">
        <Fade>
          <div className="explaination__logos">
            <img src="/imgs/sec-3-img 1.png" alt="" />
          </div>
        </Fade>
        <Fade bottom>
          <div className="info">
            <div className="heading">
              <h1>Efficient</h1>
              <h2>Reliable, Professional</h2>
            </div>
            <p>
              Our platform is helping customers find fresh produce by connecting
              them directly with local farmers and wholesalers, providing them
              with access to the freshest and most high-quality produce
              available. It allows customers to browse a wide variety of
              products and compare prices, making it easy for them to find the
              best deal. The platform also provides customers with valuable
              information on the farmers and wholesalers, helping them to make
              informed purchasing decisions.
            </p>
            <div className="button__farmer">
              <Link to="/customer/log-in" className="primary-btn">
                LOGIN AS CUSTOMER
              </Link>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  color: state.colorState,
});
const dispatchStateToProps = (dispatch) => ({
  setColor: (payload) => dispatch(setColorAPI(payload)),
});

export default connect(mapStateToProps, dispatchStateToProps)(FarmerHero);
