import React, { Component } from "react";

// components
import SingleProductThumbnail from "../SingleProductThumbnail";
import { Grid } from "./ProductGrid.styles";

class ProductGrid extends Component {
  render() {
    return (
      <Grid>
        <SingleProductThumbnail isInStock={false}/>
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
