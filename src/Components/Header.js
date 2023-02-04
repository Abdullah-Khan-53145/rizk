import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setColorAPI } from "../actions";
import "../css/header.css";
function Header({ color, setColor }) {
  const [isAnimate, setIsAnimate] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const headerSizeAnimator = () => {
    if (window.scrollY > 100) {
      setIsAnimate(true);
    }
    if (window.scrollY < 100) {
      setIsAnimate(false);
    }
  };

  const animateHeaderHome = () => {
    headerSizeAnimator();
    if (
      window.scrollY >
      document.querySelector(".costomer__section__main").offsetTop - 500
    ) {
      setColor(1);
      console.log(color);
    }
    if (window.scrollY < 400) {
      setColor(0);
    }
    if (
      window.scrollY >
      document.querySelector(".farmer__section__main").offsetTop - 200
    ) {
      setColor(2);
    }
    if (
      window.scrollY <
        document.querySelector(".farmer__section__main").offsetTop - 200 &&
      window.scrollY >
        document.querySelector(".costomer__section__main").offsetTop - 200
    ) {
      setColor(1);
    }
    if (
      window.scrollY >
      document.querySelector(".wholeseller__section__main").offsetTop - 200
    ) {
      setColor(3);
    }
    if (
      window.scrollY <
        document.querySelector(".wholeseller__section__main").offsetTop - 200 &&
      window.scrollY >
        document.querySelector(".farmer__section__main").offsetTop - 200
    ) {
      setColor(2);
    }
    if (
      window.scrollY >
      document.querySelector(".footer__section__main").offsetTop - 200
    ) {
      setColor(4);
    }
    if (
      window.scrollY <
        document.querySelector(".footer__section__main").offsetTop - 200 &&
      window.scrollY >
        document.querySelector(".wholeseller__section__main").offsetTop - 200
    ) {
      setColor(3);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", animateHeaderHome);

    return () => window.removeEventListener("scroll", animateHeaderHome);
  });

  return (
    <header
      className={`header__main main ${isAnimate ? "header_animate" : ""}`}
      style={{ background: color.colors[color.index] }}
    >
      <div className="header__main__child child">
        <div
          className={`left ${isOpen ? "open" : "close"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src="/imgs/close.svg" alt="" className={`ham__menu `} />
          <ul>
            <li>
              <Link to="" style={{ color: "black" }}>
                Home
              </Link>
            </li>
            <li>
              <Link to="" style={{ color: "black" }}>
                All Blogs
              </Link>
            </li>
            <li>
              <a href="#about" style={{ color: "black" }}>
                <Link to="" style={{ color: "black" }}>
                  About
                </Link>
              </a>
            </li>
          </ul>
        </div>
        <div className="hamburger__menu" onClick={() => setIsOpen(!isOpen)}>
          <img src="/imgs/open.svg" alt="" />
        </div>
        <div className="mid">
          <img src="/imgs/logo.png" alt="" />
        </div>
        <div className="rigth">
          <div className="facebook-logo">
            <img src="/imgs/fb-logo.png" alt="" />
          </div>
          <div className="facebook-logo">
            <img src="/imgs/insta-logo.png" alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}
const mapStateToProps = (state) => ({
  color: state.colorState,
});
const dispatchStateToProps = (dispatch) => ({
  setColor: (payload) => dispatch(setColorAPI(payload)),
});

export default connect(mapStateToProps, dispatchStateToProps)(Header);
