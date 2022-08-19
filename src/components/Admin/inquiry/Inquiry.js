<<<<<<< HEAD
import React, { useState } from "react";
import style from "../../../css/Admin/Inquiry/Inquiry.module.css";
import InquiryAccordian from "./InquiryAccordian";

const Inquiry = () => {
  return (
    <div className={style.inquires}>
      <div className="row">
        <InquiryAccordian
          eventKey="1"
          data={{
            name: "Hussein",
            email: "asdas",
            phone: "asdsa",
            body: "asdsadddas",
          }}
        />
        <InquiryAccordian
          eventKey="1"
          data={{
            name: "Hussein",
            email: "asdas",
            phone: "asdsa",
            body: "asdsadddas",
          }}
        />
      </div>
=======
import React, { useEffect } from 'react';
import style from '../../../css/Admin/Inquiry/Inquiry.module.css';
import InquiryAccordian from './InquiryAccordian';
import { connect } from 'react-redux';
import { showInquiries } from '../../../actions/inquiry.action';
const Inquiry = (props) => {
  useEffect(() => {
    props.showInquiries();
  }, []);
  const { Inquiries, loading } = props.inquiry;
  console.log(Inquiries);
  var renderContent;
  if (Inquiries === null || loading) {
    renderContent = 'Loading';
  } else {
    renderContent = Inquiries.inquiries.map((inquiry, index) => {
      return <InquiryAccordian data={inquiry} key={index} />;
    });
  }
  return (
    <div className={style.inquires}>
      <div className="row">{renderContent}</div>
>>>>>>> 1dd55278a5f248fbd2313108991c91ae88a4c8fb
    </div>
  );
};
const mapStateToProps = (state) => ({
  inquiry: state.inquiry,
});
export default connect(mapStateToProps, { showInquiries })(Inquiry);
