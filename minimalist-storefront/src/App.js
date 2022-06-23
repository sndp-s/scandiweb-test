import React from "react";

// components
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProductDisplayPage from "./pages/ProductDisplayPage";
import CartPage from "./pages/CartPage";

// assets
import "./Reset.css";
import "./Global.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <CartPage />
      <HomePage />
      <ProductDisplayPage/>
    </div>
  );
}

export default App;
