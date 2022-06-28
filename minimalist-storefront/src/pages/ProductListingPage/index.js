// libs
import React, { Component } from "react";

// components
import Layout from "../Layout";
import Title from "../../components/Title";
import ProductGrid from "../../components/ProductGrid";

class ProductListingPage extends Component {
  render() {
    return (
      <Layout>
        <main className="container">
          <Title text="Category name" pageStyle="ProductListingPage" />
          <ProductGrid />
        </main>
      </Layout>
    );
  }
}

export default ProductListingPage;
