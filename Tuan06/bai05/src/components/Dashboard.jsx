import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <ul>
        <li>
          <h2>Chocopie Cake</h2>
          <Link to="product-detail">
            <button>See detail of chocopie cake</button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
