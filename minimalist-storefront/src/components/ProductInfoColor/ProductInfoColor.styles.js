import styled, { css } from "styled-components";

const ProductDisplayPageStyle_Wrapper = css`
  margin-bottom: 36px;
`;
const CartPageStyle_Wrapper = css`
  margin-bottom: 0;
`;

export const Wrapper = styled.div`
  ${({ pageStyle }) => {
    switch (pageStyle) {
      case "ProductDisplayPage":
        return ProductDisplayPageStyle_Wrapper;
      case "CartPage":
        return CartPageStyle_Wrapper;
      default:
        return css`
          margin: 5px;
        `;
    }
  }}
`;

export const ColorLabel = styled.p`
  font-size: 18px;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 700;
  line-height: 18px;
  color: #1d1f22;
  margin-bottom: 8px;
`;

export const ColorList = styled.ul`
  display: flex;
`;

export const Color = styled.li`
  height: 32px;
  width: 32px;
  margin-right: 8px;
  background: black;
  :hover {
    border: 1px solid #5ece7b;
  }
`;
