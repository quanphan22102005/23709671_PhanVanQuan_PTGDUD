import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Profile from "./components/Profile";
import Order from "./components/Order";
import Dashboard from "./components/Dashboard.jsx";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login></Login>}></Route>

          <Route element={<ProtectedRoute></ProtectedRoute>}>
            <Route path="/profile" element={<Profile></Profile>}></Route>
            <Route path="/orders" element={<Order></Order>}></Route>
            <Route path="*"></Route>
          </Route>

          <Route path="/" element={<Dashboard></Dashboard>}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
