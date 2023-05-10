import React from "react";

function Graduate({ thisId, students }) {
  const thisStudent = students.filter(({ id }) => id === thisId);
  return (
    <div className="Graduate">
      {thisStudent.map(({ codewars, certifications }) =>
        codewars.current.total > 600 &&
        certifications.resume &&
        certifications.linkedin &&
        certifications.github &&
        certifications.mockInterview
          ? "On track to Graduate"
          : null
      )}
    </div>
  );
}

export default Graduate;
