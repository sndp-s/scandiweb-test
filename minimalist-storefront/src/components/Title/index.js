import React, { Component } from "react";

// components
import { Wrapper, Text } from "./Title.styles";

class Title extends Component {
  render() {
    const { text, pageStyle } = this.props;
    return (
      <>
        <Wrapper pageStyle={pageStyle}>
          <Text pageStyle={pageStyle}>{text}</Text>
        </Wrapper>
      </>
    );
  }
}

export default Title;
