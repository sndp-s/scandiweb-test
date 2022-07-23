/// libs ///
import React, { Component } from "react";
import { Link } from "react-router-dom";

/// components ///
import {
  Wrapper,
  CartIcon,
  Dropdown,
  ScrollableListWrapper,
  Heading,
  Overlay,
  TotalWrapper,
  Label,
  Amount,
  BtnsWrapper,
  ViewBagBtn,
  CheckOutBtn,
} from "./CartDropdown.styles";
import CartList from "../CartList";

/// provider ///
import CartProvider from "../../components/CartProvider";

class CartDropdown extends Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = {
      isMenuOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };

  render() {
    const { isMenuOpen } = this.state;
    return (
      <Wrapper>
        <CartIcon onClick={() => this.toggleMenu()} />
        {isMenuOpen && (
          <>
            <Overlay />
            <Dropdown>
              <Heading>
                My Bag, <span>3 items</span>
              </Heading>
              <ScrollableListWrapper>
                <CartProvider>
                  <CartList pageStyle="CartDropdown" />
                </CartProvider>
              </ScrollableListWrapper>
              <TotalWrapper>
                <Label>Total</Label>
                <Amount>$200.00</Amount>
              </TotalWrapper>
              <BtnsWrapper>
                <Link to="/cart">
                  <ViewBagBtn onClick={() => this.toggleMenu()}>
                    View Bag
                  </ViewBagBtn>
                </Link>
                <CheckOutBtn>Check Out</CheckOutBtn>
              </BtnsWrapper>
            </Dropdown>
          </>
        )}
      </Wrapper>
    );
  }
}

export default CartDropdown;
