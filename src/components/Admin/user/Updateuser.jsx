import React,{useState} from "react";
import { useNavigate } from 'react-router-dom';
import style from "../../../css/Admin/Updateuser.module.css"
import Input from "../Input";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';


const UpdateUser = (props) =>{
    const navigate = useNavigate();
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
    //   const { errors } = props.error;
    
      const onFormSubmit = async (evt) => {
        evt.preventDefault();
        const userData = {
          name: form.name,
          email: form.email,
          phone: form.phone,
        };
        const result = await props.createUser(userData);
        if (result) {
          setTimeout(() => {
            navigate('/dashboard/users/view');
          }, 800);
        }
    }
    return (
        <div className={style.updateuser}>
            <div className={style.title}>
            <span>
                <FontAwesomeIcon icon={faPenToSquare} />
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
                    // err={errors ? errors.name : ''}
                />
                <Input
                    onChange={onInputChange}
                    value={form.email}
                    name="email"
                    labelName="Email"
                    type="email"
                    placeholder="Example : username @example.com"
                    // err={errors ? errors.email : ''}
                />
                <Input
                    onChange={onInputChange}
                    value={form.phone}
                    labelName="Phone"
                    name="phone"
                    type="text"
                    class="form-control"
                    placeholder="phone number"
                    // err={errors ? errors.phone : ''}
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