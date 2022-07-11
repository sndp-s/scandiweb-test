///////// libs /////////
import React, { Component } from "react";

///////// components /////////
import ProductAttribute from "../ProductAttribute";

class ProductAttributes extends Component {
  render() {
    const { attributes, pageStyle } = this.props;
    return (
      <>
        {attributes.map((attribute, index) => (
          <ProductAttribute
            key={index}
            attribute={attribute}
            pageStyle={pageStyle}
          />
        ))}
      </>
    );
  }
}

export default ProductAttributes;
