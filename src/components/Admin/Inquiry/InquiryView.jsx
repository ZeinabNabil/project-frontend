import React,{useState} from "react";
import AdminNavbar from "../layout/AdminNavbar";
import AdminSidebar from "../layout/AdminSidebar";
import style from "../../../css/Admin/Inquiry/Inquiry.module.css"
import Inquiry from "./Inquiry";
import { Accordion } from "react-bootstrap";

const InquiryView = (props) =>{
    const [ inquires,setInquires] = useState({
        name:"Donia" ,
        email:"doniawalig@gmail.com" ,
        phone:"01022695119" ,
        body:"inquiryy"
    })
    // const inquires = {name:"Donia" , email:"doniawalig@gmail.com" ,phone:"01022695119" , body:"dkvhdjdhddjdhfhf"}
    console.log(inquires)
    return <div>
        <AdminNavbar/>
        <div className="row">
            <div className="col-lg-2">
                <AdminSidebar/>
            </div>
            <div className="col-lg-10">
                <div className="row">
                    <div className="Col-lg-12 col-md-12 col-sm-12">
                        <div className={style.header}>
                            <h1>User inquires</h1>
                        </div>   
                    </div>
                </div>
                    {/* --------------------calling accordian--------------- */}
                <div className={style.inquires}>
                    <div className="row">
                                     {/* <Inquiry
                                        eventkey="0"
                                        name="Donia"
                                        email = "doniawalid@gmail.com"
                                        phone = "01022695119"
                                        body = "bla bla bla"
                                    />
                                     <Inquiry
                                        eventkey="0"
                                        name="Donia"
                                        email = "doniawalid@gmail.com"
                                        phone = "01022695119"
                                        body = "bla bla bla"
                                    />
                                     <Inquiry
                                        eventkey="0"
                                        name="Donia"
                                        email = "doniawalid@gmail.com"
                                        phone = "01022695119"
                                        body = "bla bla bla" 
                                    />  */}
                                    <Inquiry data={inquires} />
                                    {/* <Inquiry data={inquires} />
                                    <Inquiry data={inquires} />
                                    <Inquiry data={inquires} />
                                    <Inquiry data={inquires} />
                                    <Inquiry data={inquires} /> */}
                            
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default InquiryView;