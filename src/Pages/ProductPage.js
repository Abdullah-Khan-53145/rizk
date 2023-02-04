import React, { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { addToCartAPI } from "../actions";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import "../css/ProductPage.css";
import { useParams } from "react-router-dom";

const ProductPage = ({ addToCart, cartItems }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const { id } = useParams();

  const getProduct = async () => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setTitle(docSnap.data().title);
      setDescription(docSnap.data().description);
      setPrice(docSnap.data().price);

      setImageUrl(docSnap.data().img);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  // Click Handlers
  const handleAddToCart = () => {
    addToCart({
      name: title,
      img: imageUrl,
      price: price,
      id,
      index: cartItems.length,
    });

    console.log(cartItems);
  };
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="product-page">
      <div className="product-details">
        <div className="product-title">{title}</div>
        <div className="product-description">{description}</div>
        <div className="product-price">{price}</div>
        <div className="product-quantity"></div>
        <button className="primary-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
      <div className="product-image">
        <img src={imageUrl} alt={title} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.CartState,
  user: state.userState,
});
const dispatchStateToProps = (dispatch) => ({
  addToCart: (payload) => dispatch(addToCartAPI(payload)),
});

export default connect(mapStateToProps, dispatchStateToProps)(ProductPage);
