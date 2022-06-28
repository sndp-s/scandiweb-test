///////// libs ////////
import { combineReducers } from "redux";
///////// slices /////////
import posts from "./slices/posts";

export default combineReducers({
  posts,
});
