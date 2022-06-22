import React, { Component } from "react";

// components
import {
  Wrapper,
  ColorLabel,
  ColorList,
  Color,
} from "./ProductInfoColor.styles";

class ProductInfoColor extends Component {
  render() {
    const { pageStyle } = this.props;
    return (
      <Wrapper pageStyle={pageStyle}>
        <ColorLabel pageStyle={pageStyle}>COLOR:</ColorLabel>
        <ColorList pageStyle={pageStyle}>
          <Color pageStyle={pageStyle} />
          <Color pageStyle={pageStyle} />
          <Color pageStyle={pageStyle} />
        </ColorList>
      </Wrapper>
    );
  }
}

export default ProductInfoColor;
