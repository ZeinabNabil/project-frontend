import React from "react";
import CoursesCard from "./Coursescard";
import style from "../../css/Layout/Landing.module.css";
import {
faGripLines
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Section = ({title, cards}) => {
  console.log(cards)
  const renderedCards = cards.map((card) => {
    return (
      <div className="col-lg-12 col-md-12 col-sm-12" style={{paddingBottom: "70px",paddingTop: "70px"}}>
      <CoursesCard  title={card.cardtitle} text={card.text} />
      </div>
    );
  });
  return (
    <div className={style.Section}>
      <h1 className={style.sectiontitle}>{title}</h1>
      <FontAwesomeIcon
        className={style.icon}
        icon={faGripLines}
      />
      <div className={style.cardcontainer}>{renderedCards}</div>
    </div>
  );
};

export default Section;
