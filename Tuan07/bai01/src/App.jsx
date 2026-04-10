import React from "react";
import { RecoilRoot } from "recoil";
import ComponentA from "./components/componentA";
import ComponentB from "./components/ComponentB";

const App = () => {
  return (
    <RecoilRoot>
      <ComponentA></ComponentA>
      <ComponentB></ComponentB>
    </RecoilRoot>
  );
};

export default App;
