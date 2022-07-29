import React, { Component } from "react";
import { Wrapper, Content } from "./LoadingSpinner.styles";

class LoadingSpinner extends Component {
  render() {
    return (
      <Wrapper>
        <Content>Loading...</Content>
      </Wrapper>
    );
  }
}

export default LoadingSpinner;
