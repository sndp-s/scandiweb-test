///////// libs /////////
/// react ///
import React from "react";
import { createRoot } from "react-dom/client";
/// redux store ///
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./app/store";
/// misc ///
import reportWebVitals from "./reportWebVitals";

///////// pages /////////
import App from "./App";
import CartPage from "./pages/CartPage";
import ProductDisplayPage from "./pages/ProductDisplayPage";

///////// assets /////////
import "./index.css";


const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="product" element={<ProductDisplayPage />} />
          <Route path="cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
