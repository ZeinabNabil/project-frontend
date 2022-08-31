import React, { useEffect } from 'react';
import style from '../../css/AboutUs/Aboutus.module.css';
import CardContent from './CardContent';
import Aos from 'aos';
const AboutUsCard = ({ cards }) => {
  return (
    <div>
      <div className={`${style.card} card`}>
        <div className={`${style.card_body} card-body`}>
          {cards.map((card, index) => (
            <CardContent card={card} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUsCard;
