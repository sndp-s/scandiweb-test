import React, { Component } from "react";

// components
import Title from "../components/Title";
import CartList from "../components/CartList";

class CartPage extends Component {
  render() {
    return (
      <main className="container">
        <Title text="CART" pageStyle="CartPage">
          CART
        </Title>
        <CartList pageStyle="CartPage"/>
      </main>
    );
  }
}

export default CartPage;
