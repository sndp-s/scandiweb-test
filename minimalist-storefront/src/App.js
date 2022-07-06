///////// libs /////////
import React, { Component } from "react";

///////// components /////////
import HomePage from "./pages/HomePage";

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
      </div>
    );
  }
}

export default App;
