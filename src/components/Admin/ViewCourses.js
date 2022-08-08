import React, { useEffect, useState } from "react";

// Redux
import { connect } from "react-redux";
import { getAllCourses } from "../../actions/course.action";

// Components
import columns from "./CoursesColumn";
import Table from "../Table";

const ViewCourses = (props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    props.getAllCourses();
  }, []);

  useEffect(() => {
    setData(props.course.courses.courses);
  }, [props.course.courses.courses]);

  return <Table columns={columns} data={data ? data : []} />;
};

const mapStateToProps = (state) => ({
  course: state.course,
});
export default connect(mapStateToProps, { getAllCourses })(ViewCourses);
