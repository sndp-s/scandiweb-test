import React, { Component } from "react";

// import components
import ProductShowcase from "../components/ProductShowcase";
import ProductOptions from "../components/ProductOptions";

class ProductDisplayPage extends Component {
  render() {
    const style = {
      display: "flex",
      padding: "80px 0 0 0",
    };
    return (
      <main className="container" style={style}>
        <ProductShowcase />
        <ProductOptions pageStyle="ProductDisplayPage" />
      </main>
    );
  }
}

export default ProductDisplayPage;
