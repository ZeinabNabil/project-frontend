import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import style from '../../css/Landing/Cards.module.css';
import Aos from 'aos';
const Cards = ({ icon, title, text, aos = {} }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      className="col-lg-4 col-md-6 col-sm-12 col-12"
      data-aos={aos.aos}
      data-aos-offset={aos.offset}
      data-aos-easing={aos.easing}
      data-aos-duration={aos.duration}
      data-aos-delay={aos.delay}
    >
      <div className={`card ${style.card}`}>
        <div className={style.cardicon}>
          <FontAwesomeIcon
            icon={icon}
            style={{ fontSize: '50px', color: '#3C99DC' }}
          />
        </div>
        <div className="card-body">
          <h5 className={style.title}>{title}</h5>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
