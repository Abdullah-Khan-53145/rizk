import { SET_COLOR } from "../actions/actionTypes";
const initialState = {
  index: 0,
  colors: [
    "#ff7d7d",
    "#8f7dff",
    "#ff9f7d",
    "#ceff7d",
    "#7dd8ff",
    "#c0caff",

    "#ffd37d",
  ],
};
const setColorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COLOR:
      console.log(action.payload);
      return { ...state, index: action.payload };
    default:
      return state;
  }
};

export default setColorReducer;
