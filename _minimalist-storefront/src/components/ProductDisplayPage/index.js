///////// libs/////////
import React, { Component } from "react";
import { connect } from "react-redux";

///////// components /////////
import { Wrapper, Content } from "./ProductDisplayPage.styles";
import { withRouter } from "react-router";
import ProductGallery from "./ProductGallery";
import ProductOptions from "./ProductOptions";

import { getProduct } from "../../slices/productSlice";

class ProductDisplayPage extends Component {
  componentDidMount() {
    const productId = this.props.match.params.productId;
    this.props.getProduct(productId);
  }

  render() {
    const { product, currentCurrency } = this.props;
    return (
      <Wrapper>
        <Content className="container">
          {product.product.id && (
            <>
              <ProductGallery gallery={product.product.gallery} />
              <ProductOptions
                pageStyle="ProductDisplayPage"
                product={product.product}
                currentCurrency={currentCurrency}
              />
            </>
          )}
        </Content>
      </Wrapper>
      // <></>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.product,
    currentCurrency: state.currencies.current,
  };
};

const mapDispatchtoProps = (dispatch) => ({
  getProduct: (productId) => dispatch(getProduct(productId)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchtoProps)(ProductDisplayPage)
);
