import React from "react";
import { useParams } from "react-router-dom";
import { products } from "./../context/products";

const ProductDetail = () => {
  const { productId } = useParams();

  const product = products.find(
    (item) => String(productId) === String(item.id),
  );

  return (
    <div>
      <h2>Name: {product.name} </h2>
      <h3>Price: {product.price}</h3>
      <p>Description: {product.description}</p>
    </div>
  );
};

export default ProductDetail;
