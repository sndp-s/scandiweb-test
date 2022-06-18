import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  border: 1px solid red;
  position: relative;
`;

export const OptionsBar = styled.ul`
  display: flex;
  align-self: flex-end;
`;

export const Option = styled.li`
  font-size: 16px;
  font-weight: 400;
  color: #1d1f22;
  cursor: pointer;
  padding: 0 16px 30px 16px;
  border-bottom: 2px solid transparent;

  :hover {
    text-shadow: 0px 0px 0.9px #5ece7b, 0px 0px 0.9px #5ece7b;
    color: #5ece7b;
    border-bottom: 2px solid #5ece7b;
  }
`;

export const Logo = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 33px;
  height: 31px;
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAfCAYAAABplKSyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUvSURBVHgBtVdNaF1VEJ65iWnMT99taVW0+F5WCkIbF0JWvqz86cYiDRUX2qWLgqu6jQGL2wqCS5O1iypo6c66arFCcRdcaJUgmorvhb782bwznp+ZOXPuS8GNl9zce8/PnG++mfnOeQiNq3P3vc4Qhsvwv1zYfwD/rPRfXO0Xrfbj7d6V+Y3Bdrc3GFwlCi0EiGlI+rYXPWIhenSXv56dPX5uYog/fjm3ck/axsv51benpmfrUzOzaiiAcOQYLXowHlhchyIwZICpzfl/scX0UZwXGtI7XMMKfvXPucNBANRpKUyLGK+SUWJjDEm6KY0N8xxTJuB4QPzD9IqO15Grkpe3eh93vNtsUwxhmixAHIGEScNDjIQyALUh3jNzyYcAllrnflmuR0BU4Gp10UZIFjRxzkCS9zIOmsDshMhWcs1HDasjj7UOAVHVzcUzC9koZlrZM6feFreyIRYxg/H32P7DYyMgYEh1Bi5GyYTUsQ3SG4rFydx5nNgLodSwhLYxao+CGBtvk6wqAMgygGWdmoRtskdFIpLpJbbj/4YwmhMODmqM1Ue6SMLi1DNpRxtvRp1KF7VKpnASUklLZWFhp4JDQPhBdbZJWnrNGIfbxYSEIgeQ9SH8vTx1Gj5/5gNYnDrDbZbV+B6+RkH45g41M5rhEWQjqMKjHLB3qW1x+gwszXbhwz9X4fzRLnSn5wsGpLI8v+1REDEx/VBnNSBBaI89YdhwkBXQFbkxjUfgfACwuQo7tB+BLLUWoT3xZBI2ZRCxGtJodWDlwxG2ivBuquNE1YJ3Zl8p2FExk3Bw5m+7Pbj0+ydw/+EWXD5xwT/7cGnjKtzb/4M5BVtVyoTKtvNMsOorC2Hsjjd8cqxlACSQUroSMpFuaRv4eaXsZ7uJDDiECb+LU7Pu2Vi4QrarF5zpNulIfQV44UgH7h/0ihwqhCyxVybmxd5yrZlgXBQDP+z9BN3HT8cKQN5JxR2rBxKe7sw83NlZh6yowrDssHF+CWJvbzJqhAiNVcbQ9s3gNpydWSjUMiWwoZjnnByv4/39YJ070JSz7EOpTN/8+aO2CcdBR4wiD0IT578O+nBndx3erV/lvnwaIpJNPwFaqhfh5oO7MZc0rDYvslyg29k6ZkAUIQZoMBGa1vo3fKzbsORrv+jnedM+Zy4efw0Gw90IwuZOc4eVTRCr8biTcnVQJ0kujJRhngywsrkWBejTp9+HL/o3ffL1Y/fcxFNw9ugCfL11C673b2n0oQBqWODvCquOf/sugqgQW8MGbflklEFtD/dg9e8bcH38Nrw+uwAvTT3ntWE/6sDljc98/y4A2GNddoCaH8njWpk4IKrReJzjZtlAtbTpRWjNg7HaAWZR3cxEXYGMYqYza2rEDMIf+jrQRN/0guKJIpckgG7NKscAxUalB2MATVwBwt8dBUFhB/XlgVEMeYtxgJhdy8LD38TsaPVTyRwZikhYpHxo9+DVfGKCXC3VmQYim1d2JNWT8ybTyZSzkKPAeUVwxFKR5iP7F3buzAQl9dLDvH9EE04zNc7Tnx9l2ES0URBImfPgDAAg/5hKRiOIimdH2WbVxGZVANijHWXzKUwYqQ3vTuamkS54QcKHiS575Z8tBeHHBZ2I+UCqqzJZhInXDwuxcVScqQpUnln1bNxjHjAQ84yKieFHyESFvRGvkUPo+KCoPKT3VHKyICeNScicutFj0idiaWeymostF35beUPyIvE41Fcwr/FzmBrGtNvlTgf/+QpW/Pmqf+35K1/9C9vrQkJoZgkkAAAAAElFTkSuQmCC")
    center no-repeat;
`;

export const RightSideWrapper = styled.div`
  display: flex;
  align-items: baseline;
  margin: 0 10px;
`;

export const Cart = styled.div`
  width: 30px;
  height: 20px;
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHNSURBVHgBrVTbcdNAFD13JZsfHhoaQHTgDrK248Q/OBoqwBWQDkwqACoIaQAMH4wHhrCpAFNBlAoQ/CF59+auMs7Lj0ienJ/du+fuuY99APcM6u7u/QQ4vjA5bVAwnEzGKTZEaOHeBUxRKQfaL5w9lGkbG4KuG53ei1cEemuLf8+NMRk2wA1BrZMoaLo/spqiJpiRBTwb0m2iuzM4FTYF0QfUAiWyT4cLkYCxRGn9+PblCDXQ3R1EslmrhThwJ5KdFkSoAyYNYrMgaPPQ+DF88GgLtcAtEV0UNGacecJJ+qiIXi9pyRBbzE7U0ljEUyleoyKcclvS+9R8/zpdKqic+uwPpnIfpX8En4S0ahk/m2EaNJGFzccj3U/er9NqWEQOTktF+96mVY7b24MRK7xBlQSlXJfnbWMmKa1z9CUr9fQJ7sDx8cez+XylYL+fxAXzob/94ja2+d/h9ffd3dn7JLklMk0bSrXnP5RaJShiI2aOLflNrFXz4es55z8RH6jk5JkWtvyhsFZQGhNR+aaD32JJZnR54qSobEPDBWdQKmW64lYKKqYDcYwD506l6XB5cXna9r86YkLmyP2SDBOy7gBV0em8fLaOu31XzwFjdL5Oa+He1gAAAABJRU5ErkJggg==")
    center no-repeat;
  cursor: pointer;
`;
