import React , {useEffect, useState} from "react";
import style from "../../css/Admin/Add.module.css"
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
        <div className={style.add}>
            <div className={style.title}>
            <h1>Add User</h1>
            </div>
            <div className={style.formcontainer} style={{width:"40%" ,marginTop:"5%" , padding: "40px"}}>
            <form 
            className="form-group" 
            style={{width:"90%", margin:"auto"}}
            onSubmit={onFormSubmit}
            >

                <Input 
                  onChange={onInputChange}
                    value={form.Name}
                    labelName="Course Name"
                    type="text"
                    class="form-control"
                    placeholder="Enter Course Name"
                />
                  <Input
                     onChange={onInputChange} 
                    value={form.Whatis}
                    labelName ="Course Definition"
                    type="text"
                    placeholder="What is this?"
                />
                  <Input
                    onChange={onInputChange} 
                    value={form.confirmpassword}
                    labelName ="Course confirmpassword"
                    type="number"
                    placeholder="Enter number of confirmpassword"
                />
                  <Input
                    onChange={onInputChange} 
                    value={form.password}
                    labelName ="Course password"
                    type="number"
                    placeholder="Enter number of password"
                />
                    <Input
                        onChange={onInputChange} 
                        value={form.email}
                        labelName ="Course email"
                        type="text"
                        placeholder="Enter Course email"
                    />
                  <Input
                    onChange={onInputChange} 
                    value={form.phone}
                    labelName ="Course phone"
                    type="text"
                    class="form-control"
                    placeholder="Enter Course phone"
                />
                  <Input
                    onChange={onInputChange} 
                    value={form.StudentLearn}
                    labelName ="Course use"
                    type="text"
                    placeholder="What will students learn"
                />
                <Input
                    onChange={onInputChange}
                    value={form.courseImage}
                    labelName="Course Photo"
                    type="file"
                    file="yes"
                    multiple={true}
                />
                <div className={style.save_btn} >
                    <button className="btn"  style={{marginTop:"12px", width:"100%"}}>Save</button>
                </div>
            </form>
        </div>
        

</div>
)
      
}

export default AddUser;

 