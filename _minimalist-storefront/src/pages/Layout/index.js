///////// libs /////////
import React, { Component } from "react";
import { Outlet } from "react-router-dom";

///////// components /////////
import Header from "../../components/Header";

class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        {this.props.children}
        <Outlet />
      </>
    );
  }
}

export default Layout;
