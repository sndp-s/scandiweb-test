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
import ProductInfoTitle from "../ProductInfoTitle";
import ProductInfoPrice from "../ProductInfoPrice";
import ProductInfoSize from "../ProductInfoSize";
import ProductInfoColor from "../ProductInfoColor";

class CartList extends Component {
  render() {
    const { pageStyle } = this.props;
    return (
      <Wrapper>
        <List pageStyle={pageStyle}>
          <Item pageStyle={pageStyle}>
            <div>
              <ProductInfoTitle pageStyle={pageStyle}></ProductInfoTitle>
              <ProductInfoPrice pageStyle={pageStyle}></ProductInfoPrice>
              <ProductInfoSize pageStyle={pageStyle} />
              <ProductInfoColor pageStyle={pageStyle} />
            </div>
            <div style={{ display: "flex" }}>
              <div>
                <ProductCounter pageStyle={pageStyle}>
                  <CounterButton pageStyle={pageStyle}>+</CounterButton>
                  <CounterLabel pageStyle={pageStyle}>2</CounterLabel>
                  <CounterButton pageStyle={pageStyle}>-</CounterButton>
                </ProductCounter>
              </div>
              <ImgWrapper pageStyle={pageStyle}>
                <ProductImage
                  src="https://picsum.photos/120/190"
                  pageStyle={pageStyle}
                />
                <ImgSwipeLeft pageStyle={pageStyle} />
                <ImgSwipeRight pageStyle={pageStyle} />
              </ImgWrapper>
            </div>
          </Item>
          <Item pageStyle={pageStyle}>
            <div>
              <ProductInfoTitle pageStyle={pageStyle}></ProductInfoTitle>
              <ProductInfoPrice pageStyle={pageStyle}></ProductInfoPrice>
              <ProductInfoSize pageStyle={pageStyle} />
              <ProductInfoColor pageStyle={pageStyle} />
            </div>
            <div style={{ display: "flex" }}>
              <div>
                <ProductCounter pageStyle={pageStyle}>
                  <CounterButton pageStyle={pageStyle}>+</CounterButton>
                  <CounterLabel pageStyle={pageStyle}>2</CounterLabel>
                  <CounterButton pageStyle={pageStyle}>-</CounterButton>
                </ProductCounter>
              </div>
              <ImgWrapper pageStyle={pageStyle}>
                <ProductImage
                  src="https://picsum.photos/120/190"
                  pageStyle={pageStyle}
                />
                <ImgSwipeLeft pageStyle={pageStyle} />
                <ImgSwipeRight pageStyle={pageStyle} />
              </ImgWrapper>
            </div>
          </Item>
        </List>
        {pageStyle === "CartPage" && (
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
        )}
      </Wrapper>
    );
  }
}

export default CartList;
