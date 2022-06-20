import React, { Component } from "react";

// components
import Title from "../components/Title";
import ProductGrid from "../components/ProductGrid";

// assets

class ProductListingPage extends Component {
  render() {
    return (
      <main className="container">
        <Title text="Category name" />
        <ProductGrid />
      </main>
    );
  }
}

export default ProductListingPage;
