///////// libs /////////
import React, { Component } from "react";
import { connect } from "react-redux";

///////// components /////////
import ProductListingPage from "../ProductListingPage";

class HomePage extends Component {
  render() {
    return <ProductListingPage />;
  }
}

export default HomePage;
