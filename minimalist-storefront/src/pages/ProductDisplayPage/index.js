// libs
import React, { Component } from "react";

// components
import Layout from "../Layout";
import ProductShowcase from "../../components/ProductShowcase";
import ProductOptions from "../../components/ProductOptions";

class ProductDisplayPage extends Component {
  render() {
    const style = {
      display: "flex",
      padding: "80px 0 0 0",
    };
    return (
      <Layout>
        <main className="container" style={style}>
          <ProductShowcase />
          <ProductOptions pageStyle="ProductDisplayPage" />
        </main>
      </Layout>
    );
  }
}

export default ProductDisplayPage;
