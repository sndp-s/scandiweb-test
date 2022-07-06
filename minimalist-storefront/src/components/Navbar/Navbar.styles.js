/////////////////////////////////////////////////////////////////////////////
import styled from "styled-components";
/////////////////////////////////////////////////////////////////////////////
export const OptionsBar = styled.ul`
  display: flex;
  align-self: flex-end;
`;
/////////////////////////////////////////////////////////////////////////////
export const Option = styled.li`
  /// box ///
  cursor: pointer;
  padding: 26px 16px 26px 16px;
  border-bottom: 2px solid transparent;
  /// text ///
  font-size: 16px;
  font-weight: 400;
  color: #1d1f22;
  text-decoration: none;
  text-transform: uppercase;
  :hover {
    text-shadow: 0px 0px 0.9px #5ece7b, 0px 0px 0.9px #5ece7b;
    border-bottom: 2px solid #5ece7b;
    color: #5ece7b;
  }
`;
/////////////////////////////////////////////////////////////////////////////
