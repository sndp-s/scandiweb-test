/// libs ///
import React, { Component } from "react";

/// components ///
import { Text } from "./Price.styles.js";

class Price extends Component {
  constructor(props) {
    super(props);
    this.filterPrice = this.filterPrice.bind(this);
    this.state = {
      currencySymbol: this.props.currentCurrency.symbol,
      amount: 0,
    };
  }

  filterPrice() {
    const amtInCurrentCurrency = this.props.prices.find(
      (price) => price.currency.symbol === this.props.currentCurrency.symbol
    );
    this.setState({
      currencySymbol: amtInCurrentCurrency.currency.symbol,
      amount: amtInCurrentCurrency.amount,
    });
  }

  componentDidMount() {
    this.filterPrice();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.currentCurrency.symbol !== prevProps.currentCurrency.symbol
    ) {
      this.filterPrice();
    }
  }

  render() {
    return (
      <Text>
        {this.state.currencySymbol} {this.state.amount}
      </Text>
    );
  }
}

export default Price;
