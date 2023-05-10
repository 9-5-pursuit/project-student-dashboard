import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import StudentCard from "./components/StudentCard";
import CohortList from "./components/CohortList";
import React, { useState } from "react";

import studentsData from "./data/data.json";

function App() {
  // const [filter, setFilter] = useState("");
  const [cohortFilter, setCohortFilter] = useState("");

  const filteredStudents = studentsData.filter((student) => {
    return student.firstName || student.lastName;
  });

  const cohortCounts = {};
  studentsData.forEach((student) => {
    const cohortCode = student.cohort.cohortCode;
    if (cohortCounts[cohortCode]) {
      cohortCounts[cohortCode]++;
    } else {
      cohortCounts[cohortCode] = 1;
    }
  });

  const cohorts = Object.keys(cohortCounts);

  const students = filteredStudents
    .filter((student) => {
      if (!cohortFilter) return true;
      return student.cohort.cohortCode === cohortFilter;
    })
    .map((student) => (
      <div key={student.id} className="student">
        <StudentCard student={student} />
      </div>
    ));

  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 6 }}>
          <h1>Student Dashboard</h1>
        </Col>
      </Row>
      <CohortList
        cohorts={cohorts}
        cohortCounts={cohortCounts}
        filter={cohortFilter}
        setFilter={setCohortFilter}
      />
      <Row>
        <Col md={{ span: 6, offset: 6 }}>
          <h2>All Students</h2>
          <h3>Total Students: ({studentsData.length})</h3>
        </Col>
      </Row>
      <Row>
        {/* <Col md={{ span: 6, offset: 6 }}>
          <input
            type="text"
            placeholder="Filter by name:"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </Col> */}
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 6 }}>{students}</Col>
      </Row>
    </Container>
  );
}

export default App;
