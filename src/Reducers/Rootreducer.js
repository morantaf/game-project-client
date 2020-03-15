import { combineReducers } from "redux";
import user from "./userReducer";
import cards from "./cardsReducer";
import rooms from "./roomReducer";

export default combineReducers({
  user,
  cards,
  rooms
});
