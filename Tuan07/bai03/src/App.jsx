import React from "react";
import { useRecoilState } from "recoil";
import { user } from "./globalState/store";
import ComponentA from "./components/ComponentA";

const App = () => {
  const [myUser, setMyUser] = useRecoilState(user);

  const login = () => {
    const newUser = {
      userName: "QuanPhan",
      password: "phanvanquan",
    };
    setMyUser(newUser);
  };

  const logout = () => {
    setMyUser(null);
  };

  return (
    <div>
      <ComponentA></ComponentA>
      <h2>Đây là userName tại component App: {myUser?.userName ?? "Khách"}</h2>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default App;
