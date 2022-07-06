/// libs ///
import React, { Component } from "react";
import { connect } from "react-redux";

/// components ///
import Title from "../../components/Title";
import ProductGrid from "../../components/ProductGrid";

class ProductListingPage extends Component {
  render() {
    const { current } = this.props.categories;
    return (
      <main>
        <Title text={current} pageStyle="ProductListingPage" />
        <ProductGrid />
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};

export default connect(mapStateToProps)(ProductListingPage);
