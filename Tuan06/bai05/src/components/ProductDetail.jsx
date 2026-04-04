import React from "react";
import { useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const navigate = useNavigate();

  const handleBuy = () => {
    console.log("Đang xử lý thanh toán chocopie cake");

    navigate("/checkout");
  };

  return (
    <div>
      <h2>This is chocopicake's information</h2>
      <p>
        Ngôi Sao Lẻ Loi Remix (Bản Hót Tiktok) - Ngôi Sao Anh Lẻ Loi Nhìn Về
        Phương Xa Có Em Remix Tiktok
      </p>
      <button onClick={handleBuy}>Click to buy</button>
    </div>
  );
};

export default ProductDetail;
