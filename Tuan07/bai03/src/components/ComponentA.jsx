import React from "react";
import { user } from "../globalState/store";
import { useRecoilValue } from "recoil";

const ComponentA = () => {
  const myUser = useRecoilValue(user);
  return (
    <div>
      <h1>Đây là username tại component A: {myUser?.userName ?? "Khách"}</h1>
    </div>
  );
};

export default ComponentA;
