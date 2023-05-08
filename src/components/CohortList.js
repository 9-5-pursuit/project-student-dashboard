import React, { useState } from "react";
import StudentList from "./StudentList";

function CohortList({ data }) {
  const [cohortStudentList, setCohortStudentList] = useState();
  const [originalData, setOriginalData] = useState(data);
  const [cohortYear, setCohortYear] = useState();

  function updateStudentList(info) {
    if (info.length === originalData.length) {
      setOriginalData(data);
      setCohortStudentList(null);
      setCohortYear(null);
      return data;
    }

    let year = info.replace(" ", "");
    let cohortData = data.filter(({ cohort }) => year === cohort.cohortCode);

    if (cohortData.length > 0) {
      //   console.log(cohortData);
      setCohortYear(info);

      setCohortStudentList(cohortData);
      return cohortData;
    }
  }

  //   this function is to get the different years of the cohorts
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
    if (Fall2026.length > 0) {
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

  return (
    <>
      <h3>Choose a Class by Start Date</h3>

      <div>
        <p onClick={() => updateStudentList(data)}>All Students</p>

        {cohortCode(data).map((cohortYears) => (
          <div key={cohortYears}>
            <p onClick={() => updateStudentList(cohortYears)}>{cohortYears}</p>
          </div>
        ))}
      </div>

      <StudentList
        originalData={originalData}
        cohortStudentList={cohortStudentList}
        cohortYear={cohortYear}
      />
    </>
  );
}

export default CohortList;
