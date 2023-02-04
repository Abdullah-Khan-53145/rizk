import { combineReducers } from "redux";
import setColorReducer from "./setColorReducer";
import userReducer from "./userReducer";
import addToCart from "./addToCartReducer";
const reducer = combineReducers({
  userState: userReducer,
  colorState: setColorReducer,
  CartState: addToCart,
});

export default reducer;
