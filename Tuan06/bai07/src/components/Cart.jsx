import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  const handleBuy = () => {
    console.log("Đang xử lý thanh toán");
    navigate("/checkout");
  };

  return (
    <div>
      <ul>
        <h2>Số lượng sản phẩm: 5</h2>
        <li>Laptop</li>
        <li>iPad</li>
        <li>Macbook</li>
        <li>Dac nhan tam</li>
        <li>Nha gia kim</li>
      </ul>
      <h2>Tổng tiền: 30.000.000 VND</h2>
      <button onClick={handleBuy}>Check out</button>
    </div>
  );
};

export default Cart;
