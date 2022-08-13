import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";
// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "react-toastify/dist/ReactToastify.css";

// Components

// Components
import MainAuthPage from "./Authentication/MainAuthPage";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import Homepage from "./Layout/Homepage";
import AddCourse from "./Admin/course/AddCourse";
import setAuthToken from "./../utilis/setAuthToken";
import jwt_decode from "jwt-decode";
import { setCurrentUser } from "./../actions/user.action";
import ViewCourses from "./Admin/course/ViewCourses";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
import AddUser from "./Admin/user/AddUser";
import CourseInfo from "./Admin/course/CourseInfo";
import ViewUsers from "./Admin/user/ViewUsers";
import Dashboard from "./Admin/layout/Dashboard";
import UserProfile from "./Layout/user/UserProfile";
import Contactus from "./Layout/Contactus";
import ReadMore from "./Layout/ReadMore/ReadMore";

if (localStorage.token) {
  //set auth token header auth
  setAuthToken(localStorage.token);
  // decode token and get user info and expiration
  const decoded = jwt_decode(localStorage.token);
  // set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // check for expired token
}

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/auth" element={<MainAuthPage />}>
            <Route exact path="login" element={<Login />} />
            <Route exact path="register" element={<Register />} />
          </Route>
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/readmore" element={<ReadMore />} />
        </Routes>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/contact" element={<Contactus />} />
          <Route exact path="/admin">
            <Route exact path="addcourse" element={<AddCourse />} />
            <Route exact path="viewcourse" element={<ViewCourses />} />
            <Route
              exact
              path="viewcourse/course/:id"
              element={<CourseInfo />}
            />
            <Route exact path="adduser" element={<AddUser />} />
            <Route exact path="viewusers" element={<ViewUsers />} />
          </Route>
          <Route exact path="/user">
            <Route exact path="userprofile" element={<UserProfile />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
