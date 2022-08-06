import React from "react";
import Navbar from "./Navbar";
import Landing from "./Landing";
import Footer from "./Footer";
import style from "../../css/Layout/Landing.module.css"

const Homepage = () => {
  return (
    <div className={style.Homepage} style={{backgroundColor:"rgba(128, 128, 128, 0.092)"}}>
      <Navbar />
      <Landing />
      <Footer />
    </div>
  );
};

export default Homepage;
