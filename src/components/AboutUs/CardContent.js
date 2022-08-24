import React from "react";
import style from "../../css/AboutUs/Aboutus.module.css";

const CardContent = ({ card, col, colLg }) => {
  return (
    <>
      {col ? (
        <div className={`col-lg-${colLg} col-md-12`}>
          <div className={style.card_content}>
            <h5 className="card-title">{card.title}</h5>
            <div className="card-text">
              {typeof card.text === "object" ? (
                card.text.map((content) => {
                  return (
                    <ul>
                      <li>{content}</li>
                    </ul>
                  );
                })
              ) : (
                <p className="card-text">{card.text}</p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className={style.card_content}>
          <h5 className="card-title">{card.title}</h5>
          <div className="card-text">
            {typeof card.text === "object" ? (
              card.text.map((content) => {
                return (
                  <ul>
                    <li>{content}</li>
                  </ul>
                );
              })
            ) : (
              <p className="card-text">{card.text}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CardContent;
