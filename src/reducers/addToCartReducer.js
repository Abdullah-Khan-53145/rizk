import {
  ADD_TO_CART,
  REDUCE_QTY,
  REMOVE_FROM_CART,
  EMPTY_CART,
} from "../actions/actionTypes";

const initialState = [];
let qty = 0;
const addToCart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let status = false;

      state.forEach((item) => {
        if (item.id === action.payload.id) {
          status = true;
          qty = item.qty;
        }
      });
      if (status) {
        const newCart = state.filter((item) => item.id !== action.payload.id);
        return [...newCart, { ...action.payload, qty: qty + 1 }];
      } else {
        console.log("new item with id = ", action.payload.id);
        return [...state, { ...action.payload, qty: 1 }];
      }
    case REDUCE_QTY:
      qty = 0;
      state.forEach((item) => {
        if (item.id === action.payload.id) {
          qty = item.qty;
        }
      });
      const newCart = state.filter((item) => item.id !== action.payload.id);

      return [...newCart, { ...action.payload, qty: qty - 1 }];

    case REMOVE_FROM_CART:
      const newCartAfterRemoving = state.filter(
        (item) => state.indexOf(item) !== action.payload.index
      );
      return [...newCartAfterRemoving];
    case EMPTY_CART:
      console.log(action.payload);
      return [];
    default:
      return state;
  }
};

export default addToCart;
