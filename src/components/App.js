import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'react-toastify/dist/ReactToastify.css';
import 'aos/dist/aos.css';
// Components
import setAuthToken from './../utilis/setAuthToken';
import jwt_decode from 'jwt-decode';
import { setCurrentUser } from './../actions/user.action';
import ViewCourses from './Admin/course/ViewCourses';
import AddUser from './Admin/user/AddUser';
import CourseInfo from './Admin/course/CourseInfo';
import ViewUsers from './Admin/user/ViewUsers';
import Dashboard from './Admin/layout/Dashboard';
import UserProfile from './user/UserProfile';
import ReadMore from './ReadMore/ReadMore';
import Contactus from './ContactUs/Contactus';
import CoursesByCategory from './courses/CoursesByCategory';
import AdminHome from './Admin/layout/AdminHome';
import WithNavbarAndFooter from '../WithNavbarAndFooter';
import Inquiry from './Admin/inquiry/Inquiry';
import UpdateUser from './Admin/user/Updateuser';
import MainAuthPage from './Authentication/MainAuthPage';
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import Homepage from './Landingpage/Homepage';
import AddCourse from './Admin/course/AddCourse';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
if (localStorage.token) {
  //set auth token header auth
  setAuthToken(localStorage.token);
  // decode token and get user info and expiration
  const decoded = jwt_decode(localStorage.token);
  // set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // check for expired token
}

const App = ({ lang }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className={i18n.resolvedLanguage === 'ar' ? 'arabic' : 'english'}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route exact path="auth" element={<MainAuthPage />}>
              <Route exact path="login" element={<Login />} />
              <Route exact path="register" element={<Register />} />
            </Route>
            <Route exact element={<WithNavbarAndFooter />}>
              <Route index element={<Homepage />} />
              <Route exact path="/readmore/:id" element={<ReadMore />} />
              <Route exact path="/readmore" element={<ReadMore />} />
              <Route exact path="/contact" element={<Contactus />} />
              <Route exact path="/:category" element={<CoursesByCategory />} />
              <Route exact path="/profile" element={<UserProfile />} />
            </Route>
            <Route exact path="dashboard" element={<Dashboard />}>
              <Route exact path="home" element={<AdminHome />} />
              <Route exact path="inquiries/view" element={<Inquiry />} />
              <Route
                exact
                path="course/add"
                element={<AddCourse header={t('addNewCourse')} />}
              />
              <Route
                exact
                path="course/update/:courseId"
                element={<AddCourse header="تعديل الدورة" />}
              />
              <Route exact path="courses/view" element={<ViewCourses />} />
              <Route exact path="course/view/:id" element={<CourseInfo />} />
              <Route exact path="user/add" element={<AddUser />} />
              <Route exact path="user/update/:id" element={<UpdateUser />} />
              <Route exact path="users/view" element={<ViewUsers />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
