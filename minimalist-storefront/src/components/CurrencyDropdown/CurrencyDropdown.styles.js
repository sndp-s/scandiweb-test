import styled from "styled-components";

export const Wrapper = styled.div`
  display: inline-block;
  max-width: 115px;
  position: relative;
`;

export const TopWrapper = styled.div`
  display: flex;
  margin-bottom: 15px;
  cursor: pointer;
`;

export const CurrencyIcon = styled.span`
  font-size: 18px;
  font-weight: 500;
  margin-right: 10px;
`;

export const DropdownIcon = styled.div`
  width: 8px;
  height: 4px;
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAySURBVHgBdY1dCgAgDIK/TlqdbN20VvSwHyaIqKAAQylkLGW3RkL5fAvh/tnVSTHr7g5MkQi9ekATeAAAAABJRU5ErkJggg==")
    center no-repeat;
  align-self: flex-end;
  margin-bottom: 5px;
`;

export const DropdownMenu = styled.ul`
  width: 114px;
  position: absolute;
  bottom: -1;
  left: -16px;
  box-shadow: 1px 1px 5px 1px rgba(1, 1, 1, 0.1);
`;

export const MenuOption = styled.li`
  font-size: 18px;
  padding: 10px 20px;
  font-weight: 500;
  margin: 15px 0;

  :hover {
    background: #eeeeee;
  }
`;
