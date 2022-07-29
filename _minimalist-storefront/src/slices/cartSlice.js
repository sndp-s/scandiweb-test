//////////////////////////////////////////////////////////////////////
import { createSlice } from "@reduxjs/toolkit";
import { fetchCartItems } from "../API/cart";
//////////////////////////////////////////////////////////////////////
const initialState = {
  cartItems: [],
  products: {},
  temp: { product: {} },
  loading: false,
  hasErrors: false,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getCartItems: (state) => {
      return state.cartItems;
    },

    loadCartProducts: (state) => {
      state.loading = true;
    },

    loadCartProductsSuccess: (state, { payload }) => {
      state.products = payload;
      state.loading = false;
      state.hasErrors = false;
    },

    loadCartProductsFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },

    holdItem: (state, { payload }) => {
      state.temp.product = payload;
    },

    setOption: (state, { payload }) => {
      state.temp.product.attributes[payload.attributeId].selectedOptionId =
        payload.selectedOptionId;
    },

    addToCart: (state) => {
      state.cartItems.push(state.temp.product);
    },
  },
});
//////////////////////////////////////////////////////////////////////
export const {
  getCartItems,
  loadCartProducts,
  loadCartProductsSuccess,
  loadCartProductsFailure,
  holdItem,
  setOption,
  addToCart,
} = cartSlice.actions;
//////////////////////////////////////////////////////////////////////
export const loadCartItems = (state) => {
  return async (dispatch, getState) => {
    dispatch(loadCartProducts());
    let { cartItems, products } = getState().cart;
    const newProducts = { ...products };
    for await (const cartItem of cartItems) {
      if (products[cartItem.id] === undefined) {
        const product = await fetchCartItems(cartItem.id);
        newProducts[cartItem.id] = product;
      }
    }
    dispatch(loadCartProductsSuccess(newProducts));

    // for await (const [index, cartItem] of cartItems.entries()) {
    //   if (products[cartItem.id] === undefined) {
    //     const product = await fetchCartItems(cartItem.id);
    //     newProducts[cartItem.id] = {};
    //     newProducts[cartItem.id].product = product;
    //     newProducts[cartItem.id].count = 1;
    //     newProducts[cartItem.id].selectedAttributes =
    //       cartItems[index].attributes;
    //   } else if (
    //     products[cartItem.id].attributes === cartItems[index].attributes
    //   ) {
    //     newProducts[cartItem.id].count += 1;
    //   } else {
    //     const product = await fetchCartItems(cartItem.id);
    //     newProducts[cartItem.id] = {};
    //     newProducts[cartItem.id].product = product;
    //     newProducts[cartItem.id].count = 1;
    //     newProducts[cartItem.id].selectedAttributes =
    //       cartItems[index].attributes;
    //   }
    // }
  };
};
//////////////////////////////////////////////////////////////////////
export default cartSlice.reducer;
//////////////////////////////////////////////////////////////////////
