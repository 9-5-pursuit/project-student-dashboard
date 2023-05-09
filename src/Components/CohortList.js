import React, { useState } from "react";
import CohortOrderButton from "./CohortOrderButton";

function CohortList({
  data,
  setStudents,
  setCohortName,
  setSearch,
  setSelect,
  setSearchResult,
}) {
  // state for cohort list
  const [cohortList, setCohortList] = useState(sortCohort(data));
  // --- sort cohort fn

  function sortCohort(cohortArr) {
    const allStudentsArr = ["All Students"];
    const seasonOrder = ["Fall", "Winter", "Summer", "Spring"];
    const cohort2025 = [];
    const cohort2026 = [];

    // seperate cohorts by year into arrs of 4 with loop

    cohortArr.forEach(({ cohort }) => {
      const cohortCode = cohort.cohortCode;
      // console.log(cohortCode);
      const cCodeSplit = cohort.cohortCode.replace(`2`, ` 2`);

      if (cohortCode.includes("2025") && !cohort2025.includes(cCodeSplit)) {
        cohort2025.push(cCodeSplit);
      } else if (
        cohortCode.includes("2026") &&
        !cohort2026.includes(cCodeSplit)
      ) {
        cohort2026.push(cCodeSplit);
      }
    });

    // sort each arr by decending and ascending order by index of season

    cohort2025.sort(
      (a, b) =>
        seasonOrder.indexOf(a.split(" ")[0]) -
        seasonOrder.indexOf(b.split(" ")[0])
    );

    cohort2026.sort(
      (a, b) =>
        seasonOrder.indexOf(a.split(" ")[0]) -
        seasonOrder.indexOf(b.split(" ")[0])
    );

    return allStudentsArr.concat(cohort2025, cohort2026);
  }

  // --- filter students fn

  function filterStudents(str, setFn1, setFn2, cohortArr) {
    if (str === "AllStudents") {
      setFn1(cohortArr);
      setFn2(cohortArr);
    } else {
      const filteredStudentArr = cohortArr.filter(
        ({ cohort }) => cohort.cohortCode === str.split(" ").join("")
      );
      setFn1(filteredStudentArr);
      setFn2(filteredStudentArr);
    }
  }

  function cohortFilter(event) {
    const value = event.target.id;
    setCohortName(event.target.innerText);

    if (value === "AllStudents") {
      setStudents(data);
      setSearchResult(data);
    } else {
      filterStudents(value, setStudents, setSearchResult, data);
    }
    // reset after cohort selected
    setSearch("");
    setSelect("all");
  }

  return (
    <>
      <CohortOrderButton
        cohortList={cohortList}
        setcohortList={setCohortList}
      />

      {cohortList.map((el) => {
        const code = el.split(" ").join("");

        return (
          <h4 className="cohort" key={el}>
            <span
              id={code}
              onClick={(event) => {
                cohortFilter(event);
              }}
            >
              {el}
            </span>
            <hr />
          </h4>
        );
      })}
    </>
  );
}

export default CohortList;
