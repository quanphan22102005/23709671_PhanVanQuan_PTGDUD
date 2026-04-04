import React from "react";
import AuthProvider from "./context/AuthProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Protected from "./components/Protected";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>

          <Route element={<Protected></Protected>}>
            <Route path="/profile" element={<Profile></Profile>}></Route>
          </Route>

          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/checkout" element={<Checkout></Checkout>}></Route>
          <Route path="/products" element={<Products></Products>}></Route>
          <Route
            path="/product-detail/:productId"
            element={<ProductDetail></ProductDetail>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
