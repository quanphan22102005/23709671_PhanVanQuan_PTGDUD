import { atom, selector } from "recoil";

export const loginInformation = atom({
  key: "loginInformation",
  default: null,
});

export const cart = atom({
  key: "cart",
  default: [],
});

export const products = atom({
  key: "products",
  default: {
    data: [],
    loading: false,
    error: null,
  },
});

export const totalPrice = selector({
  key: "totalPrice",
  get: ({ get }) => {
    const tmpCart = get(cart);
    return tmpCart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  },
});

export const message = atom({
  key: "toastMessage",
  default: {
    message: "",
    type: "success",
    show: false,
  },
});
