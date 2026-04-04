import React from "react";
import { Link } from "react-router-dom";

const Order = () => {
  return (
    <div>
      <ul>
        <li>order 1</li>
        <li>order 2</li>
        <li>order 3</li>
      </ul>
      <Link to="/">
        <button>Back to dashboard</button>
      </Link>
    </div>
  );
};

export default Order;
