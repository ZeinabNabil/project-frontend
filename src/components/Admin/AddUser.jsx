import React , {useEffect, useState} from "react";
import style from "../../css/Admin/AddCourse.module.css"
import Input from "../Admin/Input"


const AddUSer = (props) =>{
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
    user.append("Name", form.name);
    user.append("phone", form.phone);
    user.append("email", form.email);
    user.append("password", form.password);
    console.log(form);
    props.addUser(user);
  };
  useEffect(() => {
    setErrors({});
    setErrors(props.errors);
  }, [props.errors]);
  const onFileChange = (e) => {
    setForm({ ...form, courseImage: e.target.files });
    console.log([...e.target.files]);
  };
   // Add/Remove checked item from list
   const handleCheck = (event) => {
     var updatedList = [...checked];
     if (event.target.checked) {
       updatedList = [...checked, event.target.value];
     } else {
       updatedList.splice(checked.indexOf(event.target.value), 1);
     }
     setChecked(updatedList);
   };
 
   // Generate string of checked items
   const checkedItems = checked.length
     ? checked.reduce((total, item) => {
         return total + ", " + item;
       })
     : "";
 
   // Return classes based on whether item is checked
   var isChecked = (item) =>
     checked.includes(item) ? "checked-item" : "not-checked-item";

    return(
        <div className={style.addcourse}>
            <div className={style.title}>
            <h1>Add New Course</h1>
            </div>
            <div className={style.formcontainer}>
            <form 
            className="form-group" 
            style={{width:"90%", margin:"auto"}}
            onSubmit={onFormSubmit}
            >
                <div className="row g-3">
                    <div className="col-lg-6">
                <Input 
                  onChange={onInputChange}
                    value={form.Name}
                    labelName="Course Name"
                    type="text"
                    class="form-control"
                    placeholder="Enter Course Name"
                />
                </div>
                <div className="col-lg-6">
                  <Input
                     onChange={onInputChange} 
                    value={form.Whatis}
                    labelName ="Course Definition"
                    type="text"
                    placeholder="What is this?"
                />
                </div>
                </div>
                <div className="row g-3">
                <div className="col-lg-6">
                  <Input
                    onChange={onInputChange} 
                    value={form.Classes}
                    labelName ="Course Classes"
                    type="number"
                    placeholder="Enter number of classes"
                />
                </div>
                 <div className="col-lg-6">
                  <Input
                    onChange={onInputChange} 
                    value={form.Attends}
                    labelName ="Course Attends"
                    type="number"
                    placeholder="Enter number of attends"
                />
                </div>
            </div>
            <div className="row g-3">
                <div className="col-lg-6">
                    <Input
                        onChange={onInputChange} 
                        value={form.Description}
                        labelName ="Course Description"
                        type="text"
                        placeholder="Enter Course Description"
                    />
                    </div>
                <div className="col-lg-6">
                  <Input
                    onChange={onInputChange} 
                    value={form.Category}
                    labelName ="Course Category"
                    type="text"
                    class="form-control"
                    placeholder="Enter Course Category"
                />
                </div>
            </div>
            <div className="row g-3">
                <div className="col-lg-6">
                  <Input
                    onChange={onInputChange} 
                    value={form.StudentLearn}
                    labelName ="Course use"
                    type="text"
                    placeholder="What will students learn"
                />
                </div>
                <div className="col-lg-6">
                <Input
                    onChange={onInputChange}
                    value={form.courseImage}
                    labelName="Course Photo"
                    type="file"
                    file="yes"
                    multiple={true}
                />
                </div>
            </div>
                <div className="col-lg-12">
                   <div className={style.checkList}>
                        <div className={style.listContainer}>
                            <div className={style.listTitle}>Types of Course</div>
                            <div className={style.inputSpan_container}>
                            {checkList.map((item, index) => (
                                <div key={index}>
                                <input value={item} type="checkbox" onChange={handleCheck} />
                                <span className={isChecked(item)}>{item}</span>
                                </div>
                              
                            ))}
                            </div>
                        </div>
                       
                    </div>
                    <div className={style.itemsChecked}>
                        {`Items checked are: ${checkedItems}`}
                    </div>
                    
                </div>
            </form>
        </div>
        

</div>
)
      
}

export default AddUSer;

 