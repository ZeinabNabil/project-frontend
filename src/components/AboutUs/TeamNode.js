import React from "react";
import style from "../../css/AboutUs/Aboutus.module.css";

const TeamNode = ({ icon, header, subHeader, parent }) => {
  return (
    <div
      className={`${style.node} ${
        parent ? style.parent_node : style.child_node
      }`}
    >
      <div className={style.node_icon}>
        <img src={icon} alt="node image" />
      </div>
      <div className={style.node_content}>
        <h4>{header}</h4>
        <span>{subHeader}</span>
      </div>
    </div>
  );
};

export default TeamNode;
