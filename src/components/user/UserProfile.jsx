import React , {useEffect, useState} from "react";
import style from "../../../css/user/UserProfile.module.css";
import ProfileEditInput from "./ProfileEditInput";
import UserCourseCard from "./UserCourseCard";
import IELTS from "../../../images/IELTS.jpg"
import TOEFL from "../../../images/TOEFL_Logo.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileSignature, faLightbulb, faUser } from "@fortawesome/free-solid-svg-icons";
import {
    faFacebookF,
    faInstagram,
    faLinkedinIn,
  } from '@fortawesome/free-brands-svg-icons';
import LandingPicArea from "../LandingPicArea";

const UserProfile =(props) =>{
    const [errors, setErrors] = useState({});
    const [edit, setEdit] = useState(false);
    const [form, setForm] = useState({
      name: '',
      phone: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
    const onInputChange = (e) => {
      const value = e.target.value;
      setForm({
        ...form,
        [e.target.name]: value,
      });
    };
    const onFormSubmit = (e) => {
      e.preventDefault();
      setErrors({});
  
      const user = new FormData();
      user.append("name", form.name);
      user.append("phone", form.phone);
      user.append("email", form.email);
      user.append("password", form.password);
      user.append("confirmpassword", form.confirmpassword);
      console.log(form);
      props.adduser(user);
    };
    useEffect(() => {
      setErrors({});
      setErrors(props.errors);
    }, [props.errors]);
    const onFileChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.files });
      console.log([...e.target.files]);
    };
    const handleButtonClick = () =>{
        setEdit(!edit);
    }
   
     // Return confirmpassword based on whether item is checked
    //  var isChecked = (item) =>
    //    checked.includes(item) ? "checked-item" : "not-checked-item";
  
    return <div>
      <LandingPicArea
        header=" Hello Donia "
        text="This is your profile page. You can see and update your information."
      />
          
     {/* --------------------------------start info card------------------------- */}
      <div className={style.profilecardcontainer}>
        <div className="card">
            <div className="card-header" style={{display:"flex" , justifyContent:"space-between" , color:"#3c99dc" ,padding:"30px"}}>
                <h2> <FontAwesomeIcon icon={faUser} style={{position:"relative" , right:"10px"}}/> My Account</h2>
                <button 
                onClick={handleButtonClick}
                >
                Edit</button>
                </div>
                <div className="card-body" style={{padding:"30px"}}>
                    <h3 className="card-title">User information</h3>
                    <form onSubmit={onFormSubmit}>
                        <div className="row">
                                <ProfileEditInput 
                                    onChange={onInputChange}
                                    name="name"
                                    value={form.name}
                                    labelName="Name"
                                    type="text"
                                    edit={edit}
                                    className="form-control"
                                    placeholder="Name"
                                />

                            <ProfileEditInput
                                onChange={onInputChange} 
                                name="email"
                                value={form.email}
                                labelName ="Email"
                                edit={edit}
                                type="email"
                                placeholder="Example : username @example.com"
                            />
                            <ProfileEditInput
                                onChange={onInputChange} 
                                name="phone"
                                value={form.phone}
                                labelName ="Phone"
                                type="text"
                                edit={edit}
                                className="form-control"
                                placeholder="phone number"
                            />
                        </div>
                    </form>
                    <hr/>
                    <div className={style.course_card_container}>
                        <div className={style.coursesHeader}>
                        <h2>
                         <FontAwesomeIcon icon={faLightbulb} style={{position:"relative" , right:"10px"}}/> 
                           Courses</h2>
                        </div>
                    <div className="row" >
                    <div className="col-lg-6">
                        <UserCourseCard
                        image={IELTS}
                        title= "IELTS Course"
                        text="Hussien Salah"
                        />
                    </div>
                    <div className="col-lg-6">
                        <UserCourseCard
                        image={TOEFL}
                        title= "TOEFL Course"
                        text="Hussien Salah"
                        />
                    </div>
                    <div className="col-lg-6">
                        <UserCourseCard
                        image={IELTS}
                        title= "IELTS Course"
                        text="Hussien Salah"
                        />
                    </div>
                    <div className="col-lg-6">
                        <UserCourseCard
                        image={TOEFL}
                        title= "TOEFL Course"
                        text="Hussien Salah"
                        />
                    </div> 
                    </div>
                </div>
                </div>
            </div>
        </div>
        {/* ----------------------------end info card------------------- */}
    </div>
}

export default UserProfile