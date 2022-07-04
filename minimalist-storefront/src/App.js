///////// libs /////////
import React, { Component } from "react";

///////// components /////////
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
//import Playground from "./pages/Playground";

///////// assets /////////
import "./Reset.css";
import "./Global.css";
import "./App.css";
import "./app/API";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage />
        {/* <Playground /> */}
      </div>
    );
  }
}

export default App;
