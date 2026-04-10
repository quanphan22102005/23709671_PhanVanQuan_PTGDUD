import React from "react";
import { atom } from "recoil";

export const countState = atom({
  key: "countState",
  default: 0,
});
