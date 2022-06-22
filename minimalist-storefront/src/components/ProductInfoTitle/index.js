import React, { Component } from "react";

// components
import { Brand, Item } from "./ProductInfoTitle.styles";

class ProductInfoTitle extends Component {
  render() {
    const { pageStyle } = this.props;
    return (
      <>
        <Brand pageStyle={pageStyle}>Apollo</Brand>
        <Item pageStyle={pageStyle}>Running Short</Item>
      </>
    );
  }
}

export default ProductInfoTitle;
