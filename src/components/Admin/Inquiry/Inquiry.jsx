import React from "react";
import { Accordion } from "react-bootstrap";
import style from "../../../css/Admin/Inquiry/Inquiry.module.css"


const Inquiry = ({data}) =>{
     
    return (
            <div className="col-lg-6 col-md-12 col-sm-12">
                <Accordion className={style.accordion}>
                    <Accordion.Item eventKey={data.eventkey}>
                        <Accordion.Header>
                           <div className={style.accordionHeader}>{data.name} - {data.email} - {data.phone} </div> 
                        </Accordion.Header>
                        <Accordion.Body>
                            {data.body}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
    )
}

export default Inquiry;

