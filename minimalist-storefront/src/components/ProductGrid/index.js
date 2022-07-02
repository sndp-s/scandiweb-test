import React, { Component } from "react";

// components
import SingleProductThumbnail from "../SingleProductThumbnail";
import { Grid } from "./ProductGrid.styles";

class ProductGrid extends Component {
  render() {
    const { category } = this.props;
    return (
      <Grid>
        <SingleProductThumbnail />
        <SingleProductThumbnail />
        <SingleProductThumbnail />
        <SingleProductThumbnail />
        <SingleProductThumbnail />
        <SingleProductThumbnail />
        <SingleProductThumbnail />
        <SingleProductThumbnail />
        <SingleProductThumbnail />
      </Grid>
    );
  }
}

export default ProductGrid;
