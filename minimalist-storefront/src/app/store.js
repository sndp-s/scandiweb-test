///////// libs ////////
import { configureStore } from "@reduxjs/toolkit";

///////// reducers ////////
// import postsReducer from "../features/playground/postsSlice";
import categoriesReducer from "../features/categoriesSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
  },
});
