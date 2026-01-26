import React from "react";
import "./Subinfo.css";
import doremonImg from "../../assets/doremon.jfif";

const Subinfo = (props) => {
  return (
    <div className="subinfo">
      <div className="student-card">
        <img src={doremonImg} alt="doremon" className="student-img" />
        <p className="student-info">{props.mssv}</p>
        <p className="student-info">{props.name}</p>
        <p className="student-info">{props.lop}</p>
      </div>
    </div>
  );
};

export default Subinfo;
