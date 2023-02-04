import React from "react";
import Fade from "react-reveal";
import { setColorAPI } from "../actions";
import { connect } from "react-redux";
import "../css/wholesellersec.css";
import { Link } from "react-router-dom";

function WholeSellerSec() {
  return (
    <div className="wholeseller__section__main main" id="wholesaler">
      <div className="wholeseller__section__child child farmer">
        <Fade>
          <div className="explaination__logos">
            <img src="/imgs/sec-4-img 1.png" alt="" />
          </div>
        </Fade>
        <Fade bottom>
          <div className="info">
            <div className="heading">
              <h1>Convenient</h1>
              <h2>Wide variety, High quality </h2>
            </div>
            <p>
              Our platform is helping wholesalers grow their business by
              providing them with a reliable source of high-quality produce from
              local farmers. It allows them to expand their product offerings,
              increasing their competitiveness and appeal to customers. The
              platform also offers the wholesalers an easy way to manage their
              inventory and track their sales, streamlining their operations and
              reducing their costs. Our platform also allows the wholesalers to
              access a wide range of farmers, increasing their purchasing power
              and enabling them to provide a wider variety of products to their
              customers.
            </p>
            <div className="button__farmer">
              <Link to="/wholesaler/log-in" className="primary-btn">
                LOGIN AS WHOLESALER
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

export default connect(mapStateToProps, dispatchStateToProps)(WholeSellerSec);
