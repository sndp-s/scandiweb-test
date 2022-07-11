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
  allAttributes: [],
  selectedAttributeOptions: {},
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
      state.allAttributes = payload.attributes.map((attribute) => attribute.id);
      state.loading = false;
      state.hasErrors = false;
    },
    getProductFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
    setAttributeOption: (state, { payload }) => {
      const { attributeId, selectedOptionId } = payload;
      state.selectedAttributeOptions[attributeId] = selectedOptionId;
    },
  },
});
//////////////////////////////////////////////////////////////////////
/// actions ///
export const {
  getProduct,
  getProductSuccess,
  getProductFailure,
  setAttributeOption,
} = productSlice.actions;
//////////////////////////////////////////////////////////////////////
/// thunks ///
export const fetchProduct = (productId) => {
  return async (dispatch) => {
    dispatch(getProduct());
    try {
      const data = await fetchProductAPI(productId);
      dispatch(getProductSuccess({...data.product, productId}));
    } catch (error) {
      dispatch(getProductFailure());
    }
  };
};
//////////////////////////////////////////////////////////////////////
/// reducer ///
export default productSlice.reducer;
//////////////////////////////////////////////////////////////////////
