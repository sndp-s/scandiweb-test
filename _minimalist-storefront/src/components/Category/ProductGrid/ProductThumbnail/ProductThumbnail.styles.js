//////////////////////////////////////////////////////////////////////////
import styled, { css } from "styled-components";
//////////////////////////////////////////////////////////////////////////
export const Wrapper = styled.div`
  width: 100%;
  max-width: 386px;
  padding: 16px;
  position: relative;
  cursor: pointer;
  :hover {
    box-shadow: 1px 1px 30px 10px rgba(1, 1, 1, 0.1);
  }

  /* out of stock style */
  ${({ inStock }) => {
    if (!inStock) {
      return css`
        // user-select: none;
        // cursor: inherit;
        // :hover {
        //   box-shadow: none;
        // }
      `;
    }
  }}
`;
//////////////////////////////////////////////////////////////////////////
export const Modal = styled.div`
  position: absolute;
  display: none;
  display: block;
  background: #fff;
  opacity: 0.5;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;
//////////////////////////////////////////////////////////////////////////
export const ModalText = styled.span`
  display: block;
  font-size: 24px;
  font-weight: 400;
  font-family: "Raleway";
  color: #8d8f9a;
  text-transform: uppercase;
  position: absolute;
  transform: translate(50%, 151px);
`;
//////////////////////////////////////////////////////////////////////////
export const ImageWrapper = styled.div`
  position: relative;
  margin-bottom: 24px;
`;
//////////////////////////////////////////////////////////////////////////
export const Image = styled.img`
  width: 100%;
  max-width: 354px;
  height: 330px;
  object-fit: contain;
`;
//////////////////////////////////////////////////////////////////////////
export const AddToCart = styled.button`
  height: 52px;
  width: 52px;
  border: none;
  border-radius: 100%;
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE+SURBVHgBzZWBbYMwEEW/mSAblE4Qj8AIHSEbhA3SDegGqBOkG4ROAJ2AEcgG7l3yURABYhyQ8qSTMbbvn32HAVbGOOdSabfsn8UqY8w3lkIESrGa1rgrKdaCQieshTjPuIsNFiAaePfLtj2uUGoxa/reGXkjVon9IJwdrkVzj+ZAI8ATyPqjbiMaGS/EYhl/QzhW/YwJtHlIEIAEFksTTwno+Z9DBTrrCkxEoXloEICsy/X8H03as9xm56H7sUYT8/7YfmCec01uDJb4qIBceAXC8mDZVhc/mI7mSIEv+LO7ODbm/eFMLTcmew4lj+lFkGhSd/tP5K53y2q/vRZYPZ9znCdceKJz5dCbk3fEW6HEV+DABZb92vV+RhQv+Ww5f+8rMLSDbCSInAlWtvCFDmrmIRsY33TEG+/ol+IfWzPAIWAMmm0AAAAASUVORK5CYII=")
    center no-repeat #5ece7b;
  position: absolute;
  bottom: 0;
  right: 15px;
  margin-bottom: -22px;
  display: none;

  ${Wrapper}:hover & {
    display: block;
  }
`;
//////////////////////////////////////////////////////////////////////////
export const Brand = styled.p`
  font-size: 18px;
  line-height: 28px;
  font-weight: 500;
  font-family: "Raleway";
  color: #1d1f22;
`;
//////////////////////////////////////////////////////////////////////////
export const Name = styled.p`
  font-size: 18px;
  line-height: 28px;
  font-weight: 300;
  font-family: "Raleway";
  color: #1d1f22;
`;
//////////////////////////////////////////////////////////////////////////
