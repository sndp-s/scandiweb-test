import styled, { css } from "styled-components";

const ProductListingPageStyle_Wrapper = css`
  padding: 80px 0 104px 0;
`;
const CartStyle_Wrapper = css`
  padding: 80px 0 55px 0; ;
`;
export const Wrapper = styled.div`
  ${({ pageStyle }) => {
    switch (pageStyle) {
      case "ProductListingPage":
        return ProductListingPageStyle_Wrapper;
      case "CartPage":
        return CartStyle_Wrapper;
      default:
        return css`
          padding: "20px 10px";
        `;
    }
  }}
`;

const ProductListingPageStyle_Text = css`
  font-size: 42px;
`;
const CartStyle_Text = css`
  font-weight: 700;
  font-size: 32px;
`;
export const Text = styled.h1`
  color: #1d1f22;
  text-transform: capitalize;
  ${({ pageStyle }) => {
    switch (pageStyle) {
      case "ProductListingPage":
        return ProductListingPageStyle_Text;
      case "CartPage":
        return CartStyle_Text;
      default:
        return css`
          font-size: 40px;
        `;
    }
  }}
`;
