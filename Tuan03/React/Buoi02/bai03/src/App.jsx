import React, { useState } from "react";
import Input from "./components/Input";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <Input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></Input>
      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></Input>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default App;
