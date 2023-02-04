import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { setColorAPI } from "../actions";
import { Fade } from "react-reveal";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";
import Product from "../Components/Product.js";
import { db } from "../firebase";
import "../css/userpage.css";

function UserPage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [fil, setfil] = useState(3);
  const [orders, setOrders] = useState([]);
  const filters = ["crops", "fruits", "poultry", "All"];
  const { role } = useParams();
  const getProducts = async () => {
    let proarr = [];
    let q;

    if (role === "wholesaler") {
      q = query(collection(db, "products"), where("role", "==", "farmer"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        proarr.push({ ...doc.data(), id: doc.id });
        console.log(doc.id, " => ", doc.data());
      });
    } else if (role === "customer") {
      q = query(collection(db, "products"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        proarr.push({ ...doc.data(), id: doc.id });
        console.log(doc.id, " => ", doc.data());
      });
    } else {
      console.log();
    }

    setProducts(proarr);
  };
  const getOrders = async () => {
    let orderarr = [];
    const q = query(collection(db, "orders"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      orderarr.push({ ...doc.data(), id: doc.id });
      console.log(doc.id, " => ", doc.data());
    });
    setOrders(orderarr);
  };
  const handleShipping = async (e, id) => {
    e.preventDefault();
    await deleteDoc(doc(db, "orders", id));
    getOrders();
    console.log(id);
  };

  useEffect(() => {
    if (role === "wholesaler") {
      getOrders();
    }
    console.log(role);
    getProducts();
  }, []);
  return (
    <>
      <div className="user__page__main main">
        <Fade bottom>
          <div className="user__page__child child">
            <p>Welcome, to agri-zone</p>
            <h1 className="heading">Become {role}, and Leave a Review</h1>
          </div>
        </Fade>
      </div>
      {role !== "wholesaler" ? (
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
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
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
      ) : (
        <div className="allProducts AllOrders main">
          <h1>Orders</h1>
          <div className="order__child child">
            <div className="sno">
              <h3>Sno</h3>
            </div>
            <div className="product_img">
              <h3>Product Img</h3>
            </div>
            <div className="product__name">
              <h3>Product Name</h3>
            </div>
            <div className="customer__name">
              <h3>Customer Name</h3>
            </div>
            <div className="customer__adress">
              <h3>Customer Adress</h3>
            </div>
            <div className="customer__phone">
              <h3>Customer Phone</h3>
            </div>
            <div className="product__Qty">
              <h3>Qty</h3>
            </div>
            <div className="product__Price">
              <h3>Price</h3>
            </div>
          </div>
          {orders.length !== 0 ? (
            orders.map((order) => (
              <div className="order__main child">
                <div className="order__child ">
                  <div className="sno">
                    <p>{order.sno}</p>
                  </div>
                  <div className="product_img">
                    <img src={order.img} alt="" />
                  </div>
                  <div className="product__name">
                    <p>{order.name}</p>
                  </div>
                  <div className="customer__name">
                    <p>{order.customerName}</p>
                  </div>
                  <div className="customer__adress">
                    <p>{order.customerAdress}</p>
                  </div>
                  <div className="customer__phone">
                    <p>{order.customerPhone}</p>
                  </div>
                  <div className="product__Qty">
                    <p>{order.qty}</p>
                  </div>
                  <div className="product__Price">
                    <p>{order.price}</p>
                  </div>
                </div>
                <form onSubmit={(e) => handleShipping(e, order.id)}>
                  <input
                    type="text"
                    placeholder="Enter tracking number"
                    required
                  />
                  <button className="primary-btn">Shipped</button>
                </form>
              </div>
            ))
          ) : (
            <h1>No orders to show</h1>
          )}
        </div>
      )}
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
