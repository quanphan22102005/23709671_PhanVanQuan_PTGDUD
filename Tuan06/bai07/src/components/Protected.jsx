import React from "react";
import { useAuth } from "../context/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }

  return <Outlet></Outlet>;
};

export default Protected;
