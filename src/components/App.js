import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";
// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
// Components
import MainAuthPage from "./Authentication/MainAuthPage";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import ViewCourses from "./ViewCourses";
import "../css/App.css";

const App = () => {
  return (
    // <Provider store={store}>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route exact path="/auth" element={<MainAuthPage />}>
    //         <Route exact path="login" element={<Login />} />
    //         <Route exact path="register" element={<Register />} />
    //       </Route>
    //     </Routes>
    //   </BrowserRouter>
    // </Provider>
    <ViewCourses />
  );
};

export default App;
