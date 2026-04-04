import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/home">Trang chủ</Link>
        <Link to="/contact">Liên hệ</Link>
        <Link to="/about">Về chúng tôi</Link>
      </nav>

      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
