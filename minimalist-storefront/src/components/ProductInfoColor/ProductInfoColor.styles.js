//////////////////////////////////////////////////////////////////
import styled, { css } from "styled-components";
//////////////////////////////////////////////////////////////////
const BaseStyle_Wrapper = css`
  margin-bottom: 0;
`;
const ProductDisplayPageStyle_Wrapper = css`
  margin-bottom: 36px;
`;
export const Wrapper = styled.div`
  ${({ pageStyle }) => {
    switch (pageStyle) {
      case "ProductDisplayPage":
        return ProductDisplayPageStyle_Wrapper;
      default:
        return BaseStyle_Wrapper;
    }
  }}
`;
//////////////////////////////////////////////////////////////////
const BaseStyle_ColorLabel = css`
  font-family: "Roboto Condensed", sans-serif;
  font-size: 18px;
  line-height: 18px;
  font-weight: 700;
  color: #1d1f22;
  margin-bottom: 8px;
`;
const CartDropdownStyle_ColorLabel = css`
  ${BaseStyle_ColorLabel}
  font-family: "Roboto Condensed";
  font-size: 14px;
  line-height: 14px;
  font-weight: 400;
`;
export const ColorLabel = styled.p`
  ${({ pageStyle }) => {
    switch (pageStyle) {
      case "CartDropdown":
        return CartDropdownStyle_ColorLabel;
      default:
        return BaseStyle_ColorLabel;
    }
  }}
`;
//////////////////////////////////////////////////////////////////
export const ColorList = styled.ul`
  display: flex;
`;
//////////////////////////////////////////////////////////////////
const BaseStyle_Color = css`
  height: 32px;
  width: 32px;
  margin-right: 8px;
  background: black;
  :hover {
    box-shadow: 0 0 0 1px #fff, 0 0 0 2px #5ece7b;
  }
`;
const CartDropdownStyle_Color = css`
  ${BaseStyle_Color}
  height: 16px;
  width: 16px;
`;
export const Color = styled.li`
  ${({ pageStyle }) => {
    switch (pageStyle) {
      case "CartDropdown":
        return CartDropdownStyle_Color;
      default:
        return BaseStyle_Color;
    }
  }}
`;
//////////////////////////////////////////////////////////////////
