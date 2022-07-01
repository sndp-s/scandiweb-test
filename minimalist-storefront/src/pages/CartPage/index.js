// libs
import React, { Component } from "react";

// components
import Layout from "../Layout";
import Title from "../../components/Title";
import CartList from "../../components/CartList";

class CartPage extends Component {
  render() {
    return (
      <Layout>
        <main>
          <Title text="CART" pageStyle="CartPage">
            CART
          </Title>
          <CartList pageStyle="CartPage" />
        </main>
      </Layout>
    );
  }
}

export default CartPage;
