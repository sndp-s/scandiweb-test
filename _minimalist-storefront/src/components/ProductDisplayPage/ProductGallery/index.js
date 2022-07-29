/// libs ///
import React, { Component } from "react";

/// components ///
import {
  Wrapper,
  ImgList,
  ListItem,
  Image,
  BigImgWrapper,
  BigImage,
} from "./ProductGallery.styles";

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
    const { gallery } = this.props;
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
          <BigImage src={gallery[this.state.focusImageIndex]} />
        </BigImgWrapper>
      </Wrapper>
    );
  }
}

export default ProductGallery;