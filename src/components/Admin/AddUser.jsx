import React , {useEffect, useState} from "react";
import style from "../../css/Admin/Adduser.module.css"
import Input from "../Admin/Input"


const AddUser= (props) =>{
  const checkList = ["VIP1", "VIP2", "Group"];
  const [checked, setChecked] = useState([]);
  const [errors, setErrors] = useState({});
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
   

 
   // Return confirmpassword based on whether item is checked
   var isChecked = (item) =>
     checked.includes(item) ? "checked-item" : "not-checked-item";

    return(
        <div className={style.adduser}>
            <div className={style.title}>
            <h1>Add User</h1>
            </div>
            <div className={style.formcontainer}>
            <form 
            className="form-group" 
            style={{width:"100%", margin:"auto"}}
            onSubmit={onFormSubmit}
            >

                <Input 
                  onChange={onInputChange}
                    value={form.name}
                    labelName="User Name"
                    type="text"
                    class="form-control"
                    placeholder="User Name"
                />
                  <Input
                     onChange={onInputChange} 
                    value={form.email}
                    labelName ="Email"
                    type="email"
                    placeholder="Example : username @example.com"
                />
                  <Input
                    onChange={onInputChange} 
                    value={form.password}
                    labelName ="Password"
                    type="password"
                    placeholder="Enter your password"
                />
                   <Input
                    onChange={onInputChange} 
                    value={form.confirmpassword}
                    labelName ="Confirm password"
                    type="password"
                    placeholder="Confirm your password"
                />
                  <Input
                    onChange={onInputChange} 
                    value={form.phone}
                    labelName ="Phone"
                    type="text"
                    class="form-control"
                    placeholder="phone number"
                />
                <div className={style.save_btn} >
                    <button className="btn" >Save</button>
                </div>
            </form>
        </div>
        

</div>
)
      
}

export default AddUser;

 