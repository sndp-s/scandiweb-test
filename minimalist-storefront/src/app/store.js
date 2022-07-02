///////// libs ////////
import { configureStore } from "@reduxjs/toolkit";

///////// reducers ////////
// import postsReducer from "../features/playground/postsSlice";
import categoriesReducer from "../features/categoriesSlice";
import currenciesReducer from "../features/currenciesSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    currencies: currenciesReducer,
  },
});
