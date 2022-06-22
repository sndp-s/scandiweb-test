import React, { Component } from "react";

// components
import {
  SizeWrapper,
  SizeLabel,
  SizeList,
  Size,
} from "./ProductInfoSize.styles";

class ProductInfoSize extends Component {
  render() {
    const { pageStyle } = this.props;
    return (
      <SizeWrapper pageStyle={pageStyle}>
        <SizeLabel pageStyle={pageStyle}>SIZE:</SizeLabel>
        <SizeList pageStyle={pageStyle}>
          <Size pageStyle={pageStyle}>XS</Size>
          <Size pageStyle={pageStyle}>S</Size>
          <Size pageStyle={pageStyle}>M</Size>
          <Size pageStyle={pageStyle}>L</Size>
        </SizeList>
      </SizeWrapper>
    );
  }
}

export default ProductInfoSize;
