///////// libs /////////
import React, { Component } from "react";

///////// components /////////
import Title from "../../components/Title";
import CartList from "../../components/CartList";

///////// provider /////////
import CartProvider from "../../components/CartProvider";

class CartPage extends Component {
  render() {
    return (
      <main className="container">
        <Title text="CART" pageStyle="CartPage">
          CART
        </Title>
        <CartProvider>
          <CartList pageStyle="CartPage" />
        </CartProvider>
      </main>
    );
  }
}

export default CartPage;
