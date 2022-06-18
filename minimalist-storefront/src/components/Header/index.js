import React, { Component } from "react";

// components
import {
  Wrapper,
  OptionsBar,
  Option,
  Logo,
  RightSideWrapper,
  Cart,
} from "./Header.styles";
import CurrencyDropdown from "../CurrencyDropdown";

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
        <RightSideWrapper >
          <CurrencyDropdown />
          <Cart />
        </RightSideWrapper>
      </Wrapper>
    );
  }
}

export default Header;
