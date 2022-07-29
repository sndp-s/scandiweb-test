/////////////////////////////////////////////////////////////////////////////
import styled, { css } from "styled-components";
/////////////////////////////////////////////////////////////////////////////
const BaseStyle_Wrapper = css`
  margin-bottom: 100px;
`;
const CartDropdownStyle_Wrapper = css`
  /* margin-bottom: 32px; */
`;
export const Wrapper = styled.div`
  ${({ pageStyle }) => {
    switch (pageStyle) {
      case "CartDropdown":
        return CartDropdownStyle_Wrapper;
      default:
        return BaseStyle_Wrapper;
    }
  }}
`;
/////////////////////////////////////////////////////////////////////////////
const BaseStyle_List = css`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
`;
const CartDropdownStyle_List = css`
  ${BaseStyle_List}
  border: none;
`;
export const List = styled.ul`
  ${({ pageStyle }) => {
    switch (pageStyle) {
      case "CartDropdown":
        return CartDropdownStyle_List;
      default:
        return BaseStyle_List;
    }
  }}
`;
/////////////////////////////////////////////////////////////////////////////
const BaseStyle_Item = css`
  display: flex;
  justify-content: space-between;
  padding: 24px 0 30px 0;
  border-bottom: 1px solid #e5e5e5;
  :last-child {
    border: none;
  }
`;
const CartDropdownStyle_Item = css`
  ${BaseStyle_Item}
  border: none;
  padding: 0;
  margin-bottom: 40px;
  :last-child {
    margin-bottom: 0;
  }
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
/////////////////////////////////////////////////////////////////////////////
export const ItemRightWrapper = styled.div`
  display: flex;
`;
/////////////////////////////////////////////////////////////////////////////
const BaseStyle_ProductCounter = css`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-right: 24px;
`;
const CartDropdownStyle_ProductCounter = css`
  ${BaseStyle_ProductCounter}
  margin-right: 8px;
`;
export const ProductCounter = styled.div`
  ${({ pageStyle }) => {
    switch (pageStyle) {
      case "CartDropdown":
        return CartDropdownStyle_ProductCounter;
      default:
        return BaseStyle_ProductCounter;
    }
  }}
`;
/////////////////////////////////////////////////////////////////////////////
const BaseStyle_CounterButton = css`
  border: 1px solid #1d1f22;
  height: 45px;
  width: 45px;
  background: #fff;
`;
const CartDropdownStyle_CounterButton = css`
  ${BaseStyle_CounterButton}
  height: 24px;
  width: 24px;
`;
export const CounterButton = styled.button`
  ${({ pageStyle }) => {
    switch (pageStyle) {
      case "CartDropdown":
        return CartDropdownStyle_CounterButton;
      default:
        return BaseStyle_CounterButton;
    }
  }}
`;
/////////////////////////////////////////////////////////////////////////////
const BaseStyle_CounterLabel = css`
  font-size: 24px;
  font-weight: 500;
  color: #1d1f22;
`;
const CartDropdownStyle_CounterLabel = css`
  ${BaseStyle_CounterLabel}
  font-size: 16px;
`;
export const CounterLabel = styled.span`
  ${({ pageStyle }) => {
    switch (pageStyle) {
      case "CartDropdown":
        return CartDropdownStyle_CounterLabel;
      default:
        return BaseStyle_CounterLabel;
    }
  }}
`;
/////////////////////////////////////////////////////////////////////////////
export const OrderWrapper = styled.div`
  max-width: 280px;
`;
/////////////////////////////////////////////////////////////////////////////
export const OrderCalcGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 32px;
  margin-bottom: 16px;
  grid-row-gap: 8px;

  .label {
    font-size: 24px;
    line-height: 24px;
  }
  .value {
    font-weight: 700;
    font-size: 24px;
    line-height: 24px;
  }
`;
/////////////////////////////////////////////////////////////////////////////
export const OrderButton = styled.button`
  // box styles
  background: #5ece7b;
  width: 280px;
  border: none;
  // text styles
  color: #fff;
  line-height: 42px;
  text-align: center;
`;
/////////////////////////////////////////////////////////////////////////////
