import { configureStore } from "@reduxjs/toolkit";

import categoriesReducer from "../slices/categoriesSlice";
import currenciesReducer from "../slices/currenciesSlice";
import productsReducer from "../slices/productsSlice";
import productReducer from "../slices/productSlice";
import cartReducer from "../slices/cartSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    currencies: currenciesReducer,
    products: productsReducer,
    product: productReducer,
    cart: cartReducer,
  },
});
