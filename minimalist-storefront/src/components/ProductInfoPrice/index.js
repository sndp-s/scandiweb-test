import React, { Component } from "react";

// components
import {
  PriceWrapper,
  PriceLabel,
  PriceValue,
} from "./ProductInfoPrice.styles";

class ProductInfoPrice extends Component {
  render() {
    const { pageStyle } = this.props;
    return (
      <PriceWrapper>
        {pageStyle === "ProductDisplayPage" && <PriceLabel>PRICE:</PriceLabel>}
        <PriceValue pageStyle={pageStyle}>
          <span className="nudge">$</span>50.00
        </PriceValue>
      </PriceWrapper>
    );
  }
}

export default ProductInfoPrice;
