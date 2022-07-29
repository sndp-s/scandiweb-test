///////// libs /////////
import React, { Component } from "react";

///////// components /////////
import Navbar from "./Navbar";
import CurrencyDropdown from "./CurrencyDropdown";
import CartDropdown from "./CartDropdown";
import { Wrapper, Content, Logo, RightSideWrapper } from "./Header.styles";

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Content className="container">
          <Navbar />
          <Logo />
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
