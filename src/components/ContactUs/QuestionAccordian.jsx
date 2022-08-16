import React from "react";
import { Accordion } from "react-bootstrap";
import style from "../../css/ContactUs/Contactus.module.css"



const QuestionAccordian = ({key,header,body}) =>{
    return (
        <Accordion className={style.accordian}>
            <Accordion.Item classname={style.accordianitem} eventKey ={key} >
                <Accordion.Header classname={style.accordianHeader}>
                    {header}
                </Accordion.Header>
            <Accordion.Body className={style.accordian_body}>
                {body}
            </Accordion.Body>
            </Accordion.Item>   
        </Accordion>


    )
}

export default QuestionAccordian;

