import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <ul>
        <li>
          <h2>iPhone 16 promax</h2>
          <Link to="product-detail/iphone-16-promax">
            <button>See detail</button>
          </Link>
        </li>
        <li>
          <h2>ASUS Rog Strix</h2>
          <Link to="product-detail/asus-rog-strix">
            <button>See detail</button>
          </Link>
        </li>
        <li>
          <h2>SOUNDPEAST Space Pro</h2>
          <Link to="product-detail/soundpeast-space-pro">
            <button>See detail</button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Product;
