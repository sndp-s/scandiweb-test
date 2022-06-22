import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 32px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 24px 0 30px 0;
  border-bottom: 1px solid #e5e5e5;
  :last-child {
    border: none;
  }
`;

export const ProductCounter = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-right: 24px;
`;

export const CounterButton = styled.button`
  border: 1px solid #1d1f22;
  height: 45px;
  width: 45px;
  background: #fff;
`;

export const CounterLabel = styled.span`
  font-weight: 500;
  color: #1d1f22;
`;

export const ImgWrapper = styled.div`
  position: relative;
  align-self: center;
`;

export const ProductImage = styled.img`
  background: cover;
  width: 100%;
  height: auto;
`;

const SwipeButton = styled.button`
  position: absolute;
  width: 24px;
  height: 24px;
  background: rgba(0, 0, 0, 0.73);
`;

export const ImgSwipeLeft = styled(SwipeButton)`
  bottom: 16px;
  right: 48px;
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAOCAYAAAASVl2WAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABhSURBVHgBrY9RDcAgDETbZQKQMAlzMitzMOZgziYBCeCgXANfBMoPl7wcyWtIyzSIiJyoayhBBMGU4Fgv/550VSqu3Wlj5oT+gMqbjLsfKfFrh/Z2ADu9kPr0tc2fAs2SAeNjhdstISnHAAAAAElFTkSuQmCC")
    rgba(0, 0, 0, 0.73) center no-repeat;
`;

export const ImgSwipeRight = styled(SwipeButton)`
  bottom: 16px;
  right: 16px;
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAOCAYAAAASVl2WAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABGSURBVHgBzY+xDQAgCAQZgREcwQ11Q0dgBEfAJ9FOIoUFl3x1lxBIVTtWyQNSsOlGEOVrNF4RR6Nzjm+BvW20FHIH4soIC+GDlbv2MB+cAAAAAElFTkSuQmCC")
    rgba(0, 0, 0, 0.73) center no-repeat;
`;

export const OrderWrapper = styled.div`
  max-width: 280px;
`;

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
