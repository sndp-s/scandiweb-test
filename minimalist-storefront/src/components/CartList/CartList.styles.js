/////////////////////////////////////////////////////////////////////////////
import styled, { css } from "styled-components";
/////////////////////////////////////////////////////////////////////////////
const CartDropdownStyle_Wrapper = css`
  /* margin-bottom: 32px; */
`;
export const Wrapper = styled.div`
  ${({ pageStyle }) => {
    switch (pageStyle) {
      case "CartDropdown":
        return CartDropdownStyle_Wrapper;
      default:
        return css``;
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
const BaseStyle_ImgWrapper = css`
  position: relative;
  z-index: -1;
  align-self: center;
  width: 200px;
  height: 288px;
  overflow: hidden;
`;
const CartDropdownStyle_ImgWrapper = css`
  ${BaseStyle_ImgWrapper}
  width: 120px;
  height: 190px;
`;
export const ImgWrapper = styled.div`
  ${({ pageStyle }) => {
    switch (pageStyle) {
      case "CartDropdown":
        return CartDropdownStyle_ImgWrapper;
      default:
        return BaseStyle_ImgWrapper;
    }
  }}
`;
/////////////////////////////////////////////////////////////////////////////
export const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;
/////////////////////////////////////////////////////////////////////////////
const BaseStyle_SwipeButton = css`
  position: absolute;
  width: 24px;
  height: 24px;
  background: rgba(0, 0, 0, 0.73);
`;
const CartDropdownStyle_SwipeButton = css`
  display: none;
`;
const SwipeButton = styled.button`
  ${({ pageStyle }) => {
    switch (pageStyle) {
      case "CartDropdown":
        return CartDropdownStyle_SwipeButton;
      default:
        return BaseStyle_SwipeButton;
    }
  }}
`;
/////////////////////////////////////////////////////////////////////////////
export const ImgSwipeLeft = styled(SwipeButton)`
  bottom: 16px;
  right: 48px;
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAOCAYAAAASVl2WAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABhSURBVHgBrY9RDcAgDETbZQKQMAlzMitzMOZgziYBCeCgXANfBMoPl7wcyWtIyzSIiJyoayhBBMGU4Fgv/550VSqu3Wlj5oT+gMqbjLsfKfFrh/Z2ADu9kPr0tc2fAs2SAeNjhdstISnHAAAAAElFTkSuQmCC")
    rgba(0, 0, 0, 0.73) center no-repeat;
`;
/////////////////////////////////////////////////////////////////////////////
export const ImgSwipeRight = styled(SwipeButton)`
  bottom: 16px;
  right: 16px;
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAOCAYAAAASVl2WAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABGSURBVHgBzY+xDQAgCAQZgREcwQ11Q0dgBEfAJ9FOIoUFl3x1lxBIVTtWyQNSsOlGEOVrNF4RR6Nzjm+BvW20FHIH4soIC+GDlbv2MB+cAAAAAElFTkSuQmCC")
    rgba(0, 0, 0, 0.73) center no-repeat;
`;
/////////////////////////////////////////////////////////////////////////////
export const OrderWrapper = styled.div`
  max-width: 280px;
`;
/////////////////////////////////////////////////////////////////////////////
export const OrderCalcGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1Fr);
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
