import React, { Component } from "react";

// import components
import {
  Wrapper,
  ImgList,
  ListItem,
  Image,
  BigImgWrapper,
} from "./ProductShowcase.styles";

class ProductShowcase extends Component {
  render() {
    return (
      <Wrapper>
        <ImgList>
          <ListItem>
            <Image src="https://picsum.photos/80/80" />
          </ListItem>
          <ListItem>
            <Image src="https://picsum.photos/80/80" />
          </ListItem>
          <ListItem>
            <Image src="https://picsum.photos/80/80" />
          </ListItem>
        </ImgList>
        <BigImgWrapper>
          <Image src="https://picsum.photos/610/510" />
        </BigImgWrapper>
      </Wrapper>
    );
  }
}

export default ProductShowcase;
