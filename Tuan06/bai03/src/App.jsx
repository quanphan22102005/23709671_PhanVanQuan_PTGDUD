import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import ProductDetail from "./components/ProductDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Product></Product>}></Route>
        <Route
          path="product-detail/:productName"
          element={<ProductDetail></ProductDetail>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
