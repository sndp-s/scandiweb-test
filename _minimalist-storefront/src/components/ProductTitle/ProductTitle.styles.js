import styled, { css } from "styled-components";

//////////////////////////////////////////////////////////////////////
const BaseStyle_Brand = css`
  font-size: 30px;
  font-weight: 600;
  line-height: 30px;
  color: #1d1f22;
  margin-bottom: 16px;
`;
const ProductDisplayPageStyle_Brand = css``;
const CartPageStyle_Brand = css``;
const CartDropdownStyle_Brand = css`
  font-size: 16px;
  font-weight: 300;
  line-height: 16px;
  margin-bottom: 8px;
`;
export const Brand = styled.p`
  ${BaseStyle_Brand}
  ${({ pageStyle }) => {
    switch (pageStyle) {
      case "ProductDisplayPage":
        return ProductDisplayPageStyle_Brand;
      case "CartPage":
        return CartPageStyle_Brand;
      case "CartDropdown":
        return CartDropdownStyle_Brand;
      default:
        return css``;
    }
  }}
`;
//////////////////////////////////////////////////////////////////////
const BaseStyle_Item = css`
  font-size: 30px;
  line-height: 30px;
  font-weight: 400;
  color: #1d1f22;
`;
const ProductDisplayPageStyle_Item = css`
  margin-bottom: 42px;
`;
const CartPageStyle_Item = css`
  margin-bottom: 20px;
`;
const CartDropdownStyle_Item = css`
  font-size: 16px;
  line-height: 16px;
  font-weight: 300;
  margin-bottom: 12px;
`;
export const Item = styled.p`
  ${BaseStyle_Item}
  ${({ pageStyle }) => {
    switch (pageStyle) {
      case "ProductDisplayPage":
        return ProductDisplayPageStyle_Item;
      case "CartPage":
        return CartPageStyle_Item;
      case "CartDropdown":
        return CartDropdownStyle_Item;
      default:
        return css``;
    }
  }}
`;
//////////////////////////////////////////////////////////////////////