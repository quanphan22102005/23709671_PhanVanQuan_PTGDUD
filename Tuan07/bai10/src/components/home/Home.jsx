import React from "react";
import ProductsList from "../products/ProductList";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginInformation } from "../../global_state/store";

const Home = () => {
  const navigate = useNavigate();

  const [, setChecklogin] = useRecoilState(loginInformation);

  const goToCart = () => {
    navigate("/cart");
  };

  const logout = () => {
    setChecklogin(null);
  };

  return (
    <div>
      <button onClick={() => logout()}>Logout</button>
      <ProductsList></ProductsList>
      <button onClick={goToCart}>Your Cart</button>
    </div>
  );
};

export default Home;
