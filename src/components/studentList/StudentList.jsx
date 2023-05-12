import { useState } from "react";
import Student from "../student/Student";
import "./StudentList.css";
import Pagination from "../pagination/Pagination";
export default function StudentList({
  filteredStudents,
  addNoteToStudent,
  title,
}) {
  const [studentsTodisplay, setStudentsToDisplay] = useState([]);

  return (
    <div className="student-list-container">
      <div className="grid">
        <h3 className="title">{title}</h3>
        <Pagination
          title={title}
          filteredStudents={filteredStudents}
          setStudentsToDisplay={setStudentsToDisplay}
        />
      </div>

      <p>
        Total Students:
        <span className="total-students"> {filteredStudents.length}</span>
      </p>
      <ul className="student-list">
        {studentsTodisplay &&
          studentsTodisplay.map((student) => (
            <Student
              student={student}
              key={student.id}
              addNoteToStudent={addNoteToStudent}
            />
          ))}
      </ul>
    </div>
  );
}
