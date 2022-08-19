import React, { useEffect, useState } from 'react';
import style from '../../../css/Admin/Addcourse.module.css';
import Input from '../../Admin/Input';
import { addCourse, getCourseById } from '../../../actions/course.action';
import { connect } from 'react-redux';
import classnames from 'classnames';
import store from './../../../store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useParams, useNavigate } from 'react-router-dom';
import { updateCourse } from './../../../actions/course.action';
import Select from './Select';
import CheckBox from './CheckBox';
import moment from 'moment';
const AddCourse = (props) => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const categories = ['دورات حاسوب', 'دورات لغة'];
  const [form, setForm] = useState({
    name: '',
    description: '',
    about: '',
    category: '',
    hours: '',
    duration: '',
    classes: '',
    image: '',
    price: '',
    isHasOffer: false,
    offer: '',
    endOfferDate: new Date(),
    image: '',
  });
  const onInputChange = (e) => {
    const value = e.target.value;
    setForm({
      ...form,
      [e.target.name]: value,
    });
  };
  const onHandleCheck = () => {
    setForm({
      ...form,
      isHasOffer: !form.isHasOffer,
    });
  };
  const { course } = props.course;
  useEffect(() => {
    if (courseId) {
      props.getCourseById(courseId);
    }
  }, []);
  useEffect(() => {
    if (course && courseId) {
      setForm({
        name: course.name,
        description: course.description,
        about: course.about.join('@'),
        category: course.category,
        hours: course.hours,
        duration: course.duration,
        classes: course.classes,
        price: course.price,
        isHasOffer: course.isHasOffer,
        offer: course.offer,
        endOfferDate: moment(course.endOfferDate).format('YYYY-MM-DD'),
        image: course.image,
      });
    }
  }, [course]);
  const onFormSubmit = (e) => {
    e.preventDefault();
    const course = new FormData();
    course.append('name', form.name);
    course.append('description', form.description);
    course.append('about', form.about);
    course.append('category', form.category);
    course.append('hours', form.hours);
    course.append('price', form.price);
    course.append('classes', form.classes);
    course.append('duration', form.duration);
    course.append('isHasOffer', form.isHasOffer);
    course.append('offer', form.offer);
    course.append('endOfferDate', form.endOfferDate);
    course.append('image', form.image);
    if (course && courseId) {
      props.updateCourse(course, courseId, navigate);
    } else {
      props.addCourse(course, navigate);
    }
  };

  const onFileChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.files[0] });
  };

  const { errors } = props.error;
  return (
    <div className={style.addcourse}>
      <div className={style.title}>
        <span>
          <FontAwesomeIcon icon={faPlus} />
          {props.header}
        </span>
      </div>
      <div className={style.form}>
        <div className={style.formcontainer}>
          <form
            className="form-group"
            style={{ width: '90%', margin: 'auto' }}
            onSubmit={onFormSubmit}
          >
            <div className="row">
              <div className="col-lg-6">
                <Input
                  onChange={onInputChange}
                  value={form.name}
                  name="name"
                  labelName="الاسم"
                  type="text"
                  className="form-control"
                  err={errors ? errors.name : ''}
                />
              </div>
              <div className="col-lg-6">
                <Input
                  onChange={onInputChange}
                  value={form.description}
                  name="description"
                  labelName="الــوصف"
                  type="text"
                  err={errors ? errors.description : ''}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <Input
                  onChange={onInputChange}
                  value={form.hours}
                  name="hours"
                  labelName="عدد ساعات الدورة"
                  type="number"
                  err={errors ? errors.hours : ''}
                />
              </div>
              <div className="col-lg-6">
                <Input
                  onChange={onInputChange}
                  value={form.duration}
                  name="duration"
                  labelName="مدة الدورة"
                  type="text"
                  err={errors ? errors.duration : ''}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <Input
                  onChange={onInputChange}
                  value={form.price}
                  name="price"
                  labelName="سعر الدورة"
                  type="text"
                  err={errors ? errors.price : ''}
                />
              </div>
              <div className="col-lg-6">
                <Input
                  onChange={onFileChange}
                  labelName="صــوررة الدورة"
                  type="file"
                  file="yes"
                  name="image"
                  err={errors ? errors.image : ''}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <Select
                  name="category"
                  list={categories}
                  value={form.category}
                  onChange={onInputChange}
                  labelName="نــوع الدورة"
                  err={errors ? errors.category : ''}
                />
              </div>
              <div className="col-lg-6">
                <Input
                  onChange={onInputChange}
                  value={form.classes}
                  name="classes"
                  labelName="حصص الدورة"
                  type="text"
                  err={errors ? errors.classes : ''}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <CheckBox
                  labelName="يوجد تخفيض للدورة ؟"
                  onChange={onHandleCheck}
                  checked={form.isHasOffer}
                  value={form.isHasOffer}
                />
              </div>
              <div className="col-lg-6">
                <div className={style.text_area}>
                  <label className={style.formlabel} style={{ color: 'white' }}>
                    معلومات عن الدورة
                  </label>
                  <textarea
                    className="form-control"
                    id="w3review"
                    name="about"
                    value={form.about}
                    onChange={onInputChange}
                    rows="4"
                    cols="50"
                    placeholder="المستوي الاول : عن المستوي الاول@المستوي التاني : عن المستوي التاني...وهكذا"
                  ></textarea>
                </div>
              </div>
            </div>
            {form.isHasOffer ? (
              <div className="row">
                <div className="col-lg-6">
                  <Input
                    onChange={onInputChange}
                    value={form.offer}
                    name="offer"
                    labelName="سعر التخفيض"
                    type="text"
                    err={errors ? errors.price : ''}
                  />
                </div>
                <div className="col-lg-6">
                  <Input
                    onChange={onInputChange}
                    value={form.endOfferDate}
                    name="endOfferDate"
                    labelName="موعد نهاية التخفيض "
                    type="date"
                    err={errors ? errors.endOfferDate : ''}
                  />
                </div>
              </div>
            ) : (
              ''
            )}

            <div className={style.save_btn}>
              <button className="btn"> حــــفــــظ </button>
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
export default connect(mapStateToProps, {
  addCourse,
  getCourseById,
  updateCourse,
})(AddCourse);
