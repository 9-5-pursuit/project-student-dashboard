import React from "react";
import StudentList from "./StudentList";

function CohortList({ data }) {
  //   function updateStudentList(data) {}

  function cohortCode(data) {
    let cohortYears = [];

    const Winter2026 = data.filter(
      ({ cohort }) => cohort.cohortCode === "Winter2026"
    );
    const Fall2026 = data.filter(
      ({ cohort }) => cohort.cohortCode === "Fall2026"
    );
    const Summer2026 = data.filter(
      ({ cohort }) => cohort.cohortCode === "Summer2026"
    );
    const Spring2026 = data.filter(
      ({ cohort }) => cohort.cohortCode === "Spring2026"
    );
    const Winter2025 = data.filter(
      ({ cohort }) => cohort.cohortCode === "Winter2025"
    );
    const Fall2025 = data.filter(
      ({ cohort }) => cohort.cohortCode === "Fall2025"
    );
    const Summer2025 = data.filter(
      ({ cohort }) => cohort.cohortCode === "Summer2025"
    );
    const Spring2025 = data.filter(
      ({ cohort }) => cohort.cohortCode === "Spring2025"
    );

    if (Winter2026.length > 0) {
      //   console.log("im in Winter 2026");
      cohortYears.push("Winter 2026");
    }
    if (Fall2026) {
      //   console.log("im in Fall 2026");
      cohortYears.push("Fall 2026");
    }
    if (Summer2026.length > 0) {
      //   console.log("im in Summer 2026");
      cohortYears.push("Summer 2026");
    }
    if (Spring2026.length > 0) {
      //   console.log("im in Spring 2026");
      cohortYears.push("Spring 2026");
    }
    if (Winter2025.length > 0) {
      //   console.log("im in Winter 2025");
      cohortYears.push("Winter 2025");
    }
    if (Fall2025.length > 0) {
      //   console.log("im in Fall2025");
      cohortYears.push("Fall 2025");
    }
    if (Summer2025.length > 0) {
      //   console.log("im in Summer 2025");
      cohortYears.push("Summer 2025");
    }
    if (Spring2025.length > 0) {
      //   console.log("im in Spring 2025");
      cohortYears.push("Spring 2025");
    }

    return cohortYears;
  }

  cohortCode(data);

  return (
    <>
      {/* COHORT LIST*/}
      <h3>Choose a Class by Start Date</h3>
      <div>
        <p>All Students</p>

        {/* {cohortCode(data) === "Winter 2026" && <p>Winter 2026</p>}
        {cohortCode(data) === "Winter 2025" && <p>Winter 2025</p>} */}

        {/* {cohortCode(data) => console.log()}
         */}

        {cohortCode(data).map((cohortYears) => (
          <p key={cohortYears}>{cohortYears}</p>
        ))}

        {/* <p>Winter 2025</p> */}
        {/* {data.map(({ id, cohort }) => {
            
        }
        


        
        //   <p key={id}>{}</p>
        
        )} */}
      </div>
      {/* <StudentList data={data} /> */}
    </>
  );
}

/* <p onClick={() => updateStudentList(data)}>Winter 2026 </p>
        <p>Fall 2026</p>
        <p>Summer 2026</p>
        <p>Spring 2026</p>
        <p>Winter 2025</p>
        <p>Fall 2025</p>
        <p>Summer 2025</p>
        <p>Spring 2025</p> */

export default CohortList;
