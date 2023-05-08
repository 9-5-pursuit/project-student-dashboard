import Header from './Components/Header'
import CohortList from './Components/CohortList'
import StudentList from './Components/StudentList'

import studentData from './data/data.json'

import { useState } from 'react'

function App() {
  const [filter, setFilter] = useState("")

  let filteredStudentData = studentData

  function filterStudents(cohort) {
    let filteredStudents = studentData.filter(student => student.cohort.cohortCode === cohort)

    filteredStudentData = filteredStudents
  }

  return (
    <div>
      <Header />
      <CohortList filterStudents={filterStudents} setFilter={setFilter}/>
      <StudentList studentData={filteredStudentData}/>
    </div>
  );
}

export default App;
