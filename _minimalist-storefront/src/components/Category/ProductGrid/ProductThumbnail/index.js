/// libs ///
import React, { Component } from "react";
import { Link } from "react-router-dom";

/// components ///
import {
  Wrapper,
  Modal,
  ModalText,
  ImageWrapper,
  Image,
  Brand,
  Name,
  AddToCart,
} from "./ProductThumbnail.styles.js";
import Price from "./Price";

class ProductThumbnail extends Component {
  render() {
    const { id, brand, name, inStock, gallery, prices } = this.props.product;
    return (
      <Link to={`/product/${id}`}>
        <Wrapper id={id} inStock={inStock}>
          {!inStock && (
            <Modal>
              <ModalText>OUT OF STOCK</ModalText>
            </Modal>
          )}
          <ImageWrapper>
            <Image src={gallery[0]} alt={id} />
            {inStock && <AddToCart />}
          </ImageWrapper>
          <Brand>{brand}</Brand>
          <Name>{name}</Name>
          <Price prices={prices} currentCurrency={this.props.currentCurrency} />
        </Wrapper>
      </Link>
    );
  }
}

export default ProductThumbnail;

/*************************************************************************
 * todo:
 *************************************************************************
 * thumbnail addtocart (green circle) button should add the product to the cart directly instead of redirecting to the cart page.
 *
 *
 * _______________________________________________________________________
 * add Brand to the thumbnail. --done
 *************************************************************************/
