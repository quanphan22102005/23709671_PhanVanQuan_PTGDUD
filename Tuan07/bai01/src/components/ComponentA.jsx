import React from "react";
import { useRecoilValue } from "recoil";
import { countState } from "../global_state/store";

const ComponentA = () => {
  const countValue = useRecoilValue(countState);

  return (
    <div>
      <h2>Giá trị của count: {countValue}</h2>
    </div>
  );
};

export default ComponentA;
