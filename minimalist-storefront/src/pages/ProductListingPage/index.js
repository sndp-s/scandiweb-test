// libs
import React, { Component } from "react";

// components
import Title from "../../components/Title";
import ProductGrid from "../../components/ProductGrid";

class ProductListingPage extends Component {
  render() {
    return (
      <main>
        <Title text="Category name" pageStyle="ProductListingPage" />
        <ProductGrid />
      </main>
    );
  }
}

export default ProductListingPage;
