import React from "react";
import { useAuth } from "../context/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace></Navigate>;
  }

  return <Outlet></Outlet>;
};

export default ProtectedRoute;
