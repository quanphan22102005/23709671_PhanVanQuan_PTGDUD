import React, { useState } from "react";
import Button from "./components/Button/Button";
import LoginForm from "./components/LoginForm/LoginForm";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div style={{ padding: "30px" }}>
      <Button type="primary" onClick={() => setShowLogin(true)}>
        Login
      </Button>

      <LoginForm show={showLogin} onClose={() => setShowLogin(false)}
      />
    </div>
  );
};

export default App;