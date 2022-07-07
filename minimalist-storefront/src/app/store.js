///////// libs ////////
import { configureStore } from "@reduxjs/toolkit";

///////// reducers ////////
import categoriesReducer from "../features/categoriesSlice";
import currenciesReducer from "../features/currenciesSlice";
import productReducer from "../features/productSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    currencies: currenciesReducer,
    product: productReducer,
  },
});
