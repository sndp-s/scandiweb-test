///////// libs /////////
import React, { Component } from "react";
import parse from "html-react-parser";

///////// components /////////
import { Wrapper, Button, Description } from "./ProductOptions.styles";
import ProductInfoTitle from "../ProductInfoTitle";
import ProductInfoColor from "../ProductInfoColor";
import ProductInfoPrice from "../ProductInfoPrice";
import ProductInfoAttribute from "../ProductInfoAttribute";

class ProductOptions extends Component {
  render() {
    const {
      pageStyle,
      attributes,
      brand,
      description,
      name,
      price,
    } = this.props;
    console.log(attributes);
    return (
      <Wrapper>
        <ProductInfoTitle pageStyle={pageStyle} name={name} brand={brand} />
        {attributes.map((attribute) => (
          <ProductInfoAttribute attribute={attribute} pageStyle={pageStyle} />
        ))}
        <ProductInfoPrice pageStyle={pageStyle} price={price} />
        <Button>ADD TO CART</Button>
        <Description>{parse(description)}</Description>
      </Wrapper>
    );
  }
}

export default ProductOptions;
