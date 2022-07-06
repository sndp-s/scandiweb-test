import React, { Component } from "react";

// import components
import {
  Wrapper,
  ImgList,
  ListItem,
  Image,
  BigImgWrapper,
} from "./ProductGallery.styles";

class ProductGallery extends Component {
  render() {
    const style = { display: "inline-block" };
    return (
      <div style={style}>
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
      </div>
    );
  }
}

export default ProductGallery;
