/////////////////////////////////////////////////////////////////////////////////////////
import styled, { css } from "styled-components";
/////////////////////////////////////////////////////////////////////////////////////////
const ProductDisplayPageStyle_Wrapper = css`
  margin-bottom: 24px;
`;
const CartPageStyle_Wrapper = css`
  margin-bottom: 16px;
`;
const CartDropdownStyle_Wrapper = css`
  margin-bottom: 8px;
`;
export const Wrapper = styled.div`
  ${({ pageStyle }) => {
    switch (pageStyle) {
      case "ProductDisplayPage":
        return ProductDisplayPageStyle_Wrapper;
      case "CartPage":
        return CartPageStyle_Wrapper;
      case "CartDropdown":
        return CartDropdownStyle_Wrapper;
      default:
        return css`
          margin-bottom: 20px;
        `;
    }
  }};
`;
/////////////////////////////////////////////////////////////////////////////////////////
const BaseStyle_Label = css`
  font-size: 18px;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 700;
  line-height: 18px;
  color: #1d1f22;
  margin-bottom: 8px;
  text-transform: uppercase;
`;
const CartDropdownStyle_Label = css`
  ${BaseStyle_Label}
  font-size: 14px;
  line-height: 14px;
  font-weight: 400;
`;
export const Label = styled.p`
  ${({ pageStyle }) => {
    switch (pageStyle) {
      case "CartDropdown":
        return CartDropdownStyle_Label;
      default:
        return BaseStyle_Label;
    }
  }}
`;
/////////////////////////////////////////////////////////////////////////////////////////
export const List = styled.ul`
  display: flex;
`;
/////////////////////////////////////////////////////////////////////////////////////////
const BaseStyle_Item = css`
  /* box rules */
  border: 1px solid #1d1f22;
  background: #ffffff;
  padding: 0 10px;
  margin-right: 12px;
  /* text rules */
  font-size: 16px;
  line-height: 45px;
  color: #1d1f22;
  text-align: center;

  :hover {
    background: #1d1f22;
    border: 1px solid #1d1f22;
    color: #ffffff;
  }
`;
const CartDropdownStyle_Item = css`
  ${BaseStyle_Item}
  /* box rules */
  border: 1px solid #1d1f22;
  background: #ffffff;
  width: 24px;
  height: 24px;
  margin-right: 8px;
  /* text rules */
  font-size: 14px;
  line-height: 24px;
  color: #1d1f22;
`;
export const Item = styled.li`
  ${({ pageStyle }) => {
    switch (pageStyle) {
      case "CartDropdown":
        return CartDropdownStyle_Item;
      default:
        return BaseStyle_Item;
    }
  }}
`;
/////////////////////////////////////////////////////////////////////////////////////////
