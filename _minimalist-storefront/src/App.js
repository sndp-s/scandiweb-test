///////// libs /////////
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

///////// pages /////////
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ProductDisplayPage from "./pages/ProductDisplayPage";
import NoMatch from "./pages/NoMatch";

///////// assets /////////
import "./Reset.css";
import "./Global.css";
import "./App.css";
import "./app/API";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="product/:productId" element={<ProductDisplayPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
