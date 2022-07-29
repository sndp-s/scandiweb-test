import { createSlice } from "@reduxjs/toolkit";
import { fetchProduct } from "../API/product";

const initialState = {
  product: {},
  allAttributes: [],
  selectedAttributeOptions: {},
  loading: false,
  hasErrors: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    loadProduct: (state) => {
      state.loading = true;
    },
    getProductSuccess: (state, { payload }) => {
      state.loading = false;
      state.allAttributes = payload.attributes.map((attribute) => attribute.id);
      state.product = payload;
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

export const {
  loadProduct,
  getProductSuccess,
  getProductFailure,
  setAttributeOption,
} = productSlice.actions;

export const getProduct = (productId) => {
  return async (dispatch) => {
    dispatch(loadProduct());
    try {
      const product = await fetchProduct(productId);
      dispatch(getProductSuccess(product));
    } catch (error) {
      dispatch(getProductFailure());
    }
  };
};

export default productSlice.reducer;
