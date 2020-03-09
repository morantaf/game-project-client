import { combineReducers } from "redux";
import user from "./userReducer";
import cards from "./cardsReducer";

export default combineReducers({
  user,
  cards
});
