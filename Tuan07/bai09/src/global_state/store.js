import { atom } from "recoil";

export const authState = atom({
  key: "authState",
  // Khi khởi tạo, thử đọc token từ localStorage xem người dùng đã login chưa
  default: {
    token: localStorage.getItem("accessToken") || null,
    username: localStorage.getItem("username") || null,
    isLoading: false,
    error: null,
  },
});
