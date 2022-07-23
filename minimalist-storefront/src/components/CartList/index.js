/// libs ///
import React, { Component } from "react";

/// reducers ///

/// components ///
import {
  Wrapper,
  List,
  Item,
  ProductCounter,
  CounterButton,
  CounterLabel,
  OrderWrapper,
  OrderCalcGrid,
  OrderButton,
} from "./CartList.styles";
import ProductTitle from "../ProductTitle";
import ProductPrice from "../ProductPrice";
import Carousel from "../Carousel";
import ProductAttributes from "../ProductAttributes";

/// context ///
import CartContext from "../../app/contexts/CartContext";

class CartList extends Component {
  render() {
    const { pageStyle } = this.props;
    return (
      <CartContext.Consumer>
        {(value) => {
          const { cartItems } = value;

          if (cartItems.length === 0) {
            return <h1>The Cart is Empty!</h1>;
          } else if (cartItems[0].product) {
            return (
              <Wrapper pageStyle={pageStyle}>
                <List pageStyle={pageStyle}>
                  {cartItems.map((item, index) => {
                    const { selectedAttributeOptions } = item;
                    const { name, brand, attributes, gallery } = item.product;

                    return (
                      <Item pageStyle={pageStyle} key={index}>
                        <div>
                          <ProductTitle
                            pageStyle={pageStyle}
                            name={name}
                            brand={brand}
                          />
                          {/* <ProductPrice pageStyle={pageStyle} price={price} /> */}
                          <ProductAttributes
                            pageStyle={pageStyle}
                            attributes={attributes}
                          />
                        </div>
                        <div style={{ display: "flex" }}>
                          <div>
                            <ProductCounter pageStyle={pageStyle}>
                              <CounterButton pageStyle={pageStyle}>
                                +
                              </CounterButton>
                              <CounterLabel pageStyle={pageStyle}>
                                2
                              </CounterLabel>
                              <CounterButton pageStyle={pageStyle}>
                                -
                              </CounterButton>
                            </ProductCounter>
                          </div>
                          <Carousel pageStyle={pageStyle} gallery={gallery} />
                        </div>
                      </Item>
                    );
                  })}
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
        }}
      </CartContext.Consumer>
    );
  }
}

export default CartList;
