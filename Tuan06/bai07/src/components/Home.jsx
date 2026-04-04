import React from "react";
import { Outlet, Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <aside>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/profile">
          <button>Profile</button>
        </Link>
        <Link to="/products">
          <button>Products</button>
        </Link>
        <Link to="/cart">
          <button>Your cart</button>
        </Link>
      </aside>

      <h1>Chào mừng đến với Shop Router</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
