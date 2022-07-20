import React, { Component } from "react";

// components
import {
  PriceWrapper,
  PriceLabel,
  PriceValue,
} from "./ProductPrice.styles";

class ProductPrice extends Component {
  render() {
    const { pageStyle, price } = this.props;
    const { amount, currency } = price;
    return (
      <PriceWrapper>
        {pageStyle === "ProductDisplayPage" && <PriceLabel>PRICE:</PriceLabel>}
        <PriceValue pageStyle={pageStyle}>
          {currency.symbol}
          {amount}
        </PriceValue>
      </PriceWrapper>
    );
  }
}

export default ProductPrice;
