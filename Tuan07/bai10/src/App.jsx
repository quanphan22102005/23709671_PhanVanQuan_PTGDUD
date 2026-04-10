import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import ProtectedRoute from "./components/protected/ProtectedRoute";
import Cart from "./components/cart/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home></Home>
            </ProtectedRoute>
          }
        ></Route>

        <Route path="/cart" element={<Cart></Cart>}></Route>

        <Route path="*" element={<Login></Login>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
