//////////////////////////////////////////////////////////////////////
/// libs ///
import { createSlice } from "@reduxjs/toolkit";
//////////////////////////////////////////////////////////////////////
/// API utils ///
import { fetchProductAPI } from "../app/API";
//////////////////////////////////////////////////////////////////////
/// slice ///
const initialState = {
  product: {},
  loading: false,
  hasErrors: false,
};
const productSlice = createSlice({
  name: "productState",
  initialState,
  reducers: {
    getProduct: (state) => {
      state.loading = true;
    },
    getProductSuccess: (state, { payload }) => {
      state.product = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getProductFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});
//////////////////////////////////////////////////////////////////////
/// actions ///
export const {
  getProduct,
  getProductSuccess,
  getProductFailure,
} = productSlice.actions;
//////////////////////////////////////////////////////////////////////
/// fetchProduct thunk ///
export const fetchProduct = (productId) => {
  return async (dispatch) => {
    dispatch(getProduct());
    try {
      const data = await fetchProductAPI(productId);
      dispatch(getProductSuccess(data.product));
    } catch (error) {
      dispatch(getProductFailure());
    }
  };
};
//////////////////////////////////////////////////////////////////////
/// reducer ///
export default productSlice.reducer;
//////////////////////////////////////////////////////////////////////
