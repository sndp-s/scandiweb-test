///////// libs /////////
import React, { Component } from "react";

///////// components /////////
import { Wrapper, Content, Title } from "./CartPage.styles";
import CartList from "../CartList";

class CartPage extends Component {
  render() {
    return (
      <Wrapper>
        <Content className="container">
          <Title>CART</Title>
          <CartList pageStyle="CartPage" />
        </Content>
      </Wrapper>
    );
  }
}

export default CartPage;
