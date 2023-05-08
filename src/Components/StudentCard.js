import React from "react";

export default function StudentCard({ student }) {
  function handleGraduation(student) {
    const certificationValues = Object.values(student.certifications);
    if (
      certificationValues.every((value) => value) &&
      student.codewars.current.total > 600
    ) {
      return "On Track to Graduate";
    }
  }

  function handleBirthday(student) {
    const date = new Date(student.dob);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const formattedDate = `${
      monthNames[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;
    return formattedDate;
  }
  
  return (
    <div className="student">
      <h3>
        {student.names.preferredName} {student.names.middleName.slice(0, 1)}.{" "}
        {student.names.surname}
      </h3>
      <p>{student.username}</p>
      <p>Birthday: {handleBirthday(student)}</p>
      <img
        style={{ height: "150px", width: "150px" }}
        src={student.profilePhoto}
        alt={student.names.surname}
      />
      <p>{handleGraduation(student)}</p>
      <div>
        {/* Anonymous function is required to use function that was passed from app.js */}
        <button className="showMore">Show More...</button>
      </div>
    </div>
  );
}
