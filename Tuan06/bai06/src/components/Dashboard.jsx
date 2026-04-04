import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1>Protected Route Assignment</h1>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default Dashboard;
