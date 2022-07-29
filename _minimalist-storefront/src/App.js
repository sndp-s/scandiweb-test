import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Category from "./components/Category";
import ProductDisplayPage from "./components/ProductDisplayPage";
import CartPage from "./components/CartPage";

import LoadingSpinner from "./components/LoadingSpinner";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path={this.props.categoriesRoutes}>
            <Category />
          </Route>
          <Route path="/product/:productId">
            <ProductDisplayPage />
          </Route>
          <Route path="/cart">
            <CartPage />
          </Route>
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  const categoriesRoutes = state.categories.categories.map(
    (category) => `/${category.name}`
  );
  return { categoriesRoutes };
};

export default connect(mapStateToProps)(App);
