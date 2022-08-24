import React from "react";
import style from "../../css/AboutUs/Aboutus.module.css";
import CardContent from "./CardContent";

const AboutUsCard = ({ cards }) => {
  return (
    <div style={{ height: "100%" }}>
      <div className={`${style.card} card`}>
        <div className={`${style.card_body} card-body`}>
          {cards.map((card, index) => (
            <CardContent card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUsCard;
