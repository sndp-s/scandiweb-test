///////// libs /////////
import React, { Component } from "react";

///////// components /////////
import Title from "../../components/Title";
import CartList from "../../components/CartList";

///////// pages /////////
import Layout from "../Layout";

class CartPage extends Component {
  render() {
    return (
      <Layout>
        <main className="container">
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
