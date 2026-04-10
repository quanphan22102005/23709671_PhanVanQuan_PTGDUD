import React from "react";

const ProductItem = ({ product, increase, decrease }) => {
  return (
    <div>
      <li>
        {product.name} - {product.quantity} - {product.price}
      </li>
      <button onClick={() => increase(product.id)}>+</button>
      <button onClick={() => decrease(product.id)}>-</button>
    </div>
  );
};

export default ProductItem;
