import { createStore, applyMiddleware, combineReducers } from 'redux'
import excelReducer from "./redux/reducer/excelReducer";

// import {
//   shiftDaysReducer
// } from "./redux/reducer/shiftsReducer";

import thunk from "redux-thunk";
// const initialState = {
//   sidebarShow: 'responsive'
// }

const middleWare = [thunk];

// const changeState = (state = initialState, { type, ...rest }) => {
//   switch (type) {
//     case 'set':
//       return { ...state, ...rest }
//     default:
//       return state
//   }
// }

const store = createStore(combineReducers({
  // changeState,
  // pitchTimeReducer,
  // fileDownloadTypeReducer,
  // shiftDaysReducer,
  // shiftTimeReducer,
  // breakTimeReducer,
  // rangeSelectReducer,
  // downlaodTimeReducer,
  excelReducer,
}), applyMiddleware(...middleWare))
export default store