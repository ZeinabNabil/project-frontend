import React, { useEffect, useState } from 'react';
import style from '../../../css/Admin/Addcourse.module.css';
import Input from '../Input';
import { addCourse } from '../../../actions/course.action';
import { connect } from 'react-redux';
import classnames from 'classnames';
import store from '../../../store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { getCourseById } from '../../../actions/course.action';
import { useParams } from 'react-router-dom';
const UpdateCourse = (props) => {
  const { id } = useParams();
  const { currentUser, isAuthenticated } = props.user;
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/auth/login');
    }
    if (currentUser.role != 1 || currentUser.role != 2) {
      navigate('/notAuth');
    }
  }, []);
  const checkList = ['VIP1', 'VIP2', 'Group'];
  const categories = [
    'IELTS',
    'EMSAT',
    'ICDL',
    'MANAGEMENT',
    'COMPUTER',
    'LANGUAGE',
  ];
  const [checked, setChecked] = useState([]);
  const [form, setForm] = useState({
    name: '',
    category: '',
    description: '',
    attends: '',
    classes: '',
    whatis: '',
    whatWillStudentsLearn: '',
    image: '',
    typesOfCourse: '',
    numbersOfHours: '',
    duration: '',
  });
  const { course, loading } = props.course;
  useEffect(() => {
    props.getCourseById(id);
    store.dispatch({
      type: 'GET_ERRORS',
      payload: {},
    });
  }, []);
  useEffect(() => {
    if (course !== null) {
      setForm({
        name: course.name,
        category: course.category,
        description: course.description,
        attends: course.attends,
        classes: course.classes,
        whatis: course.whatis,
        whatWillStudentsLearn: course.whatWillStudentsLearn,
        image: course.image,
        typesOfCourse: course.typesOfCourse,
        numbersOfHours: course.numbersOfHours,
        duration: course.duration,
      });
    }
  }, [course]);
  const onInputChange = (e) => {
    const value = e.target.value;
    setForm({
      ...form,
      [e.target.name]: value,
    });
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    const course = new FormData();
    course.append('name', form.name);
    course.append('category', form.category);
    course.append('description', form.description);
    course.append('attends', form.attends);
    course.append('classes', form.classes);
    course.append('whatis', form.whatis);
    course.append('whatWillStudentsLearn', form.whatWillStudentsLearn);
    course.append('typesOfCourse', checkedItems);
    course.append('numbersOfHours', form.numbersOfHours);
    course.append('duration', form.duration);
    course.append('image', form.image);
  };
  const onFileChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.files[0] });
  };
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
        return total + ', ' + item;
      })
    : '';

  // Return classes based on whether item is checked
  var isChecked = (item) =>
    checked.includes(item) ? 'checked-item' : 'not-checked-item';

  const { errors } = props.error;
  return (
    <div className={style.addcourse}>
      <div className={style.title}>
        <span>
          <FontAwesomeIcon icon={faEdit} />
          Update Course
        </span>
      </div>
      <div className={style.form}>
        <div className={style.formcontainer}>
          <form className="form-group" onSubmit={onFormSubmit}>
            <div className="row g-3">
              <div className="col-lg-6">
                <Input
                  onChange={onInputChange}
                  value={form.name}
                  name="name"
                  labelName="Course Name"
                  type="text"
                  className="form-control"
                  placeholder="Example : course one"
                  err={errors ? errors.name : ''}
                />
              </div>
              <div className="col-lg-6">
                <Input
                  onChange={onInputChange}
                  value={form.whatis}
                  name="whatis"
                  labelName="Course Definition"
                  type="text"
                  placeholder="Definition of this course"
                  err={errors ? errors.whatis : ''}
                />
              </div>
            </div>
            <div className="row g-3">
              <div className="col-lg-6">
                <Input
                  onChange={onInputChange}
                  value={form.duration}
                  name="duration"
                  labelName="Course Duration"
                  type="text"
                  className="form-control"
                  placeholder="Example : 3 months 2weeks"
                  err={errors ? errors.duration : ''}
                />
              </div>
              <div className="col-lg-6">
                <Input
                  onChange={onInputChange}
                  value={form.numbersOfHours}
                  name="numbersOfHours"
                  labelName="Course Hours"
                  type="number"
                  placeholder="Enter number of hours"
                  err={errors ? errors.numbersOfHours : ''}
                />
              </div>
            </div>
            <div className="row g-3">
              <div className="col-lg-6">
                <Input
                  onChange={onInputChange}
                  value={form.classes}
                  name="classes"
                  labelName="Course Classes"
                  type="number"
                  placeholder="Enter number of classes"
                  err={errors ? errors.classes : ''}
                />
              </div>
              <div className="col-lg-6">
                <Input
                  onChange={onInputChange}
                  value={form.description}
                  name="description"
                  labelName="Course Description"
                  type="text"
                  placeholder="Short brief about this course"
                  err={errors ? errors.description : ''}
                />
              </div>
            </div>
            <div className="row g-3">
              <div className="col-lg-6">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <label className={style.formlabel} style={{ color: 'white' }}>
                    Category
                  </label>
                </div>
                <select
                  value={form.category}
                  onChange={onInputChange}
                  className={classnames('form-select', {
                    'is-invalid': errors ? errors.category : '',
                  })}
                  name="category"
                >
                  <option>Choose</option>
                  {categories.map((category) => (
                    <option value={category.toLowerCase()}>{category}</option>
                  ))}
                </select>
                {errors && (
                  <div className={`invalid-feedback ${style.error_text}`}>
                    {errors ? errors.category : ''}
                  </div>
                )}
              </div>
              <div className="col-lg-6">
                <Input
                  onChange={onFileChange}
                  labelName="Course Photo"
                  type="file"
                  file="yes"
                  name="image"
                  err={errors ? errors.image : ''}
                />
              </div>
            </div>
            <div className="row g-3">
              <div className="col-lg-6">
                <div>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <label
                      className={style.formlabel}
                      style={{ color: 'white' }}
                    >
                      What will students learn
                    </label>
                  </div>
                  <textarea
                    className="form-control"
                    style={{ width: '100%', marginTop: '5px' }}
                    rows={4}
                    onChange={onInputChange}
                    value={form.whatWillStudentsLearn}
                    name="whatWillStudentsLearn"
                    type="text"
                    placeholder="Write the features and separate each feature with @ Example: Define the roles and responsibilities of a project manager @ Estimate project timelines and budgets"
                  ></textarea>
                </div>
              </div>
              <div className="col-lg-6">
                <Input
                  onChange={onInputChange}
                  value={form.price}
                  name="price"
                  labelName="Course Price"
                  type="text"
                  placeholder="Enter price course"
                  err={errors ? errors.price : ''}
                />
              </div>
            </div>
            <div className="row g-3">
              <div className="col-lg-6">
                <div className={style.checkList}>
                  <div className={style.listContainer}>
                    <div className={style.listTitle}>Types of Course</div>
                    <div className={style.inputSpan_container}>
                      {checkList.map((item, index) => (
                        <div key={index}>
                          <input
                            value={item}
                            type="checkbox"
                            onChange={handleCheck}
                          />
                          <span className={isChecked(item)}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.save_btn}>
              <button className="btn">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  error: state.error,
  course: state.course,
});
export default connect(mapStateToProps, { addCourse, getCourseById })(
  UpdateCourse
);
