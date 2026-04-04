import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Setting from "./components/Setting";
import Order from "./components/Order";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/dashboard" replace></Navigate>}
        ></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}>
          <Route path="profile" element={<Profile></Profile>}></Route>
          <Route path="setting" element={<Setting></Setting>}></Route>
          <Route path="order" element={<Order></Order>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
