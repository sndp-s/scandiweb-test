import styled from "styled-components";

export const ColorWrapper = styled.div`
  margin-bottom: 38px;
`;

export const ColorLabel = styled.p`
  font-size: 18px;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 700;
  line-height: 18px;
  color: #1d1f22;
  margin-bottom: 8px;
`;

export const ColorList = styled.ul`
  display: flex;
`;

export const Color = styled.li`
  height: 32px;
  width: 32px;
  margin-right: 8px;
  background: black;
  :hover {
    border: 1px solid #5ece7b;
  }
`;
