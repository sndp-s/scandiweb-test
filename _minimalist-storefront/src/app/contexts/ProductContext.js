///////// libs /////////
import React from "react";
import { store } from "../store";

///////// redcucers /////////
import { fetchProduct } from "../../features/productSlice";

const { getState } = store;

let data = {};
const initContext = (productId) => {
  fetchProduct(productId);
  data = getState();
};


const ProductContext = React.createContext({
  initContext,
  data,
});

export default ProductContext;
