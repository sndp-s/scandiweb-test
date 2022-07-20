///////// libs /////////
import React, { Component } from "react";
import { Link } from "react-router-dom";

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
} from "./ProductThumbnail.styles.js";

class ProductThumbnail extends Component {
  render() {
    const { id, name, inStock, gallery, price } = this.props;
    return (
      <Wrapper id={id} inStock={inStock}>
        {!inStock && (
          <Modal>
            <ModalContent>OUT OF STOCK</ModalContent>
          </Modal>
        )}
        <ImageWrapper>
          <Image src={gallery[0]} alt={id} />
          {inStock && (
            <Link to={`/product/${id}`}>
              <AddToCartBtn />
            </Link>
          )}
        </ImageWrapper>
        <Name>{name}</Name>
        <Price>
          {price.currency.symbol}
          {price.amount}
        </Price>
      </Wrapper>
    );
  }
}

export default ProductThumbnail;
