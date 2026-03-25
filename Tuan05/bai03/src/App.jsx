import React from "react";
import { CartProvider } from "./CartProvider";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  return (
    <CartProvider>
      <div style={{ padding: "20px" }}>
        <h1>Shopping Cart System</h1>
        <hr />
        <ProductList />
        <hr />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
