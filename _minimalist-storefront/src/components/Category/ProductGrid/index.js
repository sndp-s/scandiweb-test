/// libs ///
import React, { Component } from "react";
import { connect } from "react-redux";

/// components ///
import ProductThumbnail from "./ProductThumbnail";
import LoadingSpinner from "../../LoadingSpinner";
import { Grid } from "./ProductGrid.styles";

/// thunk ///
import { getProducts } from "../../../slices/productsSlice";

class ProductGrid extends Component {
  componentDidMount() {
    this.props.getProducts(this.props.category);
  }

  componentDidUpdate(prevProps) {
    if (this.props.category !== prevProps.category) {
      this.props.getProducts(this.props.category);
    }
  }

  render() {
    const { loading, hasErrors, products } = this.props.products;
    return (
      <Grid>
        {loading && <LoadingSpinner />}
        {hasErrors && <h1>Error loading products. Please try again.</h1>}
        {products &&
          products.map((product, index) => {
            return (
              <ProductThumbnail
                key={index}
                product={product}
                currentCurrency={this.props.currentCurrency}
              />
            );
          })}
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
  currentCurrency: state.currencies.current,
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: (categoryName) => dispatch(getProducts(categoryName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductGrid);
