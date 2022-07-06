///////// libs /////////
import React, { Component } from "react";
import { connect } from "react-redux";

///////// components ////////
import SingleProductThumbnail from "../SingleProductThumbnail";
import { Grid } from "./ProductGrid.styles";

class ProductGrid extends Component {
  render() {
    const { currentCategoryProductsList } = this.props;
    return (
      <Grid>
        {currentCategoryProductsList.map((product, index) => {
          const { id, name, inStock, gallery } = product;
          return (
            <SingleProductThumbnail
              key={index}
              id={id}
              name={name}
              gallery={gallery}
              inStock={inStock}
            />
          );
        })}
      </Grid>
    );
  }
}

const mapStateToProps = ({ categories, currencies }) => {
  let currentCategoryProductsList = [];
  if (categories.categories.length > 0) {
    const { current } = categories;
    // currentCategoryProductsList = categories.categories.filter((category) => {
    //   if (category.name === current) {
    //     return category;
    //   }
    // })[0].products;
    currentCategoryProductsList = categories.categories.find(
      (category) => category.name === current
    ).products;
  }
  return { currentCategoryProductsList };
};
// const mapDispatchToProps = (dispatch) => ({
//   fetchCategories: () => dispatch(fetchCategories()),
// });
export default connect(mapStateToProps)(ProductGrid);
