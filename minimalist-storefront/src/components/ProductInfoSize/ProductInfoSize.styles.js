/////////////////////////////////////////////////////////////////////////////////////////
import styled, { css } from "styled-components";
/////////////////////////////////////////////////////////////////////////////////////////
const ProductDisplayPageStyle_SizeWrapper = css`
  margin-bottom: 24px;
`;
const CartPageStyle_SizeWrapper = css`
  margin-bottom: 16px;
`;
const CartDropdownStyle_SizeWrapper = css`
  margin-bottom: 8px;
`;
export const SizeWrapper = styled.div`
  ${({ pageStyle }) => {
    switch (pageStyle) {
      case "ProductDisplayPage":
        return ProductDisplayPageStyle_SizeWrapper;
      case "CartPage":
        return CartPageStyle_SizeWrapper;
      case "CartDropdown":
        return CartDropdownStyle_SizeWrapper;
      default:
        return css`
          margin-bottom: 20px;
        `;
    }
  }};
`;
/////////////////////////////////////////////////////////////////////////////////////////
const BaseStyle_SizeLabel = css`
  font-size: 18px;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 700;
  line-height: 18px;
  color: #1d1f22;
  margin-bottom: 8px;
`;
const CartDropdownStyle_SizeLabel = css`
  ${BaseStyle_SizeLabel}
  font-size: 14px;
  line-height: 14px;
  font-weight: 400;
`;
export const SizeLabel = styled.p`
  ${({ pageStyle }) => {
    switch (pageStyle) {
      case "CartDropdown":
        return CartDropdownStyle_SizeLabel;
      default:
        return BaseStyle_SizeLabel;
    }
  }}
`;
/////////////////////////////////////////////////////////////////////////////////////////
export const SizeList = styled.ul`
  display: flex;
`;
/////////////////////////////////////////////////////////////////////////////////////////

const BaseStyle_Size = css`
  /* box rules */
  border: 1px solid #1d1f22;
  background: #ffffff;
  width: 63px;
  height: 45px;
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
const CartDropdownStyle_Size = css`
  ${BaseStyle_Size}
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
export const Size = styled.li`
  ${({ pageStyle }) => {
    switch (pageStyle) {
      case "CartDropdown":
        return CartDropdownStyle_Size;
      default:
        return BaseStyle_Size;
    }
  }}
`;
/////////////////////////////////////////////////////////////////////////////////////////
