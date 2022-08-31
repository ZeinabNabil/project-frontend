import React, { useEffect } from 'react';
import style from '../../../css/Admin/Inquiry/Inquiry.module.css';
import InquiryAccordian from './InquiryAccordian';
import { connect } from 'react-redux';
import { showInquiries } from '../../../actions/inquiry.action';
import { useNavigate } from 'react-router-dom';
const Inquiry = (props) => {
  const navigate = useNavigate();
  const { currentUser, isAuthenticated } = props.user;
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/auth/login');
    }
    if (currentUser.role == 0) {
      navigate('/notAuth');
    }
  }, []);
  useEffect(() => {
    props.showInquiries();
  }, []);
  const { Inquiries, loading } = props.inquiry;
  var renderContent;
  if (Inquiries === null || loading) {
    renderContent = 'Loading';
  } else {
    renderContent = Inquiries.inquiries.map((inquiry, index) => {
      return <InquiryAccordian data={inquiry} key={index} />;
    });
  }
  return (
    <div className={style.inquires}>
      <div className="row">{renderContent}</div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  inquiry: state.inquiry,
  user: state.user,
});
export default connect(mapStateToProps, { showInquiries })(Inquiry);
