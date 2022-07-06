import React, { Component } from "react";

class NoMatch extends Component {
  txtStyle = {
    fontSize: "50px",
    textAlign: "center",
    marginTop: "100px",
  };
  render() {
    return <h1 style={this.txtStyle}>This page does not exist!</h1>;
  }
}

export default NoMatch;
