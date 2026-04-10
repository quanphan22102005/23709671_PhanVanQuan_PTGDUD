import React from "react";
import { useRecoilState } from "recoil";
import { globalToast } from "../global_state/store";

const useGlobalToast = () => {
  const [, setMyToast] = useRecoilState(globalToast);

  return (msg, type = "success") => {
    setMyToast({ show: true, message: msg, type: type });

    setTimeout(() => {
      setMyToast({ type: "success", show: false, message: "" });
    }, 3000);
  };
};

export default useGlobalToast;
