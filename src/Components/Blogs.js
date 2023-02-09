import React from "react";
import Fade from "react-reveal";
import { setColorAPI } from "../actions";
import { connect } from "react-redux";
import "../css/farmerhero.css";
import { Link } from "react-router-dom";

function FarmerHero({ title_head, title, description, img, id }) {
  console.log(id);
  return (
    <div className={`blog__section__main main`} id={`blog-${id}`}>
      <div
        className={`blog__section__child ${
          id % 2 ? "blog_direction" : ""
        }blog_direction child farmer`}
      >
        <Fade>
          <div className="explaination__logos">
            <img src={img} alt="" />
          </div>
        </Fade>
        <Fade bottom>
          <div className="info">
            <div className="heading">
              <p>{title_head}</p>
              <h1>
                {title.split(" <br /> ")[0]} <br /> {title.split(" <br /> ")[1]}
              </h1>
            </div>
            <p>{description}</p>
            <div className="button__farmer">
              <Link to={`/blog/${id}`} className="primary-btn">
                Learn more
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
