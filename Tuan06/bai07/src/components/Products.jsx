import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <ul>
        <li>
          <h3>iPad</h3>
          <h4>Price: 10.000.000 VND</h4>
          <Link to="/product-detail/1">
            <button>See detail</button>
          </Link>
        </li>
        <li>
          <h3>Macbook</h3>
          <h4>Price: 20.000.000 VND</h4>
          <Link to="/product-detail/2">
            <button>See detail</button>
          </Link>
        </li>
        <li>
          <h3>Laptop</h3>
          <h4>Price: 13.000.000 VND</h4>
          <Link to="/product-detail/3">
            <button>See detail</button>
          </Link>
        </li>
        <li>
          <h3>Nha gia kim</h3>
          <h4>Price: 75.000 VND</h4>
          <Link to="/product-detail/4">
            <button>See detail</button>
          </Link>
        </li>
        <li>
          <h3>Dan nhan tam</h3>
          <h4>Price: 90.000 VND</h4>
          <Link to="/product-detail/5">
            <button>See detail</button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Products;
