/// libs ///
import React, { Component } from "react";

/// components ///
import { PriceWrapper, PriceLabel, PriceValue } from "./ProductPrice.styles";

class ProductPrice extends Component {
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
    const { pageStyle } = this.props;
    return (
      <PriceWrapper>
        {pageStyle === "ProductDisplayPage" && <PriceLabel>PRICE:</PriceLabel>}
        <PriceValue pageStyle={pageStyle}>
          {this.state.currencySymbol}
          {this.state.amount}
        </PriceValue>
      </PriceWrapper>
    );
  }
}

export default ProductPrice;
