///////// libs ////////
import { configureStore } from "@reduxjs/toolkit";

///////// reducers ////////
import postsReducer from "../features/playground/postsSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});
