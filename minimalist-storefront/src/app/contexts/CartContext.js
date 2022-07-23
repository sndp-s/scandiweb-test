///////// libs /////////
import React from "react";
import { store } from "../store";



const { getState } = store;

let data = [];
const initContext = () => {
  data = getState();
};


const CartContext = React.createContext({
  initContext,
  data,
});

export default CartContext;
