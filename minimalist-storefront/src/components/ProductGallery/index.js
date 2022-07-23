///////// libs /////////
import React, { Component } from "react";

///////// components /////////
import {
  Wrapper,
  ImgList,
  ListItem,
  Image,
  BigImgWrapper,
} from "./ProductGallery.styles";
/// context provider ///
import ProductContext from "../../app/contexts/ProductContext";

class ProductGallery extends Component {
  constructor(props) {
    super(props);
    this.handleImageClick = this.handleImageClick.bind(this);
    this.state = {
      focusImageIndex: 0,
    };
  }
  handleImageClick = (event) =>
    this.setState({ focusImageIndex: event.target.id });

  render() {
    return (
      <ProductContext.Consumer>
        {({ gallery }) => {
          return (
            <Wrapper>
              <ImgList>
                {gallery.map((imageSrc, index) => {
                  return (
                    <ListItem
                      key={index}
                      onClick={(event) => this.handleImageClick(event)}
                    >
                      <Image src={imageSrc} id={index} />
                    </ListItem>
                  );
                })}
              </ImgList>
              <BigImgWrapper>
                <Image src={gallery[this.state.focusImageIndex]} />
              </BigImgWrapper>
            </Wrapper>
          );
        }}
      </ProductContext.Consumer>
    );
  }
}

export default ProductGallery;
