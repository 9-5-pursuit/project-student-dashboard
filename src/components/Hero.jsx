import React from "react";
import { Link } from "react-router-dom";

import "./Hero.css";

const Hero = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero-banner">
          <h1>Student Dashboard</h1>
          <p>
            We see potential in more than diplomas and resumes. We train adults
            with the most need and potential to get hired in tech, advance in
            their careers, and become the next generation of leaders in tech.{" "}
          </p>
          {/* need Link */}
          <div className="user-btn">
            <Link to="/login" className="btn hero-btn">
              login
            </Link>
            <Link to="/signup" className="btn hero-btn">
              Sign up
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Hero;
