import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  padding: 5px;
  margin-right: 50px;
`;

export const ImgList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-right: 40px;
  /* overflow-y: scroll; */
`;

export const ListItem = styled.li`
  width: 80px;
  margin-bottom: 32px;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  background-size: cover;
  overflow: hidden;
`;

export const BigImgWrapper = styled.div`
  width: 610px;
  height: 510px;
`;
