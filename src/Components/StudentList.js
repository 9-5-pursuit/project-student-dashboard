import Student from "./Student";
import studentData from "../data/data.json";
import "./StudentList.css";
function StudentList({ student }) {
  // console.log(studentData)
  let studentfilter = studentData.map(
    (student) => student.cohort.cohortCode === student
  );
  return (
    <div className="all-student">
      <h3>All Students</h3>
      <p>Total Students: {studentData.length}</p>
    </div>
  );
}
export default StudentList;
