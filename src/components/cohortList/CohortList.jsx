import { useState, useEffect, useRef } from "react";
import "./CohortList.css";

export default function CohortList({
  students,
  title,
  filterStudentsByCohort,
}) {
  const [cohortCodes, setCohortCodes] = useState([]);
  const ul = useRef(null);

  function handleClick(e, cohort) {
    if (e.currentTarget.classList[0] === "all-students") {
      filterStudentsByCohort("All Students");
    } else {
      filterStudentsByCohort(cohort);
    }
    const allListEl = e.currentTarget.parentElement.children;
    for (let li of allListEl) {
      li.classList.remove("active");
    }
    e.currentTarget.classList.add("active");
  }
  useEffect(() => {
    function getUniqueCohortCodes(array = []) {
      const codesObj = {};
      if (array.length) {
        for (let student of array) {
          const code = student.cohort.cohortCode;
          if (code in codesObj) {
            codesObj[code]++;
          } else {
            codesObj[code] = 1;
          }
        }
        const spaceAddedCodeseArr = Object.keys(codesObj).map(
          (code) => code.slice(0, -4) + " " + code.slice(-4)
        );

        const sorted = spaceAddedCodeseArr.sort(
          (a, b) => b.slice(-4) - a.slice(-4)
        );
        setCohortCodes(sorted);
      }
    }

    getUniqueCohortCodes(students);
  }, [students]);

  useEffect(() => {
    const lis = ul.current.children;
    if (title === "Graduating Students" || title === "Search Results") {
      for (let li of lis) {
        li.classList.remove("active");
      }
    } else if (title === "All Students") {
      lis[0].classList.add("active");
    }
  }, [title]);

  return (
    <div className="cohort-list-container">
      <h3>Choose a Class by Start Date</h3>
      <ul className="cohort-list" ref={ul}>
        <li
          key="all"
          className="all-students active"
          onClick={(e) => handleClick(e)}
        >
          All Students
        </li>

        {cohortCodes.map((cohort, i) => (
          <li key={i} onClick={(e) => handleClick(e, cohort)}>
            {cohort}
          </li>
        ))}
      </ul>
    </div>
  );
}
