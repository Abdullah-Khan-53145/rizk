import React, { useEffect, useRef } from "react";
import "../css/categories.css";
const MySVG = () => {
  useEffect(() => {}, []);

  return (
    <div className="cat_main" id="category">
      <div className="info child">
        <h1>Categories</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
          laborum distinctio neque veniam assumenda corporis
        </p>
        <div className="scroll">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
            />
          </svg>
          <span>Scroll</span>
        </div>
      </div>
      <div className="cat_child child">
        <svg
          width="388"
          height="1741"
          viewBox="0 0 388 1741"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.9999 18.5C5.33326 137.333 29.8999 399.6 197.5 498C365.1 596.4 384.667 741.333 373.5 801.5"
            stroke="#232250"
          />
          <path
            d="M374.491 813C383.168 951.867 358.572 1258.35 190.774 1373.34C22.9751 1488.32 3.38527 1657.69 14.5651 1728"
            stroke="#232250"
          />
          <circle cx="15" cy="12" r="12" fill="#232250" />
          <circle cx="376" cy="802" r="12" fill="#232250" />
          <circle cx="12" cy="1729" r="12" fill="#232250" />
        </svg>
        <div className="cat_cards">
          <div className="card">
            <div className="img">
              <img src="/imgs/cat-1.jpg" alt="" />
            </div>
            <div className="info">
              <h1>ipsum, sit</h1>
              <p>
                Lorem ipsum dolor sit, amet con- -sectetur adipisicing elit.
                Dolorem laborum distinctio neque veniam assumenda corporis
              </p>
              <a to="/farmer/log-in" className="primary-btn">
                Find Blog
              </a>
            </div>
          </div>
          <div className="card">
            <div className="img">
              <img src="/imgs/cat-2.jpg" alt="" />
            </div>
            <div className="info">
              <h1>ipsum, sit</h1>
              <p>
                Lorem ipsum dolor sit, amet con- -sectetur adipisicing elit.
                Dolorem laborum distinctio neque veniam assumenda corporis
              </p>
              <a to="/farmer/log-in" className="primary-btn">
                Find Blog
              </a>
            </div>
          </div>
          <div className="card">
            <div className="img">
              <img src="/imgs/cat-3.jpg" alt="" />
            </div>
            <div className="info">
              <h1>ipsum, sit</h1>
              <p>
                Lorem ipsum dolor sit, amet con- -sectetur adipisicing elit.
                Dolorem laborum distinctio neque veniam assumenda corporis
              </p>
              <a to="/farmer/log-in" className="primary-btn">
                Find Blog
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySVG;
