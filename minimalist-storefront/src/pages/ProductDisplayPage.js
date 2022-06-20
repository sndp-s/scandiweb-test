import React, { Component } from "react";

// import components
import ProductShowcase from "../components/ProductShowcase";
import ProductOptions from "../components/ProductOptions";

class ProductDisplayPage extends Component {
  render() {
    return(

        <main className="container">
            <ProductShowcase />
            <ProductOptions />
        </main>
    );
  }
}

export default ProductDisplayPage;
