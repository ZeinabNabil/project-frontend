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
import AddCourse from "./Admin/AddCourse";
import setAuthToken from "./../utilis/setAuthToken";
import jwt_decode from "jwt-decode";
import { setCurrentUser } from "./../actions/user.action";
import ViewCourses from "./Admin/ViewCourses";
import CourseInfo from "./Admin/CourseInfo";
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
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/admin">
            <Route exact path="addcourse" element={<AddCourse />} />
            <Route exact path="viewcourse" element={<ViewCourses />} />
            <Route exact path="courseinfo" element={<CourseInfo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
