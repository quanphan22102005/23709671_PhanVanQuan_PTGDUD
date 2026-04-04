import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import NotFound from "./components/NotFound";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      <Link to="/">
        <button>Dashboard</button>
      </Link>
      <Link to="/about">
        <button>About us</button>
      </Link>
      <Link to="/contact">
        <button>Contact us</button>
      </Link>
    </BrowserRouter>
  );
};

export default App;
