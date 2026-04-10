import React, { useEffect } from "react";
import useGlobalToast from "./custom_hooks/useGlobalToast";
import GlobalToast from "./components/GlobalToast";

const App = () => {
  const toast = useGlobalToast();

  useEffect(() => {
    toast("Hello, this is a Global Toast Message", "success");
  }, []);
  return (
    <div>
      <GlobalToast></GlobalToast>
      <button
        onClick={() =>
          toast("Hello, this is a Global Toast Message", "success")
        }
      >
        Hiển thị message
      </button>
    </div>
  );
};

export default App;
