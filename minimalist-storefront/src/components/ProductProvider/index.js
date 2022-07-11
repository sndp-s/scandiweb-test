///////// libs /////////
import React, { Component } from "react";
import { connect } from "react-redux";

///////// context /////////
import ProductContext from "../../app/contexts/ProductContext";

///////// reducers /////////
import { fetchProduct } from "../../features/productSlice";

class ProductProvider extends Component {
  render() {
    return (
      <ProductContext.Provider value={this.props.productData}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }

  componentDidMount() {
    this.props.fetchProduct();
  }
}

const mapStateToProps = (state, ownProps) => {
  const { product, loading, hasErrors } = state.product;
  /* init return object */
  const productData = {
    attributes: [],
    brand: "",
    description: "",
    gallery: [],
    name: "",
    price: {
      currency: {
        symbol: "",
        label: "",
      },
      amount: 0,
    },
    loading,
    hasErrors,
    productId: ownProps.productId,
  };

  if (Object.keys(product).length > 0) {
    const { attributes, brand, description, gallery, name, prices } = product;
    const { current } = state.currencies;
    /* obtain price in current currency */
    const price = prices.find((price) => {
      return price.currency.symbol === current.symbol;
    });

    /* assembling required return data */
    productData.attributes = attributes;
    productData.brand = brand;
    productData.description = description;
    productData.gallery = gallery;
    productData.name = name;
    productData.price = price;
    productData.loading = loading;
    productData.hasErrors = hasErrors;
  }
  return { productData };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchProduct: () => dispatch(fetchProduct(ownProps.productId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductProvider);
