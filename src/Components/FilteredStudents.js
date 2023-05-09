import React from "react";
import StudentCard from "./StudentCard";

const FilteredStudents = ({
  selectedCohort,
  selectedStudentsList,
  studentsList,
}) => {
  return (
    <div>
      {!selectedCohort
        ? studentsList.map((student) => <StudentCard student={student} />)
        : selectedStudentsList.map((student) => (
            <StudentCard student={student} />
          ))}
    </div>
  );
};

export default FilteredStudents;
