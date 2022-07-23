//////////////////////////////////////////////////////////////////////
/// libs ///
//////////////////////////////////////////////////////////////////////
import { createSlice } from "@reduxjs/toolkit";
//////////////////////////////////////////////////////////////////////
/// API ///
//////////////////////////////////////////////////////////////////////
import { fetchProductAPI } from "../app/API";
import productSlice from "./productSlice";
//////////////////////////////////////////////////////////////////////
/// slice ///
//////////////////////////////////////////////////////////////////////
const initialState = {
  cartItems: [],
  loading: false,
  hasErrors: false,
};
const cartSlice = createSlice({
  name: "productState",
  initialState,
  reducers: {
    getCartItems: (state) => {
      return state.cartItems;
    },

    getCartProducts: (state) => {
      state.loading = true;
    },

    getCartProductsSuccess: (state, { payload }) => {
      state.cartItems = payload;
      state.loading = false;
      state.hasErrors = false;
    },

    getCartProductsFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },

    addToCart: (state, { payload }) => {
      state.cartItems = [...state.cartItems, payload];
    },

    // removeItem: (state, { payload }) => {
    //   const spliceIndex = -1;
    //   state.cartItems.find((item, index) => {
    //     if (item.id === payload.id) {
    //       spliceIndex = index;
    //     }
    //   });
    //   state.cartItems = state.cartItems.splice(spliceIndex, spliceIndex + 1);
    // },
  },
});
//////////////////////////////////////////////////////////////////////
/// actions ///
export const {
  getCartItems,
  getCartProducts,
  getCartProductsSuccess,
  getCartProductsFailure,
  addToCart,
} = cartSlice.actions;
//////////////////////////////////////////////////////////////////////
/// thunk ///
export const fetchCartProducts = () => {
  return async (dispatch, getState) => {
    dispatch(getCartProducts());
    try {
      const state = await getState();
      const { cart } = state;
      const { cartItems } = cart;
      
      // fetching products in the cart
      const data = [];
      for (const item of cartItems) {
        const product = await fetchProductAPI(item.productId);
        data.push({
          ...product,
          ...item,
        });
      }
      dispatch(getCartProductsSuccess(data));
    } catch (error) {
      dispatch(getCartProductsFailure());
    }
  };
};
//////////////////////////////////////////////////////////////////////
/// reducer ///
export default cartSlice.reducer;
//////////////////////////////////////////////////////////////////////
