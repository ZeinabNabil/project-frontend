import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import MainAuthPage from "./Authentication/MainAuthPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";

const App = () => {
  return (
    // <div>
    //   <MainAuthPage />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route exact path="/auth" element={<MainAuthPage />}>
          <Route exact path="login" element={<Login />} />
          <Route exact path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
