import React from "react";
import { useState } from "react";
import StatusBadge from "./components/StatusBadge";

const App = () => {
  const [status, setStatus] = useState("online");

  const changeStatus = () => {
    if (status == "online") {
      setStatus("offline");
    } else if (status == "offline") {
      setStatus("busy");
    } else {
      setStatus("online");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <StatusBadge status={status}></StatusBadge>
      <button onClick={changeStatus}>Change Status</button>
    </div>
  );
};

export default App;
