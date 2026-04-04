import React from "react";
import { useAuth } from "../context/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login({ userName: "phanvanquan", password: "phanvanquan2005@" });
    navigate("/");
  };

  return (
    <div>
      <input type="text" value="phanvanquan" onChange={() => {}} />
      <input type="password" value="phanvanquan2005@" onChange={() => {}} />
      <button onClick={handleLogin}>Login now</button>
    </div>
  );
};

export default Login;
