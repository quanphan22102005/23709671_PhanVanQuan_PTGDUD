import React from "react";
import { loginInformation } from "../../global_state/store";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [, setCheckLogin] = useRecoilState(loginInformation);

  const login = () => {
    setCheckLogin({ username: "Quan Phan", password: "phanvanquan2005" });
    navigate("/home");
  };

  return (
    <div>
      <h2>Nhấn vào đây để login và truy cập trang web</h2>
      <button onClick={() => login()}>Login</button>
    </div>
  );
};

export default Login;
