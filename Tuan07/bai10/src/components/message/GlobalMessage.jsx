import React from "react";
import { useRecoilState } from "recoil";
import { message } from "../../global_state/store";

const GlobalMessage = () => {
  const [myMessage, setMyMessage] = useRecoilState(message);

  console.log("State Message hiện tại:", myMessage);

  const cancelMessage = () => {
    setMyMessage({ message: "", show: false, type: "success" });
  };

  if (!myMessage.show) return null;

  return (
    <div>
      <h2>{myMessage.message}</h2>
      <button onClick={cancelMessage}>X</button>
    </div>
  );
};

export default GlobalMessage;
