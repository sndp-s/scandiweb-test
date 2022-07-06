///////// libs /////////
import React, { Component } from "react";
import { connect } from "react-redux";

///////// components ////////
import ProductThumbnail from "../ProductThumbnail";
import { Grid } from "./ProductGrid.styles";

class ProductGrid extends Component {
  render() {
    const { currentCategoryProductsList } = this.props;
    return (
      <Grid>
        {currentCategoryProductsList.map((product, index) => {
          const { id, name, inStock, gallery, price } = product;
          return (
            <ProductThumbnail
              key={index}
              id={id}
              name={name}
              gallery={gallery}
              inStock={inStock}
              price={price}
            />
          );
        })}
      </Grid>
    );
  }
}

const mapStateToProps = ({ categories, currencies }) => {
  let currentCategoryProductsList = [];
  // filtering out the products other than the current one.
  if (categories.categories.length > 0) {
    const { current } = categories;
    currentCategoryProductsList = categories.categories.find(
      (category) => category.name === current
    ).products;
  }

  // filtering out prices other than the one in current format.
  const currentCurrencySymbol = currencies.current.symbol;
  currentCategoryProductsList = currentCategoryProductsList.map(
    ({ prices, ...rest }) => {
      const price = prices.find(
        (price) => price.currency.symbol === currentCurrencySymbol
      );
      if (price === undefined)
        return { ...rest, price: { currency: { symbol: "$" }, amount: 0 } };
      else return { ...rest, price };
    }
  );
  return {
    currentCategoryProductsList,
  };
};
// const mapDispatchToProps = (dispatch) => ({
//   fetchCategories: () => dispatch(fetchCategories()),
// });
export default connect(mapStateToProps)(ProductGrid);
