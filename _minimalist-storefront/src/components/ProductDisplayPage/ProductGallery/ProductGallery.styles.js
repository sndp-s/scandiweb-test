import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  padding: 5px;
  margin-right: 50px;
  max-height: 70vh;
  width: 600px;
`;

export const ImgList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-right: 40px;
  overflow-y: scroll;
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;

export const ListItem = styled.li`
  max-width: 80px;
  margin-bottom: 32px;
`;

export const Image = styled.img`
  width: 100%;
  max-height: auto;
  object-fit: contain;
`;

export const BigImgWrapper = styled.div``;

export const BigImage = styled.img`
  width: 100%;
  max-width: 610px;
  max-height: 68vh;
  object-fit: contain;
`;
