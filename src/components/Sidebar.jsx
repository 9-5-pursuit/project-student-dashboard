import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

import Avatar from "./Avatar";
import AddIcon from "../assets/add.svg";
import Dashboard from "../assets/dashboard.svg";

import "./Sidebar.css";

const Sidebar = () => {
  const { user } = useAuthContext();
  console.log(user);
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          {user && <Avatar src={user.photoURL} />}
          {user && <p>{user.displayName}</p>}
        </div>
        <nav className="links">
          <ul>
            <li
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "60px",
              }}
            >
              <div style={{ display: "flex", marginBottom: "20px" }}>
                <img
                  src={Dashboard}
                  alt="dashboard icon"
                  style={{ width: "20px" }}
                />
                <Link to="/cohorts" className="dash">
                  Cohorts
                </Link>
              </div>
              <Link to="/add-cohorts">
                <img src={AddIcon} alt="add project icon" />
                <span className="projects">Add Cohorts</span>
              </Link>
            </li>
            <li>
              <Link to="/create">
                <img src={AddIcon} alt="add project icon" />
                <span className="projects">New Project</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
