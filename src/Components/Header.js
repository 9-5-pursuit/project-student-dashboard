import React from "react";

const Header=({ studentsList, setStudentsList }) =>{
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
}
export default Header;
