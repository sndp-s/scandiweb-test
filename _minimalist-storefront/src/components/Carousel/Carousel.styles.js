import styled, { css } from "styled-components";

/////////////////////////////////////////////////////////////////////////////
const BaseStyle_ImgWrapper = css`
  position: relative;
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
  cursor: pointer;

`;
/////////////////////////////////////////////////////////////////////////////
export const ImgSwipeRight = styled(SwipeButton)`
  bottom: 16px;
  right: 16px;
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAOCAYAAAASVl2WAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABGSURBVHgBzY+xDQAgCAQZgREcwQ11Q0dgBEfAJ9FOIoUFl3x1lxBIVTtWyQNSsOlGEOVrNF4RR6Nzjm+BvW20FHIH4soIC+GDlbv2MB+cAAAAAElFTkSuQmCC")
    rgba(0, 0, 0, 0.73) center no-repeat;
`;
/////////////////////////////////////////////////////////////////////////////
