// libs
import React, { Component } from "react";

// components
import Header from "../../components/Header";

class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        {this.props.children}
      </>
    );
  }
}

export default Layout;
