import { createSlice } from "@reduxjs/toolkit";
import { fetchCartItems } from "../API/cart";

const initialState = {
  cartItems: [],
  products: {},
  // renderItems: [],
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

    // updateRenderItems: (state, { payload }) => {
    //   state.renderItems = payload;
    // },
  },
});

export const {
  getCartItems,
  loadCartProducts,
  loadCartProductsSuccess,
  loadCartProductsFailure,
  holdItem,
  setOption,
  addToCart,
  // updateRenderItems,
} = cartSlice.actions;

export const loadCartItems = (state) => {
  return async (dispatch, getState) => {
    dispatch(loadCartProducts());
    let { cartItems, products } = await getState().cart;

    const newProducts = { ...products };
    for await (const cartItem of cartItems) {
      if (products[cartItem.id] === undefined) {
        const product = await fetchCartItems(cartItem.id);
        newProducts[cartItem.id] = product;
      }
    }
    await dispatch(loadCartProductsSuccess(newProducts));
    // await dispatch(filterRenderItems());
  };
};

// export const filterRenderItems = (state) => {
//   return async (dispatch, getState) => {
//     let { cartItems, products, renderItems } = await getState().cart;
//     // console.log("cartItems", cartItems);
//     // console.log("products", products);

//     let newRenderItems = [];
//     cartItems.forEach((cartItem, index) => {
//       const icartItemInRenderItems = renderItems.findIndex(
//         (renderItem, index) => {
//           return (
//             renderItem.product.id === cartItem.id &&
//             JSON.stringify(renderItem.selectedAttributes) ===
//               JSON.stringify(cartItem.attributes)
//           );
//         }
//       );
//       if (icartItemInRenderItems === -1) {
//         let temp = [
//           ...newRenderItems,
//           {
//             product: products[cartItem.id],
//             selectedAttributes: cartItem.attributes,
//             count: 1,
//           },
//         ];
//         newRenderItems = temp;
//         // newRenderItems.push({
//         //   product: products[cartItem.id],
//         //   selectedAttributes: cartItem.attributes,
//         //   count: 1,
//         // });
//       } else {
//         let renderItemWithUpdatedCount = {
//           ...renderItems[icartItemInRenderItems],
//         };
//         renderItemWithUpdatedCount.count += 1;
//         newRenderItems = [...renderItems];
//         newRenderItems[icartItemInRenderItems] = renderItemWithUpdatedCount;
//       }
//       dispatch(updateRenderItems(newRenderItems));
//     });
//   };
// };
//////////////////////////////////////////////////////////////////////
export default cartSlice.reducer;
