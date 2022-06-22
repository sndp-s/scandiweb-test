import React, { Component } from "react";

// importing components
import { Wrapper, Button, Info } from "./ProductOptions.styles";
import ProductInfoTitle from "../ProductInfoTitle";
import ProductInfoSize from "../ProductInfoSize";
import ProductInfoColor from "../ProductInfoColor";
import ProductInfoPrice from "../ProductInfoPrice";

class ProductOptions extends Component {
  render() {
    const { pageStyle } = this.props;
    const style = { display: "inline-block" };
    return (
      <div style={style}>
        <Wrapper>
          <ProductInfoTitle pageStyle={pageStyle} />
          <ProductInfoSize pageStyle={pageStyle} />
          <ProductInfoColor pageStyle={pageStyle} />
          <ProductInfoPrice pageStyle={pageStyle} />
          <Button>ADD TO CART</Button>
          <Info>
            Find stunning women's cocktail dresses and party dresses. Stand out
            in lace and metallic cocktail dresses and party dresses from all
            your favorite brands.
          </Info>
        </Wrapper>
      </div>
    );
  }
}

export default ProductOptions;
