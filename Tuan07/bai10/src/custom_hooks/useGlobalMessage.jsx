import React from "react";
import { useRecoilState } from "recoil";
import { message } from "../global_state/store";

const useGlobalMessage = () => {
  const [, setMyMessage] = useRecoilState(message);

  return (msg, type = "success") => {
    setMyMessage({ show: true, message: msg, type: type });

    setTimeout(
      () => setMyMessage({ show: false, message: "", type: "success" }),
      1500,
    );
  };
};

export default useGlobalMessage;
