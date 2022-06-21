import React, { Component } from "react";

// importing components
import { Wrapper, Button, Info } from "./ProductOptions.styles";
import ProductInfo_Title from "../ProductInfo_Title";
import ProductInfo_Size from "../ProductInfo_Size";
import ProductInfo_Color from "../ProductInfo_Color";
import ProductInfo_Price from "../ProductInfo_Price";

class ProductOptions extends Component {
  render() {
    const style = { display: "inline-block" };
    return (
      <div style={style}>
        <Wrapper>
          <ProductInfo_Title />
          <ProductInfo_Size />
          <ProductInfo_Color />
          <ProductInfo_Price />
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
