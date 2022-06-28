// libs
import React, { Component } from "react";

// components
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";

// assets
import "./Reset.css";
import "./Global.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Layout className="App">
        <HomePage />
      </Layout>
    );
  }
}

export default App;
