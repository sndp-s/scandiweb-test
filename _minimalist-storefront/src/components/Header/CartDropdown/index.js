/// libs ///
import React, { Component, createRef } from "react";
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
// import CartList from "../../CartList";

class CartDropdown extends Component {
  constructor(props) {
    super(props);

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.handleclick = this.handleClick.bind(this);
    this.handleOutsideClicks = this.handleOutsideClicks.bind(this);
    this.WrapperRef = createRef();

    this.state = {
      isOpen: false,
    };
  }

  toggleDropdown = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleClick = () => {
    this.toggleDropdown();
  };

  handleOutsideClicks(event) {
    if (!this.WrapperRef.current.contains(event.target) && this.state.isOpen) {
      this.toggleDropdown();
    }
    // console.log(this.WrapperRef);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleOutsideClicks);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleOutsideClicks);
  }

  render() {
    return (
      <Wrapper ref={this.WrapperRef}>
        <CartIcon onClick={this.handleClick} />
        {this.state.isOpen && (
          <>
            <Overlay />
            <Dropdown>
              <Heading>
                My Bag, <span>3 items</span>
              </Heading>
              <ScrollableListWrapper>
                {/* <CartList pageStyle="CartDropdown" /> */}
              </ScrollableListWrapper>
              <TotalWrapper>
                <Label>Total</Label>
                <Amount>$200.00</Amount>
              </TotalWrapper>
              <BtnsWrapper>
                <Link to="/cart">
                  <ViewBagBtn onClick={() => this.toggleDropdown()}>
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

/**
 * todo (CartDropdown):
 * lock scroll while minicart dropdown is open. --todo
 *
 * */
