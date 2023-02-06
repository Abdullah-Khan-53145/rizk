import { SET_COLOR } from "../actions/actionTypes";
const initialState = {
  index: 0,
  colors: [
    "#ff7d7d", //0
    "#c0caff", //1
    "#ff9f7d", //2
    "#ceff7d", //3
    "#ffd37d", //4
    "#7dd8ff", //5
    "#8f7dff", //6
  ],
};
const setColorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COLOR:
      return { ...state, index: action.payload };
    default:
      return state;
  }
};

export default setColorReducer;
