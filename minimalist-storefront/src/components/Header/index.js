import React, { Component } from "react";

// components
import {
  Wrapper,
  OptionsBar,
  Option,
  OptionLink,
  Logo,
  RightSideWrapper,
} from "./Header.styles";
import CurrencyDropdown from "../CurrencyDropdown";
import CartDropdown from "../CartDropdown";

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
          <CartDropdown pageStyle=""/>
        </RightSideWrapper>
      </Wrapper>
    );
  }
}

export default Header;
