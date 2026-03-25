import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export default function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Đổi sang chế độ {theme === "light" ? "Dark" : "Light"}
    </button>
  );
}
