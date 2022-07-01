// libs
import React, { Component } from "react";

// components
import Header from "../../components/Header";

class Layout extends Component {
  render() {
    return (
      <main className="container">
        <Header />
        {this.props.children}
      </main>
    );
  }
}

export default Layout;
