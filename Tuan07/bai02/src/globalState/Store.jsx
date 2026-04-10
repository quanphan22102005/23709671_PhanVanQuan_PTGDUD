import React from "react";
import { atom } from "recoil";

export const appTheme = atom({
  key: "appTheme",
  default: localStorage.getItem("appTheme") || "light",
});
