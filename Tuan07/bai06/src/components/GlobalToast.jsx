import React from "react";
import { useRecoilState } from "recoil";
import { globalToast } from "../global_state/store";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const GlobalToast = () => {
  const [myToast, setMyToast] = useRecoilState(globalToast);

  if (!myToast.show) return null;

  return (
    <div className={`toast-box ${toast.type}`}>
      <h2>{myToast.message}</h2>
      <button onClick={() => setMyToast({ ...myToast, show: false })}>X</button>
    </div>
  );
};

export default GlobalToast;
