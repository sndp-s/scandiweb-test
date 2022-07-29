import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../API/products";

const initialState = {
  products: [],
  loading: false,
  hasErrors: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    loadProducts: (state) => {
      state.loading = true;
    },
    getProductsSuccess: (state, { payload }) => {
      state.loading = false;
      state.products = payload;
    },
    getProductsFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const { loadProducts, getProductsSuccess, getProductsFailure } =
  productsSlice.actions;

export const getProducts = (categoryName) => {
  return async (dispatch) => {
    dispatch(loadProducts());
    try {
      const products = await fetchProducts(categoryName);
      dispatch(getProductsSuccess(products));
    } catch (error) {
      dispatch(getProductsFailure());
    }
  };
};

export default productsSlice.reducer;
