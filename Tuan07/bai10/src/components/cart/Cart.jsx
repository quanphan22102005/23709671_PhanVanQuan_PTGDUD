import React from "react";
import { cart, totalPrice } from "../../global_state/store";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";

const Cart = () => {
  const navigate = useNavigate();
  const [myCart, setMyCart] = useRecoilState(cart);

  const increase = (id) => {
    const newCart = myCart.map((item) => {
      if (item.id === id) {
        const tmpQuantity = item.quantity + 1;
        return { ...item, quantity: tmpQuantity };
      }
      return item;
    });

    setMyCart(newCart);
  };

  const decrease = (id) => {
    const newCart = myCart.map((item) => {
      if (item.id === id) {
        const tmpQuantity = item.quantity - 1;
        return { ...item, quantity: tmpQuantity };
      }
      return item;
    });

    setMyCart(newCart);
  };

  const sumPrice = useRecoilValue(totalPrice);

  return (
    <div>
      <button onClick={() => navigate("/home")}>Home</button>
      <ul>
        {myCart.map((item) => (
          <li key={item.id}>
            {item.title} - {item.price} - {item.quantity}
            <button onClick={() => increase(item.id)}>+</button>
            <button onClick={() => decrease(item.id)}>-</button>
          </li>
        ))}
      </ul>
      <h2>Total Price: {sumPrice}</h2>
    </div>
  );
};

export default Cart;
