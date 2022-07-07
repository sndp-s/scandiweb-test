///////// libs/////////
import React, { Component } from "react";
import { connect } from "react-redux";

///////// components /////////
import Layout from "../Layout";
import ProductGallery from "../../components/ProductGallery";
import ProductOptions from "../../components/ProductOptions";
import withRouter from "../../components/withRouter";
import LoadingSpinner from "../../components/LoadingSpinner";
import Error from "../../components/Error";

///////// reducer /////////
import { fetchProduct } from "../../features/productSlice";

class ProductDisplayPage extends Component {
  componentDidMount() {
    this.props.fetchProduct();
  }
  render() {
    const style = {
      display: "flex",
      padding: "80px 0 0 0",
    };
    const {
      attributes,
      brand,
      description,
      gallery,
      name,
      price,
      loading,
      hasErrors,
    } = this.props.data;
    return (
      <Layout>
        {loading && <LoadingSpinner />}
        {loading && <Error />}
        <main style={style} className="container">
          <ProductGallery gallery={gallery} />
          <ProductOptions
            pageStyle="ProductDisplayPage"
            attributes={attributes}
            brand={brand}
            description={description}
            name={name}
            price={price}
          />
        </main>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  const { product, loading, hasErrors } = state.product;
  /// init return object ///
  let data = {
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
  };
  //// obtain price in current currency ///
  if (Object.keys(product).length > 0) {
    const { attributes, brand, description, gallery, name, prices } = product;
    const { current } = state.currencies;
    const price = prices.find((price) => {
      return price.currency.symbol === current.symbol;
    });
    /// assembling required return data ///
    data = {
      attributes,
      brand,
      description,
      gallery,
      name,
      price,
      loading,
      hasErrors,
    };
  }
  return { data };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchProduct: () => dispatch(fetchProduct(ownProps.params.productId)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductDisplayPage)
);
