import React, { useEffect } from "react";
import "../css/costomerSection.css";
import { connect } from "react-redux";
import { Fade } from "react-reveal";
import { setColorAPI } from "../actions";
import { Link } from "react-router-dom";
function CostomerSection({ color, setColor }) {
  const services = [
    "Gourmet offerings",
    " Sustainable sourcing",
    "Quality assurance",
    "Indulgent treats",
  ];

  return (
    <div className="costomer__section__main main" id="farmer">
      <div className="costomer__section__child child">
        <Fade bottom>
          <div className="info">
            <div className="heading">
              <h1>Shop</h1>
              <h2>Farm-Fresh</h2>
            </div>
            <p>
              Our website connects farmers who produce high-quality goods with
              wholesalers who resell them to customers, cutting out middlemen
              and providing a direct link between producers and consumers for
              fresher, more responsibly-sourced products
            </p>
            <Link to="/farmer/log-in" className="primary-btn">
              LOGIN AS FARMER
            </Link>
          </div>
        </Fade>
        <div className="explaination__logos">
          {services.map((service, index) => (
            <Fade bottom>
              <div className="service__info">
                <img src={`/imgs/icon-${index + 1}.svg`} alt="" />
                <p>{service}</p>
              </div>
            </Fade>
          ))}
        </div>
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

export default connect(mapStateToProps, dispatchStateToProps)(CostomerSection);
