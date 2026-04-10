import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { cart } from "../globalState/store";

const ProductInput = () => {
  const [myCart, setMyCart] = useRecoilState(cart);
  const [quantity, setQuantity] = useState();
  const [name, setName] = useState("");
  const [price, setPrice] = useState();

  const addProduct = () => {
    const newProduct = {
      id: Date.now(),
      name: name,
      quantity: Number(quantity),
      price: Number(price),
    };

    setMyCart([...myCart, newProduct]);
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="Product name"
      />
      <input
        type="text"
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
      />
      <input
        type="text"
        onChange={(e) => setQuantity(e.target.value)}
        placeholder="Quantity
      "
      />
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
};

export default ProductInput;
