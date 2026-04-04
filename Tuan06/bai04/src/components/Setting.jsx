import React from "react";
import { Link } from "react-router-dom";

const Setting = () => {
  return (
    <div>
      This is setting, you can personalize here
      <Link to="/">
        <button>Back to dashboard</button>
      </Link>
    </div>
  );
};

export default Setting;
