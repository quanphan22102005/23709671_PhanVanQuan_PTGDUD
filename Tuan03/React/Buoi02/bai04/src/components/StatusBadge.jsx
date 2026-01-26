import React from "react";
import "./StatusBadge.css";

const StatusBadge = ({ status }) => {
  return <span className={`badge ${status}`}>{status}</span>;
};

export default StatusBadge;
