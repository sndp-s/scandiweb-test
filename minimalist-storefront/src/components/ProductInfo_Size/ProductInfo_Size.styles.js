import styled from "styled-components";

export const SizeWrapper = styled.div`
  margin-bottom: 24px;
`;

export const SizeLabel = styled.p`
  font-size: 18px;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 700;
  line-height: 18px;
  color: #1d1f22;
  margin-bottom: 8px;
`;

export const SizeList = styled.ul`
  display: flex;
`;

export const Size = styled.li`
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
