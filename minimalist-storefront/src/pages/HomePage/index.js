///////// libs /////////
import React, { Component } from "react";
import { connect } from "react-redux";
///////// pages /////////
import Layout from "../Layout";
import ProductListingPage from "../ProductListingPage";

class HomePage extends Component {
  render() {
    return (
      <>
        <Layout>
          <ProductListingPage />
        </Layout>
      </>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
