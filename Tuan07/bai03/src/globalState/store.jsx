import React from "react";
import { atom } from "recoil";

export const user = atom({
  key: "user",
  default: null,
});
