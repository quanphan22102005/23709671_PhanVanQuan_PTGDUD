import { atom } from "recoil";

export const userList = atom({
  key: "userList",
  default: {
    data: [],
    loading: false,
    error: null,
  },
});
