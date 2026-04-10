import React from "react";
import { useRecoilState } from "recoil";
import { countState } from "../global_state/store";

const ComponentB = () => {
  const [count, setCount] = useRecoilState(countState);

  return (
    <div>
      <h3>Giá trị count trong Component B: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Tăng count(+)</button>
      <button onClick={() => setCount(count - 1)}>Giảm count(-)</button>
    </div>
  );
};

export default ComponentB;
