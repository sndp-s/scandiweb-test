import React, { Component } from "react";

// components
import {
  ColorWrapper,
  ColorLabel,
  ColorList,
  Color,
} from "./ProductInfo_Color.styles";

class ProductInfo_Color extends Component {
  render() {
    return (
      <ColorWrapper>
        <ColorLabel>COLOR:</ColorLabel>
        <ColorList>
          <Color />
          <Color />
          <Color />
        </ColorList>
      </ColorWrapper>
    );
  }
}

export default ProductInfo_Color;
