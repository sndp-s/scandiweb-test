///////// libs/////////
import React, { Component } from "react";
// import { connect } from "react-redux";

///////// components /////////
import ProductGallery from "../../components/ProductGallery";
import ProductOptions from "../../components/ProductOptions";
import withRouter from "../../components/withRouter";
import ProductProvider from "../../components/ProductProvider";

class ProductDisplayPage extends Component {
  render() {
    const style = {
      display: "flex",
      padding: "80px 0 0 0",
    };
    return (
      <main style={style} className="container">
        <ProductProvider productId={this.props.params.productId}>
          <ProductGallery pageStyle="ProductDisplayPage" />
          <ProductOptions pageStyle="ProductDisplayPage" />
        </ProductProvider>
      </main>
    );
  }
}

export default withRouter(ProductDisplayPage);
