import styled, { css } from "styled-components";

export const PriceWrapper = styled.div`
  ${({ pageStyle }) => {
    return pageStyle === "CartDropdown"
      ? css`
          margin-bottom: 10px;
        `
      : css`
          margin-bottom: 20px;
        `;
  }}
`;
////////////////////////////////////////////////////////////////////
export const PriceLabel = styled.p`
  font-family: "Roboto Condensed", sans-serif;
  font-size: 18px;
  line-height: 18px;
  font-weight: 700;
  margin-bottom: 10px;
  text-transform: uppercase;
`;
////////////////////////////////////////////////////////////////////
const BaseStyle_PriceValue = css`
  font-size: 24px;
  font-weight: 700;
  line-height: 26px;
  color: #1d1f22;
`;
const BaseCartDropdownStyle_priceValue = css`
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
`;
const CartDropdownStyle_PriceValue = css`
  ${BaseCartDropdownStyle_priceValue}
  .nudge {
    ${BaseCartDropdownStyle_priceValue}
  }
`;
export const PriceValue = styled.p`
  ${BaseStyle_PriceValue}
  .nudge {
    ${BaseStyle_PriceValue}
    vertical-align: text-top;
  }
  ${({ pageStyle }) => {
    switch (pageStyle) {
      case "CartDropdown":
        return CartDropdownStyle_PriceValue;
      default:
        return BaseStyle_PriceValue;
    }
  }}
`;
////////////////////////////////////////////////////////////////////
