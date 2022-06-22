import styled, { css } from "styled-components";

export const Brand = styled.p`
  font-size: 30px;
  font-weight: 600;
  line-height: 27px;
  color: #1d1f22;
  margin-bottom: 16px;
`;

const ProductDisplayPageStyle_Item = css`
  margin-bottom: 42px;
`;

const CartPageStyle_Item = css`
  margin-bottom: 20px;
`;

export const Item = styled.p`
  font-size: 30px;
  line-height: 27px;
  color: #1d1f22;
  font-weight: 400;

  ${({ pageStyle }) => {
    switch (pageStyle) {
      case "ProductDisplayPage":
        return ProductDisplayPageStyle_Item;
      case "CartPage":
        return CartPageStyle_Item;
      default:
        return css`
          margin-bottom: 20px;
        `;
    }
  }}
`;
