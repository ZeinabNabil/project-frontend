import React from "react";
import style from "../../css/ReadMore/Readmore.module.css";

const ReadMoreBox = ({ boxHeader, boxContent }) => {
  return (
    <div
      className="col-lg-6 col-md-12"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      data-aos-duration="800"
    >
      <div className={style.box_container}>
        <div className={`${style.box} card`}>
          <div className={`${style.box_body} card-body`}>
            <div className={style.read_more_header}>
              <h5 className="card-title">{boxHeader}</h5>
            </div>
            {typeof boxContent === "object" ? (
              boxContent.map((content) => {
                return (
                  <ul>
                    <li>{content}</li>
                  </ul>
                );
              })
            ) : (
              <p className="card-text">{boxContent}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadMoreBox;
