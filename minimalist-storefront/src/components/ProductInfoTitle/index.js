import React, { Component } from "react";

// components
import { Brand, Item } from "./ProductInfoTitle.styles";

class ProductInfoTitle extends Component {
  render() {
    const { pageStyle, name, brand } = this.props;
    return (
      <>
        <Brand pageStyle={pageStyle}>{brand}</Brand>
        <Item pageStyle={pageStyle}>{name}</Item>
      </>
    );
  }
}

export default ProductInfoTitle;
