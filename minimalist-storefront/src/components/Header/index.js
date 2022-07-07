///////// libs /////////
import React, { Component } from "react";
import { Link } from "react-router-dom";

///////// components /////////
import Navbar from "../Navbar";
import CurrencyDropdown from "../CurrencyDropdown";
import CartDropdown from "../CartDropdown";
/// styled components ///
import { Wrapper, Content, Logo, RightSideWrapper } from "./Header.styles";

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Content className="container">
          <Navbar />
          <Link to="/">
            <Logo />
          </Link>
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
