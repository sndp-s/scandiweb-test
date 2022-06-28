// libs
import React, { Component } from "react";

// components
import Header from "../../components/Header";

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
