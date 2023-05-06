import React from "react";
import StudentList from "./StudentList";

function CohortList({ data }) {
  //   function updateStudentList(data) {}

  function cohortCode(data) {
    const matchingCohorts = data.filter(
      ({ cohort }) => cohort.cohortCode === "Winter2025"
    );

    if (matchingCohorts.length > 0) {
      return "Winter 2025"; // Return the desired cohort code for matching cohorts
    }
  }

  cohortCode(data);

  return (
    <>
      {/* COHORT LIST*/}
      <h3>Choose a Class by Start Date</h3>
      <div>
        <p>All Students</p>

        {cohortCode(data) === "Winter 2025" && <p>Winter 2025</p>}

        {/* {data.map(({ id, cohort }) => {
            
        }
        


        
        //   <p key={id}>{}</p>
        
        )} */}

        {/* <p onClick={() => updateStudentList(data)}>Winter 2026 </p>
        <p>Fall 2026</p>
        <p>Summer 2026</p>
        <p>Spring 2026</p>
        <p>Winter 2025</p>
        <p>Fall 2025</p>
        <p>Summer 2025</p>
        <p>Spring 2025</p> */}
      </div>
      <StudentList data={data} />
    </>
  );
}

export default CohortList;
