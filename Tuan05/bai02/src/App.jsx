import React, { useState } from "react";
import Layout from "./components/Layout";
import { ThemeContext } from "./ThemeContext";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        style={{
          backgroundColor: theme === "light" ? "#fff" : "#333",
          color: theme === "light" ? "#000" : "#fff",
          minHeight: "100vh",
        }}
      >
        <h1>App Component (Global State)</h1>
        <p>Theme hiện tại: {theme}</p>
        <hr />
        <Layout />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
