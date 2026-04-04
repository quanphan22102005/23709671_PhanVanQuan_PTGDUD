import React from "react";
import { Outlet, Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <aside>
        <Link to="/dashboard/order">
          <button>Order</button>
        </Link>
        <Link to="/dashboard/setting">
          <button>Setting</button>
        </Link>
        <Link to="/dashboard/profile">
          <button>Profile</button>
        </Link>
      </aside>

      <main>
        <h2>Chào mừng đến với trang thương mại điện tử của tôi</h2>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Dashboard;
