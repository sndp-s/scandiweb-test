import { Component } from "react";

class Test extends Component {
  render() {
    console.log("Test component props", this.props);
    return <>Test</>;
  }
}

export default Test;
