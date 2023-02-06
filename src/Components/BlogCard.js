import React from "react";
import { Link } from "react-router-dom";
import "../css/product.css";
function Product({ title, subTitle, img, price, description, id }) {
  const colors = ["#FF9F7D", "#CEFF7D", "#FFD37D", "#7DD8FF"];
  return (
    <div className="product_parent">
      <div className="product__img">
        <img src={img} style={{ background: colors[id] }} />
      </div>
      <div className="product__info">
        <div className="product_details">
          <h2>{title}</h2>
          <p>
            {subTitle.length > 40 ? subTitle.slice(0, 40) + " ..." : subTitle}
          </p>
        </div>
        <div className="product_move_button">
          <Link to={`/blog/${id}`} style={{ color: "black" }}>
            <button className="primary-btn">
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
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Product;
