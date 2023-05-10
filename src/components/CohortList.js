import React, { useState } from "react";
import { Container, Row, ListGroup } from "react-bootstrap";
import StudentCard from "./StudentCard";
import studentsData from "../data/data.json";

function CohortList() {
  const [selectedCohort, setSelectedCohort] = useState(null);

  const getStudentsByCohort = (cohort) => {
    return studentsData.filter(
      (student) => student.cohort.cohortCode === cohort
    );
  };

  const handleCohortSelection = (cohort) => {
    setSelectedCohort(cohort);
  };

  return (
    <Container className="mt-5">
      <h1>Choose a Class by Start Date</h1>
      <ListGroup className="mb-3">
        <ListGroup.Item
          active={!selectedCohort}
          onClick={() => handleCohortSelection(null)}
        >
          All Students ({studentsData.length})
        </ListGroup.Item>
        {Array.from(
          new Set(studentsData.map((student) => student.cohort.cohortCode))
        ).map((cohort) => (
          <ListGroup.Item
            key={cohort}
            active={selectedCohort === cohort}
            onClick={() => handleCohortSelection(cohort)}
          >
            {cohort} ({getStudentsByCohort(cohort).length})
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Row>
        <div className="col-md-12">
          <h3>{selectedCohort ? selectedCohort : "All Students"}</h3>
        </div>
        <div className="col-md-12">
          <Row>
            {selectedCohort
              ? getStudentsByCohort(selectedCohort).map((student) => (
                  <StudentCard key={student.id} student={student} />
                ))
              : studentsData.map((student) => (
                  <StudentCard key={student.id} student={student} />
                ))}
          </Row>
        </div>
      </Row>
    </Container>
  );
}

export default CohortList;
