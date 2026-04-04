import React from "react";
import ProductDetail from "./components/ProductDetail";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Checkout from "./components/Checkout";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>}></Route>
        <Route
          path="/product-detail"
          element={<ProductDetail></ProductDetail>}
        ></Route>
        <Route path="/checkout" element={<Checkout></Checkout>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
