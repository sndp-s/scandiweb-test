///////// libs/////////
import React, { Component } from "react";

///////// components /////////
import Layout from "../Layout";
import ProductGallery from "../../components/ProductGallery";
import ProductOptions from "../../components/ProductOptions";
import withRouter from "../../components/withRouter";

class ProductDisplayPage extends Component {
  render() {
    const style = {
      display: "flex",
      padding: "80px 0 0 0",
    };
    const { params } = this.props;
    console.log(params)
    return (
      <Layout>
        <main style={style} className="container">
          <ProductGallery />
          <ProductOptions pageStyle="ProductDisplayPage" />
        </main>
      </Layout>
    );
  }
}
export default withRouter(ProductDisplayPage);
