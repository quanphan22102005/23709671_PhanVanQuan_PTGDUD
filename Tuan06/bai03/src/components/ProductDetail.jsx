import React from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetail = () => {
  const { productName } = useParams();

  return (
    <div>
      <h1>Welcome!</h1>
      <h2>You are seeing the {productName} infomation</h2>
      <Link to="/">Back to dashboard</Link>
    </div>
  );
};

export default ProductDetail;
