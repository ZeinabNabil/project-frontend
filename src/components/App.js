import React from "react";
import Homepage from "./Layout/Homepage";
import "../css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import AddCourse from "./Admin/AddCourse";

const App = () => {
  return (
    <div>
      <Homepage />
      {/* <AddCourse /> */}
    </div>
  );
};

export default App;
