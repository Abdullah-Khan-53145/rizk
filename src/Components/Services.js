import React, { useEffect } from "react";
import "../css/services.css";
import { connect } from "react-redux";
import { Fade } from "react-reveal";
import { setColorAPI } from "../actions";
import { Link } from "react-router-dom";
function CostomerSection({ color, setColor }) {
  const services = [
    "lorem, ipsum",
    "lorem, ipsum",
    "lorem, ipsum",
    "lorem, ipsum",
  ];

  return (
    <div className="costomer__section__main main" id="farmer">
      <div className="background"></div>
      <div className="costomer__section__child child">
        <Fade bottom>
          <div className="info">
            <div className="heading">
              <h1>Lorem</h1>
              <h2>ipsum dolor</h2>
            </div>
            <p>
              Lorem ipsum dolor sit, amet con- sectetur adipisicing elit.
              Dolorem laborum distinctio neque veniam assumenda corporis
              laudantium quod doloremque sunt a.
            </p>
            <Link to="/about" className="primary-btn">
              Learn more
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
