import React from "react";
import { useRecoilValue } from "recoil";
import { loginInformation } from "../../global_state/store";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const checkLogin = useRecoilValue(loginInformation);

  if (!checkLogin) return <Navigate to="/login" replace></Navigate>;

  return <div>{children}</div>;
};

export default ProtectedRoute;
