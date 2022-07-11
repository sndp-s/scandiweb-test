///////// libs /////////
import React, { Component } from "react";
import parse from "html-react-parser";

///////// components /////////
import { Wrapper, Description } from "./ProductOptions.styles";
import ProductTitle from "../ProductTitle";
import ProductAttributes from "../ProductAttributes";
import ProductPrice from "../ProductPrice";
import AddToCartBtn from "../AddToCartBtn";

///////// context /////////
import ProductContext from "../../app/contexts/ProductContext";

class ProductOptions extends Component {
  render() {
    const { pageStyle } = this.props;
    return (
      <ProductContext.Consumer>
        {({ attributes, brand, description, name, price }) => {
          return (
            <Wrapper>
              <ProductTitle pageStyle={pageStyle} name={name} brand={brand} />
              <ProductAttributes
                pageStyle={pageStyle}
                attributes={attributes}
              />
              <ProductPrice pageStyle={pageStyle} price={price} />
              <AddToCartBtn />
              <Description>{parse(description)}</Description>
            </Wrapper>
          );
        }}
      </ProductContext.Consumer>
    );
  }
}

export default ProductOptions;
