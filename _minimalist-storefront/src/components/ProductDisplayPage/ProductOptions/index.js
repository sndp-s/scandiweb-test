/// libs ///
import React, { Component } from "react";
import parse from "html-react-parser";

/// components ///
import { Wrapper, Description, OutOfStockMsg } from "./ProductOptions.styles";
import ProductTitle from "../../ProductTitle";
import ProductAttributes from "../../ProductAttributes";
import ProductPrice from "../../ProductPrice";
import AddToCart from "../../AddToCart";

class ProductOptions extends Component {
  render() {
    const { pageStyle, product, currentCurrency } = this.props;
    return (
      <Wrapper>
        <ProductTitle
          pageStyle={pageStyle}
          name={product.name}
          brand={product.brand}
        />
        <ProductAttributes
          pageStyle={pageStyle}
          productId={product.id}
          attributes={product.attributes}
          inStock={product.inStock}
        />
        <ProductPrice
          pageStyle={pageStyle}
          prices={product.prices}
          currentCurrency={currentCurrency}
        />
        {product.inStock ? (
          <AddToCart />
        ) : (
          <OutOfStockMsg>Out Of Stock!</OutOfStockMsg>
        )}
        <Description>{parse(product.description)}</Description>
      </Wrapper>
    );
  }
}

export default ProductOptions;
