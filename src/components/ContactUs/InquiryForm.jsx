import React, { useEffect, useState } from 'react';
import style from "../../css/ContactUs/Contactus.module.css"
import InquriyInput from "./InquiryInput";

const InquiryForm = () =>{
    const [form, setForm] = useState({
        name: '',
        mobilenumber: '',
        email: '',
        inquiries: '',
      });
      const onInputChange = (e) => {
        const value = e.target.value;
        setForm({
          ...form,
          [e.target.name]: value,
        });
      };
      const onFormSubmit = async (evt) => {
        evt.preventDefault();
        const Data = {
          name: form.name,
          mobilenumber: form.mobilenumber,
          email: form.email,
          inquiries: form.inquiries,
        };
    }
    return ( 
                  <form onSubmit={onFormSubmit} >
                    <InquriyInput 
                      name="name"
                      onChange={onInputChange}
                      value={form.name}
                      labelName="Full name"
                      type="text"
                      placeholder=""
                      
                    />
                    <InquriyInput 
                      name="mobilenumber"
                      onChange={onInputChange}
                      value={form.mobilenumber}
                      labelName="Mobile Number"
                      type="text"
                      placeholder=""
                    />
                    <InquriyInput 
                      name="email"
                      onChange={onInputChange}
                      value={form.email}
                      labelName="Email"
                      type="email"
                      placeholder=""
                    />
                     <div>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <label
                      className={style.formlabel}
                      style={{ color: 'black' , padding:"4px" , fontWeight:"bold" }}
                    >
                     Inquiries
                    </label>
                  </div>
                  <textarea
                    className="form-control"
                    style={{ width: '100%', marginTop: '5px' }}
                    rows={4}
                    onChange={onInputChange}
                    value={form.inquiries}s
                    name="inquiries"
                    type="text"
                    placeholder=""
                  ></textarea>
                </div>
                  <div className={style.sendmsg_btn}>
                    <button className="btn btn-primary">Send Message</button>
                  </div>
                </form>
    )
}

export default InquiryForm;