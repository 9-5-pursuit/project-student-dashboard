import React from "react";
import "./header.css";

const Header = ({ studentsList, setStudentsList }) => {
  const handleStudentsList = () => {
    setStudentsList(studentsList.length);
  };
  return (
    <div className="header">
      <header>
        <h1 onClick={handleStudentsList}>Student DashBoard</h1>
      </header>
    </div>
  );
};
export default Header;
