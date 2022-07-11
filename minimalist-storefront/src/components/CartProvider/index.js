///////// libs /////////
import React, { Component } from "react";
import { connect } from "react-redux";

///////// context /////////
import CartContext from "../../app/contexts/CartContext";

/// thunk ///
import { fetchCartProducts } from "../../features/cartSlice";

class CartProvider extends Component {
  render() {
    return (
      <CartContext.Provider value={this.props.cartData}>
        {this.props.children}
      </CartContext.Provider>
    );
  }

  componentDidMount() {
    this.props.fetchCartProducts();
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    cartData: state.cart,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCartProducts: () => dispatch(fetchCartProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartProvider);
