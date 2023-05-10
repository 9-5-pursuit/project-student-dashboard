import React from "react";

function Graduate({ thisId, students }) {
  const thisPerson = students.filter(({ id }) => id === thisId);
  return (
    <div className="Graduate">
      {thisPerson.map(({ codewars, certifications }) =>
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
