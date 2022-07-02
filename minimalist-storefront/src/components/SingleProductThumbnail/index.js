import React, { Component } from "react";

// components
import {
  Wrapper,
  Image,
  Name,
  Price,
} from "./SingleProductThumbnail.styles.js";

class SingleProductThumbnail extends Component {
  render() {
    // const { inStock } = this.props;
    return (
      <>
        <Wrapper>
          <Image src="https://picsum.photos/200" alt="test" />
          <Name>Apollo Running Short</Name>
          <Price>
            $<span className="nudge">50.00</span>
          </Price>
        </Wrapper>
      </>
    );
  }
}

export default SingleProductThumbnail;
