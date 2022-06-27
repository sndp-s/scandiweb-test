import React, { Component } from "react";

// component
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
            this.setState({ isMenuOpen: !isMenuOpen });
          }}
        />
        {isMenuOpen && (
          <>
            <Overlay />
            <Dropdown>
              <Heading>
                My Bag, <span>3 items</span>
              </Heading>
              <ScrollableListWrapper>
                <CartList pageStyle="CartDropdown" />
              </ScrollableListWrapper>
              <TotalWrapper>
                <Label>Total</Label>
                <Amount>$200.00</Amount>
              </TotalWrapper>
              <BtnsWrapper>
                <ViewBagBtn>View Bag</ViewBagBtn>
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
