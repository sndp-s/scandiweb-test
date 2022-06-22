import React, { Component } from "react";

// styled components
import {
  Wrapper,
  CurrencyIcon,
  TopWrapper,
  DropdownIcon,
  DropdownMenu,
  MenuOption,
} from "./CurrencyDropdown.styles";

class CurrencyDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownClicked: false,
      currencyPref: "usd",
      currencyIcon: "$",
    };
  }

  // helpers
  validCurrencies = new Map([
    ["usd", "$"],
    ["eur", "€"],
    ["jpy", "¥"],
  ]);

  renderCurrencyMenu = () => (
    <DropdownMenu>
      <MenuOption
        id="usd"
        onClick={(event) => this.handleCurrencyOptionClick(event)}
      >
        &#36; USD
      </MenuOption>
      <MenuOption
        id="eur"
        onClick={(event) => this.handleCurrencyOptionClick(event)}
      >
        &#8364; EUR
      </MenuOption>
      <MenuOption
        id="jpy"
        onClick={(event) => this.handleCurrencyOptionClick(event)}
      >
        &#165; JPY
      </MenuOption>
    </DropdownMenu>
  );

  handleDropDownClick = (event) => {
    this.setState({
      dropdownClicked: !this.state.dropdownClicked,
    });
  };

  handleCurrencyOptionClick = (event) => {
    const currency = event.target.id;
    this.setCurrencyPref(currency);
  };

  setCurrencyPref = (currency) =>
    this.setState({
      dropdownClicked: false,
      currencyPref: currency,
      currencyIcon: this.validCurrencies.get(currency),
    });

  render() {
    const { dropdownClicked, currencyIcon } = this.state;
    return (
      <Wrapper>
        <TopWrapper onClick={(event) => this.handleDropDownClick(event)}>
          <CurrencyIcon>{currencyIcon}</CurrencyIcon>
          <DropdownIcon isOpen={dropdownClicked} />
        </TopWrapper>
        {dropdownClicked && this.renderCurrencyMenu()}
      </Wrapper>
    );
  }
}

export default CurrencyDropdown;
