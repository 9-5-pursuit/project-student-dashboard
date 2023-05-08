import Header from './Components/Header'
import CohortList from './Components/CohortList'
import StudentList from './Components/StudentList'

import studentData from './data/data.json'

import { useState } from 'react'

function App() {
  const [filter, setFilter] = useState("")
  const [filteredStudentData, setFilteredStudentData] = useState(studentData)
  const [readableCohort, setReadableCohort] = useState("All Students")

  function filterStudents(cohort) {
    let filteredStudents = studentData.filter(student => student.cohort.cohortCode === cohort)

    if (cohort === "") {
      setFilteredStudentData(studentData)
    } else {
      setFilteredStudentData(filteredStudents)
    }
  }

  let sortedCohortList = []

  let cohortList = []

  studentData.forEach((student) => {
    if (!cohortList.includes(student.cohort.cohortCode)) {
      cohortList.push(student.cohort.cohortCode)
    }
  })

  sortedCohortList.push(cohortList[4])
  sortedCohortList.push(cohortList[3])
  sortedCohortList.push(cohortList[5])
  sortedCohortList.push(cohortList[0])
  sortedCohortList.push(cohortList[6])
  sortedCohortList.push(cohortList[2])
  sortedCohortList.push(cohortList[7])
  sortedCohortList.push(cohortList[1])

  return (
    <div>
      <Header />
      <CohortList filterStudents={filterStudents} filter={filter} setFilter={setFilter} sortedCohortList={sortedCohortList} setReadableCohort={setReadableCohort}/>
      <StudentList studentData={filteredStudentData} readableCohort={readableCohort}/>
    </div>
  );
}

export default App;
