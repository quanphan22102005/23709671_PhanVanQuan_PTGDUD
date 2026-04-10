import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { atom } from "recoil";

export const globalToast = atom({
  key: "message",
  default: {
    show: false,
    type: "success",
    message: "Hello, this is a Global UI",
  },
});
