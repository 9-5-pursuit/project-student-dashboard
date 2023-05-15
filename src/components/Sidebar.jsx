import React from "react";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import Avatar from "./Avatar";
import AddIcon from "../assets/add.svg";
import Dashboard from "../assets/dashboard.svg";
import Cohort from "../assets/cohort.svg";
import logo from "../assets/logo.png";

import "./Sidebar.css";

const Sidebar = () => {
  const { user } = useAuthContext();

  return (
    <div className="sidebar">
      <div className="sidebar-content">
      <div className="logo">
          <img src={logo} alt="logo" />
          <span style={{fontSize: '14px'}}>Student Dashboard</span>
        </div>
      <div className="user" style={{ borderBottom: user && "1px solid rgba(255, 255, 255, 0.814)" }}>
          {user && <Avatar src={user.photoURL} />}
          {user && <p>{user.displayName}</p>}
          {user && <span className='email'>{user.email}</span>}
        </div>
        <nav className="links">
          <ul>
            <li>
              <NavLink to="/">
                <img src={Dashboard} alt="Dashboard" />
                <span className="cohorts">Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/get-cohorts">
                <img
                  src={Cohort}
                  alt="dashboard icon"
                  style={{ width: "20px" }}
                />
                <span className="cohorts">Cohorts</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/add-cohorts">
                <img src={AddIcon} alt="add cohort icon" />
                <span className="cohorts">Add Cohorts</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/create">
                <img src={AddIcon} alt="add project icon" />
                <span className="cohorts">New Project</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
