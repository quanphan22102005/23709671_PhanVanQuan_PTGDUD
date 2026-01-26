import React from "react";
import "./Input.css";

const Input = (props) => {
  return (
    <div>
      <input
        type="text"
        placeholder={props.placeholder}
        className="input"
        onChange={props.onChange}
      />
    </div>
  );
};

export default Input;
