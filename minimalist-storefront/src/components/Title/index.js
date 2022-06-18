import React, { Component } from "react";

// components
import { Wrapper, Text } from "./Title.styles";

class Title extends Component {
  render() {
    const { text } = this.props;
    return (
      <>
        <Wrapper>
          <Text>{text}</Text>
        </Wrapper>
      </>
    );
  }
}

export default Title;
