///////// libs /////////
import React, { Component, createRef } from "react";
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
  ///////////////////////////////////////////////////////////////////////////////
  constructor(props) {
    super(props);

    /* bind method to class's this variable */
    this.handleDropdownClick = this.handleDropdownClick.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.handleCurrencyClick = this.handleCurrencyClick.bind(this);
    this.renderCurrencyMenu = this.renderCurrencyMenu.bind(this);
    this.handleOutsideClicks = this.handleOutsideClicks.bind(this);

    /* vairables */
    this.mainWrapperRef = createRef();

    this.state = {
      isOpen: false,
    };
  }
  ///////////////////////////////////////////////////////////////////////////////
  /// helpers ///
  ///////////////////////////////////////////////////////////////////////////////
  toggleDropdown = () =>
    this.setState({
      isOpen: !this.state.isOpen,
    });
  ///////////////////////////////////////////////////////////////////////////////
  handleDropdownClick = () => this.toggleDropdown();
  ///////////////////////////////////////////////////////////////////////////////
  handleOutsideClicks(event) {
    const { isOpen } = this.state;
    if (!this.mainWrapperRef.current.contains(event.target) && isOpen) {
      this.toggleDropdown();
    }
  }
  ///////////////////////////////////////////////////////////////////////////////
  handleCurrencyClick = (event) => {
    const { currencies, setCurrentCurrency } = this.props;
    const selectedCurrencyLabel = event.target.id;
    const selectedCurrencySymbol = currencies.find(
      (currency) => currency.label === selectedCurrencyLabel
    );
    setCurrentCurrency(selectedCurrencySymbol);
    this.toggleDropdown();
  };
  ///////////////////////////////////////////////////////////////////////////////
  renderCurrencyMenu = () => {
    const { currencies } = this.props;
    return (
      <DropdownMenu>
        {currencies.map((currency) => (
          <MenuOption
            id={currency.label}
            key={currency.label}
            onClick={(event) => this.handleCurrencyClick(event)}
          >
            {currency.symbol} {currency.label}
          </MenuOption>
        ))}
      </DropdownMenu>
    );
  };
  ///////////////////////////////////////////////////////////////////////////////
  /// lifecycle methods ///
  ///////////////////////////////////////////////////////////////////////////////
  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
    document.addEventListener("mousedown", this.handleOutsideClicks);
  }
  ///////////////////////////////////////////////////////////////////////////////
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleOutsideClicks);
  }
  ///////////////////////////////////////////////////////////////////////////////
  render() {
    const { isOpen } = this.state;
    const { current } = this.props;
    return (
      <Wrapper ref={this.mainWrapperRef}>
        <TopWrapper onClick={(event) => this.handleDropdownClick(event)}>
          <CurrencyIcon>{current.symbol}</CurrencyIcon>
          <DropdownIcon isOpen={isOpen} />
        </TopWrapper>
        {isOpen && this.renderCurrencyMenu()}
      </Wrapper>
    );
  }
}
///////////////////////////////////////////////////////////////////////////////
const mapStateToProps = ({ currencies }) => currencies;
const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(fetchCurrencies()),
  setCurrentCurrency: (currency) => dispatch(setCurrentCurrency(currency)),
});
///////////////////////////////////////////////////////////////////////////////
export default connect(mapStateToProps, mapDispatchToProps)(CurrencyDropdown);
///////////////////////////////////////////////////////////////////////////////
