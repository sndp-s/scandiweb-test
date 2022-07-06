/// libs ///
import React, { Component } from "react";
import { connect } from "react-redux";

/// components ///
import Title from "../../components/Title";
import ProductGrid from "../../components/ProductGrid";

/// pages ///
import Layout from "../Layout";

class ProductListingPage extends Component {
  render() {
    const { current } = this.props.categories;
    return (
      <Layout>
        <main className="container">
          <Title text={current} pageStyle="ProductListingPage" />
          <ProductGrid />
        </main>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};

export default connect(mapStateToProps)(ProductListingPage);
