import React from "react";

// import Logo from "../assets/edu.svg";

import "./Landing.css";

import Hero from "./Hero";

const Landing = () => {
  return (
    <>
      <nav className="landing-nav">
        {/* <img src={Logo} alt="project-logo" className="logo" /> */}
        <h1>Student Dashboard</h1>
      </nav>
      <Hero />
      {/* <div className="container page"> */}
      {/* info */}
      {/* <div className="info"></div> */}
      {/* <img src={Img} alt="landing image" className="img main-img" /> */}
      {/* </div> */}
    </>
  );
};

export default Landing;
