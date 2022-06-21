import React, { Component } from "react";

// components
import {
  SizeWrapper,
  SizeLabel,
  SizeList,
  Size,
} from "./ProductInfo_Size.styles";

class ProductInfo_Size extends Component {
  render() {
    return (
      <SizeWrapper>
        <SizeLabel>SIZE:</SizeLabel>
        <SizeList>
          <Size>XS</Size>
          <Size>S</Size>
          <Size>M</Size>
          <Size>L</Size>
        </SizeList>
      </SizeWrapper>
    );
  }
}

export default ProductInfo_Size;
