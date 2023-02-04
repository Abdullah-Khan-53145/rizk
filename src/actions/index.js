import {
  SET_COLOR,
  SET_USER,
  ADD_TO_CART,
  EMPTY_CART,
  REMOVE_FROM_CART,
  REDUCE_QTY,
} from "./actionTypes";

import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../firebase";

// action for setting the color

export const setColor = (payload) => ({
  type: SET_COLOR,
  payload: payload,
});
export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

// Set color API
export const setColorAPI = (payload) => {
  console.log(payload);
  return (dispatch) => {
    dispatch(setColor(payload));
  };
};

// Action to add item to cart
export const addToCart = (payload) => ({
  type: ADD_TO_CART,
  payload: payload,
});
// Action to add item to cart
export const emptyCart = (payload) => ({
  type: EMPTY_CART,
  payload: payload,
});
// Action to Remove item to cart
export const removeFromCart = (payload) => ({
  type: REMOVE_FROM_CART,
  payload: payload,
});
// Action to Reduce quantity of item in cart
export const reduceQty = (payload) => ({
  type: REDUCE_QTY,
  payload: payload,
});

export function SignInWithGoogleAPI() {
  return async (dispatch) => {
    const result = await signInWithPopup(auth, provider);
    localStorage.setItem("user", JSON.stringify(result.user));
    dispatch(setUser(JSON.parse(localStorage.getItem("user"))));
    console.log(result.user);
  };
}

export function SignInWithEmailPasswordAPI(user) {
  return async (dispatch) => {
    localStorage.setItem("user", JSON.stringify(user));
    dispatch(setUser(JSON.parse(localStorage.getItem("user"))));
  };
}

export function SignOutAPI() {
  return async (dispatch) => {
    localStorage.setItem("user", null);
    dispatch(setUser(null));
    await signOut(auth);
  };
}

export function addToCartAPI(payload) {
  return (dispatch) => {
    dispatch(addToCart(payload));
  };
}
export function removeFromCartAPI(payload) {
  return (dispatch) => {
    dispatch(removeFromCart(payload));
  };
}
export function emptyCartAPI(payload) {
  return (dispatch) => {
    dispatch(emptyCart(payload));
  };
}
export function reduceQtyAPI(payload) {
  return (dispatch) => {
    dispatch(reduceQty(payload));
  };
}
