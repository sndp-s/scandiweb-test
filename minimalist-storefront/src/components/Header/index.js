import React, { Component } from "react";

// components
import {
  Wrapper,
  OptionsBar,
  Option,
  OptionLink,
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
          <Option>
            <OptionLink href="#">WOMEN</OptionLink>
          </Option>
          <Option>
            <OptionLink href="#">MEN</OptionLink>
          </Option>
          <Option>
            <OptionLink href="#">KIDS</OptionLink>
          </Option>
        </OptionsBar>
        <a href="/">
          <Logo />
        </a>
        <RightSideWrapper>
          <CurrencyDropdown />
          <Cart />
        </RightSideWrapper>
      </Wrapper>
    );
  }
}

export default Header;
