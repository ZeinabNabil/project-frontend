import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import style from "../../../css/Admin/updateuser.module.css"
import Input from "../../user/ProfileEditInput";


const UpdateUser = (props) =>{
    const [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
      });
      const onInputChange = (e) => {
        const value = e.target.value;
        setForm({
          ...form,
          [e.target.name]: value,
        });
      };
      const { errors } = props.error;
      const { userId } = useParams();
    
      const onFormSubmit = async (evt) => {
        evt.preventDefault();
        const userData = {
          name: form.name,
          email: form.email,
          phone: form.phone,
        };
    }
    return (
        <div className={style.updateuser}>
            <div className={style.title}>
            <span>
                <FontAwesomeIcon icon={faPlus} />
                {props.header}
            </span>
            </div>
            <div className={style.formcontainer}>
                <form className="form-group" onSubmit={onFormSubmit}>
                <Input
                    onChange={onInputChange}
                    value={form.name}
                    name="name"
                    labelName="User Name"
                    type="text"
                    class="form-control"
                    placeholder="Username"
                    err={errors ? errors.name : ''}
                />
                <Input
                    onChange={onInputChange}
                    value={form.email}
                    name="email"
                    labelName="Email"
                    type="email"
                    placeholder="Example : username @example.com"
                    err={errors ? errors.email : ''}
                />
                <Input
                    onChange={onInputChange}
                    value={form.phone}
                    labelName="Phone"
                    name="phone"
                    type="text"
                    class="form-control"
                    placeholder="phone number"
                    err={errors ? errors.phone : ''}
                />
                <div className={style.save_btn}>
                    <button className="btn">Save</button>
                </div>
                </form>
      </div>
        </div>
    )
}

export default UpdateUser;