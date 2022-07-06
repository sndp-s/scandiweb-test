///////// libs /////////
import React, { Component } from "react";

///////// components /////////
import {
  Wrapper,
  Modal,
  ModalContent,
  ImageWrapper,
  Image,
  Name,
  Price,
  AddToCartBtn,
} from "./SingleProductThumbnail.styles.js";

class SingleProductThumbnail extends Component {
  render() {
    const { id, name, inStock, gallery } = this.props;
    return (
      <Wrapper id={id} inStock={inStock}>
        <Modal inStock={inStock}>
          <ModalContent>OUT OF STOCK</ModalContent>
        </Modal>
        <ImageWrapper>
          <Image src={gallery[0]} alt={id} />
          <AddToCartBtn className="show" inStock={inStock} />
        </ImageWrapper>
        <Name>{name}</Name>
        <Price>$50.00</Price>
      </Wrapper>
    );
  }
}

export default SingleProductThumbnail;
