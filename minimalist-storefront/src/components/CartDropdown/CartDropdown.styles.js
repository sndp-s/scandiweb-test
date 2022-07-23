///////////////////////////////////////////////////////////////////////////////
import styled from "styled-components";
///////////////////////////////////////////////////////////////////////////////
export const Wrapper = styled.div`
  display: inline;
  margin: 25px;
`;
///////////////////////////////////////////////////////////////////////////////
export const CartIcon = styled.div`
  width: 30px;
  height: 20px;
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHNSURBVHgBrVTbcdNAFD13JZsfHhoaQHTgDrK248Q/OBoqwBWQDkwqACoIaQAMH4wHhrCpAFNBlAoQ/CF59+auMs7Lj0ienJ/du+fuuY99APcM6u7u/QQ4vjA5bVAwnEzGKTZEaOHeBUxRKQfaL5w9lGkbG4KuG53ei1cEemuLf8+NMRk2wA1BrZMoaLo/spqiJpiRBTwb0m2iuzM4FTYF0QfUAiWyT4cLkYCxRGn9+PblCDXQ3R1EslmrhThwJ5KdFkSoAyYNYrMgaPPQ+DF88GgLtcAtEV0UNGacecJJ+qiIXi9pyRBbzE7U0ljEUyleoyKcclvS+9R8/zpdKqic+uwPpnIfpX8En4S0ahk/m2EaNJGFzccj3U/er9NqWEQOTktF+96mVY7b24MRK7xBlQSlXJfnbWMmKa1z9CUr9fQJ7sDx8cez+XylYL+fxAXzob/94ja2+d/h9ffd3dn7JLklMk0bSrXnP5RaJShiI2aOLflNrFXz4es55z8RH6jk5JkWtvyhsFZQGhNR+aaD32JJZnR54qSobEPDBWdQKmW64lYKKqYDcYwD506l6XB5cXna9r86YkLmyP2SDBOy7gBV0em8fLaOu31XzwFjdL5Oa+He1gAAAABJRU5ErkJggg==")
    center no-repeat;
  cursor: pointer;
`;
///////////////////////////////////////////////////////////////////////////////
export const Dropdown = styled.div`
  // box styling
  width: 355px;
  background: #fff;
  position: absolute;
  top: 100%;
  right: 0;
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
`;
///////////////////////////////////////////////////////////////////////////////
export const ScrollableListWrapper = styled.div`
  height: 480px;
  padding-right: 10px;
  margin-bottom: 32px;
  overflow-y: scroll;

  /* bar */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border: 1px solid #e5e5e5; /* change color here */
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgba(57, 55, 72, 0.22);
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(57, 55, 72, 0.32);
  }
`;
///////////////////////////////////////////////////////////////////////////////
export const Heading = styled.p`
  font-family: "Raleway";
  padding-bottom: 32px;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  span {
    font-weight: 500;
  }
`;
///////////////////////////////////////////////////////////////////////////////
export const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
`;
///////////////////////////////////////////////////////////////////////////////
export const Label = styled.span`
  font-size: 16px;
  line-height: 18px;
  font-weight: 500;
`;
///////////////////////////////////////////////////////////////////////////////
export const Amount = styled.span`
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
`;
///////////////////////////////////////////////////////////////////////////////
export const BtnsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
///////////////////////////////////////////////////////////////////////////////
const Button = styled.button`
  width: 140px;
  height: 42px;
`;
///////////////////////////////////////////////////////////////////////////////
export const ViewBagBtn = styled(Button)`
  // box
  border: 1px solid #1d1f22;
  background: #ffffff;
  // text
  font-family: "Raleway";
  font-size: 14px;
  line-height: 42px;
  font-weight: 600;
  color: #1d1f22;
`;
///////////////////////////////////////////////////////////////////////////////
export const CheckOutBtn = styled(Button)`
  // box
  border: none;
  background: #5ece7b;
  // text
  font-family: "Raleway";
  font-size: 14px;
  line-height: 42px;
  font-weight: 600;
  color: #fff;
`;
///////////////////////////////////////////////////////////////////////////////
export const Overlay = styled.div`
  background: rgba(57, 55, 72, 0.22);
  position: fixed;
  top: 80px;
  bottom: 0;
  right: 0;
  left: 0;
`;
///////////////////////////////////////////////////////////////////////////////
