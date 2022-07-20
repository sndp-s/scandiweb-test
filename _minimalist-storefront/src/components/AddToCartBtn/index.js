/// libs ///
import React, { Component } from "react";
import { connect } from "react-redux";

/// components ///
import { Button } from "./AddToCartBtn.styles";

/// actions ///
import { addToCart } from "../../features/cartSlice";

class AddToCartBtn extends Component {
  submitHandler = () => {
    const { allAttributes, selectedAttributeOptions, product } = this.props;
    // check if all attributes are selected
    for (const attributeId of allAttributes) {
      if (selectedAttributeOptions[attributeId] === undefined) {
        alert("please select all the attributes");
        return;
      }
    }
    // prep cart obj
    const { productId } = product;
    const cartItem = {
      productId,
      selectedAttributeOptions,
    };

    this.props.addToCart(cartItem);
  };

  render() {
    return <Button onClick={() => this.submitHandler()}>add to cart</Button>;
  }
}

const mapStateToProps = (state) => {
  const { allAttributes, selectedAttributeOptions, product } = state.product;

  return { product, allAttributes, selectedAttributeOptions };
};
const mapDispatchToProps = (dispatch) => ({
  addToCart: (productDetails) => dispatch(addToCart(productDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddToCartBtn);
