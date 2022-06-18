import React from "react";

// components
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

// assets
import "./Reset.css";
import "./Global.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      {/* <ProductPage/> */}
      {/* <CartPage/> */}
    </div>
  );
}

export default App;
