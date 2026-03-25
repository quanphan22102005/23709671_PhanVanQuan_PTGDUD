import React, { useReducer, useEffect } from "react";
import { CartContext, ACTIONS } from "./context/CartContext";

const initialState = JSON.parse(localStorage.getItem("cart")) || [];

function cartReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TO_CART: {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];
    }

    case ACTIONS.REMOVE_FROM_CART:
      return state.filter((item) => item.id !== action.payload);

    case ACTIONS.UPDATE_QUANTITY: {
      return state.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + action.payload.amount),
            }
          : item,
      );
    }
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <CartContext.Provider value={{ cart, dispatch, ACTIONS, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}
