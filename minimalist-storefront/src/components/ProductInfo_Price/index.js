import React, { Component } from "react";

// components
import { PriceWrapper, PriceLabel } from "./ProductInfo_Price.styles";

class ProductInfo_Price extends Component {
  render() {
    return (
      <PriceWrapper>
        <PriceLabel>
          <span className="nudge">$</span>50.00
        </PriceLabel>
      </PriceWrapper>
    );
  }
}

export default ProductInfo_Price;
