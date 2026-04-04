import React from "react";
import { useAuth } from "../context/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login({ name: "Quan Phan" });
    navigate("/profile");
  };
  return (
    <div>
      <h2>This is login page</h2>
      <button onClick={handleLogin}>Login now</button>
    </div>
  );
};

export default Login;
