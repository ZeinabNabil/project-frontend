import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { showInquiries } from '../../../actions/inquiry.action';
const Inquiry = (props) => {
  useEffect(() => {
    props.showInquiries();
  }, []);
  return <div></div>;
};
const mapStateToProps = (state) => ({
  inquiry: state.inquiry,
});
export default connect(mapStateToProps, { showInquiries })(Inquiry);
