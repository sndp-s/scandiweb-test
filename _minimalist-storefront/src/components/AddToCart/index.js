/// libs ///
import React, { Component } from "react";
import { connect } from "react-redux";

/// components ///
import { Button } from "./AddToCart.styles";

/// reducer ///
import { addToCart } from "../../slices/cartSlice";

class AddToCart extends Component {
  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler = () => {
    const { productInCart } = this.props;
    const { attributes } = productInCart.product;

    // making sure that all attributes are selected before dispatch addToCart action to the store.
    const attributeIds = Object.keys(attributes);
    for (const attributeId of attributeIds) {
      if (attributes[attributeId].selectedOptionId === undefined) {
        alert("please select all the attributes");
        return;
      }
    }

    // dispatch addTocart action to the store.
    this.props.addToCart();
  };

  render() {
    return <Button onClick={() => this.submitHandler()}>add to cart</Button>;
  }
}

const mapStateToProps = (state) => {
  return { productInCart: state.cart.temp };
};
const mapDispatchToProps = (dispatch) => ({
  addToCart: (productDetails) => dispatch(addToCart(productDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddToCart);
