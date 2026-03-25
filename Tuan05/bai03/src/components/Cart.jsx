import React, { useContext } from "react";
import { CartContext, ACTIONS } from "../context/CartContext";

export default function Cart() {
  const { cart, dispatch, totalPrice } = useContext(CartContext);

  return (
    <div>
      <h2>Giỏ hàng của bạn</h2>
      {cart.length === 0 ? (
        <p>Giỏ hàng trống</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price} x {item.quantity}
              <button
                onClick={() =>
                  dispatch({
                    type: ACTIONS.UPDATE_QUANTITY,
                    payload: { id: item.id, amount: 1 },
                  })
                }
              >
                +
              </button>
              <button
                onClick={() =>
                  dispatch({
                    type: ACTIONS.UPDATE_QUANTITY,
                    payload: { id: item.id, amount: -1 },
                  })
                }
              >
                -
              </button>
              <button
                onClick={() =>
                  dispatch({ type: ACTIONS.REMOVE_FROM_CART, payload: item.id })
                }
              >
                Xóa
              </button>
            </li>
          ))}
        </ul>
      )}
      <h3>Tổng tiền: ${totalPrice}</h3>
    </div>
  );
}
