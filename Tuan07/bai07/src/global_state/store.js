import { atom } from "recoil";

export const userList = atom({
  key: "users",
  default: {
    data: [],
    loading: false,
    error: null,
  },
});
