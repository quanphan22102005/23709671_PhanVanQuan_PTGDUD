import React from "react";
import { useRecoilState } from "recoil";
import { appTheme } from "./globalState/Store";

const App = () => {
  const [theme, setTheme] = useRecoilState(appTheme);

  const toggleTheme = () => {
    console.log("Dang chay");
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("appTheme", newTheme);
  };

  const appStyle = {
    backgroundColor: theme === "light" ? "#d81414" : "#000000",
  };
  return (
    <div style={appStyle}>
      <button onClick={toggleTheme}>Đổi màu nền</button>
    </div>
  );
};

export default App;
