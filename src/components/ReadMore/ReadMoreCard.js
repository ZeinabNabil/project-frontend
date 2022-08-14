import React from "react";
import style from "../../css/Layout/ReadMore/Readmore.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ReadMoreCard = ({ cardIcon, cardTilte, cardSubtitle, cardText }) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6">
      <div className={`${style.card} card`}>
        <div className={`${style.card_body} card-body`}>
          <FontAwesomeIcon icon={cardIcon} />
          <h5 className="card-title">{cardTilte}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{cardSubtitle}</h6>
          <p className="card-text">{cardText}</p>
        </div>
      </div>
    </div>
  );
};

export default ReadMoreCard;
