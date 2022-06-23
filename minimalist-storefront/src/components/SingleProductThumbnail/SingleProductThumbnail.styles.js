import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 386px;
  padding: 16px;
  :hover {
    box-shadow: 1px 1px 30px 10px rgba(1, 1, 1, 0.1);
  }
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 354px;
  height: 330px;
  object-fit: cover;
  margin-bottom: 24px;
`;

export const Name = styled.p`
  font-size: 18px;
  line-height: 160%;
  font-weight: 300;
  color: #1d1f22;
`;

export const Price = styled.p`
  font-size: 18px;
  line-height: 160%;
  font-weight: 500;
  color: #1d1f22;

  & .nudge {
    font-weight: 500;
    vertical-align: text-top;
  }
`;
