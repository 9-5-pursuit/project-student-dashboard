import { useState } from "react";
import CohortList from "./components/cohortList/CohortList";
import Navbar from "./components/navbar/Navbar";
import OnTrackStudents from "./components/onTrackStudents/OnTrackStudents";
import SearchByName from "./components/searchByName/SearchByName";
import StudentList from "./components/studentList/StudentList";
import data from "./data/data.json";

function App() {
  const [students, setStudents] = useState(data);
  const [filteredStudents, setFilteredStudents] = useState(data);
  const [title, setTitle] = useState("All Students");

  function filterStudentsByCohort(cohort) {
    let newStudents;
    if (cohort === "All Students") {
      newStudents = students;
    } else {
      newStudents = students.filter(
        (student) => student.cohort.cohortCode === cohort.split(" ").join("")
      );
    }
    setTitle(cohort);
    setFilteredStudents(newStudents);
  }

  function addNoteToStudent(studentId, newNoteObj) {
    const newStudentsArr = [...students];
    const indexOfstudentToUpdate = students.findIndex(
      (student) => student.id === studentId
    );
    newStudentsArr[indexOfstudentToUpdate].notes.push(newNoteObj);
    setStudents(newStudentsArr);
  }

  function searchStudents(e, searchMode) {
    const searchInput = e.target.value.trim().toLowerCase();
    let foundStudents;
    if (searchMode === "name") {
      foundStudents = students.filter(({ names }) =>
        Object.values(names).join("").toLowerCase().includes(searchInput)
      );
    } else if (searchMode === "email") {
      foundStudents = students.filter((student) =>
        student.username.includes(searchInput)
      );
    }

    setFilteredStudents(foundStudents);
    searchInput ? setTitle("Search Results") : setTitle("All Students");
  }

  return (
    <div className="App">
      <Navbar />
      <div className="search-bar">
        <SearchByName searchStudent={searchStudents} />
        <OnTrackStudents
          title={title}
          setTitle={setTitle}
          students={students}
          setFilteredStudents={setFilteredStudents}
        />
      </div>
      <main>
        <CohortList
          title={title}
          students={students}
          filterStudentsByCohort={filterStudentsByCohort}
        />
        <StudentList
          title={title}
          filteredStudents={filteredStudents}
          addNoteToStudent={addNoteToStudent}
        />
      </main>
      <div id="chart"></div>
    </div>
  );
}

export default App;
