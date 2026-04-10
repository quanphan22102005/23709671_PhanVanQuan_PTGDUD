import React from "react";
import { atom, selector } from "recoil";

export const cart = atom({
  key: "cart",
  default: [],
});

export const calculate = selector({
  key: "ca",
  get: ({ get }) => {
    const myCart = get(cart);

    return myCart.reduce((accumulator, item) => {
      return accumulator + item.price * item.quantity;
    }, 0);
  },
});
