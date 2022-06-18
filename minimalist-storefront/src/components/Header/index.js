import React, { Component } from "react";

// components
import CurrencyDropdown from "../CurrencyDropdown";
import {
  Wrapper,
  OptionsBar,
  Option,
  Logo,
  RightSideWrapper,
  Cart,
} from "./Header.styles";

class Header extends Component {
  render() {
    return (
      <Wrapper className="container">
        <OptionsBar>
          <Option>WOMEN</Option>
          <Option>MEN</Option>
          <Option>KIDS</Option>
        </OptionsBar>
        <Logo />
        <RightSideWrapper>
          <CurrencyDropdown />
          <Cart />
        </RightSideWrapper>
      </Wrapper>
    );
  }
}

export default Header;
