import React, { Component } from "react";

// components
import {
  Wrapper,
  Content,
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
      <Wrapper>
        <Content className="container">
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
            <CartDropdown />
          </RightSideWrapper>
        </Content>
      </Wrapper>
    );
  }
}

export default Header;
