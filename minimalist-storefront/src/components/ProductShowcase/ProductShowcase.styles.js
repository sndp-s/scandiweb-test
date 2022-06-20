import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  padding: 72px 5px 10px 5px;
  border: 1px solid red;
`;

export const ImgList = styled.ul`
  display: flex;
  flex-direction: column;
  border: 1px solid blue;
  margin-right: 20px;
`;

export const ListItem = styled.li`
  width: 80px;
  height: 80px;
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
  margin-left: 20px;
  margin-right: 50px;
  border: 1px solid red;
`;
