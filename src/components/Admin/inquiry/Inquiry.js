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
    </div>
  );
};

export default Inquiry;
