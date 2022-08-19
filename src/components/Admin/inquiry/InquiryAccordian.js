import React from 'react';
import style from '../../../css/Admin/Inquiry/Inquiry.module.css';
import { Accordion } from 'react-bootstrap';
import moment from 'moment';
const InquiryAccordian = ({ data }) => {
  return (
    <div className="col-lg-6 col-md-12 col-sm-12">
      <Accordion className={style.accordion}>
        <Accordion.Item eventKey={data._id}>
          <Accordion.Header>
            <div className={style.accordionHeader}>
              {data.name} - {data.email} - {data.phone}
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <div>{data.inquiries}</div>
            <span style={{ color: '#CCC' }}>
              {moment(data.createdAt).format('MMM Do YY')}
            </span>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default InquiryAccordian;
