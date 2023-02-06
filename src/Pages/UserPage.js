import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setColorAPI } from "../actions";
import { Fade } from "react-reveal";
import Product from "../Components/BlogCard.js";
import "../css/userpage.css";
const blogposts = require("./blogs.json");

function UserPage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [fil, setfil] = useState(3);
  const filters = ["filter1", "filter2", "filter3", "filter4"];

  useEffect(() => {
    setProducts(blogposts.blogs);
  }, []);
  return (
    <>
      <div className="user__page__main main">
        <Fade bottom>
          <div className="user__page__child child">
            <p>Yummy - Tasty</p>
            <h1 className="heading">ALL BLOGS</h1>
          </div>
        </Fade>
      </div>

      <div className="allProducts main">
        <div className="all__product__child child">
          <div className="search__and__filters">
            <div className="search__input">
              <input
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                placeholder="Search..."
              />
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.798 25L31 31M14.9286 7.42857C18.479 7.42857 21.3571 10.3067 21.3571 13.8571M29 15C29 22.732 22.732 29 15 29C7.26801 29 1 22.732 1 15C1 7.26801 7.26801 1 15 1C22.732 1 29 7.26801 29 15Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div className="filters__input">
              {filters.map((filter, index) => (
                <div
                  className="filter"
                  style={{
                    color: index === fil ? "white" : "black",
                    backgroundColor: index === fil ? "black" : "white",
                  }}
                  onClick={() => setfil(index)}
                >
                  {filter}
                </div>
              ))}
            </div>
          </div>
          <div className="all__products__grid">
            {products.map((product) => {
              if (
                (fil === 3 || filters[fil] === product.category) &&
                (product.title.includes(search) ||
                  product.description.includes(search))
              )
                return (
                  <Product
                    title={product.title}
                    subTitle={product.subTitle}
                    descriptionHead={product.descriptionHead}
                    img={product.img}
                    price={product.price}
                    description={product.description}
                    id={product.id}
                  />
                );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  color: state.colorState,
});
const dispatchStateToProps = (dispatch) => ({
  setColor: (payload) => dispatch(setColorAPI(payload)),
});

export default connect(mapStateToProps, dispatchStateToProps)(UserPage);
