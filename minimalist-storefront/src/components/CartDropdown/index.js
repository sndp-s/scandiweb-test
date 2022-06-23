import React, { Component } from "react";

// component
import { Wrapper, CartIcon, Dropdown } from "./CartDropdown.styles";
import CartList from "../CartList";

class CartDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
  }
  render() {
    const { isMenuOpen } = this.state;
    return (
      <Wrapper>
        <CartIcon
          onClick={(event) => {
            console.log("BEFORE: ", isMenuOpen);
            this.setState({ isMenuOpen: !isMenuOpen });
            console.log("AFTER: ", isMenuOpen);
          }}
        />
        {isMenuOpen && (
          <Dropdown>
            <CartList pageStyle="CartDropdown" />
          </Dropdown>
        )}
      </Wrapper>
    );
  }
}

export default CartDropdown;
