import React, { Component } from "react";

// components
import {
  Wrapper,
  List,
  Item,
  ProductCounter,
  CounterButton,
  CounterLabel,
  ImgWrapper,
  ProductImage,
  ImgSwipeLeft,
  ImgSwipeRight,
  OrderWrapper,
  OrderCalcGrid,
  OrderButton,
} from "./CartList.styles";
import ProductInfo_Title from "../ProductInfoTitle";
import ProductInfo_Price from "../ProductInfoPrice";
import ProductInfo_Size from "../ProductInfoSize";
import ProductInfo_Color from "../ProductInfoColor";

class CartList extends Component {
  render() {
    const { pageStyle } = this.props;
    return (
      <Wrapper>
        <List>
          <Item>
            <div>
              <ProductInfo_Title pageStyle={pageStyle}></ProductInfo_Title>
              <ProductInfo_Price pageStyle={pageStyle}></ProductInfo_Price>
              <ProductInfo_Size pageStyle={pageStyle} />
              <ProductInfo_Color pageStyle={pageStyle} />
            </div>
            <div style={{ display: "flex" }}>
              <div>
                <ProductCounter>
                  <CounterButton>+</CounterButton>
                  <CounterLabel>2</CounterLabel>
                  <CounterButton>-</CounterButton>
                </ProductCounter>
              </div>
              <ImgWrapper>
                <ProductImage src="https://picsum.photos/200/288" />
                <ImgSwipeLeft />
                <ImgSwipeRight />
              </ImgWrapper>
            </div>
          </Item>
          <Item>
            <div>
              <ProductInfo_Title pageStyle={pageStyle}></ProductInfo_Title>
              <ProductInfo_Price pageStyle={pageStyle}></ProductInfo_Price>
              <ProductInfo_Size pageStyle={pageStyle} />
              <ProductInfo_Color pageStyle={pageStyle} />
            </div>
            <div style={{ display: "flex" }}>
              <div>
                <ProductCounter>
                  <CounterButton>+</CounterButton>
                  <CounterLabel>2</CounterLabel>
                  <CounterButton>-</CounterButton>
                </ProductCounter>
              </div>
              <ImgWrapper>
                <ProductImage src="https://picsum.photos/200/288" />
                <ImgSwipeLeft />
                <ImgSwipeRight />
              </ImgWrapper>
            </div>
          </Item>
        </List>
        <OrderWrapper>
          <OrderCalcGrid>
            <span className="label">Tax 21%:</span>
            <span className="value">$42.00</span>
            <span className="label">Quantity:</span>
            <span className="value">3</span>
            <span className="label">Total:</span>
            <span className="value">$200.00</span>
          </OrderCalcGrid>
          <OrderButton>Order</OrderButton>
        </OrderWrapper>
      </Wrapper>
    );
  }
}

export default CartList;
