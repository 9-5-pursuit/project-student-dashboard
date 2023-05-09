import React from "react";

const Header=({ studentsList, setStudentsList }) =>{
  const handleStudentList = () => {
    setStudentsList(studentsList.length);
  };
  return (
    <div className="header">
      <header>
        <h1 onClick={handleStudentList}>Student DashBoard</h1>
      </header>
    </div>
  );
}
export default Header;
