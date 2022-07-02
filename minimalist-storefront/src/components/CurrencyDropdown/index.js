///////// libs /////////
import React, { Component } from "react";
import { connect } from "react-redux";

///////// components /////////
import {
  Wrapper,
  CurrencyIcon,
  TopWrapper,
  DropdownIcon,
  DropdownMenu,
  MenuOption,
} from "./CurrencyDropdown.styles";

///////// thunk /////////
import {
  fetchCurrencies,
  setCurrentCurrency,
} from "../../features/currenciesSlice";

class CurrencyDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownClicked: false,
    };
  }
  componentDidMount() {
    this.props.fetchCurrencies();
  }
  /// helpers ///
  renderCurrencyMenu = (currencies, setCurrentCurrency) => (
    <DropdownMenu>
      {currencies.map((currency) => (
        <MenuOption
          id={currency.label}
          key={currency.label}
          onClick={(event) =>
            this.handleCurrencyOptionClick(
              event,
              currencies,
              setCurrentCurrency
            )
          }
        >
          {currency.symbol} {currency.label}
        </MenuOption>
      ))}
    </DropdownMenu>
  );
  handleDropdownClick = (event) => {
    this.setState({
      dropdownClicked: !this.state.dropdownClicked,
    });
  };
  handleCurrencyOptionClick = (event, currencies, setCurrentCurrency) => {
    const selectedCurrencyLabel = event.target.id;
    const selectedCurrency = currencies.find(
      (currency) => currency.label === selectedCurrencyLabel
    );
    setCurrentCurrency(selectedCurrency);
  };
  setCurrencyPref = (currency) =>
    this.setState({
      dropdownClicked: false,
      currencyPref: currency,
    });
  /////////////////////////////////////////////////////////
  render() {
    const { dropdownClicked } = this.state;
    const { currencies, current, setCurrentCurrency } = this.props;
    return (
      <Wrapper>
        <TopWrapper onClick={(event) => this.handleDropdownClick(event)}>
          <CurrencyIcon>{current.symbol}</CurrencyIcon>
          <DropdownIcon isOpen={dropdownClicked} />
        </TopWrapper>
        {dropdownClicked &&
          this.renderCurrencyMenu(currencies, setCurrentCurrency)}
      </Wrapper>
    );
  }
}
/////////////////////////////////////////////////////////
const mapStateToProps = ({ currencies }) => currencies;

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(fetchCurrencies()),
  setCurrentCurrency: (currency) => dispatch(setCurrentCurrency(currency)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyDropdown);
/////////////////////////////////////////////////////////
