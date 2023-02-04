import React from "react";
import { Link } from "react-router-dom";
import "../css/product.css";
function Product({ title, img, price, description, id }) {
  return (
    <div className="product_parent">
      <div className="product__img">
        <img src={img} />
      </div>
      <div className="product__info">
        <div className="product_details">
          <h2>{title}</h2>
          <p>${price}</p>
        </div>
        <div className="product_move_button">
          <button className="primary-btn">
            <Link to={`/product/user/${id}`} style={{ color: "black" }}>
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
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
