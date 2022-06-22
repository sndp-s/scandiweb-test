import React, { Component } from "react";

// components
import { PriceWrapper, PriceLabel } from "./ProductInfoPrice.styles";

class ProductInfoPrice extends Component {
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

export default ProductInfoPrice;
